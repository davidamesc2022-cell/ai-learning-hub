import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Star, 
  Zap, 
  Brain, 
  CheckCircle, 
  Loader2, 
  Sparkles, 
  TrendingUp, 
  Bot, 
  CheckCircle2 
} from "lucide-react";
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
  const { featuredCourses, courses, isLoading } = useCourses();

  const marketingCount = courses.filter(c => c.category === "marketing" || c.title.toLowerCase().includes("método 4c") || c.title.toLowerCase().includes("metodo 4c")).length || 2;
  const iaCount = courses.filter(c => c.category === "ia" && !c.title.toLowerCase().includes("método 4c") && !c.title.toLowerCase().includes("metodo 4c")).length || 3;

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

      {/* Pilares de Especialización (Ecosistemas de Alto Impacto) */}
      <section className="bg-muted/10 py-24 border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 bg-primary/10 text-primary font-semibold">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" />
              Rutas de Especialización
            </Badge>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-foreground">
              Elige tu <span className="text-primary italic">Ruta de Especialización</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Diseñadas para generar una transformación tangible en tu capacidad profesional y empresarial. Selecciona el pilar estratégico donde deseas construir tu ventaja competitiva.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pilar 1: Marketing Digital & Crecimiento con IA */}
            <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                  alt="Marketing Digital & Crecimiento con IA"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/90 text-white backdrop-blur-md shadow-md">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Especialización Estratégica · Crecimiento & Ventas
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-background/80 text-foreground backdrop-blur-md border border-border">
                    {marketingCount} Cursos
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      Marketing Digital & Ecosistemas de Ventas con IA
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Convierte la Inteligencia Artificial en el motor de atracción y facturación de tu negocio. Pasa de esfuerzos manuales y resultados impredecibles a construir infraestructuras comerciales automatizadas que captan, nutren y convierten prospectos en clientes de forma predecible y continua.
                  </p>

                  <ul className="space-y-3 mb-8 text-sm text-foreground/90">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong>Máquinas de Prospección & Adquisición:</strong>
                        <span className="text-muted-foreground block text-xs mt-0.5">Diseña sistemas que atraen tráfico cualificado y filtran oportunidades comerciales 24/7.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong>Psicología Comercial & Hiperpersonalización:</strong>
                        <span className="text-muted-foreground block text-xs mt-0.5">Usa la IA para decodificar a tu cliente ideal, crear ofertas irresistibles y multiplicar la conversión.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong>Metodologías Ágiles de Venta (Método 4C):</strong>
                        <span className="text-muted-foreground block text-xs mt-0.5">Marcos probados que aceleran el ciclo comercial y optimizan cada punto de contacto.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <strong>Escalabilidad de Negocio sin Fricción:</strong>
                        <span className="text-muted-foreground block text-xs mt-0.5">Expande tus ingresos sin necesidad de multiplicar tus horas de trabajo ni tu estructura operativa.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <Link to="/courses?pillar=marketing" className="w-full">
                  <Button size="lg" className="w-full font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Explorar la Especialización en Marketing
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Pilar 2: Inteligencia Artificial Aplicada & Sistemas Autónomos */}
            <div className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" 
                  alt="Inteligencia Artificial Aplicada & Sistemas Autónomos"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/90 text-white backdrop-blur-md shadow-md">
                    <Bot className="w-3.5 h-3.5" />
                    Especialización Tecnológica · Agentes & Automatización
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-background/80 text-foreground backdrop-blur-md border border-border">
                    {iaCount} Cursos
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
                      <Bot className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      Inteligencia Artificial Aplicada & Sistemas Autónomos
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    Evoluciona de ser un usuario básico a liderar la era cognitiva. Aprende a orquestar ecosistemas de agentes autónomos, integrar flujos de automatización complejos y crear soluciones digitales a medida que multiplican radicalmente tu capacidad de ejecución y resuelven desafíos de alto impacto.
                  </p>

                  <ul className="space-y-3 mb-8 text-sm text-foreground/90">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>De Asistentes a Agentes Autónomos:</strong>
                        <span className="text-muted-foreground block text-xs mt-0.5">Deja de chatear y aprende a delegar objetivos completos a agentes que coordinan herramientas 24/7.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Automatización de Procesos Críticos:</strong>
                        <span className="text-muted-foreground block text-xs mt-0.5">Diseña arquitecturas operativas donde la IA, tus datos y tus plataformas operen sincronizadas sin fricción.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Creación de Soluciones Propias (Vibe Coding):</strong>
                        <span className="text-muted-foreground block text-xs mt-0.5">Desarrolla aplicaciones web, herramientas internas y asistentes sin saber programar.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 flex-shrink-0" />
                      <div>
                        <strong>Criterio Técnico & Supervisión Estratégica:</strong>
                        <span className="text-muted-foreground block text-xs mt-0.5">Desarrolla la visión para evaluar qué modelo, flujo o arquitectura implementar ante cualquier reto.</span>
                      </div>
                    </li>
                  </ul>
                </div>

                <Link to="/courses?pillar=ia" className="w-full">
                  <Button size="lg" className="w-full font-bold group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    Explorar la Especialización en IA
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
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
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold overflow-hidden border border-primary/20 shrink-0">
                  <img src={t.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=random`} alt={t.name} className="w-full h-full object-cover" />
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
