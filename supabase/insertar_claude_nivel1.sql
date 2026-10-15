-- =====================================================================
-- David Ames Academy - Inserción del Curso Oficial:
-- "Claude AI: Sistema de Trabajo y Productividad (Nivel 1)"
-- Pilar: Inteligencia Artificial (IA) | Inversión: S/ 50.00
-- =====================================================================

-- 1. Asegurar columnas para el Aula Interactiva y Actividades prácticas
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS interactive_classroom_url text;
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS assignment text;
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS allow_classroom_download boolean DEFAULT true;

-- 2. Limpieza de versiones previas
DELETE FROM public.courses WHERE id = 'c0000000-0000-0000-0000-000000000006' OR title ILIKE '%Claude AI%Nivel 1%' OR title ILIKE '%Domina Claude%';

-- 3. Insertar Curso Nivel 1 con portada hiperrealista con el logo oficial exacto de Claude
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
  'c0000000-0000-0000-0000-000000000006',
  'Claude AI: Sistema de Trabajo y Productividad (Nivel 1)',
  'Domina el ecosistema completo de Claude: proyectos, artefactos, skills, conectores y agentes para multiplicar tu rendimiento profesional.',
  'Aprende a transformar Claude en tu colaborador digital más potente. Un recorrido práctico y estructurado por las 11 herramientas del ecosistema de Anthropic: desde el razonamiento básico hasta artefactos interactivos, skills especializadas y agentes autónomos. Cada módulo incluye aula interactiva, recursos y actividades de aplicación inmediata para tu negocio.',
  'ia',
  'Inteligencia Artificial',
  'Principiante',
  50.00,
  false,
  5.0,
  142,
  'David Ames',
  '8 horas',
  12,
  '/images/curso-claude-nivel1.jpg',
  true,
  true,
  ARRAY[
    'Entender cómo razona Claude para dejar de adivinar y dirigirlo con criterio ejecutivo.',
    'Organizar contextos continuos con Proyectos sin repetir información.',
    'Crear entregables visuales y funcionales en vivo usando Artefactos interactivos.',
    'Configurar Skills especializadas para estandarizar procesos en tu profesión.',
    'Conectar Claude con Google Drive, Gmail y herramientas reales de trabajo.',
    'Transicionar de usuario reactivo a tener un agente digital autónomo.'
  ],
  ARRAY[
    'Cuenta gratuita o Pro en Claude (Anthropic).',
    'Computadora o laptop con conexión a internet para las aulas interactivas.',
    'Ganas de ordenar y multiplicar tu productividad profesional.'
  ],
  ARRAY[
    'Profesionales, directores y consultores que buscan optimizar su tiempo con IA de alta precisión.',
    'Emprendedores y dueños de negocio que necesitan delegar redacción, análisis y estrategia.',
    'Equipos de trabajo que quieren estandarizar procesos repetitivos con Skills y Proyectos.'
  ]
);

-- =====================================================================
-- 4. INSERTAR MÓDULOS (MÓDULO 0 OBLIGATORIO + 11 MÓDULOS TEMÁTICOS)
-- =====================================================================

INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('d0000000-0000-0000-0006-000000000000', 'c0000000-0000-0000-0000-000000000006', 'Módulo 0: Video de Bienvenida y Explicación del Curso', 0),
('d0000000-0000-0000-0006-000000000001', 'c0000000-0000-0000-0000-000000000006', 'M1 · Así piensa y responde Claude (Razonamiento)', 1),
('d0000000-0000-0000-0006-000000000002', 'c0000000-0000-0000-0000-000000000006', 'M2 · Tu espacio de trabajo y mapa de interfaz', 2),
('d0000000-0000-0000-0006-000000000003', 'c0000000-0000-0000-0000-000000000006', 'M3 · Chat fluido: Análisis, síntesis y creación', 3),
('d0000000-0000-0000-0006-000000000004', 'c0000000-0000-0000-0000-000000000006', 'M4 · Proyectos: Memoria y continuidad sin repetir contexto', 4),
('d0000000-0000-0000-0006-000000000005', 'c0000000-0000-0000-0000-000000000006', 'M5 · Cowork: Delegar entregables terminados', 5),
('d0000000-0000-0000-0006-000000000006', 'c0000000-0000-0000-0000-000000000006', 'M6 · Conectores: Integración con Gmail y Google Drive', 6),
('d0000000-0000-0000-0006-000000000007', 'c0000000-0000-0000-0000-000000000006', 'M7 · Artefactos: Documentos, páginas y tableros en vivo', 7),
('d0000000-0000-0000-0006-000000000008', 'c0000000-0000-0000-0000-000000000006', 'M8 · Skills: Habilidades listas para tu profesión', 8),
('d0000000-0000-0000-0006-000000000009', 'c0000000-0000-0000-0000-000000000006', 'M9 · Claude Code: Construye software sin programar', 9),
('d0000000-0000-0000-0006-000000000010', 'c0000000-0000-0000-0000-000000000006', 'M10 · Automatización: Tareas que se ejecutan solas', 10),
('d0000000-0000-0000-0006-000000000011', 'c0000000-0000-0000-0000-000000000006', 'M11 · Agentes: Tu colaborador digital autónomo', 11);

-- =====================================================================
-- 5. INSERTAR LECCIONES (INCLUYENDO LECCIÓN 0 DE BIENVENIDA DE 5 MINUTOS)
-- =====================================================================

INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES 
(
  'e0000000-0000-0000-0006-000000000000',
  'd0000000-0000-0000-0006-000000000000',
  'Video de Bienvenida y Explicación del Curso',
  '05:00',
  true, -- Clase 0 de bienvenida abierta a todos
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Bienvenido a la Academia David Ames. En este video de 5 minutos te explico la metodología del curso, cómo aprovechar el aula interactiva y el mapa paso a paso para dominar las 11 herramientas de Claude.',
  NULL,
  'Mira el video introductorio completo, prepara tu cuenta en Claude y descarga la guía de ruta del curso.',
  '[{"name": "Ruta de Aprendizaje Claude Nivel 1 (PDF)", "url": "#", "type": "pdf"}]'::jsonb,
  0
),
(
  'e0000000-0000-0000-0006-000000000001',
  'd0000000-0000-0000-0006-000000000001',
  'Así piensa y responde Claude',
  '12:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Entiende cómo razona esta IA antes de usarla, para dejar de adivinar y empezar a dirigirla con criterio ejecutivo.',
  NULL,
  'Configura tu cuenta en claude.ai y ejecuta tu primer prompt de encuadre conceptual.',
  '[]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0006-000000000002',
  'd0000000-0000-0000-0006-000000000002',
  'Tu espacio de trabajo: Conoce la interfaz',
  '10:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Un recorrido guiado por cada botón y menú para que nunca más te sientas perdido frente a la pantalla.',
  NULL,
  'Personaliza la configuración de tu espacio de trabajo y define tus preferencias predeterminadas.',
  '[]'::jsonb,
  2
),
(
  'e0000000-0000-0000-0006-000000000003',
  'd0000000-0000-0000-0006-000000000003',
  'Chat: Conversar con Claude sobre cualquier tema',
  '18:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'La base de todo: aprende a preguntar, pensar, analizar y crear en una sola conversación fluida y estructurada.',
  NULL,
  'Ejecuta una sesión de pensamiento estratégico aplicando el prompt de encuadre entregado en la clase.',
  '[]'::jsonb,
  3
),
(
  'e0000000-0000-0000-0006-000000000004',
  'd0000000-0000-0000-0006-000000000004',
  'Proyectos: Dale continuidad a tu trabajo',
  '22:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Deja de repetir contexto cada vez. Organiza chats, archivos e instrucciones en un solo espacio que recuerda todo.',
  NULL,
  'Crea tu primer Proyecto en Claude y carga la documentación base de tu negocio.',
  '[]'::jsonb,
  4
),
(
  'e0000000-0000-0000-0006-000000000005',
  'd0000000-0000-0000-0006-000000000005',
  'Cowork: Delega trabajo completo, no solo preguntas',
  '25:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Pasa de pedir respuestas a encargar resultados terminados y documentos ejecutivos listos para presentar.',
  NULL,
  'Diseña una tarea de delegación completa con instrucciones de estilo, fuentes y entregables.',
  '[]'::jsonb,
  5
),
(
  'e0000000-0000-0000-0006-000000000006',
  'd0000000-0000-0000-0006-000000000006',
  'Conectores: Une Claude con tus herramientas reales',
  '20:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Gmail, Google Drive y más herramientas trabajando junto a Claude sin tener que copiar y pegar manualmente.',
  NULL,
  'Configura el conector de Google Drive y extrae datos de una hoja de cálculo en una sola consulta.',
  '[]'::jsonb,
  6
),
(
  'e0000000-0000-0000-0006-000000000007',
  'd0000000-0000-0000-0006-000000000007',
  'Artefactos: Crea documentos, páginas y paneles en vivo',
  '30:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'De una idea abstracta a un entregable visual y funcional: dashboards, código HTML y prototipos interactivos en tiempo real.',
  NULL,
  'Genera tu primer Artefacto interactivo (calculadora comercial o dashboard de métricas) y descárgalo.',
  '[]'::jsonb,
  7
),
(
  'e0000000-0000-0000-0006-000000000008',
  'd0000000-0000-0000-0006-000000000008',
  'Skills: Habilidades especializadas para tu profesión',
  '28:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Dale a Claude el "saber hacer" específico de tu rubro una sola vez y para siempre mediante instrucciones especializadas.',
  NULL,
  'Escribe y prueba una Skill personalizada para tu puesto o negocio (ej. redactor de propuestas o auditor).',
  '[]'::jsonb,
  8
),
(
  'e0000000-0000-0000-0006-000000000009',
  'd0000000-0000-0000-0006-000000000009',
  'Claude Code: Tu asistente para construir sin programar',
  '35:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Incluso sin saber programar, comprende cómo Claude puede crear software, automatizar scripts y resolver problemas técnicos.',
  NULL,
  'Genera una pequeña herramienta en código con Claude Code y ejecútala en tu navegador.',
  '[]'::jsonb,
  9
),
(
  'e0000000-0000-0000-0006-000000000010',
  'd0000000-0000-0000-0006-000000000010',
  'Automatización: Tareas que se ejecutan solas',
  '25:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Programa lo que Claude debe hacer y en qué momento, sin que tengas que recordarlo ni operarlo manualmente.',
  NULL,
  'Mapea un proceso semanal de tu trabajo que contenga pasos repetitivos y defínelo como flujo automático.',
  '[]'::jsonb,
  10
),
(
  'e0000000-0000-0000-0006-000000000011',
  'd0000000-0000-0000-0006-000000000011',
  'Agentes: Claude trabajando de forma autónoma por ti',
  '30:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'El cierre del recorrido: de utilizar Claude reactivamente a disponer de un colaborador digital que avanza proyectos de forma independiente.',
  NULL,
  'Construye tu primer agente de soporte o investigación con objetivos definidos y validación de entregables.',
  '[]'::jsonb,
  11
);
