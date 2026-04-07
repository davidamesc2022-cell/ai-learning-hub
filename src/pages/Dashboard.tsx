import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Trophy, Clock, Star, Flame, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CertificateGenerator from "@/components/courses/CertificateGenerator";
import type { Course } from "@/lib/types";
import { useAuth } from "@/hooks/useAuth";
import { useCourses } from "@/hooks/useCourses";

export default function Dashboard() {
  const { user, isLoading: authLoading } = useAuth();
  const { courses, isLoading: coursesLoading } = useCourses();

  const [selectedCert, setSelectedCert] = useState<Course | null>(null);

  if (authLoading || coursesLoading) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground">Cargando tu progreso...</p>
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
          <p className="text-xl mb-4 text-center">Debes iniciar sesión para ver tu Dashboard.</p>
          <Link to="/auth">
            <Button>Ir al Login</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const inProgress = (user.enrolledCourses || []).filter((e) => !e.completed);
  const completed = (user.enrolledCourses || []).filter((e) => e.completed);

  const totalProgressSum = (user.enrolledCourses || []).reduce((acc, curr) => acc + (curr.progress || 0), 0);
  const globalProgress = user.enrolledCourses && user.enrolledCourses.length > 0
    ? Math.round(totalProgressSum / user.enrolledCourses.length)
    : 0;

  const stats = [
    { label: "Cursos en Progreso", value: user.coursesInProgress || 0, icon: BookOpen, color: "text-primary" },
    { label: "Cursos Completados", value: user.coursesCompleted || 0, icon: Trophy, color: "text-success" },
    { label: "Total de Horas", value: user.totalHours || 0, icon: Clock, color: "text-accent" },
    { label: "Puntos Ganados", value: user.points || 0, icon: Star, color: "text-warning" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">¡Hola, {user.name.split(" ")[0]}! 👋</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            Llevas {user.streak || 0} días de racha <Flame className="h-4 w-4 text-warning" />
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-xl border border-border p-5 card-hover">
              <div className="flex items-center justify-between mb-3">
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <p className="text-2xl font-extrabold animate-count-up">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-10">
            {/* Continue Learning */}
            <section>
              <h2 className="text-xl font-bold mb-4">Continúa Aprendiendo</h2>
              {inProgress.length > 0 ? (
                <div className="space-y-4">
                  {inProgress.map((enrolled) => {
                    const c = courses.find((co) => co.id === enrolled.courseId);
                    if (!c) return null;
                    return (
                      <div key={c.id} className="bg-card rounded-xl border border-border p-5 flex flex-col sm:flex-row items-start gap-4 card-hover">
                        <div className="h-20 w-32 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 text-2xl overflow-hidden border border-border">
                          {c.thumbnailUrl ? (
                            <img src={c.thumbnailUrl} alt={c.title} className="w-full h-full object-cover" />
                          ) : (
                            c.category === "marketing" ? "📊" : "🤖"
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{c.title}</h3>
                          <p className="text-xs text-muted-foreground mb-2">Última lección: {enrolled.lastLesson || 'Inicio'}</p>
                          <div className="flex items-center gap-3 mb-2">
                            <Progress value={enrolled.progress} className="h-2 flex-1" />
                            <span className="text-xs font-medium">{enrolled.progress || 0}%</span>
                          </div>
                          <Link to={`/learn/${c.id}/${enrolled.lastLesson || 'intro'}`}>
                            <Button size="sm" className="gradient-hero text-primary-foreground border-0">Continuar <ArrowRight className="h-3 w-3 ml-1" /></Button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-card rounded-xl border border-dashed border-border p-8 text-center">
                  <BookOpen className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Aún no tienes cursos activos</h3>
                  <p className="text-sm text-muted-foreground mb-4">Explora el catálogo para empezar a aprender.</p>
                  <Link to="/courses">
                    <Button variant="outline">Ver Catálogo</Button>
                  </Link>
                </div>
              )}
            </section>

            {/* Completed */}
            {completed.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4">Cursos Completados</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {completed.map((enrolled) => {
                    const c = courses.find((co) => co.id === enrolled.courseId);
                    if (!c) return null;
                    return (
                      <div key={c.id} className="bg-card rounded-xl border border-border p-5 card-hover relative">
                        <Badge className="absolute top-3 right-3 bg-success/10 text-success border-success/30">COMPLETADO</Badge>
                        <div className="text-2xl mb-3">{c.category === "marketing" ? "📊" : "🤖"}</div>
                        <h3 className="font-semibold text-sm mb-2">{c.title}</h3>
                        <Button size="sm" variant="outline" onClick={() => setSelectedCert(c)}>Ver Certificado</Button>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Badges */}
            <section>
              <h2 className="text-xl font-bold mb-4">Logros Recientes</h2>
              {user.badges && user.badges.length > 0 ? (
                <div className="space-y-3">
                  {user.badges.filter((b) => b.unlocked).map((badge) => (
                    <div key={badge.id} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                      <span className="text-2xl">{badge.icon}</span>
                      <div>
                        <p className="font-medium text-sm">{badge.name}</p>
                        <p className="text-xs text-muted-foreground">{badge.description} · {badge.unlockedAt}</p>
                      </div>
                      <CheckCircle className="h-4 w-4 text-success ml-auto" />
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">Todavía no has desbloqueado insignias. ¡Sigue aprendiendo para conseguir la primera!</p>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 space-y-4">
            <div className="bg-card rounded-xl border border-border p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Trophy className="w-32 h-32" />
              </div>
              <h3 className="font-semibold mb-4 relative z-10">Tu Progreso</h3>
              <div className="flex items-center justify-center mb-4 relative z-10">
                <div className="relative h-28 w-28">
                  <svg className="h-28 w-28 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - (globalProgress / 100))} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">{globalProgress}%</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center relative z-10">
                Próximo badge: <span className="font-medium text-foreground">🔥 Racha de Fuego</span>
              </p>
            </div>

            {/* The "Actividad Reciente" widget was here, removed because it has no read data from Supabase yet. */}
          </aside>
        </div>
      </div>
      <Footer />

      {/* Modal del Certificado */}
      <Dialog open={!!selectedCert} onOpenChange={(open) => !open && setSelectedCert(null)}>
        <DialogContent className="max-w-4xl p-0 border-none bg-transparent shadow-none">
          {selectedCert && (
            <CertificateGenerator
              studentName={user.name}
              courseName={selectedCert.title}
              issueDate={new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
