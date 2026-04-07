import { Link } from "react-router-dom";
import { ArrowRight, Star, Zap, Brain, CheckCircle, Loader2, Rocket, BrainCircuit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/CourseCard";
import { useCourses } from "@/hooks/useCourses";
import { plans, testimonials } from "@/data/constants";
import StudentWorldMap from "@/components/StudentWorldMap";
import InstructorSection from "@/components/InstructorSection";

export default function Index() {
  const { featuredCourses, isLoading } = useCourses();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[92vh] flex flex-col justify-center">
        {/* Fondo con imagen premium abstracta limpia */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=2560" alt="Tecnología e Inteligencia Artificial" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-background" />
          {/* Efecto de brillo central */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.08)_0%,transparent_70%)]" />
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-40 text-center flex flex-col items-center justify-center">
          {/* Badge premium */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm font-semibold text-primary">🚀 +2,000 estudiantes ya están aprendiendo</span>
          </div>

          {/* Título principal: blanco puro + sombra */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-2xl text-balance leading-tight">
            Domina la IA y el Marketing{" "}
            <span className="gradient-hero-text drop-shadow-lg">Digital del Futuro</span>
          </h1>

          {/* Subtítulo: gris muy claro, bien legible */}
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
            Aprende de David Ames, experto en IA aplicada a negocios. Cursos prácticos,
            comunidad activa y certificaciones que impulsan tu carrera.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth">
              <Button size="lg" className="gradient-hero text-white border-0 px-10 text-base font-bold shadow-2xl hover:opacity-90 hover:scale-105 transition-all duration-200">
                Comienza Gratis <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="px-10 text-base font-semibold border-white/30 text-white bg-white/10 backdrop-blur hover:bg-white/20 hover:border-white/50 transition-all duration-200">
                Ver Cursos
              </Button>
            </Link>
          </div>

          {/* Indicadores de confianza */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-slate-300 text-sm">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              <span>Cursos 100% prácticos</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span>4.9/5 en valoraciones</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-cyan-400" />
              <span>IA aplicada a negocios reales</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa Mundial de Estudiantes */}
      <StudentWorldMap />

      {/* Sección del Instructor */}
      <InstructorSection />

      {/* Pilares (Esferas Premium) */}
      <section className="bg-muted/10 py-24 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground">
              Elige tu <span className="text-primary italic">Ruta de Aprendizaje</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Tenemos dos caminos diseñados a medida para ti. Selecciona tu perfil y descubre los cursos exactos que impulsarán tu carrera.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Esfera 1: Emprendedor / Marketing */}
            <Link to="/courses?category=marketing" className="block relative group overflow-hidden rounded-[2rem] p-8 border-2 border-border/60 bg-card hover:border-primary/40 hover:shadow-[0_20px_50px_-12px_rgba(var(--primary),0.3)] hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 shadow-inner ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-1">Marketing y Negocios</h3>
              <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Crecimiento y Ventas con IA</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Aprende a inyectar Inteligencia Artificial en el ADN de tu marca. Ya sea que estés lanzando tu primera idea o liderando una empresa con años en el mercado; automatiza procesos, crea campañas irresistibles y cierra más ventas.
              </p>
              <div className="mt-6 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                Explorar ruta <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            {/* Esfera 2: Profesional / IA */}
            <Link to="/courses?category=ia" className="block relative group overflow-hidden rounded-[2rem] p-8 border-2 border-border/60 bg-card hover:border-primary/40 hover:shadow-[0_20px_50px_-12px_rgba(var(--primary),0.3)] hover:-translate-y-1 transition-all duration-300">
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-inner ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300">
                <BrainCircuit className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-1">Productividad y Dominio IA</h3>
              <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Para profesionales de toda área</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Multiplica por diez tu eficiencia diaria. Sin importar tu profesión previa, aprende a delegar tareas repetitivas a la IA, acelerar tu aprendizaje y destacar enormemente en tu trabajo usando agentes y automatizaciones.
              </p>
              <div className="mt-6 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                Explorar ruta <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Cursos Destacados */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-foreground">Nuestros Programas Insignia</h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">Los entrenamientos prácticos que están acelerando los resultados de nuestra comunidad.</p>

          {isLoading ? (
            <div className="flex justify-center items-center py-10">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {featuredCourses.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          )}

          <div className="text-center mt-10">
            <Link to="/courses"><Button variant="outline" size="lg">Ver todos los cursos <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Lo Que Dicen Nuestros Estudiantes</h2>
        <p className="text-center text-muted-foreground mb-12">Historias reales de transformación profesional</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-sm mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold overflow-hidden border border-primary/20">
                  <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random`} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-muted/50 py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-foreground">Elige Tu Forma de Aprender</h2>
            <p className="text-muted-foreground text-lg mb-8">Sabemos que cada estudiante es único. Por eso, en David Ames Academy tú tienes el control.</p>
            
            <div className="grid sm:grid-cols-2 gap-6 text-left mb-12">
              <div className="bg-card p-6 rounded-2xl border-2 border-warning/20 flex gap-4 items-start shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2">
                  <Badge className="bg-warning text-warning-foreground text-[10px] uppercase font-bold border-0">Popular</Badge>
                </div>
                <div className="bg-warning/10 p-3 rounded-xl">
                  <Star className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Membresía Completa</h3>
                  <p className="text-sm text-muted-foreground">Suscríbete mensualmente y desbloquea absolutamente TODOS los cursos de la plataforma y la comunidad VIP.</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border flex gap-4 items-start shadow-sm">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Cursos Individuales</h3>
                  <p className="text-sm text-muted-foreground">¿Solo te interesa un tema? Puedes comprar cualquier curso por separado con un solo pago y acceso de por vida.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`bg-card rounded-xl border p-6 card-hover relative ${plan.highlighted ? "border-primary shadow-lg ring-2 ring-primary/20" : "border-border"}`}>
                {plan.highlighted && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground border-0">{plan.badge}</Badge>}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <div className="mb-4"><span className="text-3xl font-extrabold">${plan.monthlyPrice}</span><span className="text-muted-foreground text-sm">/mes</span></div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`h-4 w-4 flex-shrink-0 ${f.included ? "text-success" : "text-muted-foreground/30"}`} />
                      <span className={f.included ? "" : "text-muted-foreground/50 line-through"}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/pricing">
                  <Button className={`w-full ${plan.highlighted ? "gradient-hero text-primary-foreground border-0" : "bg-secondary text-secondary-foreground hover:bg-secondary/80 font-bold border-0"}`} variant={plan.highlighted ? "default" : "secondary"}>
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
