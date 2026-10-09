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

-- 3. Insertar el curso con portada realista única (Diseño y sistemas de trabajo)
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
  12,
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800', -- Portada realista de sistemas y workflows
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
-- 4. INSERTAR MÓDULOS CON LOS TÍTULOS OFICIALES SOLICITADOS
-- =====================================================================

INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('d0000000-0000-0000-0005-000000000000', 'c0000000-0000-0000-0000-000000000005', 'Introducción: Bienvenida y Recorrido General', 0),
('d0000000-0000-0000-0005-000000000001', 'c0000000-0000-0000-0000-000000000005', 'M1 · Habla con la IA con claridad', 1),
('d0000000-0000-0000-0005-000000000002', 'c0000000-0000-0000-0000-000000000005', 'M2 · Ubícate dentro de ChatGPT', 2),
('d0000000-0000-0000-0005-000000000003', 'c0000000-0000-0000-0000-000000000005', 'M3 · Piensa y decide con ChatGPT', 3),
('d0000000-0000-0000-0005-000000000004', 'c0000000-0000-0000-0000-000000000005', 'M4 · Organiza tu trabajo con Projects', 4),
('d0000000-0000-0000-0005-000000000005', 'c0000000-0000-0000-0000-000000000005', 'M5 · Produce entregables con Work', 5),
('d0000000-0000-0000-0005-000000000006', 'c0000000-0000-0000-0000-000000000005', 'M6 · Conecta ChatGPT con tus herramientas', 6),
('d0000000-0000-0000-0005-000000000007', 'c0000000-0000-0000-0000-000000000005', 'M7 · Convierte ideas en experiencias con Sites', 7),
('d0000000-0000-0000-0005-000000000008', 'c0000000-0000-0000-0000-000000000005', 'M8 · Convierte tu método en una Skill', 8),
('d0000000-0000-0000-0005-000000000009', 'c0000000-0000-0000-0000-000000000005', 'M9 · Construye software con Codex', 9),
('d0000000-0000-0000-0005-000000000010', 'c0000000-0000-0000-0000-000000000005', 'M10 · Automatiza procesos que ya funcionan', 10),
('d0000000-0000-0000-0005-000000000011', 'c0000000-0000-0000-0000-000000000005', 'M11 · De asistente a agente', 11);

-- =====================================================================
-- 5. INSERTAR LECCIONES CON NOMBRE VISIBLE Y AYUDA TEXTUAL EXACTAS
-- =====================================================================

INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES 
(
  'e0000000-0000-0000-0005-000000000000',
  'd0000000-0000-0000-0005-000000000000',
  'Bienvenida y Recorrido General',
  '04:30',
  true,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Aprende cómo está estructurado el curso, cómo recorrer el mapa de M1 a M11 y cómo usar las aulas interactivas.',
  'https://example.com/aulas/m0-introduccion.html',
  'Prepara tu cuenta de ChatGPT, abre la vista del curso y guarda el mapa general en tus recursos favoritos.',
  '[{"name": "Mapa Visual del Ecosistema M1-M11 (PDF)", "url": "#", "type": "pdf"}]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0005-000000000001',
  'd0000000-0000-0000-0005-000000000001',
  'Habla con la IA con claridad',
  '45:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Aprende a dar instrucciones, contexto y conversar de forma natural.',
  'https://example.com/aulas/m1-comunicacion.html',
  'Diseña un prompt estructurado aplicando las 5 capas de contexto aprendidas y ponlo a prueba con un caso real de tu trabajo.',
  '[{"name": "Plantilla de Contexto Maestro (Prompts)", "url": "#", "type": "template"}, {"name": "Checklist de Verificación de Prompts", "url": "#", "type": "pdf"}]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0005-000000000002',
  'd0000000-0000-0000-0005-000000000002',
  'Ubícate dentro de ChatGPT',
  '38:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Entiende la interfaz y reconoce qué herramienta estás usando.',
  'https://example.com/aulas/m2-interfaz.html',
  'Configura las Instrucciones Personalizadas (Custom Instructions) en tu cuenta con tu perfil profesional y formato de respuesta deseado.',
  '[{"name": "Guía de Configuración de Interfaz", "url": "#", "type": "pdf"}]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0005-000000000003',
  'd0000000-0000-0000-0005-000000000003',
  'Piensa y decide con ChatGPT',
  '50:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Usa el chat para explorar, analizar, crear, corregir y tomar decisiones.',
  'https://example.com/aulas/m3-chat.html',
  'Inicia una sesión de sparring dialéctico con ChatGPT donde le pidas actuar como abogado del diablo ante una propuesta de tu negocio.',
  '[{"name": "Matriz de Toma de Decisiones con IA", "url": "#", "type": "pdf"}]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0005-000000000004',
  'd0000000-0000-0000-0005-000000000004',
  'Organiza tu trabajo con Projects',
  '55:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Aprende a mantener contexto, archivos, instrucciones y conversaciones en un mismo espacio.',
  'https://example.com/aulas/m4-projects.html',
  'Crea tu primer Project oficial en ChatGPT, sube 3 archivos de documentación clave y redacta las instrucciones de proyecto.',
  '[{"name": "Estructura Base para Instrucciones de Projects", "url": "#", "type": "template"}]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0005-000000000005',
  'd0000000-0000-0000-0005-000000000005',
  'Produce entregables con Work',
  '52:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Delega trabajos amplios y convierte instrucciones en resultados profesionales.',
  'https://example.com/aulas/m5-work.html',
  'Desglosa un entregable grande (informe, propuesta o manual) en 4 etapas y delégalo con verificación intermedia.',
  '[{"name": "Plantilla de Delegación de Trabajos Amplios", "url": "#", "type": "pdf"}]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0005-000000000006',
  'd0000000-0000-0000-0005-000000000006',
  'Conecta ChatGPT con tus herramientas',
  '48:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Aprende a autorizar, consultar y utilizar fuentes externas reales.',
  'https://example.com/aulas/m6-conectores.html',
  'Configura una consulta a una fuente de datos autorizada y genera un reporte sincronizado.',
  '[{"name": "Guía de Conectores y Seguridad de Datos", "url": "#", "type": "pdf"}]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0005-000000000007',
  'd0000000-0000-0000-0005-000000000007',
  'Convierte ideas en experiencias con Sites',
  '50:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Pasa de una necesidad a una web o aplicación ligera que puedas mostrar y probar.',
  'https://example.com/aulas/m7-sites.html',
  'Genera una interfaz interactiva simple para un entregable de tu empresa y publícala como vista web.',
  '[{"name": "Plantillas de Estructura Web Ligera", "url": "#", "type": "code"}]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0005-000000000008',
  'd0000000-0000-0000-0005-000000000008',
  'Convierte tu método en una Skill',
  '46:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Estandariza una forma de trabajar para reutilizarla con consistencia.',
  'https://example.com/aulas/m8-skills.html',
  'Estandariza tu proceso de redacción o análisis creando un Skill paso a paso.',
  '[{"name": "Esquema de Definición de Skills", "url": "#", "type": "template"}]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0005-000000000009',
  'd0000000-0000-0000-0005-000000000009',
  'Construye software con Codex',
  '58:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Aprende cuándo pasar de una idea o prototipo a desarrollo técnico real.',
  'https://example.com/aulas/m9-codex.html',
  'Ejecuta un script de análisis en el intérprete de código para limpiar un archivo CSV o Excel.',
  '[{"name": "Snippets y Scripts de Verificación", "url": "#", "type": "code"}]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0005-000000000010',
  'd0000000-0000-0000-0005-000000000010',
  'Automatiza procesos que ya funcionan',
  '55:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Define cuándo, cómo y bajo qué condición repetir un proceso validado.',
  'https://example.com/aulas/m10-automatizacion.html',
  'Dibuja y prueba la lógica de automatización de un proceso repetitivo de tu negocio.',
  '[{"name": "Matriz de Lógica Condicional para Automatizaciones", "url": "#", "type": "pdf"}]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0005-000000000011',
  'd0000000-0000-0000-0005-000000000011',
  'De asistente a agente',
  '65:00',
  false,
  'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  'Aprende a delegar objetivos, coordinar herramientas y supervisar resultados con GPT-6 Astra.',
  'https://example.com/aulas/m11-agentes.html',
  'Diseña la arquitectura de un Agente que reciba una meta y coordine 2 o más herramientas para entregar el resultado final.',
  '[{"name": "Framework de Supervisión de Agentes de IA", "url": "#", "type": "pdf"}]'::jsonb,
  1
);
