import { Link } from "react-router-dom";
import { Star, Users, Clock, Play, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import type { Course } from "@/lib/types";
import { useAuth } from "@/hooks/useAuth";

function getProgressLabel(progress: number): { text: string; color: string } {
  if (progress === 0) return { text: "Empezar ahora →", color: "text-primary" };
  if (progress < 30)  return { text: "¡Buen comienzo!", color: "text-primary" };
  if (progress < 70)  return { text: "¡Vas muy bien!", color: "text-warning" };
  if (progress < 100) return { text: "¡Casi lo logras!", color: "text-orange-400" };
  return { text: "¡Completado! 🎉", color: "text-success" };
}

export default function CourseCard({ course }: { course: Course }) {
  const { user, isEnrolledIn } = useAuth();

  const isEnrolled = isEnrolledIn(course.id);
  const enrolledCourseData = user?.enrolledCourses.find(e => e.courseId === course.id);
  const isCompleted = enrolledCourseData?.completed;
  const progress = enrolledCourseData?.progress ?? 0;
  const { text: progressLabel, color: progressColor } = getProgressLabel(progress);

  return (
    <Link to={`/courses/${course.id}`} className="group">
      <div className="bg-card rounded-xl border border-border overflow-hidden card-hover-accent h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative h-44 flex items-center justify-center overflow-hidden bg-muted">
          {course.thumbnailUrl ? (
             <img src={course.thumbnailUrl} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent" />
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundSize: '10px 10px', backgroundImage: 'radial-gradient(circle at 1px 1px, currentcolor 1px, transparent 0)' }} />
              <div className="text-5xl opacity-40 z-10 transition-transform duration-500 group-hover:scale-110">
                {course.category === "marketing" ? "📊" : "🤖"}
              </div>
            </>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center pointer-events-none">
            <div className="bg-white/90 backdrop-blur rounded-full p-4 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-xl">
              <Play className="h-6 w-6 text-black fill-black" />
            </div>
          </div>

          {/* Badges top-left */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            <Badge variant="secondary" className="bg-card/90 backdrop-blur text-xs font-medium w-fit">{course.categoryLabel}</Badge>
          </div>

          {/* Badges top-right */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 items-end">
            {isCompleted ? (
              <Badge className="bg-success text-success-foreground border-0 text-xs shadow-md">COMPLETADO</Badge>
            ) : isEnrolled ? (
              <Badge className="bg-primary text-primary-foreground border-0 text-xs shadow-md">EN PROGRESO</Badge>
            ) : (
              <>
                {course.isNew && <Badge className="bg-success text-success-foreground border-0 text-xs">NUEVO</Badge>}
                {course.isPopular && <Badge className="bg-warning text-warning-foreground border-0 text-xs">POPULAR</Badge>}
              </>
            )}
          </div>

          {/* Línea de progreso superpuesta al fondo de la imagen */}
          {isEnrolled && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/30">
              <div
                className="h-full bg-primary transition-all duration-700 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline" className="text-xs">{course.level}</Badge>
          </div>
          <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">{course.title}</h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-warning text-warning" />{course.rating}</span>
            <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{course.students.toLocaleString()}</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
          </div>

          {/* Bloque de progreso detallado — solo visible para inscritos */}
          {isEnrolled && (
            <div className="mb-3 p-3 bg-muted/40 rounded-lg border border-border/60">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-semibold ${progressColor}`}>
                  {isCompleted
                    ? <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" /> {progressLabel}</span>
                    : progressLabel
                  }
                </span>
                <span className="text-xs font-bold text-foreground">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}

          <div className="flex items-center justify-between mt-auto pt-3">
            <span className="text-sm text-muted-foreground">David Ames</span>
            {course.isFree ? (
              <Badge className="bg-success/10 text-success border-success/30 font-semibold">Gratis</Badge>
            ) : (
              <span className="font-bold text-primary">${course.price}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
