import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CheckCircle, Play, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCourses } from "@/hooks/useCourses";
import { useAuth } from "@/hooks/useAuth";
import confetti from "canvas-confetti";

export default function ThankYou() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { getCourseById, isLoading } = useCourses();
  const { user, isEnrolledIn } = useAuth();
  
  const course = courseId ? getCourseById(courseId) : undefined;

  useEffect(() => {
    // Si no está cargando y no hay curso, o el usuario no está inscrito, redirigir al inicio por seguridad
    if (!isLoading && (!course || (user && !isEnrolledIn(course.id)))) {
       navigate('/');
       return;
    }

    // Celebración visual
    if (course && user && isEnrolledIn(course.id)) {
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#3b82f6', '#10b981', '#f59e0b']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#3b82f6', '#10b981', '#f59e0b']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
        };
        frame();
    }
  }, [course, isLoading, navigate, user, isEnrolledIn, courseId]);

  if (!course) return null;

  // Intentar obtener la primera lección para el botón "Ingresar al curso"
  const firstLessonId = course.modules && course.modules.length > 0 && course.modules[0].lessons && course.modules[0].lessons.length > 0
    ? course.modules[0].lessons[0].id
    : undefined;

  const playerLink = firstLessonId ? `/learn/${course.id}/${firstLessonId}` : `/courses/${course.id}`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-16 md:py-24 flex flex-col items-center justify-center text-center">
        <div className="bg-success/10 text-success p-4 rounded-full mb-6">
          <CheckCircle className="h-16 w-16" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">¡Compra Exitosa!</h1>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl">
          Gracias por confiar en nosotros, <span className="font-semibold text-foreground">{user?.name?.split(' ')[0]}</span>. Tu acceso al curso ya ha sido habilitado de por vida.
        </p>
        
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-lg w-full mb-10 shadow-lg shadow-primary/5">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
               <span className="text-4xl">
                  {course.category === "marketing" ? "📊" : "🤖"}
               </span>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-xs text-primary font-bold tracking-wider uppercase mb-1">Tu nuevo curso</div>
              <h2 className="text-xl font-bold mb-2 leading-tight">{course.title}</h2>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-sm text-muted-foreground">
                <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                <span className="font-medium text-foreground">{course.rating}</span>
                <span>• {course.lessonsCount} lecciones</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link to={playerLink} className="flex-1">
            <Button size="lg" className="w-full gradient-hero text-primary-foreground border-0 h-14 text-lg animate-pulse hover:animate-none">
              <Play className="mr-2 h-5 w-5 fill-current" /> Ingresar al Curso
            </Button>
          </Link>
          <Link to="/dashboard">
             <Button variant="outline" size="lg" className="w-full h-14 sm:w-auto">
               Ir al Dashboard <ArrowRight className="ml-2 h-4 w-4" />
             </Button>
          </Link>
        </div>
        
      </main>
      
      <Footer />
    </div>
  );
}
