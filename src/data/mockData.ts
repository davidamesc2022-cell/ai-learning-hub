export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "marketing" | "ia";
  categoryLabel: string;
  level: "Principiante" | "Intermedio" | "Avanzado";
  price: number;
  isFree: boolean;
  rating: number;
  students: number;
  instructor: string;
  duration: string;
  lessonsCount: number;
  thumbnail: string;
  isNew?: boolean;
  isPopular?: boolean;
  updatedAt: string;
  modules: Module[];
  whatYouLearn: string[];
  requirements: string[];
  forWho: string[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  isFree: boolean;
  isCompleted?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: "free" | "pro" | "elite";
  points: number;
  streak: number;
  position: number;
  coursesInProgress: number;
  coursesCompleted: number;
  totalHours: number;
  badges: Badge[];
  enrolledCourses: EnrolledCourse[];
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  unlockedAt?: string;
}

export interface EnrolledCourse {
  courseId: string;
  progress: number;
  lastLesson: string;
  completed: boolean;
}

export interface Testimonial {
  name: string;
  title: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface ForumThread {
  id: string;
  title: string;
  preview: string;
  author: string;
  authorAvatar: string;
  category: string;
  replies: number;
  upvotes: number;
  lastActivity: string;
  solved: boolean;
}

export interface Notification {
  id: string;
  message: string;
  time: string;
  read: boolean;
}

export const courses: Course[] = [
  {
    id: "ia-marketing-7-dias",
    title: "IA para Marketing en 7 Días",
    description: "Aprende a integrar inteligencia artificial en tu estrategia de marketing digital en solo una semana.",
    longDescription: "Este curso intensivo te llevará de cero a experto en el uso de herramientas de IA para marketing digital. Aprenderás a crear contenido con ChatGPT, automatizar campañas y analizar datos con IA.",
    category: "marketing",
    categoryLabel: "Marketing Digital con IA",
    level: "Principiante",
    price: 0,
    isFree: true,
    rating: 4.8,
    students: 1234,
    instructor: "David Ames",
    duration: "2.5 horas",
    lessonsCount: 7,
    thumbnail: "",
    isPopular: true,
    updatedAt: "Enero 2026",
    modules: [
      {
        id: "m1",
        title: "Día 1: Introducción a la IA en Marketing",
        lessons: [
          { id: "l1", title: "¿Qué es la IA y por qué importa?", duration: "15:00", isFree: true },
          { id: "l2", title: "Panorama de herramientas de IA", duration: "20:00", isFree: true },
          { id: "l3", title: "Tu primera automatización", duration: "18:00", isFree: true },
        ],
      },
      {
        id: "m2",
        title: "Día 2: ChatGPT para Content Marketing",
        lessons: [
          { id: "l4", title: "Prompts efectivos para marketing", duration: "22:00", isFree: false },
          { id: "l5", title: "Creando contenido viral con IA", duration: "25:00", isFree: false },
        ],
      },
      {
        id: "m3",
        title: "Día 3: Automatización con IA",
        lessons: [
          { id: "l6", title: "Email marketing automatizado", duration: "20:00", isFree: false },
          { id: "l7", title: "Proyecto final: Tu plan de IA", duration: "30:00", isFree: false },
        ],
      },
    ],
    whatYouLearn: [
      "Integrar herramientas de IA en tu estrategia de marketing",
      "Crear contenido de alta calidad con ChatGPT",
      "Automatizar campañas de email marketing",
      "Analizar datos de clientes con IA",
      "Optimizar tu presupuesto de marketing con IA",
    ],
    requirements: ["Conocimientos básicos de marketing digital", "Una cuenta de ChatGPT (gratuita)"],
    forWho: ["Marketers que quieren adoptar IA", "Emprendedores digitales", "Community managers"],
  },
  {
    id: "prompt-engineering",
    title: "Prompt Engineering Masterclass",
    description: "Domina el arte de comunicarte con modelos de IA. Desde principios básicos hasta técnicas avanzadas de prompting.",
    longDescription: "Conviértete en un experto en prompt engineering. Este curso completo cubre desde los fundamentos hasta técnicas avanzadas como chain-of-thought, few-shot learning y más.",
    category: "ia",
    categoryLabel: "IA para Profesionales",
    level: "Intermedio",
    price: 49,
    isFree: false,
    rating: 4.9,
    students: 856,
    instructor: "David Ames",
    duration: "8 horas",
    lessonsCount: 20,
    thumbnail: "",
    isNew: true,
    updatedAt: "Febrero 2026",
    modules: [
      {
        id: "m1",
        title: "Fundamentos del Prompting",
        lessons: [
          { id: "l1", title: "¿Qué es Prompt Engineering?", duration: "20:00", isFree: true },
          { id: "l2", title: "Anatomía de un buen prompt", duration: "25:00", isFree: true },
          { id: "l3", title: "Errores comunes y cómo evitarlos", duration: "22:00", isFree: false },
          { id: "l4", title: "Ejercicio práctico: Prompts básicos", duration: "30:00", isFree: false },
        ],
      },
      {
        id: "m2",
        title: "Técnicas Avanzadas",
        lessons: [
          { id: "l5", title: "Chain-of-Thought Prompting", duration: "28:00", isFree: false },
          { id: "l6", title: "Few-Shot Learning", duration: "25:00", isFree: false },
          { id: "l7", title: "Role-Based Prompting", duration: "22:00", isFree: false },
          { id: "l8", title: "Iteración y refinamiento", duration: "30:00", isFree: false },
        ],
      },
      {
        id: "m3",
        title: "Aplicaciones Profesionales",
        lessons: [
          { id: "l9", title: "Prompts para desarrollo de software", duration: "25:00", isFree: false },
          { id: "l10", title: "Prompts para análisis de datos", duration: "28:00", isFree: false },
          { id: "l11", title: "Prompts para creación de contenido", duration: "22:00", isFree: false },
          { id: "l12", title: "Proyecto final", duration: "45:00", isFree: false },
        ],
      },
    ],
    whatYouLearn: [
      "Técnicas avanzadas de prompt engineering",
      "Chain-of-thought y few-shot learning",
      "Aplicar prompting en contextos profesionales",
      "Optimizar resultados de modelos de IA",
    ],
    requirements: ["Experiencia básica con ChatGPT o similar", "Curiosidad y ganas de experimentar"],
    forWho: ["Desarrolladores", "Analistas de datos", "Profesionales que usan IA diariamente"],
  },
  {
    id: "email-marketing-ia",
    title: "Email Marketing Automatizado con IA",
    description: "Crea campañas de email irresistibles usando inteligencia artificial. Segmentación, copywriting y automatización.",
    longDescription: "Aprende a crear campañas de email marketing que convierten usando el poder de la IA para segmentar audiencias, generar copy y automatizar flujos.",
    category: "marketing",
    categoryLabel: "Marketing Digital con IA",
    level: "Intermedio",
    price: 39,
    isFree: false,
    rating: 4.7,
    students: 623,
    instructor: "David Ames",
    duration: "5 horas",
    lessonsCount: 15,
    thumbnail: "",
    updatedAt: "Diciembre 2025",
    modules: [
      {
        id: "m1",
        title: "Fundamentos de Email Marketing con IA",
        lessons: [
          { id: "l1", title: "El estado del email marketing", duration: "15:00", isFree: true },
          { id: "l2", title: "Herramientas de IA para email", duration: "20:00", isFree: true },
          { id: "l3", title: "Segmentación inteligente", duration: "25:00", isFree: false },
        ],
      },
      {
        id: "m2",
        title: "Copywriting con IA",
        lessons: [
          { id: "l4", title: "Subject lines que abren", duration: "20:00", isFree: false },
          { id: "l5", title: "Body copy persuasivo", duration: "25:00", isFree: false },
        ],
      },
    ],
    whatYouLearn: [
      "Crear campañas de email con IA",
      "Segmentar audiencias automáticamente",
      "Generar copy de alto impacto",
    ],
    requirements: ["Conocimientos básicos de email marketing"],
    forWho: ["Email marketers", "Growth hackers", "Emprendedores"],
  },
  {
    id: "ia-generativa",
    title: "IA Generativa: Imagen, Audio, Video",
    description: "Explora el fascinante mundo de la IA generativa. Crea imágenes, audio y video con las últimas herramientas.",
    longDescription: "Desde Midjourney hasta Suno AI, domina las herramientas de IA generativa más potentes del mercado para crear contenido multimedia impresionante.",
    category: "ia",
    categoryLabel: "IA para Profesionales",
    level: "Avanzado",
    price: 79,
    isFree: false,
    rating: 4.9,
    students: 412,
    instructor: "David Ames",
    duration: "12 horas",
    lessonsCount: 24,
    thumbnail: "",
    isPopular: true,
    updatedAt: "Enero 2026",
    modules: [
      {
        id: "m1",
        title: "Generación de Imágenes con IA",
        lessons: [
          { id: "l1", title: "Introducción a la IA generativa", duration: "20:00", isFree: true },
          { id: "l2", title: "Midjourney desde cero", duration: "30:00", isFree: false },
          { id: "l3", title: "DALL-E y alternativas", duration: "25:00", isFree: false },
          { id: "l4", title: "Stable Diffusion avanzado", duration: "35:00", isFree: false },
        ],
      },
      {
        id: "m2",
        title: "Audio y Música con IA",
        lessons: [
          { id: "l5", title: "Text-to-Speech profesional", duration: "25:00", isFree: false },
          { id: "l6", title: "Creación de música con Suno", duration: "30:00", isFree: false },
        ],
      },
    ],
    whatYouLearn: [
      "Crear imágenes profesionales con IA",
      "Generar audio y música con IA",
      "Producir videos con herramientas de IA",
      "Workflows creativos con IA generativa",
    ],
    requirements: ["No se requiere experiencia previa en diseño", "Computadora con conexión a internet"],
    forWho: ["Creadores de contenido", "Diseñadores", "Marketers creativos"],
  },
];

export const currentUser: User = {
  id: "u1",
  name: "María González",
  email: "maria@example.com",
  avatar: "",
  plan: "free",
  points: 150,
  streak: 5,
  position: 47,
  coursesInProgress: 1,
  coursesCompleted: 1,
  totalHours: 12,
  badges: [
    { id: "b1", name: "Primera Lección", icon: "🎓", description: "Completa tu primera lección", unlocked: true, unlockedAt: "15 Ene 2026" },
    { id: "b2", name: "Curso Completado", icon: "🏆", description: "Termina tu primer curso", unlocked: true, unlockedAt: "28 Ene 2026" },
    { id: "b3", name: "Experto en IA", icon: "🤖", description: "Completa 5 cursos de IA", unlocked: false },
    { id: "b4", name: "Marketing Master", icon: "📊", description: "Completa 5 cursos de Marketing", unlocked: false },
    { id: "b5", name: "Community Helper", icon: "💬", description: "Ayuda a 10 estudiantes en el foro", unlocked: false },
    { id: "b6", name: "Racha de Fuego", icon: "🔥", description: "7 días consecutivos aprendiendo", unlocked: false },
    { id: "b7", name: "Perfeccionista", icon: "⭐", description: "Obtén 100% en 3 cursos", unlocked: false },
    { id: "b8", name: "Social Learner", icon: "👥", description: "Conecta con 20 estudiantes", unlocked: false },
  ],
  enrolledCourses: [
    { courseId: "ia-marketing-7-dias", progress: 100, lastLesson: "Proyecto final: Tu plan de IA", completed: true },
    { courseId: "prompt-engineering", progress: 60, lastLesson: "Few-Shot Learning", completed: false },
  ],
};

export const leaderboard = [
  { position: 1, name: "Ana Martínez", points: 1240, courses: 8, avatar: "", plan: "elite" as const },
  { position: 2, name: "Roberto Silva", points: 980, courses: 7, avatar: "", plan: "pro" as const },
  { position: 3, name: "Laura Chen", points: 870, courses: 6, avatar: "", plan: "elite" as const },
  { position: 4, name: "Carlos Ramírez", points: 520, courses: 3, avatar: "", plan: "pro" as const },
  { position: 5, name: "Diana López", points: 480, courses: 4, avatar: "", plan: "pro" as const },
  { position: 6, name: "Miguel Torres", points: 440, courses: 3, avatar: "", plan: "pro" as const },
  { position: 7, name: "Sofia Herrera", points: 410, courses: 3, avatar: "", plan: "free" as const },
  { position: 8, name: "Andrés Vega", points: 380, courses: 2, avatar: "", plan: "free" as const },
  { position: 9, name: "Valentina Ruiz", points: 350, courses: 3, avatar: "", plan: "pro" as const },
  { position: 10, name: "Javier Morales", points: 320, courses: 2, avatar: "", plan: "free" as const },
];

export const testimonials: Testimonial[] = [
  {
    name: "Carlos Ramírez",
    title: "Director de Marketing en TechCorp",
    avatar: "",
    quote: "Gracias a los cursos de David, implementé IA en mi equipo de marketing y triplicamos nuestra productividad en solo 2 meses.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    title: "Fundadora de StartupIA",
    avatar: "",
    quote: "El curso de Prompt Engineering cambió completamente mi forma de trabajar con IA. Ahora soy 10x más productiva.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    title: "Freelancer & Consultor Digital",
    avatar: "",
    quote: "De no saber nada de IA a automatizar todo mi negocio. Los cursos son increíblemente prácticos y bien estructurados.",
    rating: 5,
  },
];

export const forumThreads: ForumThread[] = [
  {
    id: "t1",
    title: "¿Cómo optimizar prompts para Claude?",
    preview: "He estado experimentando con diferentes técnicas de prompting para Claude y quería compartir mis hallazgos...",
    author: "Carlos Ramírez",
    authorAvatar: "",
    category: "IA para Profesionales",
    replies: 12,
    upvotes: 34,
    lastActivity: "Hace 2 horas",
    solved: true,
  },
  {
    id: "t2",
    title: "Mejores prácticas para A/B testing con IA",
    preview: "¿Alguien ha probado usar IA para generar variantes de A/B testing? Estoy buscando herramientas recomendadas...",
    author: "Diana López",
    authorAvatar: "",
    category: "Marketing Digital con IA",
    replies: 5,
    upvotes: 18,
    lastActivity: "Hace 5 horas",
    solved: false,
  },
  {
    id: "t3",
    title: "Compartiendo mi proyecto final del curso",
    preview: "Acabo de terminar el proyecto final del curso de IA Generativa y quería compartir mi portfolio de creaciones...",
    author: "Ana Martínez",
    authorAvatar: "",
    category: "IA para Profesionales",
    replies: 23,
    upvotes: 67,
    lastActivity: "Hace 1 día",
    solved: false,
  },
  {
    id: "t4",
    title: "Duda sobre la lección 4 de Email Marketing",
    preview: "En la lección sobre segmentación inteligente, no me queda claro cómo configurar los triggers automáticos...",
    author: "Miguel Torres",
    authorAvatar: "",
    category: "Marketing Digital con IA",
    replies: 8,
    upvotes: 12,
    lastActivity: "Hace 2 días",
    solved: true,
  },
];

export const notifications: Notification[] = [
  { id: "n1", message: "Nueva lección disponible en 'IA para Marketing'", time: "Hace 2h", read: false },
  { id: "n2", message: "¡Has desbloqueado el badge 'Curso Completado'!", time: "Hace 5h", read: false },
  { id: "n3", message: "Carlos Ramírez respondió tu pregunta en el foro", time: "Hace 1d", read: true },
  { id: "n4", message: "Próximo webinar en vivo: Jueves 3pm", time: "Hace 2d", read: true },
];
