import { useState } from "react";
import { Save, Camera, BarChart3, Award, Settings as SettingsIcon, Bell, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { currentUser } from "@/data/mockData";

export default function Profile() {
  const [name, setName] = useState(currentUser.name);
  const [bio, setBio] = useState("Apasionada por la IA y el marketing digital. Siempre aprendiendo.");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Mi Perfil</h1>

        <Tabs defaultValue="info">
          <TabsList className="bg-muted/50 mb-6">
            <TabsTrigger value="info">Mi Información</TabsTrigger>
            <TabsTrigger value="badges">Mis Badges</TabsTrigger>
            <TabsTrigger value="stats">Estadísticas</TabsTrigger>
            <TabsTrigger value="settings">Configuración</TabsTrigger>
          </TabsList>

          <TabsContent value="info">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">MG</div>
                  <button className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground"><Camera className="h-3.5 w-3.5" /></button>
                </div>
                <div>
                  <h2 className="text-xl font-bold">{currentUser.name}</h2>
                  <p className="text-sm text-muted-foreground">Plan {currentUser.plan.toUpperCase()} · Posición #{currentUser.position}</p>
                </div>
              </div>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="text-sm font-medium mb-1 block">Nombre completo</label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <Input value={currentUser.email} disabled className="bg-muted" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Bio</label>
                  <Textarea value={bio} onChange={(e) => setBio(e.target.value)} />
                </div>
                <Button className="gradient-hero text-primary-foreground border-0"><Save className="h-4 w-4 mr-2" />Guardar Cambios</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="badges">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {currentUser.badges.map((badge) => (
                <div key={badge.id} className={`bg-card rounded-xl border border-border p-5 text-center card-hover ${!badge.unlocked ? "opacity-50" : ""}`}>
                  <span className="text-3xl block mb-2">{badge.icon}</span>
                  <p className="font-semibold text-sm mb-1">{badge.name}</p>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                  {badge.unlocked ? (
                    <Badge className="mt-2 bg-success/10 text-success border-success/30 text-[10px]">Desbloqueado</Badge>
                  ) : (
                    <Badge variant="outline" className="mt-2 text-[10px]">🔒 Bloqueado</Badge>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <div className="space-y-6">
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2"><BarChart3 className="h-5 w-5 text-primary" />Horas estudiadas por semana</h3>
                <div className="flex items-end gap-2 h-40">
                  {[2, 3.5, 1, 4, 2.5, 5, 3].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full rounded-t-md gradient-hero transition-all" style={{ height: `${(h / 5) * 100}%` }} />
                      <span className="text-[10px] text-muted-foreground">{["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"][i]}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl border border-border p-6 text-center">
                  <Award className="h-8 w-8 text-warning mx-auto mb-2" />
                  <p className="text-2xl font-bold">{currentUser.points}</p>
                  <p className="text-sm text-muted-foreground">Puntos totales</p>
                </div>
                <div className="bg-card rounded-xl border border-border p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold">#{currentUser.position}</p>
                  <p className="text-sm text-muted-foreground">Ranking actual</p>
                </div>
              </div>
            </div>
          </TabsContent>

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
              <Button variant="destructive">Cerrar Sesión</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
