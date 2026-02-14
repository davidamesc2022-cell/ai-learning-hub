import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Zap, Brain, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/CourseCard";
import { courses, testimonials } from "@/data/mockData";
import heroBg from "@/assets/hero-bg.jpg";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mes",
    badge: "Más Popular",
    features: [
      { text: "5 cursos gratuitos", included: true },
      { text: "Acceso a comunidad básica", included: true },
      { text: "Certificados digitales", included: true },
      { text: "Cursos premium", included: false },
      { text: "Webinars en vivo", included: false },
      { text: "Soporte prioritario", included: false },
    ],
    cta: "Comenzar Gratis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mes",
    badge: "Recomendado",
    features: [
      { text: "TODO lo de Free", included: true },
      { text: "Acceso a TODOS los cursos premium", included: true },
      { text: "Comunidad completa", included: true },
      { text: "Certificados verificados", included: true },
      { text: "Soporte prioritario", included: true },
      { text: "Webinars exclusivos", included: false },
    ],
    cta: "Comenzar Prueba Gratis",
    highlighted: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "/mes",
    badge: "Mejor Valor",
    features: [
      { text: "TODO lo de Pro", included: true },
      { text: "Webinars mensuales en vivo", included: true },
      { text: "2 sesiones 1-on-1 al mes", included: true },
      { text: "Acceso anticipado a nuevos cursos", included: true },
      { text: "Soporte VIP 24/7", included: true },
      { text: "Networking exclusivo", included: true },
    ],
    cta: "Comenzar Elite",
    highlighted: false,
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="AI background" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/70 to-background" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">🚀 +2,000 estudiantes ya están aprendiendo</Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-primary-foreground text-balance">
            Domina la IA y el Marketing{" "}
            <span className="gradient-hero-text">Digital del Futuro</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Aprende de David Ames, experto en IA aplicada a negocios. Cursos prácticos, comunidad activa y certificaciones que impulsan tu carrera.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/auth">
              <Button size="lg" className="gradient-hero text-primary-foreground border-0 px-8 text-base font-semibold shadow-lg hover:opacity-90 transition-opacity">
                Comienza Gratis <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button size="lg" variant="outline" className="px-8 text-base border-border bg-card/50 backdrop-blur hover:bg-card">
                Ver Cursos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4">Dos Pilares de Conocimiento</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">Elige tu camino de aprendizaje o domínalos ambos</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link to="/courses" className="group">
            <div className="bg-card rounded-2xl border border-border p-8 card-hover h-full">
              <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Zap className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Marketing Digital con IA</h3>
              <p className="text-muted-foreground mb-4">Aprende a potenciar tu marketing con las últimas herramientas de inteligencia artificial. Automatización, content marketing, email y más.</p>
              <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver cursos <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
          <Link to="/courses" className="group">
            <div className="bg-card rounded-2xl border border-border p-8 card-hover h-full">
              <div className="h-14 w-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Brain className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">IA para Profesionales</h3>
              <p className="text-muted-foreground mb-4">Domina las herramientas de IA más potentes del mercado. Prompt engineering, IA generativa, automatización y productividad.</p>
              <span className="text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver cursos <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Cursos Destacados */}
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Cursos Más Populares</h2>
          <p className="text-center text-muted-foreground mb-12">Los favoritos de nuestra comunidad</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {courses.slice(0, 3).map((c) => (
              <CourseCard key={c.id} course={c} />
            ))}
          </div>
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
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">{t.name.split(" ").map(n => n[0]).join("")}</div>
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
      <section className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Elige Tu Plan</h2>
          <p className="text-center text-muted-foreground mb-12">Comienza gratis, actualiza cuando quieras</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div key={plan.name} className={`bg-card rounded-xl border p-6 card-hover relative ${plan.highlighted ? "border-primary shadow-lg ring-2 ring-primary/20" : "border-border"}`}>
                {plan.highlighted && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground border-0">{plan.badge}</Badge>}
                <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                <div className="mb-4"><span className="text-3xl font-extrabold">{plan.price}</span><span className="text-muted-foreground text-sm">{plan.period}</span></div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2 text-sm">
                      <CheckCircle className={`h-4 w-4 flex-shrink-0 ${f.included ? "text-success" : "text-muted-foreground/30"}`} />
                      <span className={f.included ? "" : "text-muted-foreground/50 line-through"}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/pricing">
                  <Button className={`w-full ${plan.highlighted ? "gradient-hero text-primary-foreground border-0" : ""}`} variant={plan.highlighted ? "default" : "outline"}>
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
