-- =====================================================================
-- David Ames Academy - Inserción del Curso Oficial:
-- "ChatGPT sin confusión: del Chat a los Sistemas"
-- Pilar: Inteligencia Artificial (IA)
-- =====================================================================

-- 1. Asegurar columnas para el Aula Interactiva y Actividades prácticas
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS interactive_classroom_url text;
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS assignment text;
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS allow_classroom_download boolean DEFAULT true;

-- 2. Limpieza de versiones previas si existieran
DELETE FROM public.courses WHERE id = 'c0000000-0000-0000-0000-000000000005' OR title ILIKE '%ChatGPT sin confusión%';

-- 3. Insertar el curso en la tabla courses
INSERT INTO public.courses (
  id,
  title,
  description,
  long_description,
  category,
  category_label,
  level,
  price,
  is_free,
  rating,
  students,
  instructor,
  duration,
  lessons_count,
  thumbnail,
  is_new,
  is_popular,
  what_you_learn,
  requirements,
  for_who
) VALUES (
  'c0000000-0000-0000-0000-000000000005',
  'ChatGPT sin confusión: del Chat a los Sistemas',
  'De principiante a dominar el ecosistema completo: prompts, proyectos, conectores, automatizaciones y agentes en 11 módulos con aulas interactivas.',
  'Aprende a transformar ChatGPT de un simple chat conversacional a un verdadero sistema operativo de trabajo y productividad. Cada módulo cuenta con una lección guiada en video sobre un aula interactiva creada a medida, recursos descargables y actividades prácticas ("Ahora hazlo tú") para aplicar en tu cuenta real.',
  'ia',
  'Inteligencia Artificial',
  'Principiante',
  99.00,
  false,
  5.0,
  165,
  'David Ames',
  '12 horas',
  12, -- 1 Bienvenida + 11 Módulos Oficiales
  'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800',
  true,
  true,
  ARRAY[
    'Dominar la estructura y evolución de la comunicación con IA (prompts y multimodal).',
    'Organizar contextos continuos con Projects y delegar entregables de trabajo complejo.',
    'Conectar ChatGPT con fuentes de datos externas y crear sites web ligeros.',
    'Estandarizar procesos de trabajo con Skills y operar código con Codex.',
    'Automatizar flujos de trabajo condicionales y transicionar de asistente a agente autónomo.'
  ],
  ARRAY[
    'Cuenta gratuita o Plus en ChatGPT.',
    'Dispositivo con conexión a internet (PC o Mac recomendado para las aulas interactivas).',
    'No se requieren conocimientos previos de programación.'
  ],
  ARRAY[
    'Profesionales y consultores que buscan dejar atrás los chats desordenados y crear sistemas de trabajo.',
    'Emprendedores y líderes de equipo que desean automatizar tareas y delegar procesos.',
    'Estudiantes y creadores que quieren dominar el ecosistema moderno de IA.'
  ]
);

-- =====================================================================
-- 4. INSERTAR MÓDULOS (0 de Bienvenida + M1 a M11)
-- =====================================================================

-- MÓDULO 0: Introducción
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('d0000000-0000-0000-0005-000000000000', 'c0000000-0000-0000-0000-000000000005', 'Introducción: Bienvenida y Mapa de la Academia', 0),
('d0000000-0000-0000-0005-000000000001', 'c0000000-0000-0000-0000-000000000005', 'Módulo 1: Comunicación con IA', 1),
('d0000000-0000-0000-0005-000000000002', 'c0000000-0000-0000-0000-000000000005', 'Módulo 2: Interfaz de ChatGPT', 2),
('d0000000-0000-0000-0005-000000000003', 'c0000000-0000-0000-0000-000000000005', 'Módulo 3: Chat (Pensar, Conversar y Decidir)', 3),
('d0000000-0000-0000-0005-000000000004', 'c0000000-0000-0000-0000-000000000005', 'Módulo 4: Projects (Contexto y Continuidad)', 4),
('d0000000-0000-0000-0005-000000000005', 'c0000000-0000-0000-0000-000000000005', 'Módulo 5: Work (Delegar Trabajos Amplios)', 5),
('d0000000-0000-0000-0005-000000000006', 'c0000000-0000-0000-0000-000000000005', 'Módulo 6: Conectores e Integraciones Reales', 6),
('d0000000-0000-0000-0005-000000000007', 'c0000000-0000-0000-0000-000000000005', 'Módulo 7: Sites (Experiencias Web Ligeras)', 7),
('d0000000-0000-0000-0005-000000000008', 'c0000000-0000-0000-0000-000000000005', 'Módulo 8: Skills (Estandarización Reutilizable)', 8),
('d0000000-0000-0000-0005-000000000009', 'c0000000-0000-0000-0000-000000000005', 'Módulo 9: Codex (Software, Código y Verificación)', 9),
('d0000000-0000-0000-0005-000000000010', 'c0000000-0000-0000-0000-000000000005', 'Módulo 10: Automatización de Procesos', 10),
('d0000000-0000-0000-0005-000000000011', 'c0000000-0000-0000-0000-000000000005', 'Módulo 11: De Asistente a Agente · GPT-6 Astra', 11);

