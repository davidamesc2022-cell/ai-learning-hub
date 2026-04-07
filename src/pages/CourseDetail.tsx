import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Star, Users, Clock, Play, Lock, CheckCircle, Globe, Calendar, ArrowLeft, Shield, Infinity, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/CourseCard";
import { useCourses } from "@/hooks/useCourses";
import { useAuth } from "@/hooks/useAuth";

export default function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getCourseById, getRelatedCourses, isLoading } = useCourses();
  const { user, isEnrolledIn, enrollInCourse } = useAuth();
  const [isEnrolling, setIsEnrolling] = useState(false);

  const course = id ? getCourseById(id) : undefined;
  const relatedCourses = id ? getRelatedCourses(id) : [];

  const reviews = [
    { name: "Laura Chen", rating: 5, date: "Hace 2 semanas", comment: "Excelente curso, muy práctico y bien explicado. Las herramientas que aprendí las estoy usando todos los días." },
    { name: "Roberto Silva", rating: 5, date: "Hace 1 mes", comment: "David tiene una forma increíble de explicar conceptos complejos de manera simple." },
    { name: "Diana López", rating: 4, date: "Hace 2 meses", comment: "Muy buen contenido. Me hubiera gustado más ejercicios prácticos, pero en general excelente." },
    { name: "Andrés Vega", rating: 5, date: "Hace 3 meses", comment: "La mejor inversión que he hecho en mi carrera. Completamente aplicable desde el primer día." },
  ];

  const ratingBreakdown = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    pct: (reviews.filter((r) => r.rating === star).length / reviews.length) * 100,
  }));

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-20">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
          <p className="text-muted-foreground">Cargando detalles del curso...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center py-20 text-center px-4">
          <p className="text-4xl mb-4">🔍</p>
          <h2 className="text-2xl font-bold mb-2">Curso No Encontrado</h2>
          <p className="text-muted-foreground mb-6">El curso que buscas no existe o fue eliminado.</p>
          <Link to="/courses">
            <Button>Ver todos los cursos</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Fallbacks si las props del curso original (de mock) faltan ahora desde bd 
  const safeWhatYouLearn = course.whatYouLearn || ["Fundamentos de IA", "Aplicación práctica", "Mejores herramientas"];
  const safeRequirements = course.requirements || ["Conexión a internet", "Ganas de aprender"];
  const safeForWho = course.forWho || ["Estudiantes", "Profesionales", "Curiosos de la tecnología"];
  const safeModules = course.modules || [];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 py-12">
            <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" /> Volver a cursos
            </Link>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <Badge className="mb-3 bg-primary/20 text-primary border-0">{course.categoryLabel}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">{course.title}</h1>
                <p className="text-muted-foreground mb-4 max-w-2xl">{course.longDescription || course.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                  <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-warning text-warning" /> {course.rating} <span className="text-muted-foreground">({(course.students || 0).toLocaleString()} estudiantes)</span></span>
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-muted-foreground" /> {course.duration}</span>
                  <Badge variant="outline" className="text-xs border-muted-foreground/30 text-muted-foreground">{course.level}</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">DA</div>
                  <div>
                    <p className="font-medium text-primary-foreground text-sm">{course.instructor || "David Ames"}</p>
                    <p className="text-xs text-muted-foreground">Experto en IA y Marketing Digital</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <Tabs defaultValue="descripcion">
                <TabsList className="w-full justify-start bg-muted/50 mb-6">
                  <TabsTrigger value="descripcion">Descripción</TabsTrigger>
                  <TabsTrigger value="curriculum">Currículum</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>

                <TabsContent value="descripcion" className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">¿Qué aprenderás?</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {safeWhatYouLearn.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">Requisitos previos</h3>
                    <ul className="space-y-2">
                      {safeRequirements.map((r) => (
                        <li key={r} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />{r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">¿Para quién es este curso?</h3>
                    <ul className="space-y-2">
                      {safeForWho.map((w) => (
                        <li key={w} className="text-sm text-muted-foreground flex items-center gap-2">
                          <Users className="h-4 w-4 text-primary" />{w}
                        </li>
                      ))}
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="curriculum">
                  {safeModules.length > 0 ? (
                    <Accordion type="multiple" defaultValue={["m1"]} className="space-y-3">
                      {safeModules.map((mod) => (
                        <AccordionItem key={mod.id} value={mod.id} className="border border-border rounded-lg px-4">
                          <AccordionTrigger className="text-sm font-semibold hover:no-underline">{mod.title}</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-2 pb-2">
                              {(mod.lessons || []).map((lesson) => (
                                <div key={lesson.id} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors">
                                  <div className="flex items-center gap-3">
                                    {lesson.isFree ? <Play className="h-4 w-4 text-primary" /> : <Lock className="h-4 w-4 text-muted-foreground" />}
                                    <span className="text-sm">{lesson.title}</span>
                                    {lesson.isFree && <Badge variant="outline" className="text-[10px] px-1.5 py-0">Preview</Badge>}
                                  </div>
                                  <span className="text-xs text-muted-foreground">{lesson.duration || "10 min"}</span>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  ) : (
                    <div className="text-center py-10 bg-muted/20 rounded-lg border border-border border-dashed">
                      <p className="text-muted-foreground">El módulo y lecciones se están sincronizando aún en la base de datos.</p>
                      <p className="text-sm mt-2 text-primary font-medium">Contenido Próximamente Disponíble</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  {/* Rating summary */}
                  <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 bg-muted/30 rounded-xl p-5">
                    <div className="text-center shrink-0">
                      <p className="text-5xl font-extrabold text-primary">{course.rating}</p>
                      <div className="flex gap-0.5 my-1 justify-center">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-warning text-warning" />)}</div>
                      <p className="text-xs text-muted-foreground">{reviews.length} reseñas</p>
                    </div>
                    <div className="flex-1 w-full space-y-1.5">
                      {ratingBreakdown.map(({ star, pct }) => (
                        <div key={star} className="flex items-center gap-2 text-xs">
                          <span className="w-4 text-right">{star}</span>
                          <Star className="h-3 w-3 fill-warning text-warning" />
                          <Progress value={pct} className="h-2 flex-1" />
                          <span className="w-6 text-muted-foreground">{Math.round(pct)}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {reviews.map((r, i) => (
                    <div key={i} className="border-b border-border pb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">{r.name.split(" ").map(n => n[0]).join("")}</div>
                        <div>
                          <p className="font-medium text-sm">{r.name}</p>
                          <p className="text-xs text-muted-foreground">{r.date}</p>
                        </div>
                        <div className="ml-auto flex gap-0.5">{[...Array(r.rating)].map((_, j) => <Star key={j} className="h-3 w-3 fill-warning text-warning" />)}</div>
                      </div>
                      <p className="text-sm text-muted-foreground">{r.comment}</p>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <aside className="lg:w-80">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
                {/* El precio principal superior fue eliminado para evitar redundancia con el botón de pago único */}
                {user && isEnrolledIn(course.id) ? (
                  <Link to={safeModules.length > 0 ? `/learn/${course.id}/${safeModules[0]?.lessons[0]?.id}` : '#'}>
                    <Button disabled={safeModules.length === 0} className="w-full bg-success hover:bg-success/90 text-success-foreground border-0 mb-4 font-semibold" size="lg">
                      <Play className="mr-2 h-4 w-4" /> Continuar Curso
                    </Button>
                  </Link>
                ) : (
                  <div className="space-y-4 mb-6">
                    {course.isFree ? (
                      <Button 
                        onClick={async () => {
                          if (!user) {
                            navigate("/auth");
                            return;
                          }
                          setIsEnrolling(true);
                          const success = await enrollInCourse(course.id);
                          setIsEnrolling(false);
                          if (success && safeModules.length > 0) {
                            navigate(`/learn/${course.id}/${safeModules[0]?.lessons[0]?.id}`);
                          }
                        }}
                        disabled={safeModules.length === 0 || isEnrolling} 
                        className="w-full gradient-hero text-primary-foreground border-0 font-semibold" 
                        size="lg"
                      >
                        {isEnrolling ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                        Inscribirme Gratis
                      </Button>
                    ) : (
                      <>
                        <div className="relative pt-2">
                          <Link to="/pricing">
                            <Button className="w-full gradient-hero text-primary-foreground border-0 h-14 text-base font-bold shadow-lg hover:opacity-90 relative overflow-hidden group">
                              <span className="relative z-10 flex items-center justify-center gap-2">
                                <Star className="h-5 w-5 fill-warning text-warning group-hover:scale-110 transition-transform" />
                                Desbloquear Todo por $29/mes
                              </span>
                            </Button>
                          </Link>
                          <Badge className="absolute -top-1 left-1/2 -translate-x-1/2 bg-warning text-warning-foreground border-0 text-[10px] uppercase font-black tracking-widest z-20 shadow-sm">Recomendado</Badge>
                        </div>
                        
                        <Button 
                          onClick={async () => {
                            if (!user) {
                              navigate("/auth");
                              return;
                            }
                            setIsEnrolling(true);
                            const success = await enrollInCourse(course.id);
                            setIsEnrolling(false);
                            if (success && safeModules.length > 0) {
                              navigate(`/learn/${course.id}/${safeModules[0]?.lessons[0]?.id}`);
                            }
                          }}
                          disabled={safeModules.length === 0 || isEnrolling}
                          variant="secondary"
                          className="w-full font-semibold border-0 bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                          size="lg"
                        >
                          {isEnrolling ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                          Comprar solo este curso por ${course.price}
                        </Button>
                      </>
                    )}
                  </div>
                )}
                <div className="space-y-3 text-sm">
                  <p className="font-semibold">Este curso incluye:</p>
                  <div className="space-y-2.5 text-muted-foreground">
                    <p className="flex items-center gap-2"><Play className="h-4 w-4 text-primary" />{course.lessonsCount} lecciones · {course.duration}</p>
                    <p className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" />{(course.students || 0).toLocaleString()} estudiantes</p>
                    <p className="flex items-center gap-2"><Calendar className="h-4 w-4 text-primary" />Actualizado: {course.updatedAt}</p>
                    <p className="flex items-center gap-2"><Globe className="h-4 w-4 text-primary" />Idioma: Español</p>
                    <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success" />Certificado de finalización</p>
                    <p className="flex items-center gap-2"><Infinity className="h-4 w-4 text-primary" />Acceso de por vida</p>
                    <p className="flex items-center gap-2"><Download className="h-4 w-4 text-primary" />Recursos descargables</p>
                    <p className="flex items-center gap-2"><Shield className="h-4 w-4 text-success" />Garantía 30 días</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Cursos relacionados */}
        {relatedCourses.length > 0 && (
          <section className="bg-muted/40 border-t border-border py-14">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-2">Cursos Relacionados</h2>
              <p className="text-muted-foreground text-sm mb-8">Continúa aprendiendo con estos cursos de {course.categoryLabel}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCourses.map((c) => (
                  <CourseCard key={c.id} course={c} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
