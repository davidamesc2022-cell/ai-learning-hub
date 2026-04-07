import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rocket, BrainCircuit, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// ── Tipos ────────────────────────────────────────────────────────
interface OnboardingModalProps {
  open: boolean;
  userName: string;
  onComplete: () => void;
}

// ── Datos de los pasos ───────────────────────────────────────────
const PATHS = [
  {
    id: "marketing",
    icon: Rocket,
    gradient: "from-orange-400 to-rose-500",
    title: "Marketing y Negocios",
    subtitle: "Crecimiento con IA",
    description:
      "Quiero usar IA para crecer mi negocio, crear contenido y aumentar ventas.",
  },
  {
    id: "ia",
    icon: BrainCircuit,
    gradient: "from-cyan-400 to-blue-600",
    title: "Productividad con IA",
    subtitle: "Para profesionales",
    description:
      "Quiero ser más productivo en mi trabajo diario usando herramientas de IA.",
  },
];

const STEPS = [
  { id: 1, label: "Tu ruta" },
  { id: 2, label: "Tu nivel" },
  { id: 3, label: "¡Listo!" },
];

const LEVELS = [
  { id: "beginner", emoji: "🌱", label: "Principiante", desc: "Sé poco o nada de IA" },
  { id: "intermediate", emoji: "🚀", label: "Intermedio", desc: "Ya uso algunas herramientas" },
  { id: "advanced", emoji: "⚡", label: "Avanzado", desc: "Quiero profundizar y especializar" },
];

// ── Componente principal ─────────────────────────────────────────
export default function OnboardingModal({ open, userName, onComplete }: OnboardingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedPath, setSelectedPath] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const navigate = useNavigate();

  const firstName = userName.split(" ")[0] || "Estudiante";

  const handleFinish = () => {
    onComplete();
    // Redirigir a la ruta seleccionada
    const route = selectedPath === "marketing"
      ? "/courses?category=marketing"
      : "/courses?category=ia";
    navigate(route);
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        className="max-w-lg p-0 border-0 bg-transparent shadow-none overflow-visible"
        // Deshabilitar cierre con Escape o clic fuera para forzar el flujo
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <div className="bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
          {/* Header con progreso */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 pt-8 pb-4 border-b border-slate-800">
            <div className="flex items-center justify-between mb-4">
              {STEPS.map((s, i) => (
                <div key={s.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-all duration-300 
                    ${step >= s.id
                      ? "bg-primary text-white shadow-lg shadow-primary/30"
                      : "bg-slate-700 text-slate-400"
                    }`}>
                    {step > s.id ? <CheckCircle className="w-4 h-4" /> : s.id}
                  </div>
                  <span className={`ml-2 text-xs font-medium hidden sm:block ${step >= s.id ? "text-slate-200" : "text-slate-500"}`}>
                    {s.label}
                  </span>
                  {i < STEPS.length - 1 && (
                    <div className={`mx-3 h-px w-8 sm:w-16 transition-all duration-500 ${step > s.id ? "bg-primary" : "bg-slate-700"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contenido por paso */}
          <div className="px-6 py-8">

            {/* ── Paso 1: Elegir ruta ── */}
            {step === 1 && (
              <div className="animate-fade-in">
                <div className="text-center mb-6">
                  <div className="text-3xl mb-2">👋</div>
                  <h2 className="text-2xl font-extrabold text-white mb-1">
                    ¡Bienvenido, {firstName}!
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Cuéntanos qué quieres lograr para recomendarte el camino perfecto.
                  </p>
                </div>

                <div className="space-y-3">
                  {PATHS.map((path) => {
                    const Icon = path.icon;
                    const isSelected = selectedPath === path.id;
                    return (
                      <button
                        key={path.id}
                        onClick={() => setSelectedPath(path.id)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-start gap-4 group
                          ${isSelected
                            ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                            : "border-slate-700 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-800"
                          }`}
                      >
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${path.gradient} flex-shrink-0 shadow-inner`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-white">{path.title}</p>
                            {isSelected && <CheckCircle className="w-4 h-4 text-primary" />}
                          </div>
                          <p className="text-xs text-primary font-semibold mb-1">{path.subtitle}</p>
                          <p className="text-xs text-slate-400">{path.description}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <Button
                  className="w-full mt-6 gradient-hero text-white border-0 font-bold py-6 text-base shadow-lg shadow-primary/20 hover:opacity-90 transition-all"
                  disabled={!selectedPath}
                  onClick={() => setStep(2)}
                >
                  Continuar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}

            {/* ── Paso 2: Nivel ── */}
            {step === 2 && (
              <div className="animate-fade-in">
                <div className="text-center mb-6">
                  <div className="text-3xl mb-2">📊</div>
                  <h2 className="text-2xl font-extrabold text-white mb-1">
                    ¿Cuál es tu nivel?
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Te ayuda a encontrar los cursos exactos para ti.
                  </p>
                </div>

                <div className="space-y-3">
                  {LEVELS.map((level) => {
                    const isSelected = selectedLevel === level.id;
                    return (
                      <button
                        key={level.id}
                        onClick={() => setSelectedLevel(level.id)}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-200 flex items-center gap-4
                          ${isSelected
                            ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                            : "border-slate-700 bg-slate-800/50 hover:border-slate-500 hover:bg-slate-800"
                          }`}
                      >
                        <span className="text-2xl flex-shrink-0">{level.emoji}</span>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-white">{level.label}</p>
                            {isSelected && <CheckCircle className="w-4 h-4 text-primary" />}
                          </div>
                          <p className="text-xs text-slate-400">{level.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="flex gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="flex-1 border-slate-700 text-slate-300 hover:bg-slate-800"
                    onClick={() => setStep(1)}
                  >
                    Atrás
                  </Button>
                  <Button
                    className="flex-1 gradient-hero text-white border-0 font-bold shadow-lg hover:opacity-90 transition-all"
                    disabled={!selectedLevel}
                    onClick={() => setStep(3)}
                  >
                    Continuar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {/* ── Paso 3: Confirmación ── */}
            {step === 3 && (
              <div className="animate-fade-in text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center shadow-2xl shadow-primary/30">
                    <Sparkles className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-green-500 border-4 border-slate-900 flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h2 className="text-2xl font-extrabold text-white mb-2">
                  ¡Todo listo, {firstName}! 🎉
                </h2>
                <p className="text-slate-400 text-sm mb-6">
                  Tu perfil está configurado. Te llevamos directo a los cursos de{" "}
                  <span className="text-primary font-semibold">
                    {selectedPath === "marketing" ? "Marketing con IA" : "Productividad con IA"}
                  </span>{" "}
                  para nivel{" "}
                  <span className="text-primary font-semibold">
                    {LEVELS.find((l) => l.id === selectedLevel)?.label}
                  </span>.
                </p>

                {/* Resumen */}
                <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 mb-6 text-left space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">
                      Ruta: <strong className="text-white">
                        {selectedPath === "marketing" ? "Marketing y Negocios" : "Productividad con IA"}
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">
                      Nivel: <strong className="text-white">
                        {LEVELS.find((l) => l.id === selectedLevel)?.label}
                      </strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">
                      Acceso: <strong className="text-white">Plan Free activado ✅</strong>
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full gradient-hero text-white border-0 font-bold py-6 text-base shadow-lg shadow-primary/20 hover:opacity-90 hover:scale-[1.02] transition-all"
                  onClick={handleFinish}
                >
                  ¡Ver mis cursos recomendados! <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
