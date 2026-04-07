import { Link } from "react-router-dom";
import { ArrowRight, Users, BookOpen, Award, TrendingUp, Youtube, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import davidPhoto from "@/assets/david-ames.png";

const CREDENTIALS = [
  {
    icon: Users,
    value: "2,847+",
    label: "Estudiantes formados",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: BookOpen,
    value: "8+",
    label: "Cursos publicados",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: Award,
    value: "4.9★",
    label: "Valoración media",
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: TrendingUp,
    value: "12+",
    label: "Países alcanzados",
    color: "text-green-400",
    bg: "bg-green-400/10",
  },
];

const EXPERTISE = [
  "Marketing Digital con Inteligencia Artificial",
  "Automatización de negocios con IA",
  "Estrategias de contenido y crecimiento",
  "Prompt Engineering aplicado",
  "Productividad profesional con IA",
];

export default function InstructorSection() {
  return (
    <section className="py-24 bg-slate-900 border-y border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm font-semibold text-primary">Tu Instructor</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Aprende de un experto con{" "}
            <span className="gradient-hero-text">resultados reales</span>
          </h2>
        </div>

        {/* Layout principal: foto + info */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda: Foto + stats */}
          <div className="relative flex flex-col items-center">
            {/* Marco de foto con glow */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-primary/20 rounded-full blur-2xl" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl ring-4 ring-primary/20">
                <img
                  src={davidPhoto}
                  alt="David Ames — Instructor"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge flotante "En línea" */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900 border border-slate-700 rounded-full px-4 py-1.5 shadow-xl">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white text-xs font-semibold">Activo en la plataforma</span>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center gap-2 mt-8 flex-wrap justify-center">
              <a href="https://www.facebook.com/share/1AZcK4Qzu5/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-[#1877F2]/20 border border-slate-700 hover:border-[#1877F2]/50 rounded-xl text-slate-300 hover:text-[#1877F2] text-sm transition-all">
                <Facebook className="w-4 h-4" />
                <span className="hidden sm:inline">Facebook</span>
              </a>
              <a href="https://instagram.com/davidamescantaro" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-[#E1306C]/20 border border-slate-700 hover:border-[#E1306C]/50 rounded-xl text-slate-300 hover:text-[#E1306C] text-sm transition-all">
                <Instagram className="w-4 h-4" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a href="https://youtube.com/@davidamescantaro" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-[#FF0000]/20 border border-slate-700 hover:border-[#FF0000]/50 rounded-xl text-slate-300 hover:text-[#FF0000] text-sm transition-all">
                <Youtube className="w-4 h-4" />
                <span className="hidden sm:inline">YouTube</span>
              </a>
              <a href="https://www.tiktok.com/@davidamesc" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 rounded-xl text-slate-300 hover:text-white text-sm transition-all">
                <span className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.43 6.08-1.5 1.6-3.56 2.57-5.75 2.87-2.32.32-4.79-.13-6.73-1.42-1.99-1.32-3.32-3.41-3.64-5.73-.34-2.5.34-5.18 2.01-7.05 1.63-1.84 3.99-2.91 6.44-3.07v4.06c-1.27.11-2.52.74-3.35 1.7-.82.94-1.14 2.27-.92 3.51.27 1.48 1.45 2.76 2.9 3.16 1.41.39 3.01.07 4.13-.88 1.05-.88 1.62-2.26 1.64-3.64.04-4.8.02-9.61.02-14.41z" />
                  </svg>
                </span>
                <span className="hidden sm:inline">TikTok</span>
              </a>
            </div>
          </div>

          {/* Columna derecha: Bio + stats + CTA */}
          <div className="space-y-8">
            {/* Nombre y título */}
            <div>
              <h3 className="text-4xl font-extrabold text-white mb-1">David Ames</h3>
              <p className="text-cyan-400 font-semibold text-lg">
                Experto en IA Aplicada a Negocios & Marketing Digital
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Soy un apasionado de la <strong className="text-white">inteligencia artificial aplicada a negocios reales</strong>. 
                Mi misión es clara: que cualquier persona, sin importar su background técnico, 
                pueda dominar las herramientas de IA que están redefiniendo el mercado laboral y empresarial.
              </p>
              <p>
                He ayudado a más de <strong className="text-white">2,800 profesionales</strong> de Latinoamérica 
                y España a transformar su forma de trabajar, crecer en sus carreras y escalar sus negocios 
                usando IA como ventaja competitiva real.
              </p>
            </div>

            {/* Áreas de especialización */}
            <div>
              <p className="text-slate-400 text-sm font-semibold uppercase tracking-wider mb-3">Áreas de especialización</p>
              <div className="flex flex-wrap gap-2">
                {EXPERTISE.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300 text-xs hover:border-primary/50 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {CREDENTIALS.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 bg-slate-800/60 border border-slate-700 rounded-xl p-4 hover:border-slate-600 transition-colors"
                >
                  <div className={`p-2 rounded-lg ${c.bg}`}>
                    <c.icon className={`w-4 h-4 ${c.color}`} />
                  </div>
                  <div>
                    <p className={`text-xl font-extrabold ${c.color}`}>{c.value}</p>
                    <p className="text-slate-400 text-xs">{c.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/auth">
                <Button className="gradient-hero text-white border-0 font-bold px-6 shadow-lg hover:opacity-90 hover:scale-105 transition-all">
                  Aprender con David <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-6 transition-all">
                  Ver todos los cursos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
