import { useState, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ShieldCheck, Users, BookOpen, GraduationCap, Download, Search, UserPlus, 
  Trash2, ExternalLink, CheckCircle2, AlertCircle, RefreshCw, MessageSquare, 
  Copy, Check, FileSpreadsheet, Sparkles, Filter, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useAuth } from "@/hooks/useAuth";
import { useCourses } from "@/hooks/useCourses";
import { isUserAdmin } from "@/data/constants";
import { supabase, publicSupabase } from "@/lib/supabase";
import { toast } from "sonner";

interface StudentProfile {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  plan?: string;
  points?: number;
  streak?: number;
  enrolledCourseIds: string[];
}

interface EnrollmentRow {
  id: string;
  userId: string;
  courseId: string;
  progress: number;
  completed: boolean;
  enrolledAt: string;
  studentName: string;
  studentEmail: string;
  courseTitle: string;
  coursePrice: number;
}

export default function Admin() {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading: authLoading } = useAuth();
  const { courses, isLoading: coursesLoading } = useCourses();

  const [students, setStudents] = useState<StudentProfile[]>([]);
  const [enrollments, setEnrollments] = useState<EnrollmentRow[]>([]);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");

  // Formulario de matrícula manual
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [isEnrolling, setIsEnrolling] = useState(false);

  // Generador de mensaje de bienvenida
  const [msgStudentId, setMsgStudentId] = useState("");
  const [msgCourseId, setMsgCourseId] = useState("");
  const [copiedMsg, setCopiedMsg] = useState(false);

  const isAdmin = isUserAdmin(user?.email);

  // Cargar estudiantes e inscripciones desde Supabase
  const loadAdminData = async () => {
    setIsLoadingData(true);
    try {
      // 1. Obtener perfiles
      const { data: profilesData, error: profilesError } = await publicSupabase
        .from('profiles')
        .select('*');

      if (profilesError) {
        console.error("Error al cargar perfiles:", profilesError);
      }

      // 2. Obtener inscripciones
      const { data: enrollmentsData, error: enrollmentsError } = await publicSupabase
        .from('enrolled_courses')
        .select('*');

      if (enrollmentsError) {
        console.error("Error al cargar inscripciones:", enrollmentsError);
      }

      const rawProfiles = profilesData || [];
      const rawEnrollments = enrollmentsData || [];

      // Mapear inscripciones con nombres y cursos
      const coursesMap = new Map((courses || []).map(c => [c.id, c]));
      const profilesMap = new Map(rawProfiles.map(p => [p.id, p]));

      const mappedEnrollments: EnrollmentRow[] = rawEnrollments.map((enr: any) => {
        const student = profilesMap.get(enr.user_id);
        const course = coursesMap.get(enr.course_id);
        return {
          id: enr.id,
          userId: enr.user_id,
          courseId: enr.course_id,
          progress: enr.progress || 0,
          completed: Boolean(enr.completed),
          enrolledAt: enr.enrolled_at || new Date().toISOString(),
          studentName: student?.name || "Estudiante",
          studentEmail: student?.email || "Sin correo",
          courseTitle: course?.title || "Curso #" + enr.course_id.slice(0, 8),
          coursePrice: course?.price || 0,
        };
      });

      // Mapear estudiantes con sus cursos activos
      const mappedStudents: StudentProfile[] = rawProfiles.map((p: any) => {
        const userEnrollmentIds = rawEnrollments
          .filter((e: any) => e.user_id === p.id)
          .map((e: any) => e.course_id);

        return {
          id: p.id,
          name: p.name || "Sin Nombre",
          email: p.email || (p.id === user?.id ? user?.email : undefined) || "Registrado en Supabase",
          avatar: p.avatar,
          plan: p.plan || 'free',
          points: p.points || 0,
          streak: p.streak || 0,
          enrolledCourseIds: userEnrollmentIds,
        };
      });

      setStudents(mappedStudents);
      setEnrollments(mappedEnrollments);
    } catch (err) {
      console.error("Error general cargando datos de admin:", err);
      toast.error("Error al sincronizar datos del panel");
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      loadAdminData();
    }
  }, [isAdmin, courses]);

  // Acción: Matricular Alumno Manualmente
  const handleManualEnroll = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentId || !selectedCourseId) {
      toast.error("Selecciona tanto al estudiante como al curso");
      return;
    }

    setIsEnrolling(true);
    try {
      // Verificar si ya está matriculado
      const { data: existing } = await supabase
        .from('enrolled_courses')
        .select('id')
        .eq('user_id', selectedStudentId)
        .eq('course_id', selectedCourseId)
        .maybeSingle();

      if (existing) {
        toast.warning("El estudiante ya se encuentra matriculado en este curso");
        setIsEnrolling(false);
        return;
      }

      const { error } = await supabase
        .from('enrolled_courses')
        .insert({
          user_id: selectedStudentId,
          course_id: selectedCourseId,
          progress: 0,
          completed: false,
        });

      if (error) throw error;

      const studentObj = students.find(s => s.id === selectedStudentId);
      const courseObj = courses.find(c => c.id === selectedCourseId);

      toast.success(`¡Acceso concedido a ${studentObj?.name || 'alumno'} en "${courseObj?.title}"!`);
      setSelectedStudentId("");
      setSelectedCourseId("");
      await loadAdminData();
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || "No se pudo completar la matrícula manual");
    } finally {
      setIsEnrolling(false);
    }
  };

  // Acción: Revocar Matrícula
  const handleRevokeEnrollment = async (userId: string, courseId: string, studentName: string) => {
    if (!confirm(`¿Estás seguro de que deseas revocar el acceso a ${studentName}?`)) return;

    try {
      const { error } = await supabase
        .from('enrolled_courses')
        .delete()
        .eq('user_id', userId)
        .eq('course_id', courseId);

      if (error) throw error;

      toast.success(`Acceso revocado para ${studentName}`);
      await loadAdminData();
    } catch (err: any) {
      console.error(err);
      toast.error("Error al revocar la matrícula");
    }
  };

  // Acción: Exportar a Excel (CSV con formato UTF-8 BOM)
  const handleExportCSV = () => {
    if (enrollments.length === 0) {
      toast.warning("No hay registros de inscripciones para exportar");
      return;
    }

    const headers = [
      "ID Inscripción",
      "Estudiante",
      "Correo Electrónico",
      "Curso",
      "Precio (USD)",
      "Progreso (%)",
      "Estado",
      "Fecha de Inscripción"
    ];

    const rows = enrollments.map(e => [
      `"${e.id}"`,
      `"${e.studentName.replace(/"/g, '""')}"`,
      `"${(e.studentEmail || '').replace(/"/g, '""')}"`,
      `"${e.courseTitle.replace(/"/g, '""')}"`,
      e.coursePrice,
      `${e.progress}%`,
      e.completed ? "Completado" : "En Curso",
      `"${new Date(e.enrolledAt).toLocaleString()}"`
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(r => r.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `estudiantes_david_ames_academy_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Archivo Excel (CSV) descargado con éxito");
  };

  // Filtrado de estudiantes
  const filteredStudents = useMemo(() => {
    return students.filter(s => {
      const matchesSearch = 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (s.email && s.email.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCourse = courseFilter === "all" || s.enrolledCourseIds.includes(courseFilter);

      return matchesSearch && matchesCourse;
    });
  }, [students, searchTerm, courseFilter]);

  // Mensaje de bienvenida generado
  const welcomeMessage = useMemo(() => {
    const student = students.find(s => s.id === msgStudentId);
    const course = courses.find(c => c.id === msgCourseId);
    if (!student || !course) return "";

    return `¡Hola ${student.name.split(' ')[0]}! 👋 Te saluda David Ames.\n\n` +
      `¡Ya tienes activo tu acceso oficial al curso *"${course.title}"* en nuestra academia!\n\n` +
      `👉 *Para ingresar a tus clases:*\n` +
      `1. Entra a: ${window.location.origin}/courses/${course.id}\n` +
      `2. Inicia sesión con tu correo registrado: ${student.email || 'tu correo'}\n` +
      `3. Haz clic en "Continuar Curso" para abrir el aula interactiva y los videos.\n\n` +
      `Cualquier consulta durante tu aprendizaje, estoy para apoyarte. ¡Muchos éxitos en tu formación! 🚀`;
  }, [msgStudentId, msgCourseId, students, courses]);

  const copyToClipboard = () => {
    if (!welcomeMessage) return;
    navigator.clipboard.writeText(welcomeMessage);
    setCopiedMsg(true);
    toast.success("Mensaje copiado al portapapeles");
    setTimeout(() => setCopiedMsg(false), 2000);
  };

  if (authLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center p-20">
          <RefreshCw className="h-8 w-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  // Verificación de Acceso de Administrador
  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
          <div className="h-20 w-20 rounded-full bg-destructive/10 text-destructive flex items-center justify-center mb-6">
            <AlertCircle className="h-10 w-10" />
          </div>
          <h1 className="text-3xl font-extrabold mb-3">Acceso Restringido</h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            Esta sección es exclusiva para la administración de David Ames Academy. Por favor inicia sesión con la cuenta de administrador.
          </p>
          <div className="flex gap-4">
            <Link to="/">
              <Button variant="outline">Volver al Inicio</Button>
            </Link>
            <Link to="/auth">
              <Button className="gradient-hero text-primary-foreground border-0">Iniciar Sesión</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-8 md:py-10">
        {/* Cabecera del Panel */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight text-foreground">
                Panel de Administrador
              </h1>
              <Badge className="bg-primary/20 text-primary border-primary/30">Admin Pro</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Gestión centralizada de alumnos, matrículas, catálogo y reportes para Excel.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={loadAdminData}
              disabled={isLoadingData}
              className="gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${isLoadingData ? 'animate-spin' : ''}`} />
              Sincronizar
            </Button>
            <Button 
              size="sm" 
              onClick={handleExportCSV}
              className="gradient-hero text-primary-foreground border-0 font-bold gap-2 shadow-md"
            >
              <FileSpreadsheet className="h-4 w-4" />
              Exportar a Excel (CSV)
            </Button>
          </div>
        </div>

        {/* Tarjetas de Resumen KPI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-border bg-card/60 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Alumnos Registrados
              </CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black text-foreground">{students.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Cuentas activas en base de datos</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/60 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Inscripciones Activas
              </CardTitle>
              <GraduationCap className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black text-foreground">{enrollments.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Cursos asignados a estudiantes</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/60 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Cursos Publicados
              </CardTitle>
              <BookOpen className="h-4 w-4 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-black text-foreground">{courses.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Catálogo de formación en vivo</p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card/60 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Candado de Seguridad
              </CardTitle>
              <ShieldCheck className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-base font-bold text-amber-500 flex items-center gap-1.5 mt-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Activo
              </div>
              <p className="text-xs text-muted-foreground mt-1">Contenido no autorizado bloqueado</p>
            </CardContent>
          </Card>
        </div>

        {/* Pestañas Principales */}
        <Tabs defaultValue="students" className="space-y-6">
          <TabsList className="bg-muted/50 p-1">
            <TabsTrigger value="students" className="gap-2">
              <Users className="h-4 w-4" /> Alumnos y Matrícula Manual
            </TabsTrigger>
            <TabsTrigger value="enrollments" className="gap-2">
              <FileSpreadsheet className="h-4 w-4" /> Registro de Inscritos
            </TabsTrigger>
            <TabsTrigger value="catalog" className="gap-2">
              <BookOpen className="h-4 w-4" /> Catálogo de Cursos ({courses.length})
            </TabsTrigger>
            <TabsTrigger value="comms" className="gap-2">
              <MessageSquare className="h-4 w-4" /> Mensajes de Bienvenida
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: ALUMNOS Y MATRÍCULA MANUAL */}
          <TabsContent value="students" className="space-y-6">
            {/* Formulario rápido para matricular */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <UserPlus className="h-5 w-5 text-primary" />
                  Matrícula Manual Inmediata
                </CardTitle>
                <CardDescription>
                  Usa esta herramienta cuando un alumno te pague por transferencia directa, Yape o Plin para darle acceso inmediato sin pasar por pasarela.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleManualEnroll} className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold">Seleccionar Estudiante:</label>
                    <Select value={selectedStudentId} onValueChange={setSelectedStudentId}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Elige un alumno..." />
                      </SelectTrigger>
                      <SelectContent>
                        {students.map(s => (
                          <SelectItem key={s.id} value={s.id}>
                            {s.name} ({s.email || 'Sin correo'})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold">Curso a Habilitar:</label>
                    <Select value={selectedCourseId} onValueChange={setSelectedCourseId}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Elige un curso..." />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map(c => (
                          <SelectItem key={c.id} value={c.id}>
                            {c.title} ({c.isFree ? 'Gratis' : `US$ ${c.price}`})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isEnrolling || !selectedStudentId || !selectedCourseId}
                    className="gradient-hero text-primary-foreground border-0 font-bold"
                  >
                    {isEnrolling ? "Habilitando..." : "Dar Acceso al Curso"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Filtros y Búsqueda */}
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar por nombre o correo..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-muted-foreground whitespace-nowrap">Filtrar por curso:</span>
                <Select value={courseFilter} onValueChange={setCourseFilter}>
                  <SelectTrigger className="w-full sm:w-64 bg-background">
                    <SelectValue placeholder="Todos los cursos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos los cursos</SelectItem>
                    {courses.map(c => (
                      <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Listado de Estudiantes */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/40 border-b border-border text-muted-foreground">
                    <tr>
                      <th className="py-3 px-4">Estudiante</th>
                      <th className="py-3 px-4">Correo</th>
                      <th className="py-3 px-4">Cursos Activos</th>
                      <th className="py-3 px-4 text-right">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredStudents.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="py-8 text-center text-muted-foreground">
                          No se encontraron estudiantes que coincidan con la búsqueda.
                        </td>
                      </tr>
                    ) : (
                      filteredStudents.map(student => (
                        <tr key={student.id} className="hover:bg-muted/20 transition-colors">
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-3">
                              <div className="h-9 w-9 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs flex-shrink-0">
                                {student.name.slice(0, 2).toUpperCase()}
                              </div>
                              <span className="font-semibold text-foreground">{student.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {student.email || "No registrado"}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex flex-wrap gap-1.5 max-w-md">
                              {student.enrolledCourseIds.length === 0 ? (
                                <span className="text-xs text-muted-foreground italic">Sin cursos asignados</span>
                              ) : (
                                student.enrolledCourseIds.map(cId => {
                                  const cObj = courses.find(c => c.id === cId);
                                  return (
                                    <Badge 
                                      key={cId} 
                                      variant="secondary" 
                                      className="text-xs flex items-center gap-1.5 py-1 px-2"
                                    >
                                      <span className="truncate max-w-[160px]">{cObj?.title || 'Curso'}</span>
                                      <button 
                                        onClick={() => handleRevokeEnrollment(student.id, cId, student.name)}
                                        title="Revocar acceso"
                                        className="text-muted-foreground hover:text-destructive"
                                      >
                                        <Trash2 className="h-3 w-3" />
                                      </button>
                                    </Badge>
                                  );
                                })
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button 
                              size="sm" 
                              variant="outline"
                              className="text-xs gap-1"
                              onClick={() => {
                                setSelectedStudentId(student.id);
                                window.scrollTo({ top: 200, behavior: "smooth" });
                              }}
                            >
                              <UserPlus className="h-3 w-3" /> Matricular
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* TAB 2: REGISTRO DE INSCRITOS Y EXCEL */}
          <TabsContent value="enrollments" className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-base">Historial Completo de Matrículas</h3>
                <p className="text-xs text-muted-foreground">Cada fila representa a un estudiante con acceso a un curso.</p>
              </div>
              <Button size="sm" onClick={handleExportCSV} className="gap-2">
                <Download className="h-4 w-4" /> Descargar CSV para Excel
              </Button>
            </div>

            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-muted/40 border-b border-border text-muted-foreground">
                    <tr>
                      <th className="py-3 px-4">Estudiante</th>
                      <th className="py-3 px-4">Curso</th>
                      <th className="py-3 px-4">Progreso</th>
                      <th className="py-3 px-4">Fecha</th>
                      <th className="py-3 px-4 text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {enrollments.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-muted-foreground">
                          Aún no hay inscripciones registradas en la base de datos.
                        </td>
                      </tr>
                    ) : (
                      enrollments.map(enr => (
                        <tr key={enr.id} className="hover:bg-muted/20 transition-colors">
                          <td className="py-3 px-4">
                            <p className="font-semibold">{enr.studentName}</p>
                            <p className="text-xs text-muted-foreground">{enr.studentEmail}</p>
                          </td>
                          <td className="py-3 px-4 font-medium text-foreground">
                            {enr.courseTitle}
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-semibold">{enr.progress}%</span>
                              <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
                                <div className="h-full bg-primary" style={{ width: `${enr.progress}%` }} />
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-xs text-muted-foreground">
                            {new Date(enr.enrolledAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="text-destructive hover:bg-destructive/10 text-xs gap-1"
                              onClick={() => handleRevokeEnrollment(enr.userId, enr.courseId, enr.studentName)}
                            >
                              <Trash2 className="h-3 w-3" /> Revocar
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* TAB 3: CATÁLOGO DE CURSOS */}
          <TabsContent value="catalog" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map(c => {
                const enrolledCount = enrollments.filter(e => e.courseId === c.id).length;
                return (
                  <Card key={c.id} className="overflow-hidden border-border bg-card">
                    {c.thumbnail && (
                      <div className="h-36 overflow-hidden relative">
                        <img src={c.thumbnail} alt={c.title} className="w-full h-full object-cover" />
                        <Badge className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm text-foreground">
                          {c.isFree ? "Gratis" : `US$ ${c.price}`}
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base line-clamp-1">{c.title}</CardTitle>
                      <CardDescription className="line-clamp-2 text-xs">{c.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-0">
                      <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-2">
                        <span>👥 {enrolledCount} alumnos inscritos</span>
                        <span>⏱️ {c.duration}</span>
                      </div>
                      <div className="flex gap-2">
                        <Link to={`/courses/${c.id}`} className="flex-1">
                          <Button size="sm" variant="outline" className="w-full text-xs">
                            Ver Ficha
                          </Button>
                        </Link>
                        {c.modules?.[0]?.lessons?.[0]?.id && (
                          <Link to={`/learn/${c.id}/${c.modules[0].lessons[0].id}`} className="flex-1">
                            <Button size="sm" variant="secondary" className="w-full text-xs">
                              Abrir Aula
                            </Button>
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* TAB 4: GENERADOR DE MENSAJE DE BIENVENIDA */}
          <TabsContent value="comms" className="space-y-4">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-emerald-500" />
                  Generador de Mensaje de Bienvenida (WhatsApp y Email)
                </CardTitle>
                <CardDescription>
                  Genera automáticamente el texto personalizado para enviarle a tu alumno por WhatsApp o correo en el momento en que confirmes su pago.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold">Seleccionar Alumno:</label>
                    <Select value={msgStudentId} onValueChange={setMsgStudentId}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Elige un alumno..." />
                      </SelectTrigger>
                      <SelectContent>
                        {students.map(s => (
                          <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold">Curso Matriculado:</label>
                    <Select value={msgCourseId} onValueChange={setMsgCourseId}>
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Elige el curso..." />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map(c => (
                          <SelectItem key={c.id} value={c.id}>{c.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {welcomeMessage ? (
                  <div className="space-y-3 pt-2">
                    <div className="p-4 rounded-xl bg-muted/40 border border-border whitespace-pre-wrap text-sm leading-relaxed font-sans">
                      {welcomeMessage}
                    </div>

                    <div className="flex gap-3">
                      <Button onClick={copyToClipboard} className="gap-2 font-bold">
                        {copiedMsg ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        {copiedMsg ? "¡Copiado!" : "Copiar Texto"}
                      </Button>
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(welcomeMessage)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="gap-2 border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/10">
                          <MessageSquare className="h-4 w-4" /> Enviar por WhatsApp Web
                        </Button>
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-center text-muted-foreground text-sm border border-dashed border-border rounded-xl">
                    Selecciona un alumno y un curso para previsualizar el mensaje de bienvenida oficial.
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
}
