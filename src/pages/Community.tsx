import { useState, useEffect, useCallback } from "react";
import { Search, Plus, MessageSquare, ArrowUp, CheckCircle, TrendingUp, Clock, Flame, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { supabase, publicSupabase } from "@/lib/supabase";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const CATEGORIES = ["Todo", "Marketing Digital con IA", "IA para Profesionales", "Anuncios", "Soporte"];

const SORT_OPTIONS = [
  { value: "reciente", label: "Más reciente", icon: <Clock className="h-3.5 w-3.5" /> },
  { value: "popular",  label: "Más popular",  icon: <TrendingUp className="h-3.5 w-3.5" /> },
  { value: "activo",   label: "Más activo",   icon: <Flame className="h-3.5 w-3.5" /> },
];

// ── Types ─────────────────────────────────────────────────────
interface Thread {
  id: string;
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

// ── ThreadCard ────────────────────────────────────────────────
function ThreadCard({ thread, onUpvote }: { thread: Thread; onUpvote: (id: string) => void }) {
  const [upvoted, setUpvoted] = useState(false);

  const handleUpvote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (upvoted) return;
    setUpvoted(true);
    onUpvote(thread.id);
  };

  const timeAgo = (dateStr: string) => {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `Hace ${mins} min`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `Hace ${hrs}h`;
    return `Hace ${Math.floor(hrs / 24)} días`;
  };

  return (
    <div className="bg-card rounded-xl border border-border p-5 card-hover cursor-pointer group transition-all duration-200 hover:shadow-md hover:border-primary/30">
      <div className="flex items-start gap-4">
        {/* Upvote */}
        <div className="hidden sm:flex flex-col items-center gap-1 text-center min-w-[48px]">
          <button
            onClick={handleUpvote}
            className={`p-1.5 rounded-lg transition-colors ${upvoted ? "text-primary bg-primary/10" : "hover:text-primary hover:bg-primary/5"}`}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
          <span className={`text-sm font-bold ${upvoted ? "text-primary" : ""}`}>{thread.upvotes + (upvoted ? 1 : 0)}</span>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 mb-2 flex-wrap">
            <h3 className="font-semibold text-sm group-hover:text-primary transition-colors leading-snug flex-1">
              {thread.title}
            </h3>
            {thread.solved && (
              <Badge className="bg-success/10 text-success border-success/30 text-[10px] shrink-0">
                <CheckCircle className="h-3 w-3 mr-1" />RESUELTO
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{thread.content}</p>

          <div className="flex items-center gap-3 text-xs text-muted-foreground flex-wrap">
            <div className="flex items-center gap-1.5">
              <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[9px] font-bold overflow-hidden">
                {thread.author_avatar
                  ? <img src={thread.author_avatar} className="w-full h-full object-cover" />
                  : (thread.author_name || "U").split(" ").map((n) => n[0]).join("").substring(0, 2)
                }
              </div>
              <span className="font-medium text-foreground/70">{thread.author_name || "Anónimo"}</span>
            </div>

            <Badge variant="outline" className="text-[10px] py-0">{thread.category}</Badge>

            <span className="flex items-center gap-1">
              <MessageSquare className="h-3 w-3" />
              {thread.replies_count} respuestas
            </span>

            <span className="ml-auto hidden sm:block">{timeAgo(thread.created_at)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Dialog nueva pregunta ─────────────────────────────────────
function NewThreadDialog({
  open,
  onClose,
  onCreated,
  userId,
  isAdmin,
}: {
  open: boolean;
  onClose: () => void;
  onCreated: () => void;
  userId: string | undefined;
  isAdmin: boolean;
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim() || !category || !userId) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.from("forum_threads").insert({
        user_id: userId,
        title: title.trim(),
        content: content.trim(),
        category,
      });
      if (error) throw error;
      toast.success("¡Pregunta publicada exitosamente!");
      setTitle("");
      setContent("");
      setCategory("");
      onClose();
      onCreated();
    } catch (e) {
      console.error(e);
      toast.error("Error al publicar. Intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Nueva Pregunta</DialogTitle>
          <DialogDescription>
            Comparte tu duda con la comunidad. Sé específico para obtener mejores respuestas.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div>
            <label className="text-sm font-medium mb-1.5 block">Título de tu pregunta</label>
            <Input
              id="thread-title"
              placeholder="¿Cuál es tu duda principal?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={120}
            />
            <p className="text-xs text-muted-foreground text-right mt-1">{title.length}/120</p>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Categoría</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger id="thread-category">
                <SelectValue placeholder="Selecciona una categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Marketing Digital con IA">📊 Marketing Digital con IA</SelectItem>
                <SelectItem value="IA para Profesionales">🤖 IA para Profesionales</SelectItem>
                <SelectItem value="Soporte">🛠️ Soporte Técnico</SelectItem>
                {isAdmin && <SelectItem value="Anuncios">📣 Anuncios</SelectItem>}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">Descripción detallada</label>
            <Textarea
              id="thread-content"
              placeholder="Explica con detalle tu pregunta, lo que has intentado y el resultado esperado..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose}>Cancelar</Button>
          <Button
            id="thread-submit"
            onClick={handleSubmit}
            disabled={!title.trim() || !content.trim() || !category || submitting || !userId}
            className="gradient-hero text-primary-foreground border-0"
          >
            {submitting
              ? <><Loader2 className="h-4 w-4 mr-2 animate-spin" />Publicando...</>
              : "Publicar Pregunta"
            }
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ── Página principal ──────────────────────────────────────────
export default function Community() {
  const { user } = useAuth();
  
  // Correos con permisos de administrador (Corporativo y Respaldo)
  const ADMIN_EMAILS = ["hablemos@davidamesc.com", "davidamesc2022@gmail.com"]; 
  const isAdmin = user?.email ? ADMIN_EMAILS.includes(user.email) : false;

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Todo");
  const [sort, setSort] = useState("reciente");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [threads, setThreads] = useState<Thread[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({ members: 0, threads: 0, replies: 0, solved: 0 });

  const fetchThreads = useCallback(async () => {
    setIsLoading(true);
    try {
      let query = publicSupabase
        .from("forum_threads")
        .select("*, profiles(name, avatar)");

      if (sort === "reciente") query = query.order("created_at", { ascending: false });
      else if (sort === "popular") query = query.order("upvotes", { ascending: false });
      else if (sort === "activo") query = query.order("replies_count", { ascending: false });

      const { data, error } = await query.limit(50);
      if (error) throw error;

      const mapped: Thread[] = (data || []).map((t: any) => ({
        id: t.id,
        title: t.title,
        content: t.content,
        category: t.category,
        upvotes: t.upvotes,
        replies_count: t.replies_count,
        solved: t.solved,
        created_at: t.created_at,
        author_name: t.profiles?.name || "Anónimo",
        author_avatar: t.profiles?.avatar || "",
      }));
      setThreads(mapped);

      // Stats básicas usando publicSupabase para evitar deadlocks de autenticación
      const { count: memberCount } = await publicSupabase.from("profiles").select("*", { count: "exact", head: true });
      const { count: threadCount } = await publicSupabase.from("forum_threads").select("*", { count: "exact", head: true });
      const { count: replyCount } = await publicSupabase.from("forum_replies").select("*", { count: "exact", head: true });
      const { count: solvedCount } = await publicSupabase.from("forum_threads").select("*", { count: "exact", head: true }).eq("solved", true);

      setStats({
        members: memberCount || 0,
        threads: threadCount || 0,
        replies: replyCount || 0,
        solved: threadCount && threadCount > 0 ? Math.round(((solvedCount || 0) / threadCount) * 100) : 0,
      });
    } catch (e) {
      console.error("Error fetching community:", e);
    } finally {
      setIsLoading(false);
    }
  }, [sort]);

  useEffect(() => {
    fetchThreads();
  }, [fetchThreads]);

  const handleUpvote = async (threadId: string) => {
    await supabase.rpc("increment", { table_name: "forum_threads", row_id: threadId, field: "upvotes" }).maybeSingle();
    // Update local state optimistically
    setThreads(prev => prev.map(t => t.id === threadId ? { ...t, upvotes: t.upvotes + 1 } : t));
  };

  const filtered = threads.filter((t) => {
    if (activeTab !== "Todo" && t.category !== activeTab) return false;
    if (search && !t.title.toLowerCase().includes(search.toLowerCase()) &&
      !t.content.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const communityStats = [
    { label: "Miembros", value: stats.members.toLocaleString() },
    { label: "Threads", value: stats.threads.toLocaleString() },
    { label: "Respuestas", value: stats.replies.toLocaleString() },
    { label: "Resueltos", value: `${stats.solved}%` },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header hero */}
      <section className="bg-muted/40 border-b border-border py-10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-1">Comunidad</h1>
              <p className="text-muted-foreground text-sm">Aprende, comparte y crece junto a la comunidad</p>
            </div>
            <Button
              id="new-thread-btn"
              onClick={() => setDialogOpen(true)}
              className="gradient-hero text-primary-foreground border-0 shrink-0"
            >
              <Plus className="h-4 w-4 mr-2" />
              Nueva Pregunta
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {communityStats.map((s) => (
              <div key={s.label} className="bg-card rounded-lg border border-border p-3 text-center">
                <p className="text-xl font-bold text-primary">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Filters bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="community-search"
              placeholder="Buscar en la comunidad..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {SORT_OPTIONS.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  <span className="flex items-center gap-2">{o.icon} {o.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Category Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
          <TabsList className="bg-muted/50 flex-wrap h-auto gap-1">
            {CATEGORIES.map((c) => (
              <TabsTrigger key={c} value={c} className="text-xs">{c}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Results header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm text-muted-foreground">
            {isLoading ? "Cargando..." : `${filtered.length} ${filtered.length === 1 ? "thread" : "threads"} encontrados`}
          </p>
          {search && (
            <Button variant="ghost" size="sm" onClick={() => setSearch("")} className="text-xs">
              Limpiar búsqueda ×
            </Button>
          )}
        </div>

        {/* Thread list */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Cargando la comunidad...</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((thread) => (
              <ThreadCard key={thread.id} thread={thread} onUpvote={handleUpvote} />
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-16">
                <p className="text-5xl mb-4">💬</p>
                <p className="font-semibold mb-1">
                  {search ? `No hay resultados para "${search}"` : "Sé el primero en publicar en esta categoría"}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  ¡La comunidad está esperando tu pregunta!
                </p>
                <Button onClick={() => setDialogOpen(true)} className="gradient-hero text-primary-foreground border-0">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Pregunta
                </Button>
              </div>
            )}
          </div>
        )}
      </div>

      <Footer />
      <NewThreadDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onCreated={fetchThreads}
        userId={user?.id}
        isAdmin={isAdmin}
      />
    </div>
  );
}
