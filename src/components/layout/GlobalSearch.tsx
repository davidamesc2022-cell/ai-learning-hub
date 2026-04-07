import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, BookOpen, Users, Trophy } from "lucide-react";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import { useCourses } from "@/hooks/useCourses";

export function GlobalSearch() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { courses } = useCourses();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-slate-400 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:text-slate-200 rounded-lg transition-colors w-64 justify-between group shadow-sm"
            >
                <div className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    <span>Buscar cursos...</span>
                </div>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-slate-600 bg-slate-800 px-1.5 font-mono text-[10px] font-medium opacity-100 group-hover:bg-slate-600 group-hover:text-white">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            {/* Botón móvil */}
            <button
                className="md:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                onClick={() => setOpen(true)}
            >
                <Search className="h-5 w-5" />
            </button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No se encontraron resultados.</CommandEmpty>

                    <CommandGroup heading="Cursos">
                        {courses.map((course) => (
                            <CommandItem
                                key={course.id}
                                onSelect={() => runCommand(() => navigate(`/courses/${course.id}`))}
                                className="flex items-center gap-2"
                            >
                                <BookOpen className="h-4 w-4 text-primary" />
                                <div className="flex flex-col">
                                    <span>{course.title}</span>
                                    <span className="text-xs text-muted-foreground">{course.categoryLabel}</span>
                                </div>
                            </CommandItem>
                        ))}
                    </CommandGroup>

                    <CommandSeparator />

                    <CommandGroup heading="Secciones">
                        <CommandItem onSelect={() => runCommand(() => navigate("/dashboard"))}>
                            <Users className="mr-2 h-4 w-4" />
                            <span>Dashboard</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => navigate("/community"))}>
                            <Users className="mr-2 h-4 w-4" />
                            <span>Comunidad</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => navigate("/leaderboard"))}>
                            <Trophy className="mr-2 h-4 w-4" />
                            <span>Leaderboard</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
