import type { PricingPlan, Testimonial } from "@/lib/types";

export const plans: PricingPlan[] = [
  {
    name: "Free",
    monthlyPrice: 0,
    annualPrice: 0,
    badge: "",
    features: [
      { text: "Acceso al primer módulo de cada curso", included: true },
      { text: "Mini-curso introductorio", included: true },
      { text: "Comunidad gratuita", included: true },
      { text: "Cursos completos", included: false },
      { text: "Certificados de finalización", included: false },
      { text: "Sesiones en vivo", included: false },
    ],
    cta: "Crear Cuenta Gratis",
    highlighted: false,
  },
  {
    name: "Pro",
    monthlyPrice: 29,
    annualPrice: 290,
    badge: "Recomendado",
    features: [
      { text: "Acceso a TODOS los cursos completos", included: true },
      { text: "Nuevos cursos y actualizaciones", included: true },
      { text: "Comunidad VIP de Alumnos", included: true },
      { text: "Certificados verificados", included: true },
      { text: "Recursos y plantillas descargables", included: true },
      { text: "Mentorías en vivo", included: false },
    ],
    cta: "Comenzar con Pro",
    highlighted: true,
  },
  {
    name: "Elite",
    monthlyPrice: 99,
    annualPrice: 990,
    badge: "VIP",
    features: [
      { text: "TODO lo del plan Pro", included: true },
      { text: "1 sesión grupal de Q&A al mes", included: true },
      { text: "Auditoría de tu proyecto (1 al mes)", included: true },
      { text: "Llamada de bienvenida de 15 min", included: true },
      { text: "Networking selecto", included: true },
      { text: "Soporte prioritario por WhatsApp", included: true },
    ],
    cta: "Lista de Espera",
    highlighted: false,
  },
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