-- =====================================================================
-- 5. INSERTAR LECCIONES CON AULA INTERACTIVA, RECURSOS Y TAREAS
-- =====================================================================

-- Lección 0: Introducción
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000000',
  'd0000000-0000-0000-0005-000000000000',
  'Bienvenida y Recorrido General de la Academia',
  '04:30',
  true,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Video de bienvenida y orientación general del curso. Conoce el mapa visual del ecosistema M1 a M11 y aprende a interactuar con las aulas digitales y recursos descargables.',
  'https://example.com/aulas/m0-introduccion.html',
  'Prepara tu cuenta de ChatGPT, abre la vista del curso y guarda el mapa general en tus recursos favoritos.',
  '[{"name": "Mapa Visual del Ecosistema M1-M11 (PDF)", "url": "#", "type": "pdf"}]'::jsonb,
  1
);

-- Lección 1: M1 - Comunicación con IA
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000001',
  'd0000000-0000-0000-0005-000000000001',
  'M1 · Estructura de Comunicación y Prompts Avanzados',
  '45:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Aprende la progresión: instrucción simple → contexto → estructura de prompt → conversación iterativa → multimodalidad. David te guía paso a paso explorando el aula interactiva de M1.',
  'https://example.com/aulas/m1-comunicacion.html',
  'Diseña un prompt estructurado aplicando las 5 capas de contexto aprendidas y ponlo a prueba con un caso real de tu trabajo.',
  '[{"name": "Plantilla de Contexto Maestro (Prompts)", "url": "#", "type": "template"}, {"name": "Checklist de Verificación de Prompts", "url": "#", "type": "pdf"}]'::jsonb,
  1
);

-- Lección 2: M2 - Interfaz de ChatGPT
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000002',
  'd0000000-0000-0000-0005-000000000002',
  'M2 · Orientación Práctica y Dominio de la Interfaz',
  '38:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Domina cada rincón de la plataforma de ChatGPT: paneles, ajustes de sistema, memoria persistente e instrucciones personalizadas.',
  'https://example.com/aulas/m2-interfaz.html',
  'Configura las Instrucciones Personalizadas (Custom Instructions) en tu cuenta con tu perfil profesional y formato de respuesta deseado.',
  '[{"name": "Guía de Configuración de Interfaz", "url": "#", "type": "pdf"}]'::jsonb,
  1
);

-- Lección 3: M3 - Chat
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000003',
  'd0000000-0000-0000-0005-000000000003',
  'M3 · Pensar, Analizar y Tomar Decisiones con Chat',
  '50:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Usa el chat no solo para generar texto, sino como un sparring mental de pensamiento analítico, corrección dialéctica y toma de decisiones.',
  'https://example.com/aulas/m3-chat.html',
  'Inicia una sesión de sparring dialéctico con ChatGPT donde le pidas actuar como abogado del diablo ante una propuesta de tu negocio.',
  '[{"name": "Matriz de Toma de Decisiones con IA", "url": "#", "type": "pdf"}]'::jsonb,
  1
);

-- Lección 4: M4 - Projects
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000004',
  'd0000000-0000-0000-0005-000000000004',
  'M4 · Organiza tu Trabajo con Projects',
  '55:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Manejo de contexto prolongado, continuidad de información, organización de archivos de referencia e instrucciones unificadas para proyectos.',
  'https://example.com/aulas/m4-projects.html',
  'Crea tu primer Project oficial en ChatGPT, sube 3 archivos de documentación clave y redacta las instrucciones de proyecto.',
  '[{"name": "Estructura Base para Instrucciones de Projects", "url": "#", "type": "template"}]'::jsonb,
  1
);

