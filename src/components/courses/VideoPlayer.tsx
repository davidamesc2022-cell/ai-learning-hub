import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { Loader2 } from "lucide-react";

interface VideoPlayerProps {
    url: string;
    title: string;
    onEnded?: () => void;
    poster?: string;
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

    return (
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden group shadow-lg border border-border dark:border-muted">
            {!ready && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/80 z-10">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                    <span className="text-sm font-medium text-muted-foreground">Cargando reproductor...</span>
                </div>
            )}

            {/* @ts-ignore - ReactPlayer types sometimes conflict with newer React versions */}
            <ReactPlayer
                ref={playerRef}
                url={url}
                width="100%"
                height="100%"
                playing={playing}
                controls={true}
                light={poster || false} // Si hay poster, usa el modo light de react-player
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
