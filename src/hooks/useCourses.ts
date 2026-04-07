import { useState, useMemo, useEffect } from "react";
import { supabase, publicSupabase } from "@/lib/supabase";
import type { Course, CourseFilters } from "@/lib/types";

// ─────────────────────────────────────────────────────────────
// useCourses — Hook centralizado conectado a Supabase
// ─────────────────────────────────────────────────────────────

const DEFAULT_FILTERS: CourseFilters = {
    category: "all",
    level: "all",
    price: "all",
    search: "",
};

export function useCourses(initialFilters?: Partial<CourseFilters>) {
    const [courses, setCourses] = useState<Course[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [filters, setFilters] = useState<CourseFilters>({
        ...DEFAULT_FILTERS,
        ...initialFilters,
    });

    useEffect(() => {
        const fetchCourses = async () => {
            setIsLoading(true);
            try {
                let data, error;
                let attempts = 0;
                
                // Reintento automático para manejar errores de bloquedo de WebLocks (Extensiones/Multi-tabs)
                while (attempts < 3) {
                    const res = await publicSupabase
                        .from('courses')
                        .select('*, modules(*, lessons(*))');
                    
                    data = res.data;
                    error = res.error;
                    
                    if (error && (error.message.includes('lock') || error.message.includes('AbortError') || error.message.includes('bloqueo'))) {
                        attempts++;
                        console.warn(`Reintentando carga de Supabase (Intento ${attempts})...`);
                        await new Promise(resolve => setTimeout(resolve, 800)); // Esperar casi 1 seg antes de reintentar
                        continue;
                    }
                    break;
                }

                if (error) throw error;

                // Mapear campos de snake_case (DB) a camelCase (Frontend Interface)
                const formattedCourses: Course[] = (data || []).map(row => ({
                    id: row.id,
                    title: row.title,
                    description: row.description,
                    longDescription: row.long_description,
                    category: row.category,
                    categoryLabel: row.category_label,
                    level: row.level,
                    price: Number(row.price),
                    isFree: row.is_free,
                    rating: Number(row.rating),
                    students: row.students,
                    instructor: row.instructor,
                    duration: row.duration,
                    lessonsCount: row.lessons_count,
                    thumbnail: row.thumbnail,
                    isNew: row.is_new,
                    isPopular: row.is_popular,
                    whatYouLearn: row.what_you_learn || [],
                    requirements: row.requirements || [],
                    forWho: row.for_who || [],
                    updatedAt: 'Reciente',
                    modules: (row.modules || [])
                        .sort((a: any, b: any) => (a.order_index || 0) - (b.order_index || 0))
                        .map((m: any) => ({
                            id: m.id,
                            title: m.title,
                            lessons: (m.lessons || [])
                                .sort((a: any, b: any) => (a.order_index || 0) - (b.order_index || 0))
                                .map((l: any) => ({
                                    id: l.id,
                                    title: l.title,
                                    duration: l.duration,
                                    isFree: l.is_free,
                                    videoUrl: l.video_url
                                }))
                        }))
                }));

                setCourses(formattedCourses);
            } catch (err: any) {
                console.error("Error al cargar cursos:", err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCourses();
    }, []);

    // ── Filtrado con memoización ───────────────────────────────
    const filteredCourses = useMemo<Course[]>(() => {
        return courses.filter((course) => {
            if (filters.search) {
                const query = filters.search.toLowerCase();
                const matchesTitle = course.title.toLowerCase().includes(query);
                const matchesDesc = course.description.toLowerCase().includes(query);
                const matchesCategory = course.categoryLabel.toLowerCase().includes(query);
                if (!matchesTitle && !matchesDesc && !matchesCategory) return false;
            }

            if (filters.category !== "all" && course.category !== filters.category) {
                return false;
            }

            if (filters.level !== "all") {
                const levelMap: Record<string, string> = {
                    Principiante: "Principiante",
                    Intermedio: "Intermedio",
                    Avanzado: "Avanzado",
                };
                if (course.level !== levelMap[filters.level]) return false;
            }

            if (filters.price === "free" && !course.isFree) return false;
            if (filters.price === "premium" && course.isFree) return false;

            return true;
        });
    }, [courses, filters]);

    // ── Cursos destacados (para Home) ─────────────────────────
    const featuredCourses = useMemo<Course[]>(() => {
        return courses.filter((c) => c.isPopular || c.isNew).slice(0, 3);
    }, [courses]);

    // ── Helpers de filtros ────────────────────────────────────
    const updateFilter = <K extends keyof CourseFilters>(key: K, value: CourseFilters[K]) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const resetFilters = () => setFilters(DEFAULT_FILTERS);

    const hasActiveFilters =
        filters.category !== "all" ||
        filters.level !== "all" ||
        filters.price !== "all" ||
        filters.search !== "";

    // ── Helpers de búsqueda ───────────────────────────────────
    const getCourseById = (id: string): Course | undefined => {
        return courses.find((c) => c.id === id);
    };

    const getRelatedCourses = (courseId: string, limit = 3): Course[] => {
        const course = getCourseById(courseId);
        if (!course) return [];
        return courses
            .filter((c) => c.id !== courseId && c.category === course.category)
            .slice(0, limit);
    };

    return {
        courses,
        filteredCourses,
        featuredCourses,
        totalResults: filteredCourses.length,
        isLoading,
        error,
        filters,
        updateFilter,
        resetFilters,
        hasActiveFilters,
        getCourseById,
        getRelatedCourses,
    };
}
