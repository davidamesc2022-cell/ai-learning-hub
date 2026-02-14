import { Link } from "react-router-dom";
import { BookOpen, Trophy, Clock, Star, Flame, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { currentUser, courses } from "@/data/mockData";

const stats = [
  { label: "Cursos en Progreso", value: currentUser.coursesInProgress, icon: BookOpen, color: "text-primary" },
  { label: "Cursos Completados", value: currentUser.coursesCompleted, icon: Trophy, color: "text-success" },
  { label: "Total de Horas", value: currentUser.totalHours, icon: Clock, color: "text-accent" },
  { label: "Puntos Ganados", value: currentUser.points, icon: Star, color: "text-warning" },
];

export default function Dashboard() {
  const inProgress = currentUser.enrolledCourses.filter((e) => !e.completed);
  const completed = currentUser.enrolledCourses.filter((e) => e.completed);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-1">¡Hola, {currentUser.name.split(" ")[0]}! 👋</h1>
          <p className="text-muted-foreground flex items-center gap-2">
            Llevas {currentUser.streak} días de racha <Flame className="h-4 w-4 text-warning" />
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
            {inProgress.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4">Continúa Aprendiendo</h2>
                <div className="space-y-4">
                  {inProgress.map((enrolled) => {
                    const c = courses.find((co) => co.id === enrolled.courseId);
                    if (!c) return null;
                    return (
                      <div key={c.id} className="bg-card rounded-xl border border-border p-5 flex flex-col sm:flex-row items-start gap-4 card-hover">
                        <div className="h-20 w-32 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 text-2xl">
                          {c.category === "marketing" ? "📊" : "🤖"}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{c.title}</h3>
                          <p className="text-xs text-muted-foreground mb-2">Última lección: {enrolled.lastLesson}</p>
                          <div className="flex items-center gap-3 mb-2">
                            <Progress value={enrolled.progress} className="h-2 flex-1" />
                            <span className="text-xs font-medium">{enrolled.progress}%</span>
                          </div>
                          <Link to={`/learn/${c.id}/${c.modules[0]?.lessons[0]?.id}`}>
                            <Button size="sm" className="gradient-hero text-primary-foreground border-0">Continuar <ArrowRight className="h-3 w-3 ml-1" /></Button>
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

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
                        <Button size="sm" variant="outline">Ver Certificado</Button>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Badges */}
            <section>
              <h2 className="text-xl font-bold mb-4">Logros Recientes</h2>
              <div className="space-y-3">
                {currentUser.badges.filter((b) => b.unlocked).map((badge) => (
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
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 space-y-4">
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold mb-4">Tu Progreso</h3>
              <div className="flex items-center justify-center mb-4">
                <div className="relative h-28 w-28">
                  <svg className="h-28 w-28 -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--muted))" strokeWidth="8" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="8" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - 0.6)} strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">60%</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">Próximo badge: <span className="font-medium text-foreground">🔥 Racha de Fuego</span></p>
            </div>
            <div className="bg-card rounded-xl border border-border p-5">
              <h3 className="font-semibold mb-3">Actividad Reciente</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>📖 Completaste "Few-Shot Learning" <span className="block text-xs">Hace 2h</span></p>
                <p>🏆 Badge desbloqueado <span className="block text-xs">Hace 5h</span></p>
                <p>💬 Respondiste en el foro <span className="block text-xs">Hace 1d</span></p>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
