import { useState } from "react";
import { Search, Plus, MessageSquare, ArrowUp, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { forumThreads } from "@/data/mockData";

const categories = ["Todo", "Marketing Digital con IA", "IA para Profesionales", "Anuncios", "Soporte"];

export default function Community() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("Todo");

  const filtered = forumThreads.filter((t) => {
    if (activeTab !== "Todo" && t.category !== activeTab) return false;
    if (search && !t.title.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">Comunidad</h1>
          <Button className="gradient-hero text-primary-foreground border-0"><Plus className="h-4 w-4 mr-2" />Nueva Pregunta</Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-muted/50 mb-6 flex-wrap h-auto gap-1">
            {categories.map((c) => <TabsTrigger key={c} value={c} className="text-xs">{c}</TabsTrigger>)}
          </TabsList>

          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar en la comunidad..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>

          <div className="space-y-3">
            {filtered.map((thread) => (
              <div key={thread.id} className="bg-card rounded-xl border border-border p-5 card-hover cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex flex-col items-center gap-1 text-center min-w-[50px]">
                    <button className="p-1 hover:text-primary transition-colors"><ArrowUp className="h-4 w-4" /></button>
                    <span className="text-sm font-bold">{thread.upvotes}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-semibold text-sm hover:text-primary transition-colors">{thread.title}</h3>
                      {thread.solved && <Badge className="bg-success/10 text-success border-success/30 text-[10px]"><CheckCircle className="h-3 w-3 mr-1" />RESUELTO</Badge>}
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{thread.preview}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                      <div className="flex items-center gap-1">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[8px] font-bold">{thread.author.split(" ").map(n => n[0]).join("")}</div>
                        {thread.author}
                      </div>
                      <Badge variant="outline" className="text-[10px]">{thread.category}</Badge>
                      <span className="flex items-center gap-1"><MessageSquare className="h-3 w-3" />{thread.replies}</span>
                      <span>{thread.lastActivity}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-4xl mb-4">💬</p>
                <p className="font-semibold">No hay threads en esta categoría</p>
                <p className="text-sm text-muted-foreground">Sé el primero en crear una pregunta</p>
              </div>
            )}
          </div>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
