import { useState } from "react";
import { Trophy, Medal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { leaderboard, currentUser } from "@/data/mockData";

const periods = ["Este mes", "Este año", "Histórico"];

export default function Leaderboard() {
  const [period, setPeriod] = useState("Este mes");

  const top3 = leaderboard.slice(0, 3);
  const rest = leaderboard.slice(3);
  const medals = ["🥇", "🥈", "🥉"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Tabla de Posiciones</h1>
            <p className="text-muted-foreground">Tu posición: <Badge variant="outline" className="ml-1">#{currentUser.position}</Badge></p>
          </div>
          <div className="flex gap-2">
            {periods.map((p) => (
              <Button key={p} variant={period === p ? "default" : "outline"} size="sm" onClick={() => setPeriod(p)} className={period === p ? "gradient-hero text-primary-foreground border-0" : ""}>
                {p}
              </Button>
            ))}
          </div>
        </div>

        {/* Podio */}
        <div className="flex items-end justify-center gap-4 mb-10">
          {[top3[1], top3[0], top3[2]].map((user, i) => {
            const order = [1, 0, 2][i];
            const isFirst = order === 0;
            return (
              <div key={user.position} className={`text-center ${isFirst ? "mb-4" : ""}`}>
                <div className={`bg-card rounded-xl border border-border p-4 card-hover ${isFirst ? "border-warning shadow-lg ring-2 ring-warning/20 scale-110" : ""}`}>
                  <span className="text-3xl block mb-2">{medals[order]}</span>
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold mx-auto mb-2">{user.name.split(" ").map(n => n[0]).join("")}</div>
                  <p className="font-semibold text-sm">{user.name}</p>
                  <p className="text-lg font-extrabold text-primary">{user.points}</p>
                  <p className="text-[10px] text-muted-foreground">{user.courses} cursos</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="grid grid-cols-[60px_1fr_100px_100px] sm:grid-cols-[60px_1fr_100px_120px_100px] text-xs font-semibold text-muted-foreground p-3 border-b border-border bg-muted/50">
            <span>#</span>
            <span>Estudiante</span>
            <span className="text-right">Puntos</span>
            <span className="text-right hidden sm:block">Cursos</span>
            <span className="text-right">Plan</span>
          </div>
          {rest.map((user) => {
            const isMe = user.name === currentUser.name || user.position === currentUser.position;
            return (
              <div key={user.position} className={`grid grid-cols-[60px_1fr_100px_100px] sm:grid-cols-[60px_1fr_100px_120px_100px] text-sm p-3 border-b border-border last:border-0 items-center ${isMe ? "bg-primary/5" : "hover:bg-muted/30"} transition-colors`}>
                <span className="font-medium">{user.position}</span>
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-full bg-primary/20 flex items-center justify-center text-primary text-[10px] font-bold">{user.name.split(" ").map(n => n[0]).join("")}</div>
                  <span className="font-medium truncate">{user.name}</span>
                </div>
                <span className="text-right font-bold">{user.points}</span>
                <span className="text-right hidden sm:block text-muted-foreground">{user.courses}</span>
                <span className="text-right"><Badge variant="outline" className="text-[10px]">{user.plan.toUpperCase()}</Badge></span>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
