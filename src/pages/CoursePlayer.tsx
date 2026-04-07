import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Play, Pause, Volume2, Maximize, CheckCircle, ChevronLeft, ChevronRight, Lock, FileText, MessageSquare, StickyNote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/layout/Navbar";
import { useCourses } from "@/hooks/useCourses";
import { useAuth } from "@/hooks/useAuth";
import VideoPlayer from "@/components/courses/VideoPlayer";

export default function CoursePlayer() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const { getCourseById, isLoading } = useCourses();
  const { getCompletedLessons, completeLesson } = useAuth();
  
  const course = courseId ? getCourseById(courseId) : undefined;
  
  const [completed, setCompleted] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  const allLessonIdsStr = course?.modules.flatMap(m => m.lessons.map(l => l.id)).join(',');

  useEffect(() => {
    if (!allLessonIdsStr) return;
    const lessonIds = allLessonIdsStr.split(',');
    getCompletedLessons(lessonIds).then(completedIds => {
        setCompleted(completedIds);
    });
  }, [allLessonIdsStr, getCompletedLessons]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
          <p className="text-muted-foreground">Cargando clase...</p>
        </div>
      </div>
    );
  }

  if (!course || !course.modules || course.modules.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-20 text-center text-muted-foreground">
          No se pudieron cargar las lecciones de este curso.
        </div>
      </div>
    );
  }

  const allLessons = course.modules.flatMap((m) => m.lessons || []);
  const currentIdx = allLessons.findIndex((l) => l.id === lessonId);
  const currentLesson = currentIdx !== -1 ? allLessons[currentIdx] : allLessons[0];

  const progress = allLessons.length > 0 ? Math.round((completed.length / allLessons.length) * 100) : 0;

  const prevLesson = currentIdx > 0 ? allLessons[currentIdx - 1] : null;
  const nextLesson = currentIdx < allLessons.length - 1 ? allLessons[currentIdx + 1] : null;

  const handleVideoEnded = async () => {
    if (course && !completed.includes(currentLesson.id) && !isUpdating) {
      setIsUpdating(true);
      const success = await completeLesson(course.id, currentLesson.id, completed, allLessons.length);
      if (success) {
        setCompleted([...completed, currentLesson.id]);
        if (nextLesson) {
          navigate(`/learn/${course.id}/${nextLesson.id}`);
        }
      }
      setIsUpdating(false);
    } else if (completed.includes(currentLesson.id) && nextLesson) {
      // Si ya estaba completada, simplemente avanzar al terminar el video
      navigate(`/learn/${course.id}/${nextLesson.id}`);
    }
  };

  const handleMarkComplete = async () => {
    if (course && !completed.includes(currentLesson.id) && !isUpdating) {
      setIsUpdating(true);
      const success = await completeLesson(course.id, currentLesson.id, completed, allLessons.length);
      if (success) {
        setCompleted([...completed, currentLesson.id]);
        if (nextLesson) {
          navigate(`/learn/${course.id}/${nextLesson.id}`);
        }
      }
      setIsUpdating(false);
    } else if (completed.includes(currentLesson.id) && nextLesson) {
      navigate(`/learn/${course.id}/${nextLesson.id}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex flex-col lg:flex-row">
        {/* Main */}
        <div className="flex-1 p-4 lg:p-6 lg:max-w-4xl mx-auto w-full">
          {/* Video Player */}
          <div className="mb-6">
            <VideoPlayer
              url={currentLesson.videoUrl || ""}
              title={currentLesson.title}
              onEnded={handleVideoEnded}
            />
          </div>

          <h2 className="text-xl font-bold mb-4">{currentLesson.title}</h2>

          <Tabs defaultValue="descripcion">
            <TabsList className="bg-muted/50 mb-4">
              <TabsTrigger value="descripcion"><FileText className="h-3.5 w-3.5 mr-1.5" />Descripción</TabsTrigger>
              <TabsTrigger value="recursos"><FileText className="h-3.5 w-3.5 mr-1.5" />Recursos</TabsTrigger>
              <TabsTrigger value="notas"><StickyNote className="h-3.5 w-3.5 mr-1.5" />Notas</TabsTrigger>
              <TabsTrigger value="comentarios"><MessageSquare className="h-3.5 w-3.5 mr-1.5" />Comentarios</TabsTrigger>
            </TabsList>
            <TabsContent value="descripcion">
              <p className="text-sm text-muted-foreground">En esta lección aprenderás los conceptos fundamentales necesarios para aplicar IA en tu trabajo diario. Cubriremos las bases teóricas y veremos ejemplos prácticos que podrás replicar inmediatamente.</p>
            </TabsContent>
            <TabsContent value="recursos">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /><span className="text-sm">Guía de referencia.pdf</span></div>
                  <Button size="sm" variant="outline">Descargar</Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /><span className="text-sm">Template de prompts.xlsx</span></div>
                  <Button size="sm" variant="outline">Descargar</Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="notas">
              <Textarea placeholder="Escribe tus notas aquí..." value={notes} onChange={(e) => setNotes(e.target.value)} className="min-h-[200px]" />
              <Button size="sm" className="mt-3">Guardar notas</Button>
            </TabsContent>
            <TabsContent value="comentarios">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">CR</div>
                  <div>
                    <p className="text-sm font-medium">Carlos Ramírez <span className="text-xs text-muted-foreground ml-2">Hace 3 días</span></p>
                    <p className="text-sm text-muted-foreground">Excelente explicación, muy claro todo. ¿Podrías profundizar más en el tema de automatización?</p>
                  </div>
                </div>
                <Textarea placeholder="Escribe un comentario..." className="min-h-[80px]" />
                <Button size="sm">Comentar</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-80 border-l border-border bg-card p-4 lg:h-[calc(100vh-4rem)] lg:overflow-auto lg:sticky lg:top-16">
          <h3 className="font-bold mb-3">Contenido del Curso</h3>
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-muted-foreground">{progress}% completado</span>
              <span className="text-muted-foreground">{completed.length}/{allLessons.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Accordion type="multiple" defaultValue={course.modules.map((m) => m.id)} className="space-y-2">
            {course.modules.map((mod) => (
              <AccordionItem key={mod.id} value={mod.id} className="border-0">
                <AccordionTrigger className="text-xs font-semibold hover:no-underline py-2">{mod.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-1">
                    {mod.lessons.map((lesson) => {
                      const isActive = lesson.id === currentLesson.id;
                      const isDone = completed.includes(lesson.id);
                      return (
                        <Link
                          key={lesson.id}
                          to={`/learn/${course.id}/${lesson.id}`}
                          className={`flex items-center gap-2 py-2 px-2 rounded-lg text-xs transition-colors ${isActive ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50"}`}
                        >
                          {isDone ? <CheckCircle className="h-3.5 w-3.5 text-success flex-shrink-0" /> : lesson.isFree ? <Play className="h-3.5 w-3.5 flex-shrink-0" /> : <Lock className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0" />}
                          <span className="flex-1 truncate">{lesson.title}</span>
                          <span className="text-muted-foreground">{lesson.duration}</span>
                        </Link>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-4 space-y-3">
            <Button
              onClick={handleMarkComplete}
              className="w-full gradient-hero text-primary-foreground border-0"
              disabled={completed.includes(currentLesson.id) || isUpdating}
            >
              {completed.includes(currentLesson.id) ? "✓ Completada" : (isUpdating ? "Guardando..." : "Marcar como Completada")}
            </Button>
            <div className="flex gap-2">
              {prevLesson && <Link to={`/learn/${course.id}/${prevLesson.id}`} className="flex-1"><Button variant="outline" className="w-full text-xs"><ChevronLeft className="h-3 w-3 mr-1" />Anterior</Button></Link>}
              {nextLesson && <Link to={`/learn/${course.id}/${nextLesson.id}`} className="flex-1"><Button variant="outline" className="w-full text-xs">Siguiente<ChevronRight className="h-3 w-3 ml-1" /></Button></Link>}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
