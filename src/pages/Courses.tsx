import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/mockData";

const CATEGORIES = ["Marketing Digital con IA", "IA para Profesionales"];
const LEVELS = ["Principiante", "Intermedio", "Avanzado"];
const PRICES = ["Gratis", "Premium"];

export default function Courses() {
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggle = (arr: string[], val: string, setter: (v: string[]) => void) => {
    setter(arr.includes(val) ? arr.filter((v) => v !== val) : [...arr, val]);
  };

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      if (search && !c.title.toLowerCase().includes(search.toLowerCase()) && !c.description.toLowerCase().includes(search.toLowerCase())) return false;
      if (selectedCategories.length && !selectedCategories.includes(c.categoryLabel)) return false;
      if (selectedLevels.length && !selectedLevels.includes(c.level)) return false;
      if (selectedPrices.length) {
        const matchFree = selectedPrices.includes("Gratis") && c.isFree;
        const matchPremium = selectedPrices.includes("Premium") && !c.isFree;
        if (!matchFree && !matchPremium) return false;
      }
      return true;
    });
  }, [search, selectedCategories, selectedLevels, selectedPrices]);

  const clearFilters = () => { setSelectedCategories([]); setSelectedLevels([]); setSelectedPrices([]); setSearch(""); };
  const hasFilters = selectedCategories.length || selectedLevels.length || selectedPrices.length || search;

  const FilterSection = ({ title, items, selected, setter }: { title: string; items: string[]; selected: string[]; setter: (v: string[]) => void }) => (
    <div className="mb-6">
      <h4 className="font-semibold text-sm mb-3">{title}</h4>
      <div className="space-y-2">
        {items.map((item) => (
          <label key={item} className="flex items-center gap-2 text-sm cursor-pointer hover:text-primary transition-colors">
            <Checkbox checked={selected.includes(item)} onCheckedChange={() => toggle(selected, item, setter)} />
            {item}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Explora Nuestros Cursos</h1>
          <p className="text-muted-foreground">Mostrando {filtered.length} cursos</p>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar cursos..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
          </div>
          <Button variant="outline" className="md:hidden" onClick={() => setShowFilters(!showFilters)}>
            <SlidersHorizontal className="h-4 w-4 mr-2" /> Filtros
          </Button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className={`${showFilters ? "fixed inset-0 z-40 bg-card p-6 overflow-auto" : "hidden"} md:block md:static md:w-56 flex-shrink-0`}>
            <div className="flex items-center justify-between md:hidden mb-4">
              <h3 className="font-bold">Filtros</h3>
              <button onClick={() => setShowFilters(false)}><X className="h-5 w-5" /></button>
            </div>
            <FilterSection title="Categoría" items={CATEGORIES} selected={selectedCategories} setter={setSelectedCategories} />
            <FilterSection title="Nivel" items={LEVELS} selected={selectedLevels} setter={setSelectedLevels} />
            <FilterSection title="Precio" items={PRICES} selected={selectedPrices} setter={setSelectedPrices} />
            {hasFilters && <Button variant="ghost" size="sm" onClick={clearFilters} className="w-full">Limpiar filtros</Button>}
          </aside>

          {/* Grid */}
          <div className="flex-1">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((c) => <CourseCard key={c.id} course={c} />)}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="text-4xl mb-4">🔍</p>
                <p className="font-semibold mb-2">No se encontraron cursos</p>
                <p className="text-muted-foreground text-sm">Intenta con otros filtros o términos de búsqueda</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
