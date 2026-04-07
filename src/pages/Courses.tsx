import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/CourseCard";
import { useCourses } from "@/hooks/useCourses";

const CATEGORIES = ["Marketing Digital con IA", "IA para Profesionales"];
const LEVELS = ["Principiante", "Intermedio", "Avanzado"];
const PRICES = ["Gratis", "Premium"];

export default function Courses() {
  const {
    filteredCourses,
    filters,
    updateFilter,
    resetFilters,
    hasActiveFilters,
    isLoading,
    error
  } = useCourses();

  const [showFilters, setShowFilters] = useState(false);
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam) {
      updateFilter('category', categoryParam as any);
    } else {
      resetFilters();
    }
  }, [categoryParam]);

  const toggle = (arr: string[] | string, val: string, key: 'category' | 'level' | 'price' | 'search') => {
    const isCurrent = arr === val;
    updateFilter(key, (isCurrent ? "all" : val) as any);
  };

  const FilterSection = ({ title, items, selectedValue, filterKey }: any) => (
    <div className="mb-6">
      <h4 className="font-semibold text-sm mb-3">{title}</h4>
      <div className="space-y-2">
        {items.map((item: string) => {
          const hookValue = item === 'Marketing Digital con IA' ? 'marketing' :
            item === 'IA para Profesionales' ? 'ia' :
              item === 'Gratis' ? 'free' :
                item === 'Premium' ? 'premium' : item;
          const isChecked = selectedValue === hookValue;
          return (
            <label key={item} className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
              <Checkbox checked={isChecked} onCheckedChange={() => toggle(selectedValue, hookValue, filterKey)} />
              {item}
            </label>
          )
        })}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl font-extrabold mb-3">Catálogo de Cursos</h1>
          <p className="text-muted-foreground">Explora todo nuestro contenido o usa los filtros para afinar tu búsqueda.</p>
        </div>

        {/* Buscador y Toggle Flitros Mobile */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por palabra clave..."
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
              Mostrando {filteredCourses.length} {filteredCourses.length === 1 ? 'resultado' : 'resultados'}
            </span>
          )}
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filtros */}
          <aside className={`${showFilters ? "fixed inset-0 z-40 bg-background/95 backdrop-blur-sm p-6 overflow-auto" : "hidden"} md:block md:static md:w-56 flex-shrink-0`}>
            <div className="flex items-center justify-between md:hidden mb-6">
              <h3 className="font-bold text-lg">Filtros</h3>
              <button title="Cerrar filtros" onClick={() => setShowFilters(false)} className="p-2 bg-muted rounded-full"><X className="h-5 w-5" /></button>
            </div>

            <FilterSection title="Ruta de Aprendizaje" items={CATEGORIES} selectedValue={filters.category} filterKey="category" />
            <FilterSection title="Nivel de Dificultad" items={LEVELS} selectedValue={filters.level} filterKey="level" />
            <FilterSection title="Costo" items={PRICES} selectedValue={filters.price} filterKey="price" />

            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={resetFilters} className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive">
                Limpiar todos los filtros
              </Button>
            )}
          </aside>

          {/* Grid Cursos */}
          <div className="flex-1">
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-20 bg-muted/10 rounded-2xl">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">Cargando catálogo...</p>
              </div>
            ) : error ? (
              <div className="text-center py-20 text-destructive bg-destructive/5 rounded-2xl border border-destructive/20">
                <p className="font-semibold mb-2">Hubo un error cargando los cursos</p>
                <p className="text-sm">{error}</p>
              </div>
            ) : filteredCourses.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((c) => <CourseCard key={c.id} course={c} />)}
              </div>
            ) : (
              <div className="text-center py-24 bg-muted/10 rounded-3xl border border-dashed border-border/50">
                <p className="font-extrabold text-xl mb-2">Sin resultados</p>
                <p className="text-muted-foreground text-sm">No encontramos cursos con esta combinación de filtros.</p>
                <Button variant="outline" className="mt-6" onClick={resetFilters}>Ver todo el catálogo</Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