-- Lección 5: M5 - Work
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000005',
  'd0000000-0000-0000-0005-000000000005',
  'M5 · Delegación y Producción de Entregables Complejos',
  '52:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Aprende a delegar trabajos amplios por bloques, supervisando la calidad y exigiendo entregables completos listos para producción.',
  'https://example.com/aulas/m5-work.html',
  'Desglosa un entregable grande (informe, propuesta o manual) en 4 etapas y delégalo con verificación intermedia.',
  '[{"name": "Plantilla de Delegación de Trabajos Amplios", "url": "#", "type": "pdf"}]'::jsonb,
  1
);

-- Lección 6: M6 - Conectores
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000006',
  'd0000000-0000-0000-0005-000000000006',
  'M6 · Conectores y Fuentes Externas en Tiempo Real',
  '48:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Conecta, autoriza y utiliza fuentes externas reales para alimentar de información fidedigna las respuestas de tu modelo.',
  'https://example.com/aulas/m6-conectores.html',
  'Configura una consulta a una fuente de datos autorizada y genera un reporte sincronizado.',
  '[{"name": "Guía de Conectores y Seguridad de Datos", "url": "#", "type": "pdf"}]'::jsonb,
  1
);

-- Lección 7: M7 - Sites
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000007',
  'd0000000-0000-0000-0005-000000000007',
  'M7 · Convertir Necesidades en Experiencias Web Ligeras',
  '50:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Transforma resultados, reportes y herramientas en páginas web interactivas y livianas accesibles para tu equipo o clientes.',
  'https://example.com/aulas/m7-sites.html',
  'Genera una interfaz interactiva simple para un entregable de tu empresa y publícala como vista web.',
  '[{"name": "Plantillas de Estructura Web Ligera", "url": "#", "type": "code"}]'::jsonb,
  1
);

-- Lección 8: M8 - Skills
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000008',
  'd0000000-0000-0000-0005-000000000008',
  'M8 · Estandarizar Métodos de Trabajo Reutilizables',
  '46:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Crea Skills especializadas que automaticen la forma exacta en que se procesan tareas rutinarias, garantizando coherencia en cada ejecución.',
  'https://example.com/aulas/m8-skills.html',
  'Estandariza tu proceso de redacción o análisis creando un Skill paso a paso.',
  '[{"name": "Esquema de Definición de Skills", "url": "#", "type": "template"}]'::jsonb,
  1
);

-- Lección 9: M9 - Codex
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000009',
  'd0000000-0000-0000-0005-000000000009',
  'M9 · Software, Código y Verificación Técnica',
  '58:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Aprende a trabajar con código, archivos de datos y validación técnica sin miedo a la sintaxis gracias a la interpretación guiada por IA.',
  'https://example.com/aulas/m9-codex.html',
  'Ejecuta un script de análisis en el intérprete de código para limpiar un archivo CSV o Excel.',
  '[{"name": "Snippets y Scripts de Verificación", "url": "#", "type": "code"}]'::jsonb,
  1
);

-- Lección 10: M10 - Automatización
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000010',
  'd0000000-0000-0000-0005-000000000010',
  'M10 · Automatización Condicional de Procesos',
  '55:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Define disparadores, condiciones y reglas para que los procesos validados ocurran automáticamente sin intervención manual constante.',
  'https://example.com/aulas/m10-automatizacion.html',
  'Dibuja y prueba la lógica de automatización de un proceso repetitivo de tu negocio.',
  '[{"name": "Matriz de Lógica Condicional para Automatizaciones", "url": "#", "type": "pdf"}]'::jsonb,
  1
);

-- Lección 11: M11 - De Asistente a Agente
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES (
  'e0000000-0000-0000-0005-000000000011',
  'd0000000-0000-0000-0005-000000000011',
  'M11 · De Asistente a Agente Autónomo · GPT-6 Astra',
  '65:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'El cierre del viaje: delegación de objetivos, coordinación entre múltiples herramientas, supervisión estratégica y el futuro con modelos agentes.',
  'https://example.com/aulas/m11-agentes.html',
  'Diseña la arquitectura de un Agente que reciba una meta y coordine 2 o más herramientas para entregar el resultado final.',
  '[{"name": "Framework de Supervisión de Agentes de IA", "url": "#", "type": "pdf"}]'::jsonb,
  1
);
