import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Save, Camera, BarChart3, Award, Settings as SettingsIcon, Bell, Globe, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import type { Badge as BadgeType } from "@/lib/types";

export default function Profile() {
  const { user, isLoading, logout, updateProfile, fetchBadges } = useAuth();

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [badges, setBadges] = useState<BadgeType[]>([]);
  const [badgesLoading, setBadgesLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setBio(user.bio || "");
    }
  }, [user]);

  const handleSave = async () => {
    setIsSaving(true);
    const success = await updateProfile({ name, bio });
    setIsSaving(false);
    if (success) {
      toast.success("¡Perfil actualizado correctamente!");
    } else {
      toast.error("Error al guardar. Intenta de nuevo.");
    }
  };

  const handleBadgesTab = async () => {
    if (badges.length > 0) return; // Ya cargadas
    setBadgesLoading(true);
    const loaded = await fetchBadges();
    setBadges(loaded);
    setBadgesLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground">Cargando tu perfil...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          <p className="text-xl mb-4 text-center">Debes iniciar sesión para ver tu perfil.</p>
          <Link to="/auth">
            <Button>Ir al Login</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>

        <Tabs defaultValue="info">
          <TabsList className="bg-muted/50 mb-6 flex-wrap h-auto">
            <TabsTrigger value="info">Mi Información</TabsTrigger>
            <TabsTrigger value="badges" onClick={handleBadgesTab}>Mis Badges</TabsTrigger>
            <TabsTrigger value="stats">Estadísticas</TabsTrigger>
            <TabsTrigger value="settings">Configuración</TabsTrigger>
          </TabsList>

          {/* ── Tab: Información ── */}
          <TabsContent value="info">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-card rounded-xl border border-border p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8 text-center sm:text-left">
                <div className="relative group cursor-pointer">
                  <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-primary to-accent p-1">
                    <div className="h-full w-full rounded-full bg-card flex items-center justify-center text-primary text-3xl font-bold overflow-hidden">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        name.split(" ").map(n => n[0]).join("").substring(0, 2)
                      )}
                    </div>
                  </div>
                  <button className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold">{name}</h2>
                  <p className="text-sm text-muted-foreground mb-3">Plan {(user.plan || 'Free').toUpperCase()} · Rank #{user.position || '--'} Mundial</p>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Award className="h-4 w-4 text-warning" /> {user.points || 0} Puntos</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                    <span className="flex items-center gap-1">🔥 {user.streak || 0} Días de racha</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 max-w-xl">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Nombre completo</label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Email</label>
                    <Input value={user.email} disabled className="bg-muted opacity-70" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Biografía Profesional (Visible en tu perfil público)</label>
                  <Textarea value={bio} onChange={(e) => setBio(e.target.value)} className="min-h-[100px]" />
                </div>
                <Button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="gradient-hero text-primary-foreground border-0 shadow-lg mt-4"
                >
                  {isSaving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
                  {isSaving ? "Guardando..." : "Guardar Cambios"}
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          {/* ── Tab: Badges ── */}
          <TabsContent value="badges">
            {badgesLoading ? (
              <div className="flex flex-col items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-3" />
                <p className="text-muted-foreground">Cargando insignias...</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
              >
                {badges.map((badge, idx) => (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.07 }}
                    key={badge.id}
                    className={`bg-card rounded-xl border border-border p-5 text-center transition-all ${!badge.unlocked ? "opacity-50 grayscale hover:grayscale-0" : "hover:shadow-lg hover:-translate-y-1 hover:border-primary/50"}`}
                  >
                    <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-3 ${badge.unlocked ? "bg-primary/10" : "bg-muted"}`}>
                      {badge.icon}
                    </div>
                    <p className="font-bold text-sm mb-1">{badge.name}</p>
                    <p className="text-[11px] text-muted-foreground line-clamp-2 min-h-[32px]">{badge.description}</p>
                    {badge.unlocked ? (
                      <Badge className="mt-3 bg-success/15 text-success hover:bg-success/25 border-0 font-bold text-[10px] gap-1">
                        <CheckCircle className="h-3 w-3" /> ¡Obtenido!
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="mt-3 text-[10px] text-muted-foreground">🔒 Bloqueado</Badge>
                    )}
                  </motion.div>
                ))}
                {badges.length === 0 && (
                  <p className="col-span-full py-10 text-center text-muted-foreground">No hay insignias disponibles aún.</p>
                )}
              </motion.div>
            )}
          </TabsContent>

          {/* ── Tab: Estadísticas ── */}
          <TabsContent value="stats">
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-primary" />Mi actividad de aprendizaje</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-2xl font-bold text-primary">{user.coursesInProgress || 0}</p>
                    <p className="text-xs text-muted-foreground mt-1">En progreso</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-2xl font-bold text-success">{user.coursesCompleted || 0}</p>
                    <p className="text-xs text-muted-foreground mt-1">Completados</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-2xl font-bold text-warning">{user.points || 0}</p>
                    <p className="text-xs text-muted-foreground mt-1">Puntos</p>
                  </div>
                  <div className="bg-muted/30 rounded-lg p-4">
                    <p className="text-2xl font-bold">#{user.position || '--'}</p>
                    <p className="text-xs text-muted-foreground mt-1">Ranking</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold mb-4">Racha de estudio</h3>
                <div className="flex items-center gap-4">
                  <span className="text-5xl">🔥</span>
                  <div>
                    <p className="text-3xl font-extrabold">{user.streak || 0} días</p>
                    <p className="text-sm text-muted-foreground">Racha consecutiva activa</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ── Tab: Configuración ── */}
          <TabsContent value="settings">
            <div className="bg-card rounded-xl border border-border p-6 space-y-6 max-w-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3"><Bell className="h-4 w-4 text-muted-foreground" /><span className="text-sm">Notificaciones por email</span></div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3"><Bell className="h-4 w-4 text-muted-foreground" /><span className="text-sm">Notificaciones push</span></div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3"><Globe className="h-4 w-4 text-muted-foreground" /><span className="text-sm">Zona horaria</span></div>
                <span className="text-sm text-muted-foreground">UTC-5 (Ciudad de México)</span>
              </div>
              <hr className="border-border" />
              <Button variant="destructive" onClick={() => logout()}>Cerrar Sesión</Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
}
