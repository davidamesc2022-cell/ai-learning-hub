import { useState, useEffect, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  Loader2, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Bot, 
  BookOpen, 
  CheckCircle2, 
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/CourseCard";
import { useCourses } from "@/hooks/useCourses";
import type { Course } from "@/lib/types";

const LEVELS = ["Principiante", "Intermedio", "Avanzado"];
const PRICES = ["Gratis", "Premium"];

// Helper para clasificar curso en pilar
function getPillarForCourse(course: Course): "marketing" | "ia" {
  if (course.category === "marketing" || course.title.toLowerCase().includes("método 4c") || course.title.toLowerCase().includes("metodo 4c")) {
    return "marketing";
  }
  return "ia";
}

export default function Courses() {
  const {
    courses,
    filters,
    updateFilter,
    resetFilters,
    hasActiveFilters,
    isLoading,
    error
  } = useCourses();

  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);

  // Pilar activo: null (pantalla de 2 portadas), "marketing", "ia" o "all"
  const pillarParam = searchParams.get("pillar") || searchParams.get("category");
  const selectedPillar = (pillarParam === "marketing" || pillarParam === "ia" || pillarParam === "all") 
    ? pillarParam 
    : null;

  // Contador de cursos por pilar
  const marketingCourses = useMemo(() => courses.filter(c => getPillarForCourse(c) === "marketing"), [courses]);
  const iaCourses = useMemo(() => courses.filter(c => getPillarForCourse(c) === "ia"), [courses]);

  // Manejar selección de pilar
  const handleSelectPillar = (pillar: "marketing" | "ia" | "all" | null) => {
    if (!pillar) {
      setSearchParams({});
    } else {
      setSearchParams({ pillar });
    }
    resetFilters();
  };

  // Filtrado de cursos según el pilar seleccionado + filtros activos
  const displayedCourses = useMemo(() => {
    return courses.filter((course) => {
      // Filtro por Pilar
      if (selectedPillar === "marketing" && getPillarForCourse(course) !== "marketing") {
        return false;
      }
      if (selectedPillar === "ia" && getPillarForCourse(course) !== "ia") {
        return false;
      }

      // Filtro por búsqueda
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesDesc = course.description.toLowerCase().includes(query);
        const matchesCategory = course.categoryLabel?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesCategory) return false;
      }

      // Filtro por Nivel
      if (filters.level !== "all" && course.level !== filters.level) {
        return false;
      }

      // Filtro por Precio
      if (filters.price === "free" && !course.isFree) return false;
      if (filters.price === "premium" && course.isFree) return false;

      return true;
    });
  }, [courses, selectedPillar, filters]);

  const toggle = (arr: string[] | string, val: string, key: 'level' | 'price' | 'search') => {
    const isCurrent = arr === val;
    updateFilter(key, (isCurrent ? "all" : val) as any);
  };

  const FilterSection = ({ title, items, selectedValue, filterKey }: any) => (
    <div className="mb-6">
      <h4 className="font-semibold text-sm mb-3">{title}</h4>
      <div className="space-y-2">
        {items.map((item: string) => {
          const hookValue = item === 'Gratis' ? 'free' : item === 'Premium' ? 'premium' : item;
          const isChecked = selectedValue === hookValue;
          return (
            <label key={item} className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
              <Checkbox checked={isChecked} onCheckedChange={() => toggle(selectedValue, hookValue, filterKey)} />
              {item}
            </label>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* ============================================================ */}
        {/* CASO 1: VISTA INICIAL CON LAS 2 PORTADAS / PILARES */}
        {/* ============================================================ */}
        {selectedPillar === null ? (
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 bg-primary/10 text-primary font-semibold">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 inline" />
                Rutas de Especialización
              </Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                ¿Qué deseas dominar hoy?
              </h1>
              <p className="text-muted-foreground text-lg">
                Elige tu pilar formativo para acceder a los cursos y entrenamientos especializados.
              </p>
            </div>

            {/* Grid de los 2 Pilares Principales */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* PILAR 1: MARKETING DIGITAL */}
              <div 
                onClick={() => handleSelectPillar("marketing")}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer flex flex-col"
              >
                {/* Portada con Imagen y Efecto Gradiente */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                    alt="Pilar Marketing Digital"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Badge en portada */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/90 text-white backdrop-blur-md shadow-md">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Especialización Estratégica · Crecimiento & Ventas
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-background/80 text-foreground backdrop-blur-md border border-border">
                      {marketingCourses.length} {marketingCourses.length === 1 ? "Curso" : "Cursos"}
                    </span>
                  </div>
                </div>

                {/* Contenido del Pilar */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        Marketing Digital & Ecosistemas de Ventas con IA
                      </h2>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Convierte la Inteligencia Artificial en el motor de atracción y facturación de tu negocio. Pasa de esfuerzos manuales y resultados impredecibles a construir infraestructuras comerciales automatizadas que captan, nutren y convierten prospectos en clientes de forma predecible y continua.
                    </p>

                    {/* Puntos Clave */}
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

                  {/* Botón CTA */}
                  <Button size="lg" className="w-full font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Explorar la Especialización en Marketing
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              {/* PILAR 2: INTELIGENCIA ARTIFICIAL */}
              <div 
                onClick={() => handleSelectPillar("ia")}
                className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer flex flex-col"
              >
                {/* Portada con Imagen y Efecto Gradiente */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800" 
                    alt="Pilar Inteligencia Artificial"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                  
                  {/* Badge en portada */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/90 text-white backdrop-blur-md shadow-md">
                      <Bot className="w-3.5 h-3.5" />
                      Especialización Tecnológica · Agentes & Automatización
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-background/80 text-foreground backdrop-blur-md border border-border">
                      {iaCourses.length} {iaCourses.length === 1 ? "Curso" : "Cursos"}
                    </span>
                  </div>
                </div>

                {/* Contenido del Pilar */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-500">
                        <Bot className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        Inteligencia Artificial Aplicada & Sistemas Autónomos
                      </h2>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      Evoluciona de ser un usuario básico a liderar la era cognitiva. Aprende a orquestar ecosistemas de agentes autónomos, integrar flujos de automatización complejos y crear soluciones digitales a medida que multiplican radicalmente tu capacidad de ejecución y resuelven desafíos de alto impacto.
                    </p>

                    {/* Puntos Clave */}
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

                  {/* Botón CTA */}
                  <Button size="lg" className="w-full font-bold group-hover:bg-cyan-500 group-hover:text-white transition-all">
                    Explorar la Especialización en IA
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Enlace alternativo para ver todo junto */}
            <div className="text-center pt-2">
              <button 
                onClick={() => handleSelectPillar("all")}
                className="text-sm text-muted-foreground hover:text-foreground font-medium underline underline-offset-4 transition-colors"
              >
                O si prefieres, ver todos los cursos en una sola lista ({courses.length} cursos)
              </button>
            </div>
          </div>
        ) : (
          /* ============================================================ */
          /* CASO 2: VISTA DETALLADA DEL PILAR SELECCIONADO */
          /* ============================================================ */
          <div>
            {/* Barra de Navegación entre Pilares */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-border">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => handleSelectPillar(null)}
                className="w-fit"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a los 2 Pilares
              </Button>

              {/* Selector tipo Pestañas */}
              <div className="inline-flex p-1 bg-muted rounded-xl border border-border w-fit">
                <button
                  onClick={() => handleSelectPillar("marketing")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                    selectedPillar === "marketing" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  Marketing Digital ({marketingCourses.length})
                </button>

                <button
                  onClick={() => handleSelectPillar("ia")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                    selectedPillar === "ia" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Bot className="w-4 h-4 text-cyan-500" />
                  Inteligencia Artificial ({iaCourses.length})
                </button>

                <button
                  onClick={() => handleSelectPillar("all")}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${
                    selectedPillar === "all" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  Todos ({courses.length})
                </button>
              </div>
            </div>

            {/* Cabecera del Pilar Activo */}
            <div className="mb-8">
              <h1 className="text-3xl font-extrabold mb-2">
                {selectedPillar === "marketing" 
                  ? "Especialización en Marketing Digital & Ecosistemas de Ventas con IA" 
                  : selectedPillar === "ia" 
                  ? "Especialización en Inteligencia Artificial Aplicada & Sistemas Autónomos" 
                  : "Todos los Cursos de la Academia"}
              </h1>
              <p className="text-muted-foreground">
                {selectedPillar === "marketing"
                  ? "Infraestructuras comerciales, prospección automatizada y metodologías ágiles de monetización potenciadas por Inteligencia Artificial."
                  : selectedPillar === "ia"
                  ? "Desde la comprensión estratégica de modelos hasta la creación de agentes autónomos, flujos de automatización y desarrollo con IA (Vibe Coding)."
                  : "Explora la totalidad de contenidos y programas especializados disponibles en David Ames Academy."}
              </p>
            </div>

            {/* Buscador y Toggle Flitros Mobile */}
            <div className="flex items-center gap-4 mb-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar en este pilar..."
                  value={filters.search}
                  onChange={(e) => updateFilter('search', e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
                <SlidersHorizontal className="h-4 w-4 mr-2" /> Filtros
              </Button>
              {!isLoading && !error && (
                <span className="hidden md:inline-block ml-auto text-sm text-muted-foreground font-medium">
                  Mostrando {displayedCourses.length} {displayedCourses.length === 1 ? 'resultado' : 'resultados'}
                </span>
              )}
            </div>

            <div className="flex gap-8">
              {/* Sidebar Filtros */}
              <aside className={`${showFilters ? "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm p-6 overflow-auto" : "hidden"} md:block md:static md:w-56 flex-shrink-0`}>
                <div className="flex items-center justify-between md:hidden mb-6">
                  <h3 className="font-bold text-lg">Filtros</h3>
                  <button title="Cerrar filtros" onClick={() => setShowFilters(false)} className="p-2 bg-muted rounded-full">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <FilterSection title="Nivel de Dificultad" items={LEVELS} selectedValue={filters.level} filterKey="level" />
                <FilterSection title="Costo" items={PRICES} selectedValue={filters.price} filterKey="price" />

                {hasActiveFilters && (
                  <Button variant="ghost" size="sm" onClick={resetFilters} className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive">
                    Limpiar filtros
                  </Button>
                )}
              </aside>

              {/* Grid Cursos */}
              <div className="flex-1">
                {isLoading ? (
                  <div className="flex flex-col items-center justify-center py-20 bg-muted/10 rounded-2xl">
                    <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                    <p className="text-muted-foreground">Cargando cursos...</p>
                  </div>
                ) : error ? (
                  <div className="text-center py-20 text-destructive bg-destructive/5 rounded-2xl border border-destructive/20">
                    <p className="font-semibold mb-2">Hubo un error cargando los cursos</p>
                    <p className="text-sm">{error}</p>
                  </div>
                ) : displayedCourses.length > 0 ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedCourses.map((c) => <CourseCard key={c.id} course={c} />)}
                  </div>
                ) : (
                  <div className="text-center py-24 bg-muted/10 rounded-3xl border border-dashed border-border/50">
                    <p className="font-extrabold text-xl mb-2">Sin resultados en este pilar</p>
                    <p className="text-muted-foreground text-sm">No encontramos cursos con los filtros seleccionados.</p>
                    <Button variant="outline" className="mt-6" onClick={resetFilters}>Restablecer filtros</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
