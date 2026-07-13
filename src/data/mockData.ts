// ─────────────────────────────────────────────────────────────
// Tipos importados desde lib/types.ts (fuente única de verdad)
// ─────────────────────────────────────────────────────────────
import type {
  Course,
  User,
  Testimonial,
  ForumThread,
  Notification,
  LeaderboardEntry,
} from "@/lib/types";

export type {
  Course,
  Module,
  Lesson,
  Resource,
  User,
  Badge,
  EnrolledCourse,
  Testimonial,
  ForumThread,
  ForumReply,
  Notification,
  LeaderboardEntry,
} from "@/lib/types";

export const courses: Course[] = [
  {
    id: "ia-marketing-7-dias",
    title: "IA para Marketing en 7 Días",
    description: "Aprenda a integrar inteligencia artificial en su estrategia de marketing digital en solo una semana con casos prácticos.",
    longDescription: "Este curso intensivo te llevará de cero a experto en el uso de herramientas de IA para marketing digital. Aprenderás a crear contenido con ChatGPT, automatizar campañas y analizar datos con IA.",
    category: "marketing",
    categoryLabel: "Marketing Digital",
    level: "Principiante",
    price: 49.99,
    isFree: false,
    rating: 4.9,
    students: 1250,
    instructor: "David Ames",
    duration: "4 horas",
    lessonsCount: 12,
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    isPopular: true,
    updatedAt: "Octubre 2023",
    modules: [
      {
        id: "m1",
        title: "Día 1: Fundamentos de IA en Marketing",
        lessons: [
          { id: "l1", title: "Introducción y bienvenida", duration: "10:00", isFree: true, isCompleted: true, videoUrl: "https://www.youtube.com/watch?v=LXb3EKWsInQ" },
          { id: "l2", title: "¿Qué es la IA generativa?", duration: "15:30", isFree: true, isCompleted: false, videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U" },
        ],
      },
      {
        id: "m2",
        title: "Día 2: Creación de Contenido con ChatGPT",
        lessons: [
          { id: "l3", title: "Prompts eficientes para copy", duration: "20:00", isFree: false, isCompleted: false, videoUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw" },
          { id: "l4", title: "Automatizando blogs y redes sociales", duration: "25:00", isFree: false, isCompleted: false, videoUrl: "https://www.youtube.com/watch?v=VlPiUkzgjcI" },
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
    id: "c0000000-0000-0000-0000-000000000002",
    title: "MÉTODO 4C IA",
    description: "IA práctica para emprendedores y dueños de negocio.",
    longDescription: "El Método 4C es un ecosistema educativo diseñado para llevar un emprendimiento desde la definición estratégica hasta el cierre de ventas predecibles, apoyado en inteligencia artificial. De la improvisación a un sistema práctico para entender, construir, comunicar y convertir.",
    category: "ia",
    categoryLabel: "IA para Profesionales",
    level: "Intermedio",
    price: 49.00,
    isFree: false,
    rating: 4.9,
    students: 856,
    instructor: "David Ames",
    duration: "10 horas",
    lessonsCount: 38,
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    isNew: true,
    isPopular: true,
    updatedAt: "Julio 2026",
    modules: [
      {
        id: "a5bac610-3c0c-49a5-a237-7c01ca47aafa",
        title: "MÓDULO 0: BASES DE IA Y TRABAJO",
        lessons: [
          {
            id: "0d793b01-fe6d-41ee-a345-653dd727f4b0",
            title: "Clase 0.1 - Bienvenida y mapa del recorrido",
            duration: "10:00",
            isFree: true,
            description: "Presentación del propósito del curso, la transformación esperada y la lógica de las cuatro C. El alumno entiende qué construirá en cada etapa y por qué el orden importa.",
            resources: [{"id":"recurso-m-dulo-0-0-1","name":"Entregable: Mapa personal de objetivos del curso: qué quiere ordenar, crear, comunicar y mejorar comercialmente.","url":"","type":"template"}]
          },
          {
            id: "b974a3a1-c6d8-4858-ac3a-7f0c47d86f14",
            title: "Clase 0.2 - Diagnóstico inicial 4C",
            duration: "10:00",
            isFree: true,
            description: "Evaluación sencilla del estado actual del negocio en Claridad, Creatividad, Comunicación y Conversión. No busca calificar al alumno, sino establecer una línea base para comparar avances.",
            resources: [{"id":"recurso-m-dulo-0-0-2","name":"Entregable: Scorecard inicial 4C con fortalezas, vacíos principales y prioridades de implementación.","url":"","type":"template"}]
          },
          {
            id: "95b77ce3-5dfe-4427-a9b9-e6b5a14e828b",
            title: "Clase 0.3 - IA generativa para negocios: qué puede hacer y qué no",
            duration: "10:00",
            isFree: false,
            description: "Introducción práctica al uso de IA para investigar, analizar, redactar, crear imágenes, producir contenido y apoyar tareas comerciales. Se explican límites básicos: puede equivocarse, inventar información y producir resultados pobres cuando recibe poco contexto.",
            resources: [{"id":"recurso-m-dulo-0-0-3","name":"Entregable: Mapa de usos de IA aplicables al negocio del alumno.","url":"","type":"template"}]
          },
          {
            id: "8033321e-3876-41da-a030-4bb0c131c896",
            title: "Clase 0.4 - Cómo dar contexto y trabajar por iteraciones",
            duration: "10:00",
            isFree: false,
            description: "El alumno aprende una lógica transversal para trabajar con IA: Contexto → Objetivo → Instrucción → Criterios → Formato → Revisión → Mejora. Esta lógica se reutiliza durante las cuatro C.",
            resources: [{"id":"recurso-m-dulo-0-0-4","name":"Entregable: Ficha de Contexto Maestro del Negocio para utilizar como base en ejercicios y asistentes de IA.","url":"","type":"template"}]
          },
          {
            id: "4dfe0667-9013-41e0-a106-1e9fe5752318",
            title: "Clase 0.5 - Criterio humano, validación y uso responsable",
            duration: "10:00",
            isFree: false,
            description: "Criterios prácticos para revisar respuestas, contrastar información, proteger datos sensibles, cuidar derechos de imagen y evitar automatizar decisiones que necesitan juicio humano.",
            resources: [{"id":"recurso-m-dulo-0-0-5","name":"Entregable: Checklist personal de revisión y validación de resultados generados con IA.","url":"","type":"template"}]
          }
        ]
      },
      {
        id: "aaa5a67f-2f92-46a6-a283-537e4196ddea",
        title: "C1: CLARIDAD — Entender y Definir",
        lessons: [
          {
            id: "f48be256-246d-48a8-a84b-b95f85deba47",
            title: "Clase 1.1 - Briefing del negocio",
            duration: "15:00",
            isFree: false,
            description: "El briefing del negocio es la radiografía interna del emprendimiento. Sirve para ordenar la información básica: qué vende, cómo está funcionando, qué productos o servicios tiene, qué canales usa, qué problemas enfrenta y qué objetivos quiere lograr.\n\n*Por qué importa:* Porque antes de usar IA, crear contenido o hacer marketing, el emprendedor necesita entender su propio negocio. Si no tiene claro qué ofrece, a quién sirve y qué necesita mejorar, cualquier contenido que cree será improvisado.",
            resources: [{"id":"recurso-c1-1-1","name":"Entregable: Un briefing estratégico del negocio, con información base para trabajar toda la metodología.","url":"","type":"template"}]
          },
          {
            id: "22b9b834-6dc4-4721-aedd-464e3c66b539",
            title: "Clase 1.2 - Estudio de mercado 80/20",
            duration: "15:00",
            isFree: false,
            description: "El estudio de mercado 80/20 es una investigación práctica, simple y accionable del entorno donde compite el negocio. No busca hacer un informe complicado, sino entender qué están haciendo otros, cómo comunican, qué venden, qué precios manejan y qué oportunidades existen.\n\n*Por qué importa:* Porque muchos emprendedores toman decisiones solo desde su intuición. El estudio de mercado permite observar la realidad externa y detectar espacios para diferenciarse, mejorar la oferta y comunicar mejor.",
            resources: [{"id":"recurso-c1-1-2","name":"Entregable: Un mapa simple de mercado, con competidores, referencias, oportunidades, riesgos y posibles espacios de diferenciación.","url":"","type":"template"}]
          },
          {
            id: "86cb479f-e96c-453a-abfd-293f78a8c12d",
            title: "Clase 1.3 - Cliente ideal profundo",
            duration: "15:00",
            isFree: false,
            description: "El cliente ideal profundo es una descripción estratégica y humana de la persona que más puede valorar, necesitar y comprar la oferta del negocio. No se queda solo en edad, género o ubicación; busca entender su situación, comportamiento, necesidades, deseos y forma de decidir.\n\n*Por qué importa:* Porque cuando el emprendedor intenta hablarle a todos, termina conectando con nadie. Definir bien al cliente ideal permite crear mensajes, contenidos, ofertas y ventas mucho más precisas.",
            resources: [{"id":"recurso-c1-1-3","name":"Entregable: Un avatar profundo del cliente ideal, con datos demográficos, contexto, necesidades, deseos, objeciones, comportamiento de compra y motivaciones.","url":"","type":"template"}]
          },
          {
            id: "fcd4251a-1a91-419f-acae-0148bfd880e0",
            title: "Clase 1.4 - Afirmaciones del cliente ideal",
            duration: "15:00",
            isFree: false,
            description: "Las afirmaciones del cliente ideal son frases escritas en primera persona, como si el cliente estuviera hablando. Sirven para expresar sus dolores, deseos, miedos e intentos fallidos con un lenguaje más emocional y cercano.\n\n*Por qué importa:* Porque el contenido no debe nacer solo desde lo que el negocio quiere vender, sino desde lo que el cliente realmente siente, piensa y necesita escuchar. Las afirmaciones ayudan a crear mensajes más humanos.",
            resources: [{"id":"recurso-c1-1-4","name":"Entregable: Una matriz de afirmaciones del cliente ideal, organizada en bloques como:\n\nqué me duele;\n\nqué quiero lograr;\n\nqué miedo tengo;\n\nqué ya intenté;\n\nqué me frustra;\n\nqué necesito.","url":"","type":"template"}]
          },
          {
            id: "252f5343-ecd9-4034-a17e-5e2ab6c4991f",
            title: "Clase 1.5 - Microdolores",
            duration: "15:00",
            isFree: false,
            description: "Los microdolores son dolores específicos, concretos y profundos que vive el cliente en situaciones reales. No son problemas generales; son escenas, frustraciones o tensiones que afectan su día a día, su autoestima, sus decisiones, su negocio o su seguridad.\n\n*Por qué importa:* Porque los microdolores hacen que el contenido conecte más. Un dolor general puede sonar frío, pero un microdolor hace que el cliente diga: “Eso me pasa a mí”.",
            resources: [{"id":"recurso-c1-1-5","name":"Entregable: Una lista de microdolores prioritarios, clasificados por dolor emocional, dolor práctico, frustración, miedo, objeción o intento fallido.","url":"","type":"template"}]
          },
          {
            id: "0bfb41b5-473d-41cf-a4c4-65337194acd2",
            title: "Clase 1.6 - Propuesta de valor",
            duration: "15:00",
            isFree: false,
            description: "La propuesta de valor es la promesa clara de beneficio que hace el negocio. Explica qué problema resuelve, qué resultado entrega, por qué importa y por qué esa solución tiene valor para el cliente.\n\n*Por qué importa:* Porque si el emprendedor no sabe explicar su valor, el cliente tampoco lo va a entender. La propuesta de valor convierte el negocio en una solución clara, no solo en un producto o servicio más.",
            resources: [{"id":"recurso-c1-1-6","name":"Entregable: Una propuesta de valor principal, una versión corta comercial, una promesa de transformación y mensajes clave de beneficio.","url":"","type":"template"}]
          },
          {
            id: "0ced63e0-7aea-42fc-a4c3-ad27036981cf",
            title: "Clase 1.7 - Posicionamiento",
            duration: "15:00",
            isFree: false,
            description: "El posicionamiento es el lugar que queremos ocupar en la mente del cliente. Define cómo queremos que el mercado nos recuerde, por qué deberían elegirnos y qué diferencia queremos defender frente a otras alternativas.\n\n*Por qué importa:* Porque si el negocio no define su posición, el mercado lo compara por precio, cercanía, moda o apariencia. El posicionamiento ayuda a que el cliente entienda por qué esa opción es diferente y valiosa.",
            resources: [{"id":"recurso-c1-1-7","name":"Entregable: Una declaración de posicionamiento, con cliente objetivo, categoría, resultado prometido, diferencial y razón para creer.","url":"","type":"template"}]
          },
          {
            id: "b16cdf3d-1cfb-4d0c-a3fb-a3fe61fff689",
            title: "Clase 1.8 - Branding estratégico base",
            duration: "15:00",
            isFree: false,
            description: "El branding estratégico base es la definición de cómo debe sentirse, sonar y verse la marca. No es solo logo o colores; también incluye personalidad, tono de voz, estilo visual, mensajes eje y criterios de comunicación.\n\n*Por qué importa:* Porque una marca sin coherencia genera confusión. El branding ayuda a que todo lo que el negocio comunique tenga una misma dirección: los flyers, los carruseles, los videos, los textos, las promociones y la atención.",
            resources: [{"id":"recurso-c1-1-8","name":"Entregable: Una guía básica de marca, con personalidad, tono de voz, estilo visual, mensajes principales, palabras clave, colores de referencia y criterios de comunicación.","url":"","type":"template"}]
          },
          {
            id: "2447c5e7-b95f-40ab-a6fa-40475d15d4ae",
            title: "Clase 1.9 - Plan de contenido",
            duration: "15:00",
            isFree: false,
            description: "El plan de contenido es la estructura que organiza qué va a publicar el negocio, para quién, con qué objetivo, desde qué ángulo y en qué formato. Incluye pilares, ideas, temas, formatos, intención y posibles llamados a la acción.\n\n*Por qué importa:* Porque sin plan de contenido, el emprendedor publica por ocurrencia: un día una promoción, otro día una frase, otro día un video sin dirección. El plan permite crear contenido que atrae, educa, genera confianza y prepara la venta.",
            resources: [{"id":"recurso-c1-1-9","name":"Entregable: Un plan de contenido estratégico, que incluye pilares, objetivos, ideas iniciales, formatos recomendados, etapa del embudo y llamados a la acción.","url":"","type":"template"}]
          }
        ]
      },
      {
        id: "e7618d1c-3cfc-43b3-aeaf-b6b80db7a6eb",
        title: "C2: CREATIVIDAD — Diseñar y Construir",
        lessons: [
          {
            id: "f353a4a8-6796-40d3-a3af-b7476098ad55",
            title: "Clase 2.1 - Traducción visual de la marca",
            duration: "15:00",
            isFree: false,
            description: "La traducción visual de la marca es el proceso de convertir las decisiones estratégicas definidas en C1 en una dirección visual concreta.\n\nEn C1 el emprendedor definió aspectos como personalidad de marca, posicionamiento, tono, mensajes principales, características del cliente y criterios generales de branding.\n\nEn esta clase esos conceptos comienzan a transformarse en decisiones visuales.\n\nPor ejemplo, una marca puede haber definido en C1 que quiere ser percibida como:\n\n*   cercana;\n*   confiable;\n*   artesanal;\n*   moderna;\n*   tecnológica;\n*   educativa;\n*   premium;\n*   juvenil;\n*   familiar.\n\nAhora necesita responder cómo se representa visualmente esa percepción.\n\n*Por qué importa:* Porque una marca puede tener claridad estratégica y, aun así, comunicar visualmente de forma incoherente.\n\nPor ejemplo, un negocio que quiere transmitir confianza y profesionalismo puede utilizar diferentes estilos de imágenes, colores sin relación entre sí, diseños improvisados y fotografías que no representan correctamente al cliente.\n\nLa traducción visual ayuda a crear una dirección común antes de comenzar a diseñar.\n\nNo se trata todavía de hacer flyers o imágenes, sino de decidir:\n\ncómo debe verse el negocio antes de comenzar a crear.",
            resources: [{"id":"recurso-c2-2-1","name":"Entregable: Un Brief de Dirección Visual, que contiene:\n\n*   personalidad visual;\n*   atmósfera de marca;\n*   estilos de imagen recomendados;\n*   referencias visuales;\n*   escenarios principales;\n*   características de los personajes;\n*   iluminación;\n*   colores predominantes;\n*   tipo de composición;\n*   elementos gráficos recomendados;\n*   elementos visuales que deben evitarse.\n\nEste brief servirá como contexto para trabajar posteriormente con herramientas de inteligencia artificial.","url":"","type":"template"}]
          },
          {
            id: "e26415a6-99d8-474b-a04f-591e6fd053bc",
            title: "Clase 2.2 - Identidad visual y creación de logo",
            duration: "15:00",
            isFree: false,
            description: "La identidad visual es el conjunto de elementos gráficos que permiten reconocer una marca y mantener coherencia en su comunicación.\n\nIncluye el logo, las versiones del logo, la paleta de colores, las tipografías, los elementos gráficos complementarios y algunas reglas básicas de uso.\n\nEsta clase no busca reemplazar el trabajo profesional de una agencia o diseñador especializado cuando el proyecto requiere un desarrollo de branding avanzado.\n\nSu objetivo es permitir que el emprendedor pueda construir una base visual coherente para comenzar a comunicar profesionalmente su negocio.\n\n*Por qué importa:* Porque muchos emprendimientos crean publicaciones sin una identidad reconocible.\n\nUn día utilizan un color, otro día otro estilo, diferentes tipografías y diseños que parecen pertenecer a negocios distintos.\n\nUna identidad visual básica permite comenzar a construir reconocimiento y coherencia.\n\nEl logo es parte de este sistema, pero no es toda la marca.\n\nLa estrategia de la marca fue definida en C1. En C2 se convierte esa estrategia en un sistema visual aplicable.",
            resources: [{"id":"recurso-c2-2-2","name":"Entregable: Un Kit Básico de Identidad Visual, compuesto por:\n\n*   logo principal;\n*   versión horizontal o secundaria, cuando corresponda;\n*   versión clara;\n*   versión oscura;\n*   versión con fondo transparente;\n*   símbolo, monograma o isotipo, cuando aplique;\n*   paleta principal de colores;\n*   tipografías recomendadas;\n*   elementos gráficos de apoyo;\n*   guía básica de aplicación visual.","url":"","type":"template"}]
          },
          {
            id: "029dcea2-c4ac-4911-ac26-777669fa6157",
            title: "Clase 2.3 - Creación y edición de imágenes con inteligencia artificial",
            duration: "15:00",
            isFree: false,
            description: "La creación y edición de imágenes con inteligencia artificial es el proceso de generar, transformar o mejorar recursos visuales para responder a necesidades concretas del negocio.\n\nNo se trata simplemente de pedir imágenes bonitas.\n\nEl objetivo es aprender a crear imágenes con intención estratégica y coherencia con:\n\n*   el cliente ideal;\n*   la propuesta de valor;\n*   el posicionamiento;\n*   la identidad visual;\n*   el producto;\n*   la campaña;\n*   el contenido que se desea comunicar.\n\nLa inteligencia artificial puede utilizarse tanto para crear imágenes desde cero como para mejorar, modificar, ampliar o adaptar fotografías existentes.\n\n*Por qué importa:* Porque muchos pequeños negocios tienen dificultades para producir continuamente fotografías, escenas publicitarias o recursos visuales de calidad.\n\nLa inteligencia artificial permite ampliar las posibilidades creativas de manera accesible, siempre que exista una dirección clara.\n\nUna misma empresa puede necesitar diferentes tipos de imágenes:\n\n*   fotografías de producto;\n*   imágenes promocionales;\n*   escenarios;\n*   fondos;\n*   situaciones de uso;\n*   representaciones del cliente;\n*   imágenes educativas;\n*   imágenes aspiracionales;\n*   campañas estacionales.",
            resources: [{"id":"recurso-c2-2-3","name":"Entregable: Una Biblioteca Inicial de Imágenes del Negocio, organizada en categorías como:\n\n*   producto;\n*   servicio;\n*   cliente;\n*   contexto de uso;\n*   imágenes promocionales;\n*   imágenes educativas;\n*   imágenes aspiracionales;\n*   fondos y escenarios;\n*   campañas especiales;\n*   recursos visuales complementarios.\n\nTambién deja una biblioteca de prompts visuales reutilizables.","url":"","type":"template"}]
          },
          {
            id: "53e7d114-ede3-4f94-add7-6496c9e8cb57",
            title: "Clase 2.4 - Visualización de productos y servicios",
            duration: "15:00",
            isFree: false,
            description: "La visualización de productos y servicios consiste en representar de manera clara y atractiva aquello que el negocio ofrece.\n\nEn el caso de productos físicos, permite mejorar su presentación, mostrar contextos de uso, generar diferentes escenarios y construir imágenes publicitarias.\n\nEn el caso de servicios, consultorías, capacitaciones o productos digitales, ayuda a representar visualmente algo que muchas veces no puede fotografiarse directamente.\n\n*Por qué importa:* Porque una buena oferta puede perder valor percibido cuando se presenta deficientemente.\n\nMuchos emprendedores tienen productos buenos, pero utilizan fotografías poco atractivas.\n\nOtros venden servicios y no saben cómo representarlos visualmente.\n\nLa creatividad aplicada permite hacer visible:\n\n*   el producto;\n*   la experiencia;\n*   el uso;\n*   la transformación;\n*   el resultado;\n*   el beneficio.\n\nLa idea central es:\n\nNo solamente mostrar qué vendo, sino ayudar al cliente a imaginar qué significa utilizarlo, vivirlo o conseguirlo.",
            resources: [{"id":"recurso-c2-2-4","name":"Entregable: Un Kit Visual de Producto o Servicio, que puede incluir:\n\n*   imágenes principales de producto;\n*   escenas de uso;\n*   fondos publicitarios;\n*   mockups;\n*   representación de servicios;\n*   imágenes de experiencia;\n*   composición de paquetes;\n*   visualización de beneficios;\n*   imágenes aspiracionales;\n*   diferentes contextos comerciales.","url":"","type":"template"}]
          },
          {
            id: "ba7d678f-4342-49af-ace9-e0e8a6b65be8",
            title: "Clase 2.5 - Flyers y piezas visuales promocionales",
            duration: "15:00",
            isFree: false,
            description: "Las piezas visuales promocionales son recursos gráficos creados para comunicar una oferta, promoción, evento, lanzamiento, producto, servicio o mensaje comercial.\n\nEl flyer forma parte de esta categoría, pero no es el único formato.\n\nDependiendo del negocio, también pueden existir:\n\n*   publicaciones promocionales;\n*   historias;\n*   estados de WhatsApp;\n*   menús;\n*   catálogos simples;\n*   banners;\n*   piezas para eventos;\n*   promociones de temporada;\n*   anuncios;\n*   invitaciones;\n*   portadas.\n\nEl objetivo es aprender a organizar información visual y comercial de manera clara.\n\n*Por qué importa:* Porque una pieza promocional no solamente debe verse bonita.\n\nDebe permitir que una persona pueda comprender rápidamente:\n\n*   qué se ofrece;\n*   para quién es;\n*   cuál es el beneficio;\n*   cuál es la promoción;\n*   cómo puede comprar;\n*   qué acción debe realizar.\n\nMuchos flyers están saturados de información o no tienen una jerarquía clara.\n\nEl objetivo de esta clase es aprender a combinar creatividad, claridad y objetivo comercial.",
            resources: [{"id":"recurso-c2-2-5","name":"Entregable: Un Kit Básico de Piezas Promocionales, que puede incluir:\n\n*   flyer promocional;\n*   pieza para oferta;\n*   historia vertical;\n*   estado de WhatsApp;\n*   publicación de producto;\n*   pieza para lanzamiento;\n*   pieza para evento;\n*   promoción de temporada.\n\nAdemás, deja una estructura visual reutilizable para futuras campañas.","url":"","type":"template"}]
          },
          {
            id: "4fa94b61-0a70-43c5-a180-2e66d299c5cd",
            title: "Clase 2.6 - Carruseles y sistemas visuales de contenido",
            duration: "15:00",
            isFree: false,
            description: "El carrusel es una secuencia de piezas visuales conectadas que permiten desarrollar una idea, explicar un problema, educar, contar una historia, mostrar un proceso o presentar una solución.\n\nDentro de C2, el objetivo no es profundizar todavía en copywriting, hooks o storytelling.\n\nEse trabajo corresponde principalmente a C3 Comunicación.\n\nEn esta etapa se trabajará la estructura visual del carrusel:\n\n*   portada;\n*   jerarquía;\n*   composición;\n*   continuidad;\n*   ritmo;\n*   consistencia;\n*   distribución del texto;\n*   uso de imágenes;\n*   cierre visual.\n\n*Por qué importa:* Porque una idea valiosa puede perder impacto cuando se presenta de manera desordenada.\n\nEl carrusel permite organizar información en pequeños bloques visuales y facilitar su consumo.\n\nAdemás, un buen sistema visual permite que el emprendedor no tenga que comenzar un diseño desde cero cada vez que desea publicar.\n\nLa meta es construir estructuras reutilizables.",
            resources: [{"id":"recurso-c2-2-6","name":"Entregable: Un Sistema Visual de Carruseles, que incluye:\n\n*   portada;\n*   estructura interior;\n*   diferentes tipos de páginas;\n*   página de transición;\n*   página de ejemplo;\n*   cierre;\n*   CTA visual;\n*   reglas de composición;\n*   una o dos plantillas reutilizables.","url":"","type":"template"}]
          },
          {
            id: "c857e232-fe25-4895-a1fa-47d3410c8c15",
            title: "Clase 2.7 - Avatares, personajes y portavoces digitales",
            duration: "15:00",
            isFree: false,
            description: "Los avatares, personajes y portavoces digitales son representaciones visuales creadas para cumplir una función de comunicación dentro de una marca.\n\nPueden utilizarse como:\n\n*   mascota de marca;\n*   personaje comercial;\n*   representación del cliente ideal;\n*   protagonista de historias;\n*   portavoz virtual;\n*   presentador;\n*   personaje educativo;\n*   personaje recurrente para videos.\n\nNo todos los negocios necesitan un avatar.\n\nLa decisión debe depender de la estrategia, el público y los objetivos de comunicación.\n\nPor ejemplo:\n\nUn restaurante puede tener un personaje relacionado con su historia.\n\nUna academia puede utilizar un portavoz digital para explicar conceptos.\n\nUna marca infantil puede construir una mascota.\n\nUna empresa de servicios puede crear personajes que representen situaciones reales de sus clientes.\n\n*Por qué importa:* Porque las personas conectan con historias, rostros y personajes.\n\nUn personaje consistente puede ayudar a:\n\n*   generar reconocimiento;\n*   explicar ideas;\n*   representar problemas;\n*   dramatizar situaciones;\n*   contar historias;\n*   humanizar una marca;\n*   preparar contenidos audiovisuales.\n\nSin embargo, para que funcione necesita consistencia visual.\n\nNo basta crear una persona diferente cada vez.",
            resources: [{"id":"recurso-c2-2-7","name":"Entregable: Una Ficha Maestra de Personaje Visual, que incluye:\n\n*   función estratégica;\n*   descripción física;\n*   personalidad;\n*   vestuario;\n*   accesorios;\n*   colores;\n*   expresiones;\n*   poses;\n*   escenarios;\n*   estilo visual;\n*   referencias;\n*   prompts base;\n*   biblioteca inicial de imágenes consistentes.\n\nEl alumno también puede dejar preparado un personaje principal para utilizar posteriormente en contenidos de C3.","url":"","type":"template"}]
          }
        ]
      },
      {
        id: "6156352d-4507-4fdf-a67d-826415dd258a",
        title: "C3: COMUNICACIÓN — Expresar, Producir y Publicar",
        lessons: [
          {
            id: "8877a852-3f7f-429e-a582-8dbc9052443f",
            title: "Clase 3.1 - Mensaje y copywriting aplicado",
            duration: "15:00",
            isFree: false,
            description: "El mensaje es la forma en que el negocio convierte sus conocimientos, ideas, experiencia, propuesta de valor y comprensión del cliente en palabras que las personas puedan entender.\n\nEl copywriting aplicado es el uso estratégico de palabras para captar atención, explicar una idea, generar interés, conectar con un problema, mostrar un beneficio y motivar una acción.\n\nEn esta clase no se busca convertir al emprendedor en un redactor profesional.\n\nEl objetivo es ayudarlo a dejar de comunicar desde frases genéricas como:\n\n_“Somos una empresa comprometida con nuestros clientes.”_\n\n_“Ofrecemos productos de calidad.”_\n\n_“Tenemos el mejor servicio.”_\n\nY comenzar a construir mensajes más concretos, humanos y conectados con la realidad del cliente.\n\nC1 ya ayudó al emprendedor a entender:\n\n*   quién es su cliente;\n*   qué necesita;\n*   qué desea;\n*   qué teme;\n*   qué ha intentado;\n*   qué le frustra;\n*   qué valor ofrece el negocio.\n\nAhora C3 convierte toda esa información en comunicación.\n\n*Por qué importa:* Porque un negocio puede tener un buen producto y aun así no saber explicarlo.\n\nMuchos emprendedores conocen muy bien su trabajo, pero cuando tienen que comunicarlo utilizan palabras técnicas, frases generales o mensajes centrados únicamente en el producto.\n\nUna buena comunicación permite que el cliente comprenda rápidamente:\n\n*   qué problema se está hablando;\n*   por qué ese problema importa;\n*   qué oportunidad existe;\n*   qué solución ofrece el negocio;\n*   qué beneficio puede obtener;\n*   qué debería hacer después.\n\nLa comunicación empieza cuando el negocio deja de hablar solamente de sí mismo y aprende a conectar su propuesta con la realidad del cliente.",
            resources: [{"id":"recurso-c3-3-1","name":"Entregable: Una Matriz de Mensajes del Negocio, organizada en categorías como:\n\n*   mensajes de problema;\n*   mensajes de deseo;\n*   mensajes educativos;\n*   mensajes de oportunidad;\n*   mensajes de diferenciación;\n*   mensajes de autoridad;\n*   mensajes de experiencia;\n*   mensajes de transformación;\n*   mensajes comerciales;\n*   mensajes de confianza.\n\nTambién se construye una biblioteca inicial de frases y mensajes base para futuros contenidos.","url":"","type":"template"}]
          },
          {
            id: "61c78631-2a4b-4bb7-adae-1c88614210e3",
            title: "Clase 3.2 - Ángulos, hooks y llamados a la acción",
            duration: "15:00",
            isFree: false,
            description: "Los ángulos son diferentes maneras de abordar un mismo tema.\n\nEl hook o gancho es el inicio del contenido que busca detener la atención y generar suficiente interés para que la persona quiera continuar.\n\nEl llamado a la acción o CTA indica cuál debería ser el siguiente paso de la persona después de consumir el contenido.\n\nPor ejemplo, un mismo producto puede comunicarse desde diferentes ángulos:\n\n*   un problema;\n*   un error frecuente;\n*   un deseo;\n*   una comparación;\n*   una oportunidad;\n*   una historia;\n*   un mito;\n*   una demostración;\n*   un resultado;\n*   una experiencia personal.\n\nEl objetivo de esta clase es que el emprendedor deje de depender únicamente de la inspiración y aprenda a generar diferentes enfoques a partir de la información que ya tiene sobre su cliente.\n\n*Por qué importa:* Porque muchas veces el problema no es que el emprendedor no tenga nada que decir.\n\nEl problema es que siempre presenta sus ideas de la misma manera.\n\nPor ejemplo:\n\n_“Compra nuestro producto.”_\n\n_“Tenemos una promoción.”_\n\n_“Visítanos.”_\n\n_“Tenemos el mejor servicio.”_\n\nEse tipo de comunicación pierde rápidamente la atención.\n\nUn mismo tema puede generar muchos contenidos diferentes si se trabaja desde distintos ángulos.\n\nLos hooks ayudan a iniciar una conversación con fuerza.\n\nLos CTA ayudan a darle dirección.\n\nSin un llamado a la acción, una persona puede consumir el contenido, estar de acuerdo y continuar desplazándose sin realizar ninguna acción.",
            resources: [{"id":"recurso-c3-3-2","name":"Entregable: Una Biblioteca de Ángulos, Hooks y CTA, organizada en categorías como:\n\n*   dolor;\n*   deseo;\n*   miedo;\n*   error;\n*   curiosidad;\n*   comparación;\n*   mito;\n*   oportunidad;\n*   experiencia personal;\n*   demostración;\n*   transformación;\n*   pregunta;\n*   advertencia;\n*   aprendizaje.\n\nTambién se construyen llamados a la acción según el objetivo del contenido.","url":"","type":"template"}]
          },
          {
            id: "670cc86d-4c22-4bf3-a248-0789d68c350c",
            title: "Clase 3.3 - Storytelling y creación de guiones",
            duration: "15:00",
            isFree: false,
            description: "El storytelling es la capacidad de comunicar una idea mediante una estructura narrativa.\n\nEl guion es la organización previa del mensaje que se desea comunicar en un video, audio, presentación o contenido.\n\nNo todas las publicaciones necesitan contar una historia personal.\n\nSin embargo, todo contenido necesita algún tipo de estructura.\n\nUn video puede seguir una secuencia como:\n\nGancho → Contexto → Problema → Desarrollo → Aprendizaje → Solución → CTA\n\nOtro contenido puede utilizar:\n\nPregunta → Explicación → Ejemplo → Conclusión\n\nUn contenido comercial puede seguir:\n\nProblema → Consecuencia → Solución → Beneficio → Acción\n\nLa intención es que el emprendedor aprenda a organizar su pensamiento antes de grabar.\n\n*Por qué importa:* Porque muchas personas saben sobre un tema, pero cuando empiezan a grabar:\n\n*   se repiten;\n*   se desvían;\n*   utilizan demasiadas palabras;\n*   no llegan al punto;\n*   comienzan sin fuerza;\n*   terminan sin conclusión;\n*   no saben cómo conectar una idea con otra.\n\nEl guion ayuda a ordenar la comunicación.\n\nEl storytelling permite transformar información en una experiencia más humana y memorable.\n\nAdemás, las historias permiten comunicar:\n\n*   origen;\n*   decisiones;\n*   dificultades;\n*   aprendizajes;\n*   procesos;\n*   transformaciones;\n*   experiencias de clientes;\n*   historias de producto;\n*   historias del fundador.",
            resources: [{"id":"recurso-c3-3-3","name":"Entregable: Un Banco de Guiones del Negocio, que puede contener:\n\n*   guiones educativos;\n*   guiones problema–solución;\n*   guiones de errores frecuentes;\n*   guiones de oportunidad;\n*   guiones comerciales;\n*   guiones de demostración;\n*   historias del fundador;\n*   historias del producto;\n*   historias del cliente;\n*   guiones de transformación;\n*   guiones de preguntas y respuestas.\n\nTambién se deja una biblioteca de estructuras reutilizables.","url":"","type":"template"}]
          },
          {
            id: "bf04784d-b382-4bbe-ac03-4911a2b77dd1",
            title: "Clase 3.4 - Formatos de contenido y comunicación frente a cámara",
            duration: "15:00",
            isFree: false,
            description: "Los formatos de contenido son diferentes maneras de presentar un mensaje.\n\nEl formato se elige según:\n\n*   el objetivo;\n*   el tema;\n*   la personalidad de la marca;\n*   el tipo de negocio;\n*   el público;\n*   la plataforma;\n*   los recursos disponibles.\n\nAlgunos formatos son:\n\n*   hablando a cámara;\n*   narración con imágenes;\n*   tutorial;\n*   demostración;\n*   antes y después;\n*   preguntas y respuestas;\n*   lista de consejos;\n*   detrás de cámaras;\n*   proceso de trabajo;\n*   testimonio;\n*   entrevista;\n*   reacción;\n*   comparación;\n*   historia personal;\n*   presentación de producto;\n*   contenido tipo UGC;\n*   secuencia de escenas;\n*   video con avatar;\n*   video con voz en off.\n\nEsta clase también incluye fundamentos básicos para hablar frente a cámara.\n\n*Por qué importa:* Porque muchos emprendedores creen que hacer contenido significa colocarse frente al teléfono y hablar.\n\nEso genera bloqueos.\n\nUna persona puede comunicar mediante:\n\n*   su rostro;\n*   sus manos;\n*   su producto;\n*   una demostración;\n*   una entrevista;\n*   una narración;\n*   imágenes;\n*   un avatar;\n*   un proceso;\n*   una historia visual.\n\nAprender diferentes formatos permite encontrar maneras de comunicar que sean sostenibles para cada negocio.\n\nAdemás, hablar frente a cámara requiere algunos criterios básicos:\n\n*   mirar al lente;\n*   modular la voz;\n*   controlar la velocidad;\n*   utilizar pausas;\n*   dividir el mensaje por bloques;\n*   cuidar el encuadre;\n*   trabajar la iluminación;\n*   mantener naturalidad.",
            resources: [{"id":"recurso-c3-3-4","name":"Entregable: Un Mapa de Formatos de Contenido del Negocio, donde se define:\n\n*   qué formatos utilizará la marca;\n*   qué tipos de mensajes van en cada formato;\n*   qué formatos utilizar para educar;\n*   qué formatos utilizar para generar confianza;\n*   qué formatos utilizar para mostrar productos;\n*   qué formatos utilizar para vender;\n*   qué formatos utilizar para historias.\n\nTambién se preparan estructuras de grabación para los formatos principales.","url":"","type":"template"}]
          },
          {
            id: "59d9a97d-c4af-40ac-afd6-116b09619409",
            title: "Clase 3.5 - Creación de videos con inteligencia artificial",
            duration: "15:00",
            isFree: false,
            description: "La creación de videos con inteligencia artificial es el proceso de utilizar herramientas generativas para producir o transformar contenido audiovisual a partir de:\n\n*   texto;\n*   imágenes;\n*   personajes;\n*   productos;\n*   escenas;\n*   storyboards;\n*   referencias visuales.\n\nLa IA puede utilizarse para:\n\n*   generar clips;\n*   animar imágenes;\n*   crear movimientos;\n*   construir escenas;\n*   representar situaciones;\n*   desarrollar personajes;\n*   simular escenarios;\n*   crear demostraciones visuales;\n*   contar pequeñas historias.\n\nEl objetivo no es producir videos solamente porque la tecnología permite hacerlo.\n\nEl video debe responder siempre a un mensaje y un objetivo previamente definidos.\n\n*Por qué importa:* Porque la creación audiovisual tradicional puede requerir:\n\n*   locaciones;\n*   actores;\n*   cámaras;\n*   desplazamientos;\n*   producción;\n*   tiempo;\n*   presupuesto.\n\nLa inteligencia artificial abre posibilidades para pequeños negocios que antes no podían producir determinadas escenas.\n\nPor ejemplo:\n\nUn restaurante puede crear una historia visual sobre la llegada de un cliente.\n\nUna inmobiliaria puede representar experiencias.\n\nUna academia puede crear escenas educativas.\n\nUn profesional puede utilizar un avatar.\n\nUna marca puede animar sus productos.\n\nSin embargo, para obtener buenos resultados se necesita:\n\n*   concepto;\n*   guion;\n*   storyboard;\n*   consistencia visual;\n*   planificación por escenas;\n*   prompts claros.",
            resources: [{"id":"recurso-c3-3-5","name":"Entregable: Un Proyecto Audiovisual Básico con IA, compuesto por:\n\n*   concepto;\n*   guion;\n*   storyboard;\n*   lista de escenas;\n*   prompts;\n*   personajes;\n*   referencias;\n*   clips generados;\n*   secuencia audiovisual.\n\nTambién se deja una biblioteca de prompts para futuras producciones.","url":"","type":"template"}]
          },
          {
            id: "3289af26-3020-4a4b-a584-5d47e6f5b974",
            title: "Clase 3.6 - Voz, narración, música y sonido",
            duration: "15:00",
            isFree: false,
            description: "La comunicación audiovisual utiliza tanto imagen como sonido.\n\nEsta clase trabaja los elementos sonoros que acompañan o conducen una pieza de contenido:\n\n*   voz propia;\n*   voz en off;\n*   narración;\n*   voz generada con IA;\n*   diálogo;\n*   música;\n*   efectos de sonido;\n*   ambiente;\n*   silencios;\n*   pausas.\n\nLa voz no solamente transmite información.\n\nTambién transmite:\n\n*   confianza;\n*   cercanía;\n*   emoción;\n*   autoridad;\n*   energía;\n*   calma;\n*   urgencia.\n\nPor eso debe ser coherente con el mensaje y con la personalidad de la marca.\n\n*Por qué importa:* Porque un video visualmente bueno puede perder impacto cuando:\n\n*   la voz no se entiende;\n*   el volumen es deficiente;\n*   la música compite con el mensaje;\n*   el ritmo es demasiado lento;\n*   la narración no transmite emoción;\n*   los efectos distraen.\n\nTambién existen negocios donde el propietario no desea o no puede narrar todos sus contenidos.\n\nEn esos casos se pueden utilizar diferentes soluciones:\n\n*   voz en off;\n*   locución;\n*   voz generada con IA;\n*   narrador;\n*   avatar;\n*   combinación de voz y subtítulos.",
            resources: [{"id":"recurso-c3-3-6","name":"Entregable: Un Kit Básico de Voz y Sonido para Contenido, que contiene:\n\n*   estilo de narración;\n*   tono de voz recomendado;\n*   criterios de velocidad;\n*   criterios de música;\n*   tipos de efectos;\n*   ejemplos de narración;\n*   voces seleccionadas;\n*   audios producidos;\n*   biblioteca sonora básica.","url":"","type":"template"}]
          },
          {
            id: "78939339-7514-4945-a6cf-57257fded6f1",
            title: "Clase 3.7 - Edición, subtítulos y adaptación multiformato",
            duration: "15:00",
            isFree: false,
            description: "La edición es el proceso de organizar y combinar los elementos audiovisuales para construir una pieza final.\n\nIncluye:\n\n*   selección de clips;\n*   cortes;\n*   ritmo;\n*   secuencia;\n*   voz;\n*   música;\n*   efectos;\n*   textos;\n*   subtítulos;\n*   transiciones;\n*   portada;\n*   cierre;\n*   adaptación de formato.\n\nLa adaptación multiformato consiste en transformar una pieza principal para diferentes canales o necesidades.\n\nPor ejemplo, un mismo contenido puede convertirse en:\n\n*   TikTok;\n*   Reel;\n*   Short;\n*   historia;\n*   estado de WhatsApp;\n*   clip;\n*   versión resumida;\n*   fragmento educativo;\n*   contenido horizontal.\n\n*Por qué importa:* Porque grabar o generar un video no significa que el contenido esté terminado.\n\nLa edición ayuda a:\n\n*   eliminar partes innecesarias;\n*   mantener ritmo;\n*   reforzar ideas;\n*   facilitar la comprensión;\n*   agregar subtítulos;\n*   mejorar la experiencia.\n\nTambién permite aprovechar mejor el esfuerzo de producción.\n\nUn emprendedor no necesita crear una idea completamente diferente para cada plataforma.\n\nPuede desarrollar un contenido principal y adaptarlo de manera inteligente.",
            resources: [{"id":"recurso-c3-3-7","name":"Entregable: Un Sistema Básico de Edición y Reutilización de Contenido, que incluye:\n\n*   estructura de edición;\n*   formato de subtítulos;\n*   criterios de texto;\n*   portada;\n*   cierre;\n*   versión principal;\n*   adaptaciones;\n*   estrategia básica de reutilización.\n\nEl alumno deja varias piezas terminadas y listas para publicación.","url":"","type":"template"}]
          },
          {
            id: "aa03ab34-a773-4d54-a3d1-8fe2ef75d382",
            title: "Clase 3.8 - Calendarización, publicación y sistema de producción",
            duration: "15:00",
            isFree: false,
            description: "La calendarización de contenidos es la organización operativa de qué contenido se va a publicar, cuándo, dónde, con qué objetivo y en qué estado se encuentra.\n\nEsta clase no reemplaza el Plan de Contenido trabajado en C1.\n\nLa diferencia es la siguiente:\n\nC1 define estratégicamente qué temas, pilares y objetivos tendrá el contenido.\n\nC3 organiza operativamente cuándo se produce, edita y publica cada pieza.\n\nLa calendarización convierte la estrategia y los recursos creativos en ejecución.\n\nTambién se construye un sistema de producción que permita saber en qué etapa se encuentra cada contenido.\n\nPor ejemplo:\n\nIdea → Guion → Preparación → Grabación → Edición → Revisión → Programado → Publicado → Medición\n\n*Por qué importa:* Porque muchos emprendedores tienen:\n\n*   ideas;\n*   imágenes;\n*   diseños;\n*   guiones;\n*   videos;\n*   fotografías.\n\nPero no tienen un sistema que les permita publicar con consistencia.\n\nEl problema muchas veces no es falta de contenido.\n\nEs falta de organización.\n\nLa calendarización ayuda a conectar:\n\n*   la estrategia de C1;\n*   los recursos visuales de C2;\n*   los mensajes y videos de C3.\n\nAdemás, evita que el contenido se produzca de manera improvisada todos los días.",
            resources: [{"id":"recurso-c3-3-8","name":"Entregable: Un Calendario Editorial de 30 días y un Tablero Básico de Producción de Contenidos.\n\nEl calendario puede incluir:\n\n*   fecha;\n*   plataforma;\n*   tema;\n*   pilar;\n*   objetivo;\n*   etapa del embudo;\n*   formato;\n*   hook;\n*   CTA;\n*   recurso visual;\n*   responsable;\n*   estado;\n*   fecha de publicación.\n\nEl tablero de producción puede utilizar las siguientes etapas:\n\n*   Idea.\n*   En desarrollo.\n*   Guion listo.\n*   Por grabar.\n*   Grabado.\n*   En edición.\n*   En revisión.\n*   Programado.\n*   Publicado.\n*   Medido.","url":"","type":"template"}]
          }
        ]
      },
      {
        id: "635b19c3-6188-489a-af26-871ac35f46b2",
        title: "C4: CONVERSIÓN — Conversar, Vender y Mejorar",
        lessons: [
          {
            id: "57bb09c2-e8de-4920-a9e1-efe7bfb3f716",
            title: "Clase 4.1 - Ruta de conversión y proceso comercial",
            duration: "15:00",
            isFree: false,
            description: "La ruta de conversión es el recorrido que sigue una persona desde que descubre el negocio hasta que realiza una compra y continúa su relación con la marca.\n\nCada negocio puede tener una ruta diferente.\n\nPor ejemplo:\n\nContenido → Comentario → WhatsApp → Primera respuesta → Diagnóstico → Recomendación → Objeciones → Seguimiento → Compra → Postventa\n\nEn otro negocio podría ser:\n\nAnuncio → Formulario → Llamada → Diagnóstico → Propuesta → Seguimiento → Firma → Implementación\n\nY en un restaurante:\n\nContenido → Consulta → Reserva o pedido → Confirmación → Atención → Experiencia → Recompra → Recomendación\n\nLa finalidad de esta clase es que el emprendedor vea la venta como un proceso y no como una respuesta aislada.\n\n*Por qué importa:* Porque muchos emprendedores generan contenido, reciben mensajes y atienden consultas, pero no tienen una ruta definida.\n\nCada persona recibe una respuesta diferente.\n\nAlgunos reciben información.\n\nOtros reciben directamente el precio.\n\nOtros quedan sin seguimiento.\n\nOtros preguntan algo y la conversación se pierde.\n\nCuando no existe un proceso comercial, las oportunidades dependen de la memoria, el ánimo o la improvisación del emprendedor.\n\nDefinir una ruta permite entender:\n\n*   de dónde llegan las personas;\n*   qué sucede después;\n*   qué preguntas debemos hacer;\n*   en qué momento presentamos la solución;\n*   cuándo hacemos seguimiento;\n*   cuándo consideramos cerrada una oportunidad.",
            resources: [{"id":"recurso-c4-4-1","name":"Entregable: Un Mapa de Ruta de Conversión del Negocio, que muestra:\n\n*   origen del contacto;\n*   canal de entrada;\n*   primera respuesta;\n*   diagnóstico;\n*   calificación;\n*   recomendación;\n*   propuesta;\n*   objeción;\n*   seguimiento;\n*   cierre;\n*   postventa;\n*   fidelización.\n\nTambién se define un flujo básico de atención comercial.","url":"","type":"template"}]
          },
          {
            id: "38586090-938f-444c-a233-5c4ef8702a56",
            title: "Clase 4.2 - Primer contacto y respuesta inicial",
            duration: "15:00",
            isFree: false,
            description: "El primer contacto es el momento en que una persona realiza una acción que demuestra algún nivel de interés.\n\nPuede ser:\n\n*   un mensaje por WhatsApp;\n*   una consulta por Messenger;\n*   un mensaje directo;\n*   un comentario;\n*   una llamada;\n*   una respuesta a una historia;\n*   una solicitud de información;\n*   una pregunta sobre precio;\n*   una consulta sobre disponibilidad.\n\nLa respuesta inicial es la primera interacción comercial del negocio con esa persona.\n\nSu función no es vender inmediatamente.\n\nSu función es:\n\n*   atender;\n*   reconocer el interés;\n*   generar confianza;\n*   comprender la consulta;\n*   iniciar correctamente la conversación.\n\n*Por qué importa:* Porque una persona puede haber visto varios contenidos, revisado la marca, comparado alternativas y finalmente decidir escribir.\n\nEse momento tiene valor.\n\nSin embargo, muchos negocios responden de manera automática, fría o incompleta.\n\nPor ejemplo:\n\nCliente:\n\n_“Información.”_\n\nNegocio:\n\n_“¿De qué?”_\n\nO:\n\nCliente:\n\n_“Precio.”_\n\nNegocio:\n\n_“S/ 350.”_\n\nY la conversación termina.\n\nUna buena primera respuesta debe hacer que la persona sienta que está hablando con un negocio organizado, atento y dispuesto a comprender lo que necesita.",
            resources: [{"id":"recurso-c4-4-2","name":"Entregable: Un Kit de Respuestas Iniciales, que puede incluir:\n\n*   respuesta a “quiero información”;\n*   respuesta a consulta de precio;\n*   respuesta desde redes sociales;\n*   respuesta desde anuncios;\n*   respuesta a recomendados;\n*   respuesta fuera de horario;\n*   respuesta a disponibilidad;\n*   mensaje de bienvenida;\n*   preguntas iniciales de apertura.\n\nTambién se construye un criterio para personalizar las respuestas según el origen y la intención del prospecto.","url":"","type":"template"}]
          },
          {
            id: "662f2f9f-37d9-4cfd-a228-ae4f43c21d83",
            title: "Clase 4.3 - Diagnóstico y calificación del prospecto",
            duration: "15:00",
            isFree: false,
            description: "El diagnóstico es el proceso de comprender la situación, necesidad, problema o deseo de una persona antes de recomendarle una solución.\n\nLa calificación consiste en determinar si existe una oportunidad comercial real y qué tipo de solución puede ser adecuada.\n\nNo todas las personas que preguntan están en el mismo momento.\n\nAlgunas:\n\n*   están investigando;\n*   comparan opciones;\n*   tienen una necesidad urgente;\n*   todavía no comprenden su problema;\n*   necesitan información;\n*   tienen interés, pero no están listas;\n*   están preparadas para decidir.\n\nDiagnosticar significa preguntar y escuchar antes de intentar vender.\n\n*Por qué importa:* Porque muchos negocios presentan productos o precios sin comprender qué necesita el cliente.\n\nEsto genera conversaciones poco relevantes.\n\nPor ejemplo, una persona puede preguntar:\n\n_“¿Cuánto cuesta?”_\n\nPero detrás de esa pregunta pueden existir diferentes necesidades.\n\nUna persona puede buscar:\n\n*   la opción más económica;\n*   una solución urgente;\n*   mayor calidad;\n*   acompañamiento;\n*   rapidez;\n*   seguridad;\n*   personalización.\n\nEl precio es solamente una parte de la conversación.\n\nDiagnosticar ayuda a recomendar mejor y evita ofrecer la misma solución a todos.",
            resources: [{"id":"recurso-c4-4-3","name":"Entregable: Un Guion de Diagnóstico y Calificación, compuesto por:\n\n*   preguntas de situación;\n*   preguntas de necesidad;\n*   preguntas de problema;\n*   preguntas de expectativa;\n*   preguntas de prioridad;\n*   preguntas de urgencia;\n*   preguntas de decisión;\n*   criterios básicos de calificación.\n\nTambién se crea una Ficha Básica de Prospecto, donde se puede registrar:\n\n*   nombre;\n*   fuente de llegada;\n*   necesidad;\n*   problema principal;\n*   interés;\n*   solución recomendada;\n*   nivel de oportunidad;\n*   siguiente paso.","url":"","type":"template"}]
          },
          {
            id: "3f41fdab-0635-43b7-a5f2-18b12a3396d3",
            title: "Clase 4.4 - Conversación de venta consultiva y presentación de la solución",
            duration: "15:00",
            isFree: false,
            description: "La venta consultiva es una forma de conversar donde el negocio primero comprende y después recomienda.\n\nNo parte de presionar al cliente.\n\nParte de conectar la necesidad identificada con una solución concreta.\n\nLa estructura puede resumirse así:\n\nEscuchar → Comprender → Confirmar → Recomendar → Explicar valor → Proponer un siguiente paso\n\nPor ejemplo:\n\n_“Por lo que me comentas, tu principal dificultad es mantener una publicación constante y todavía no tienes claro qué contenidos crear. En ese caso, la opción que más sentido tendría para ti es…”_\n\nLa recomendación aparece después del diagnóstico.\n\n*Por qué importa:* Porque muchas conversaciones comerciales empiezan directamente presentando:\n\n*   planes;\n*   características;\n*   precios;\n*   promociones.\n\nSin haber conectado esos elementos con la necesidad del cliente.\n\nUna persona no compra simplemente porque le explicaron muchas características.\n\nNecesita comprender:\n\n*   por qué esa solución es relevante;\n*   cómo se relaciona con su situación;\n*   qué problema puede ayudar a resolver;\n*   qué beneficio puede obtener;\n*   cuál es el siguiente paso.\n\nLa conversación consultiva ayuda a vender sin perder humanidad.",
            resources: [{"id":"recurso-c4-4-4","name":"Entregable: Un Script Maestro de Conversación Comercial, que contiene:\n\n*   apertura;\n*   diagnóstico;\n*   confirmación de necesidad;\n*   recomendación;\n*   presentación de beneficios;\n*   explicación de la solución;\n*   evidencia;\n*   precio o inversión;\n*   siguiente paso.\n\nTambién se crean diferentes versiones según el tipo de producto o servicio.","url":"","type":"template"}]
          },
          {
            id: "ba290480-2e65-44d7-a989-96b5b4e401c6",
            title: "Clase 4.5 - Manejo de objeciones y construcción de confianza",
            duration: "15:00",
            isFree: false,
            description: "Una objeción es una duda, preocupación, dificultad o barrera que impide que una persona avance en una decisión.\n\nAlgunas objeciones frecuentes son:\n\n*   _“Está caro.”_\n*   _“Lo voy a pensar.”_\n*   _“No tengo tiempo.”_\n*   _“Tengo que consultarlo.”_\n*   _“No estoy seguro.”_\n*   _“Estoy comparando.”_\n*   _“Ya probé algo parecido.”_\n*   _“Después te escribo.”_\n*   _“No sé si esto funcionará para mí.”_\n\nEl manejo de objeciones no significa discutir con el cliente.\n\nTampoco significa presionarlo hasta conseguir una compra.\n\nLa lógica recomendada es:\n\nEscuchar → Validar → Preguntar → Comprender → Responder → Confirmar\n\n*Por qué importa:* Porque muchas ventas no se pierden por el precio.\n\nSe pierden porque el negocio no comprende la verdadera preocupación del cliente.\n\nPor ejemplo:\n\n“Está caro” puede significar:\n\n*   no entiendo el valor;\n*   no confío todavía;\n*   estoy comparando;\n*   no tengo presupuesto ahora;\n*   no es prioritario;\n*   necesito más información;\n*   tengo miedo de equivocarme.\n\nResponder automáticamente con un descuento puede ser un error.\n\nLa objeción debe entenderse antes de responder.",
            resources: [{"id":"recurso-c4-4-5","name":"Entregable: Una Matriz de Objeciones del Negocio, que contiene:\n\n*   objeción;\n*   posible causa;\n*   pregunta de aclaración;\n*   respuesta recomendada;\n*   evidencia necesaria;\n*   siguiente paso.\n\nLas objeciones pueden clasificarse por:\n\n*   precio;\n*   confianza;\n*   tiempo;\n*   necesidad;\n*   prioridad;\n*   comparación;\n*   experiencia anterior;\n*   autoridad de decisión;\n*   miedo;\n*   urgencia.","url":"","type":"template"}]
          },
          {
            id: "df323d0a-ffd4-46f2-a12e-eab21bd3afd1",
            title: "Clase 4.6 - Cierre y facilitación de la decisión",
            duration: "15:00",
            isFree: false,
            description: "El cierre es el momento donde una conversación comercial avanza hacia una decisión concreta.\n\nPuede ser:\n\n*   realizar el pago;\n*   reservar;\n*   firmar;\n*   confirmar un pedido;\n*   programar una reunión;\n*   elegir un plan;\n*   iniciar una prueba;\n*   completar una inscripción.\n\nCerrar no significa utilizar presión artificial.\n\nSignifica facilitar la decisión cuando existe:\n\n*   necesidad;\n*   interés;\n*   confianza;\n*   claridad;\n*   una solución adecuada.\n\nEl cierre también incluye explicar claramente qué sucede después.\n\n*Por qué importa:* Porque existen conversaciones donde el cliente muestra interés, pero el negocio no guía el siguiente paso.\n\nPor ejemplo:\n\n_“Avísame cualquier cosa.”_\n\n_“Quedo atento.”_\n\n_“Cuando quieras me escribes.”_\n\nEstas frases dejan la decisión completamente abierta.\n\nUn proceso comercial debe explicar:\n\n*   qué opción corresponde;\n*   cuánto cuesta;\n*   cómo se paga;\n*   qué debe hacer;\n*   cuándo empieza;\n*   qué recibirá;\n*   qué sucede después.",
            resources: [{"id":"recurso-c4-4-6","name":"Entregable: Un Sistema Básico de Cierre, que contiene:\n\n*   señales de compra;\n*   preguntas de avance;\n*   confirmación de opción;\n*   instrucciones de pago;\n*   mensaje de confirmación;\n*   protocolo de compra;\n*   mensaje de bienvenida;\n*   siguiente paso.\n\nTambién se construyen cierres adecuados según el modelo de negocio.","url":"","type":"template"}]
          },
          {
            id: "67aade9c-c47c-4830-a28c-a0f73b30aebe",
            title: "Clase 4.7 - Seguimiento, nutrición y reactivación",
            duration: "15:00",
            isFree: false,
            description: "El seguimiento es el proceso de mantener contacto con una persona que mostró interés, pero todavía no tomó una decisión.\n\nLa nutrición consiste en compartir información que ayude a:\n\n*   educar;\n*   resolver dudas;\n*   fortalecer confianza;\n*   recordar el problema;\n*   demostrar valor;\n*   mantener la relación.\n\nLa reactivación consiste en retomar conversaciones antiguas que podrían volver a convertirse en oportunidades.\n\n*Por qué importa:* Porque muchos emprendedores consideran perdida una oportunidad cuando una persona deja de responder.\n\nSin embargo, una persona puede no comprar inmediatamente por diferentes motivos:\n\n*   estaba ocupada;\n*   no era el momento;\n*   estaba comparando;\n*   necesitaba hablar con alguien;\n*   todavía no confiaba;\n*   no tenía presupuesto;\n*   no era una prioridad.\n\nEl seguimiento no debe ser persecución.\n\nDebe tener intención, contexto y respeto.\n\nNo se trata de enviar cada día:\n\n_“¿Ya decidiste?”_\n\nSe trata de continuar la relación de manera adecuada.",
            resources: [{"id":"recurso-c4-4-7","name":"Entregable: Una Secuencia de Seguimiento y Reactivación, que puede incluir:\n\n*   seguimiento después de consulta;\n*   seguimiento después de propuesta;\n*   seguimiento después de reunión;\n*   seguimiento de interés;\n*   mensaje de valor;\n*   prueba social;\n*   respuesta a duda frecuente;\n*   reactivación;\n*   cierre de ciclo.\n\nTambién se construye un calendario básico de seguimiento comercial.","url":"","type":"template"}]
          },
          {
            id: "24ceb222-aa37-4e93-af45-b4bf867d12fa",
            title: "Clase 4.8 - Postventa, fidelización y recomendación",
            duration: "15:00",
            isFree: false,
            description: "La postventa es el conjunto de acciones que realiza el negocio después de que una persona compra.\n\nSu objetivo es asegurar que el cliente:\n\n*   comprenda qué sucede después;\n*   tenga una buena experiencia;\n*   reciba apoyo;\n*   pueda resolver dudas;\n*   obtenga valor;\n*   quiera volver;\n*   pueda recomendar.\n\nLa fidelización busca construir una relación que no termine en una sola transacción.\n\nLa recomendación convierte una buena experiencia en una nueva fuente de oportunidades.\n\n*Por qué importa:* Porque muchos negocios invierten esfuerzo para conseguir un cliente y después descuidan la experiencia posterior a la compra.\n\nEsto puede generar:\n\n*   dudas;\n*   frustración;\n*   abandono;\n*   falta de recompra;\n*   pérdida de recomendaciones.\n\nUna buena postventa puede generar:\n\n*   recompra;\n*   renovación;\n*   venta complementaria;\n*   testimonios;\n*   recomendaciones;\n*   referidos;\n*   mayor confianza.\n\nLa conversión no debería medirse solamente por cuántas personas pagan una vez.\n\nTambién importa qué sucede después.",
            resources: [{"id":"recurso-c4-4-8","name":"Entregable: Una Ruta Básica de Postventa y Fidelización, que contiene:\n\n*   mensaje de bienvenida;\n*   confirmación de compra;\n*   instrucciones;\n*   seguimiento de satisfacción;\n*   mensaje de acompañamiento;\n*   solicitud de testimonio;\n*   propuesta de recompra;\n*   propuesta complementaria;\n*   solicitud de recomendación;\n*   programa básico de referidos, cuando corresponda.","url":"","type":"template"}]
          },
          {
            id: "8b12f56e-fe8a-484f-a6a3-25c16a96a263",
            title: "Clase 4.9 - Pipeline comercial, CRM básico y métricas de conversión",
            duration: "15:00",
            isFree: false,
            description: "El pipeline comercial es una representación ordenada de las oportunidades de venta y de la etapa en la que se encuentra cada una.\n\nUn CRM es un sistema que permite registrar y organizar información de clientes y prospectos.\n\nPara un pequeño emprendedor no es necesario comenzar con una plataforma compleja.\n\nPuede comenzar con una herramienta sencilla que permita registrar:\n\n*   nombre;\n*   origen;\n*   necesidad;\n*   etapa;\n*   último contacto;\n*   siguiente acción;\n*   resultado.\n\nEl objetivo no es acumular datos.\n\nEl objetivo es evitar que las oportunidades se pierdan por falta de organización.\n\n*Por qué importa:* Porque muchos negocios tienen sus oportunidades distribuidas entre:\n\n*   WhatsApp;\n*   Messenger;\n*   Instagram;\n*   cuadernos;\n*   notas;\n*   memoria.\n\nEsto dificulta saber:\n\n*   cuántas personas preguntaron;\n*   cuántas recibieron seguimiento;\n*   cuántas compraron;\n*   en qué etapa se pierden;\n*   de dónde vienen los mejores clientes.\n\nSin medición, el negocio puede pensar:\n\n_“Este mes estuvo flojo.”_\n\nPero no sabe por qué.\n\nTal vez:\n\n*   llegaron pocas consultas;\n*   la primera respuesta fue débil;\n*   no hubo seguimiento;\n*   las propuestas no fueron claras;\n*   hubo muchas objeciones de precio;\n*   una fuente de tráfico dejó de funcionar.\n\nLas métricas permiten detectar problemas concretos.",
            resources: [{"id":"recurso-c4-4-9","name":"Entregable: Un Pipeline Comercial Básico y un Tablero de Métricas de Conversión.\n\nEl pipeline puede incluir etapas como:\n\n*   Nuevo contacto.\n*   Respondido.\n*   En diagnóstico.\n*   Prospecto calificado.\n*   Solución presentada.\n*   Objeción.\n*   Seguimiento.\n*   Cerrado ganado.\n*   Cerrado perdido.\n*   Postventa.\n\nEl tablero de métricas puede incluir:\n\n*   contactos recibidos;\n*   contactos respondidos;\n*   diagnósticos realizados;\n*   prospectos calificados;\n*   propuestas presentadas;\n*   seguimientos;\n*   ventas;\n*   tasa de conversión;\n*   ticket promedio;\n*   recompra;\n*   recomendaciones.","url":"","type":"template"}]
          }
        ]
      },
      {
        id: "234c202b-8863-419f-a7b0-7499209ced15",
        title: "MÓDULO 5: IMPLEMENTACIÓN Y CIERRE",
        lessons: [
          {
            id: "0e57e46a-d7d9-486a-a691-d88ce25ce0c8",
            title: "Clase 1 - Proyecto Integrador — Mi Sistema 4C",
            duration: "20:00",
            isFree: false,
            description: "# Proyecto Integrador — Mi Sistema 4C\n\nEl proyecto final reúne los activos más importantes construidos durante el curso. No busca perfección ni documentos extensos; busca demostrar que las cuatro C están conectadas y listas para ser utilizadas en el negocio.",
            resources: []
          },
          {
            id: "b929934a-af97-4e4e-a38a-90691081af8f",
            title: "Clase 2 - Plan de Implementación de 30 días",
            duration: "20:00",
            isFree: false,
            description: "Clase práctica del Método 4C.",
            resources: []
          },
          {
            id: "fe4790af-820b-4a99-a995-339e5c59f63c",
            title: "Clase 3 - Evaluación Final 4C (Auditoría de madurez del sistema)",
            duration: "20:00",
            isFree: false,
            description: "Clase práctica del Método 4C.",
            resources: []
          },
          {
            id: "4e6e93e9-ddf6-41cf-a5bd-145a13b5811b",
            title: "Clase 4 - Conclusiones y Cierre (El ciclo de mejora continua)",
            duration: "20:00",
            isFree: false,
            description: "Clase práctica del Método 4C.",
            resources: []
          }
        ]
      }
    ],
    whatYouLearn: [
      "Día 1 (Claridad): Definir el dolor, deseo y propuesta de valor del cliente ideal.",
      "Día 2 (Creatividad): Diseñar piezas visuales y logotipos profesionales con IA.",
      "Día 3 (Comunicación): Estructurar guiones virales y producir videos usando IA.",
      "Día 4 (Conversión): Crear scripts efectivos para cerrar ventas por chats de mensajería."
    ],
    requirements: [
      "Ganas de facturar más usando Inteligencia Artificial.",
      "Conocimientos básicos de uso de redes sociales.",
      "No requieres experiencia técnica o de diseño previa."
    ],
    forWho: [
      "Emprendedores que buscan optimizar su tiempo.",
      "Dueños de negocio y marcas personales.",
      "Profesionales de marketing y ventas independientes."
    ]
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
    { courseId: "c0000000-0000-0000-0000-000000000002", progress: 60, lastLesson: "Few-Shot Learning", completed: false },
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
