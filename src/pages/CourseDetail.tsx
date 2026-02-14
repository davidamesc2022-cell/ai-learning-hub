import { useParams, Link } from "react-router-dom";
import { Star, Users, Clock, Play, Lock, CheckCircle, Globe, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { courses } from "@/data/mockData";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id) || courses[0];

  const reviews = [
    { name: "Laura Chen", rating: 5, date: "Hace 2 semanas", comment: "Excelente curso, muy práctico y bien explicado. Las herramientas que aprendí las estoy usando todos los días." },
    { name: "Roberto Silva", rating: 5, date: "Hace 1 mes", comment: "David tiene una forma increíble de explicar conceptos complejos de manera simple." },
    { name: "Diana López", rating: 4, date: "Hace 2 meses", comment: "Muy buen contenido. Me hubiera gustado más ejercicios prácticos, pero en general excelente." },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

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
              <p className="text-muted-foreground mb-4 max-w-2xl">{course.longDescription}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-warning text-warning" /> {course.rating} <span className="text-muted-foreground">({course.students.toLocaleString()} estudiantes)</span></span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4 text-muted-foreground" /> {course.duration}</span>
                <Badge variant="outline" className="text-xs border-muted-foreground/30 text-muted-foreground">{course.level}</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">DA</div>
                <div>
                  <p className="font-medium text-primary-foreground text-sm">{course.instructor}</p>
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
                    {course.whatYouLearn.map((item) => (
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
                    {course.requirements.map((r) => (
                      <li key={r} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />{r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">¿Para quién es este curso?</h3>
                  <ul className="space-y-2">
                    {course.forWho.map((w) => (
                      <li key={w} className="text-sm text-muted-foreground flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />{w}
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="curriculum">
                <Accordion type="multiple" defaultValue={["m1"]} className="space-y-3">
                  {course.modules.map((mod) => (
                    <AccordionItem key={mod.id} value={mod.id} className="border border-border rounded-lg px-4">
                      <AccordionTrigger className="text-sm font-semibold hover:no-underline">{mod.title}</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2 pb-2">
                          {mod.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 transition-colors">
                              <div className="flex items-center gap-3">
                                {lesson.isFree ? <Play className="h-4 w-4 text-primary" /> : <Lock className="h-4 w-4 text-muted-foreground" />}
                                <span className="text-sm">{lesson.title}</span>
                                {lesson.isFree && <Badge variant="outline" className="text-[10px] px-1.5 py-0">Preview</Badge>}
                              </div>
                              <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold">{course.rating}</p>
                    <div className="flex gap-0.5 my-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-warning text-warning" />)}</div>
                    <p className="text-xs text-muted-foreground">{course.students} reviews</p>
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
              <div className="text-center mb-4">
                {course.isFree ? (
                  <p className="text-3xl font-extrabold text-success">Gratis</p>
                ) : (
                  <p className="text-3xl font-extrabold">${course.price} <span className="text-sm font-normal text-muted-foreground">USD</span></p>
                )}
              </div>
              <Link to={`/learn/${course.id}/${course.modules[0]?.lessons[0]?.id}`}>
                <Button className="w-full gradient-hero text-primary-foreground border-0 mb-4 font-semibold" size="lg">
                  {course.isFree ? "Inscribirme Gratis" : `Comprar por $${course.price}`}
                </Button>
              </Link>
              <div className="space-y-3 text-sm">
                <p className="font-semibold">Este curso incluye:</p>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2"><Play className="h-4 w-4" />{course.lessonsCount} lecciones ({course.duration})</p>
                  <p className="flex items-center gap-2"><Users className="h-4 w-4" />{course.students.toLocaleString()} estudiantes inscritos</p>
                  <p className="flex items-center gap-2"><Calendar className="h-4 w-4" />Actualizado: {course.updatedAt}</p>
                  <p className="flex items-center gap-2"><Globe className="h-4 w-4" />Idioma: Español</p>
                  <p className="flex items-center gap-2"><CheckCircle className="h-4 w-4" />Certificado de finalización</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
