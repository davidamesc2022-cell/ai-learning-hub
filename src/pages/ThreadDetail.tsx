import { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowUp, MessageSquare, CheckCircle, Clock, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase, publicSupabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface Reply {
  id: string;
  content: string;
  upvotes: number;
  is_answer: boolean;
  created_at: string;
  user_id: string;
  author_name: string;
  author_avatar: string;
}

interface Thread {
  id: string;
  user_id: string;
  title: string;
  content: string;
  category: string;
  upvotes: number;
  replies_count: number;
  solved: boolean;
  created_at: string;
  author_name: string;
  author_avatar: string;
}

export default function ThreadDetail() {
  const { id: threadId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [thread, setThread] = useState<Thread | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [newReply, setNewReply] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [upvotedThread, setUpvotedThread] = useState(false);
  const [updatingSolved, setUpdatingSolved] = useState(false);

  // Cargar hilo y respuestas
  const fetchThreadData = useCallback(async () => {
    if (!threadId) return;
    setLoading(true);
    try {
      // 1. Obtener detalles del Hilo
      const { data: threadData, error: threadErr } = await publicSupabase
        .from("forum_threads")
        .select("*, profiles(name, avatar)")
        .eq("id", threadId)
        .single();

      if (threadErr) throw threadErr;
      if (!threadData) {
        setThread(null);
        setLoading(false);
        return;
      }

      setThread({
        id: threadData.id,
        user_id: threadData.user_id,
        title: threadData.title,
        content: threadData.content,
        category: threadData.category,
        upvotes: threadData.upvotes,
        replies_count: threadData.replies_count,
        solved: threadData.solved,
        created_at: threadData.created_at,
        author_name: threadData.profiles?.name || "Anónimo",
        author_avatar: threadData.profiles?.avatar || "",
      });

      // 2. Obtener respuestas
      const { data: repliesData, error: repliesErr } = await publicSupabase
        .from("forum_replies")
        .select("*, profiles(name, avatar)")
        .eq("thread_id", threadId)
        .order("created_at", { ascending: true });

      if (repliesErr) throw repliesErr;

      const mappedReplies: Reply[] = (repliesData || []).map((r: any) => ({
        id: r.id,
        content: r.content,
        upvotes: r.upvotes,
        is_answer: r.is_answer,
        created_at: r.created_at,
        user_id: r.user_id,
        author_name: r.profiles?.name || "Anónimo",
        author_avatar: r.profiles?.avatar || "",
      }));
      setReplies(mappedReplies);
    } catch (e) {
      console.error("Error al cargar detalles de la pregunta:", e);
      toast.error("Error al cargar la información del foro.");
    } finally {
      setLoading(false);
    }
  }, [threadId]);

  useEffect(() => {
    fetchThreadData();
  }, [fetchThreadData]);

  // Votar la pregunta
  const handleUpvoteThread = async () => {
    if (!thread || upvotedThread) return;
    setUpvotedThread(true);
    try {
      await supabase.rpc("increment", { table_name: "forum_threads", row_id: thread.id, field: "upvotes" }).maybeSingle();
      setThread(prev => prev ? { ...prev, upvotes: prev.upvotes + 1 } : null);
      toast.success("¡Voto registrado!");
    } catch (e) {
      console.error(e);
      setUpvotedThread(false);
    }
  };

  // Crear una nueva respuesta
  const handlePostReply = async () => {
    if (!newReply.trim() || !user || !threadId) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from("forum_replies").insert({
        thread_id: threadId,
        user_id: user.id,
        content: newReply.trim(),
      });

      if (error) throw error;
      toast.success("¡Respuesta publicada!");
      setNewReply("");
      // Recargar datos para mostrar la nueva respuesta y actualizar contadores
      await fetchThreadData();
    } catch (e) {
      console.error("Error al responder:", e);
      toast.error("Error al publicar la respuesta. Intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  // Alternar estado de "Resuelto" (solo creador de la pregunta)
  const handleToggleSolved = async () => {
    if (!thread || !user || thread.user_id !== user.id) return;
    setUpdatingSolved(true);
    try {
      const nextSolved = !thread.solved;
      const { error } = await supabase
        .from("forum_threads")
        .update({ solved: nextSolved })
        .eq("id", thread.id);

      if (error) throw error;
      setThread(prev => prev ? { ...prev, solved: nextSolved } : null);
      toast.success(nextSolved ? "Pregunta marcada como Resuelta" : "Marcada como Abierta");
    } catch (e) {
      console.error(e);
      toast.error("Error al actualizar estado.");
    } finally {
      setUpdatingSolved(false);
    }
  };

  const timeAgo = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `Hace ${mins} min`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `Hace ${hrs}h`;
    return `Hace ${Math.floor(hrs / 24)} días`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-40">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground">Cargando conversación...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!thread) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-20 text-center px-4">
          <p className="text-4xl mb-4">🔍</p>
          <h2 className="text-2xl font-bold mb-2">Pregunta no encontrada</h2>
          <p className="text-muted-foreground mb-6">El tema de conversación no existe o fue eliminado.</p>
          <Link to="/community">
            <Button>Volver a la Comunidad</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isAuthor = user && thread.user_id === user.id;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        {/* Back Link */}
        <Link to="/community" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Volver a la Comunidad
        </Link>

        {/* Main Thread Card */}
        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm mb-6 relative overflow-hidden">
          {/* Top category & solve state */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">{thread.category}</Badge>
            <div className="flex items-center gap-2">
              {thread.solved && (
                <Badge className="bg-success/15 text-success border-success/30 text-[10px]">
                  <CheckCircle className="h-3 w-3 mr-1" /> RESUELTO
                </Badge>
              )}
              {isAuthor && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={handleToggleSolved} 
                  disabled={updatingSolved}
                  className="text-xs h-7 px-3"
                >
                  {updatingSolved && <Loader2 className="h-3 w-3 mr-1 animate-spin" />}
                  {thread.solved ? "Marcar como abierto" : "Marcar como Resuelto"}
                </Button>
              )}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-extrabold mb-4 leading-tight text-foreground">{thread.title}</h1>

          {/* Author info */}
          <div className="flex items-center gap-3 border-y border-border/60 py-3 mb-4">
            <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold overflow-hidden">
              {thread.author_avatar ? (
                <img src={thread.author_avatar} className="w-full h-full object-cover" alt={thread.author_name} />
              ) : (
                thread.author_name.split(" ").map(n => n[0]).join("").substring(0, 2)
              )}
            </div>
            <div>
              <p className="font-semibold text-sm text-foreground">{thread.author_name}</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {timeAgo(thread.created_at)}
              </p>
            </div>
            
            {/* Upvotes */}
            <div className="ml-auto flex items-center gap-2">
              <Button
                variant={upvotedThread ? "default" : "outline"}
                size="sm"
                onClick={handleUpvoteThread}
                disabled={upvotedThread}
                className={`h-8 gap-1.5 text-xs font-bold ${upvotedThread ? "gradient-hero text-primary-foreground border-0" : ""}`}
              >
                <ArrowUp className="h-3.5 w-3.5" />
                {thread.upvotes} {thread.upvotes === 1 ? "voto" : "votos"}
              </Button>
            </div>
          </div>

          {/* Content Description */}
          <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap">{thread.content}</p>
        </div>

        {/* Replies Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <MessageSquare className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-bold">{thread.replies_count} {thread.replies_count === 1 ? "Respuesta" : "Respuestas"}</h2>
        </div>

        {/* Replies List */}
        <div className="space-y-4 mb-8">
          {replies.map((reply) => {
            const isReplyAuthor = user && reply.user_id === user.id;
            return (
              <div key={reply.id} className="bg-card rounded-xl border border-border p-5 relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold overflow-hidden">
                    {reply.author_avatar ? (
                      <img src={reply.author_avatar} className="w-full h-full object-cover" alt={reply.author_name} />
                    ) : (
                      reply.author_name.split(" ").map(n => n[0]).join("").substring(0, 2)
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-sm flex items-center gap-1.5">
                      {reply.author_name}
                      {reply.user_id === thread.user_id && <Badge className="text-[9px] bg-primary/10 text-primary hover:bg-primary/20 border-0 h-4 px-1.5">Autor</Badge>}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{timeAgo(reply.created_at)}</p>
                  </div>
                </div>

                <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-wrap pl-11">{reply.content}</p>
              </div>
            );
          })}

          {replies.length === 0 && (
            <div className="text-center py-10 bg-muted/10 rounded-xl border border-dashed border-border">
              <p className="text-muted-foreground text-sm">Aún no hay respuestas en este tema. ¡Sé el primero en aportar!</p>
            </div>
          )}
        </div>

        {/* Reply Form */}
        <div className="bg-card rounded-2xl border border-border p-5 shadow-sm">
          <h3 className="font-bold text-sm mb-3">Tu respuesta</h3>
          {user ? (
            <div className="space-y-4">
              <Textarea
                placeholder="Escribe tu respuesta clara y detallada..."
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                className="min-h-[100px] resize-none"
              />
              <div className="flex justify-end">
                <Button
                  onClick={handlePostReply}
                  disabled={!newReply.trim() || submitting}
                  className="gradient-hero text-primary-foreground border-0 font-bold"
                >
                  {submitting ? (
                    <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Publicando...</>
                  ) : (
                    <><Send className="h-4 w-4 mr-2" /> Responder</>
                  )}
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-6 bg-muted/20 rounded-xl border">
              <p className="text-sm text-muted-foreground mb-3">Debes iniciar sesión para poder participar en este foro.</p>
              <Link to="/auth">
                <Button size="sm">Iniciar Sesión</Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
