import { useState, useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { Loader2 } from "lucide-react";

interface VideoPlayerProps {
    url: string;
    title: string;
    onEnded?: () => void;
    poster?: string;
}

// Funciones auxiliares para detectar IDs de YouTube y Vimeo
function getYoutubeId(url: string) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function getVimeoId(url: string) {
    const regExp = /vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
    const match = url.match(regExp);
    return match ? match[3] : null;
}

export default function VideoPlayer({ url, title, onEnded, poster }: VideoPlayerProps) {
    const [playing, setPlaying] = useState(false);
    const [ready, setReady] = useState(false);
    const playerRef = useRef<any>(null);

    // Si no hay URL, mostramos un placeholder amigable
    if (!url) {
        return (
            <div className="w-full aspect-video bg-secondary/80 rounded-xl flex flex-col items-center justify-center text-center p-6 border border-border">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    <span className="text-2xl">🚧</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Video no disponible</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                    El video para esta lección ({title}) aún no se ha publicado o no tienes acceso.
                </p>
            </div>
        );
    }

    const youtubeId = getYoutubeId(url);
    const vimeoId = getVimeoId(url);
    const isDirectVideo = url.endsWith('.mp4') || url.endsWith('.webm') || url.endsWith('.ogg');

    // 1. Caso de YouTube: Usar iFrame nativo (100% confiable, evita hangs)
    if (youtubeId) {
        return (
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group shadow-lg border border-border dark:border-muted">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&enablejsapi=1`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                ></iframe>
            </div>
        );
    }

    // 2. Caso de Vimeo: Usar iFrame nativo de Vimeo
    if (vimeoId) {
        return (
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group shadow-lg border border-border dark:border-muted">
                <iframe
                    src={`https://player.vimeo.com/video/${vimeoId}`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                ></iframe>
            </div>
        );
    }

    // 3. Caso de Video Directo (.mp4): Usar tag HTML5 nativo
    if (isDirectVideo) {
        return (
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group shadow-lg border border-border dark:border-muted">
                <video
                    src={url}
                    controls
                    className="w-full h-full object-contain absolute inset-0"
                    onEnded={onEnded}
                    poster={poster}
                />
            </div>
        );
    }

    // 4. Caso general / Fallback: ReactPlayer
    return (
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group shadow-lg border border-border dark:border-muted">
            {!ready && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/80 z-10">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                    <span className="text-sm font-medium text-muted-foreground">Cargando reproductor...</span>
                </div>
            )}

            {/* @ts-ignore */}
            <ReactPlayer
                ref={playerRef}
                url={url}
                width="100%"
                height="100%"
                playing={playing}
                controls={true}
                light={poster || false}
                onReady={() => setReady(true)}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={onEnded}
                config={{
                    youtube: {
                        playerVars: { showinfo: 1, rel: 0, modestbranding: 1 }
                    }
                } as any}
                style={{ position: "absolute", top: 0, left: 0 }}
            />
        </div>
    );
}
