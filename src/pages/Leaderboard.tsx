import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Trophy, Medal, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { User } from "@/lib/types";

const periods = ["Este mes", "Este año", "Histórico"];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function Leaderboard() {
  const { user: currentUser } = useAuth();
  const [period, setPeriod] = useState("Este mes");
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setIsLoading(true);
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*, enrolled_courses(count)")
          .order("points", { ascending: false })
          .limit(50);

        if (error) throw error;

        if (data) {
          const rankedData = data.map((user, idx) => ({
            ...user,
            position: idx + 1,
            coursesCount: (user.enrolled_courses?.[0]?.count ?? 0)
          }));
          setLeaderboard(rankedData);
        }
      } catch (err) {
        console.error("Error fetching leaderboard:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLeaderboard();
  }, [period]);

  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);
  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Tabla de Posiciones</h1>
            {currentUser && (
              <p className="text-muted-foreground">Tu posición: <Badge variant="outline" className="ml-1">#{currentUser.position || '--'}</Badge></p>
            )}
          </div>
          <div className="flex gap-2">
            {periods.map((p) => (
              <Button key={p} variant={period === p ? "default" : "outline"} size="sm" onClick={() => setPeriod(p)} className={period === p ? "gradient-hero text-primary-foreground border-0 shadow-md" : ""}>
                {p}
              </Button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Actualizando ranking mundial...</p>
          </div>
        ) : leaderboard.length === 0 ? (
          <div className="text-center py-20 bg-muted/20 rounded-xl border border-border">
            <Trophy className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Aún no hay usuarios en el ranking.</p>
          </div>
        ) : (
          <>
            {/* Podio animado */}
            {top3.length > 0 && (
              <div className="flex items-end justify-center gap-2 sm:gap-4 mb-10 h-64">
                {[1, 0, 2].map((order, i) => {
                  const user = top3[order];
                  // Si no hay usuario en esta posición de podio, mostramos un placeholder invisible para mantener la estructura
                  if (!user) {
                    return <div key={`empty-${order}`} className="w-full max-w-[140px] opacity-0 pointer-events-none" />;
                  }

                  const isFirst = order === 0;
                  const delay = isFirst ? 0.3 : (order === 1 ? 0.1 : 0.5);

                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ type: "spring", bounce: 0.4, delay }}
                      key={user.id}
                      className={`text-center relative z-10 w-full max-w-[140px]`}
                    >
                      <div className={`bg-card rounded-t-2xl border border-b-0 border-border p-4 flex flex-col items-center justify-end
                        ${isFirst ? "h-48 border-warning/50 bg-warning/5 shadow-[0_-10px_40px_-15px_rgba(250,204,21,0.3)]" : (order === 1 ? "h-40 border-muted-foreground/30 bg-muted/20" : "h-32 border-orange-500/30 bg-orange-500/5")}
                      `}>
                        <motion.span
                          initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: delay + 0.3, type: "spring" }}
                          className={`text-4xl absolute -top-5 ${isFirst ? "-top-8 text-5xl drop-shadow-lg" : ""}`}
                        >
                          {medals[order]}
                        </motion.span>
                        <div className={`h-12 w-12 rounded-full flex items-center justify-center text-primary text-sm font-bold mx-auto mb-2 shadow-inner border-2 bg-background overflow-hidden ${isFirst ? "border-warning h-16 w-16 text-lg" : "border-muted-foreground/30"}`}>
                          {user.avatar ? (
                            <img src={user.avatar} className="w-full h-full object-cover" />
                          ) : (
                            (user.name || "U").split(" ").map((n: string) => n[0]).join("").substring(0, 2)
                          )}
                        </div>
                        <p className="font-bold text-sm truncate w-full">{user.name || 'Sin nombre'}</p>
                        <p className={`text-lg font-extrabold ${isFirst ? "text-warning" : "text-primary"}`}>{user.points || 0}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Table animada */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-card rounded-xl border border-border overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-[60px_1fr_100px_100px] sm:grid-cols-[60px_1fr_100px_120px_100px] text-xs font-semibold text-muted-foreground p-3 border-b border-border bg-muted/50">
                <span>#</span>
                <span>Estudiante</span>
                <span className="text-right">Puntos</span>
                <span className="text-right hidden sm:block">Cursos</span>
                <span className="text-right">Plan</span>
              </div>
              {(top3.length < 3 ? leaderboard : rest).map((user) => {
                const isMe = currentUser && user.id === currentUser.id;
                return (
                  <motion.div
                    variants={itemVariants}
                    key={user.id}
                    className={`grid grid-cols-[60px_1fr_100px_100px] sm:grid-cols-[60px_1fr_100px_120px_100px] text-sm p-3 border-b border-border last:border-0 items-center ${isMe ? "bg-primary/5 font-medium" : "hover:bg-muted/30"} transition-colors`}
                  >
                    <span className={isMe ? "text-primary font-bold" : "text-muted-foreground"}>{user.position}</span>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-[11px] font-bold border border-primary/20 overflow-hidden">
                        {user.avatar ? (
                          <img src={user.avatar} className="w-full h-full object-cover" />
                        ) : (
                          (user.name || "U").split(" ").map((n: string) => n[0]).join("").substring(0, 2)
                        )}
                      </div>
                      <span className="truncate">{user.name || 'Sin nombre'} {isMe && <span className="ml-2 text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full">Tú</span>}</span>
                    </div>
                    <span className="text-right font-bold">{user.points || 0}</span>
                    <span className="text-right hidden sm:block text-muted-foreground">{user.coursesCount ?? 0}</span>
                    <span className="text-right">
                      <Badge variant={user.plan === "elite" ? "default" : "outline"} className={`text-[10px] ${user.plan === "elite" ? "bg-gradient-to-r from-violet-600 to-indigo-600 border-0 text-white" : ""}`}>
                        {(user.plan || "free").toUpperCase()}
                      </Badge>
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
