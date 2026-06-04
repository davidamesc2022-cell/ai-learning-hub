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
    title: "Dueño de E-commerce y Emprendedor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120",
    quote: "Gracias a las estrategias de IA de David, logramos automatizar el contenido de nuestras redes y el soporte de nuestra tienda online. Nuestras ventas subieron un 40% en 2 meses.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    title: "Propietaria de Agencia Creativa y Fundadora",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
    quote: "El curso práctico de inteligencia artificial me permitió optimizar la creación de propuestas y piezas gráficas para mis clientes. Hacemos en horas lo que antes nos tomaba días.",
    rating: 5,
  },
  {
    name: "Roberto Silva",
    title: "Consultor de Negocios y Fundador Pyme",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120&h=120",
    quote: "Tenía miedo de que la IA fuera compleja, pero David la enseña de forma muy práctica. Logré implementar flujos automáticos en mi negocio y reduje costos operativos.",
    rating: 5,
  },
];
