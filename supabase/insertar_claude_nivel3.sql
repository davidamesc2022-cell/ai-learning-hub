-- =====================================================================
-- David Ames Academy - Inserción del Curso Oficial:
-- "Claude Autónomo: Automatización Empresarial y Agentes (Nivel 3)"
-- Pilar: Inteligencia Artificial (IA) | Inversión: S/ 247.00
-- =====================================================================

-- 1. Limpieza de versiones previas
DELETE FROM public.courses WHERE id = 'c0000000-0000-0000-0000-000000000008' OR title ILIKE '%Claude Autónomo%';

-- 2. Insertar Curso Nivel 3 con su portada dedicada oficial (Nivel 3)
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
  'c0000000-0000-0000-0000-000000000008',
  'Claude Autónomo: Automatización Empresarial y Agentes (Nivel 3)',
  'Lleva Claude a tu empresa: conecta Google Drive, programa agentes autónomos y construye flujos de trabajo que corren solos 24/7.',
  'El nivel de especialización definitivo. Pasa de ejecutar tareas manualmente a tener procesos que se disparan y resuelven solos en tu computadora y en la nube. Aprende a conectar tu Google Drive para que tus hojas de cálculo, reportes y carpetas se actualicen sin tu intervención, y programa agentes que trabajen mientras duermes en horarios fijos.',
  'ia',
  'Inteligencia Artificial',
  'Avanzado',
  247.00,
  false,
  5.0,
  58,
  'David Ames',
  '14 horas',
  13,
  '/images/curso-claude-nivel3.jpg',
  true,
  true,
  ARRAY[
    'Identificar y transformar tareas repetitivas semanales en procesos que corren solos.',
    'Conectar Claude a tu Google Drive para generar reportes y hojas de cálculo automáticas.',
    'Programar agentes de trabajo con horarios fijos para avanzar proyectos mientras duermes.',
    'Construir flujos de trabajo completos de punta a punta encadenando herramientas de Claude.',
    'Escalar las operaciones de tu negocio reduciendo horas de trabajo manual repetitivo.'
  ],
  ARRAY[
    'Haber cursado el Nivel 1 y Nivel 2 o tener experiencia comprobada con Claude.',
    'Cuenta de Google Drive o Workspace corporativo.',
    'Procesos o tareas semanales recurrentes listas para automatizar.'
  ],
  ARRAY[
    'Empresarios y directores que desean escalar sus operaciones sin contratar más personal operativo.',
    'Líderes de operaciones y tecnología que buscan automatizar flujos con agentes autónomos.',
    'Profesionales que quieren dominar la frontera más avanzada de la Inteligencia Artificial aplicada.'
  ]
);

-- =====================================================================
-- 3. INSERTAR MÓDULOS (MÓDULO 0 + 4 MÓDULOS DE AUTOMATIZACIÓN)
-- =====================================================================

INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('d0000000-0000-0000-0008-000000000000', 'c0000000-0000-0000-0000-000000000008', 'Módulo 0: Video de Bienvenida y Hoja de Ruta de Automatización', 0),
('d0000000-0000-0000-0008-000000000001', 'c0000000-0000-0000-0000-000000000008', 'Módulo 1: Automatización de tareas repetitivas recurrentes', 1),
('d0000000-0000-0000-0008-000000000002', 'c0000000-0000-0000-0000-000000000008', 'Módulo 2: Tu Google Drive conectado a Claude (Reportes vivos)', 2),
('d0000000-0000-0000-0008-000000000003', 'c0000000-0000-0000-0000-000000000008', 'Módulo 3: Agentes programados: Trabaja mientras duermes', 3),
('d0000000-0000-0000-0008-000000000004', 'c0000000-0000-0000-0000-000000000008', 'Módulo 4: Flujos de trabajo de punta a punta (End-to-End)', 4);

-- =====================================================================
-- 4. INSERTAR LECCIONES
-- =====================================================================

INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES 
-- MÓDULO 0: Video de Bienvenida
(
  'e0000000-0000-0000-0008-000000000000',
  'd0000000-0000-0000-0008-000000000000',
  'Video de Bienvenida y Arquitectura de Automatización',
  '05:00',
  true, -- Clase 0 de bienvenida 05:00 gratuita de muestra
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Bienvenido al Nivel 3. En este video de 5 minutos te presento el mapa de conexión con Google Drive y la programación de agentes autónomos que trabajan 24/7 sin supervisión manual.',
  NULL,
  'Mira el video de bienvenida, descarga la arquitectura de integración y configura tu carpeta de Google Drive para las automatizaciones.',
  '[{"name": "Arquitectura de Automatización Claude (PDF)", "url": "#", "type": "pdf"}]'::jsonb,
  0
),

-- MÓDULO 1: Automatización de tareas repetitivas
(
  'e0000000-0000-0000-0008-000000000001',
  'd0000000-0000-0000-0008-000000000001',
  'Mapeo y diagnóstico de procesos manuales costosos',
  '25:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Metodología para identificar qué tareas semanales consumen más de 5 horas de tu equipo y son 100% candidatas a correr solas.',
  NULL,
  'Completa la matriz de auditoría de procesos y selecciona tus 2 flujos prioritarios.',
  '[]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0008-000000000002',
  'd0000000-0000-0000-0008-000000000001',
  'Construcción de scripts y disparadores con Claude Code',
  '35:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Aprende a instruir a Claude para generar scripts que leen archivos, formatean datos y ejecutan acciones programadas.',
  NULL,
  'Genera tu primer script ejecutable con Claude y pruébalo con una carpeta local.',
  '[]'::jsonb,
  2
),

-- MÓDULO 2: Google Drive conectado a Claude
(
  'e0000000-0000-0000-0008-000000000003',
  'd0000000-0000-0000-0008-000000000002',
  'Configuración del Conector Empresarial de Google Drive',
  '28:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Vinculación segura entre tu cuenta corporativa de Google Workspace y Claude para acceso permanente a archivos.',
  NULL,
  'Conecta tu cuenta corporativa y valida los permisos de lectura y escritura.',
  '[]'::jsonb,
  3
),
(
  'e0000000-0000-0000-0008-000000000004',
  'd0000000-0000-0000-0008-000000000002',
  'Reportes e informes vivos que se actualizan solos',
  '32:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Creación de hojas de cálculo maestras en Drive que leen nuevas filas y generan informes ejecutivos en PDF automáticamente.',
  NULL,
  'Genera una hoja de cálculo conectada que resuma los datos nuevos ingresados cada 24 horas.',
  '[]'::jsonb,
  4
),

-- MÓDULO 3: Agentes programados: Trabaja mientras duermes
(
  'e0000000-0000-0000-0008-000000000005',
  'd0000000-0000-0000-0008-000000000003',
  'Programación de agentes con temporizadores y horarios fijos',
  '30:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Cómo configurar que un agente de Claude revise correos, extraiga datos o investigue el mercado todas las noches a las 3:00 AM.',
  NULL,
  'Programa tu primer agente nocturno para que tenga un resumen listo en tu bandeja cada mañana.',
  '[]'::jsonb,
  5
),
(
  'e0000000-0000-0000-0008-000000000006',
  'd0000000-0000-0000-0008-000000000003',
  'Supervisión y control de fallos en agentes autónomos',
  '26:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Protocolos de alerta por Telegram/WhatsApp cuando un agente encuentra una excepción o requiere autorización humana.',
  NULL,
  'Configura un canal de alertas con un mensaje de prueba cuando una tarea se complete con éxito.',
  '[]'::jsonb,
  6
),

-- MÓDULO 4: Flujos de trabajo de punta a punta (End-to-End)
(
  'e0000000-0000-0000-0008-000000000007',
  'd0000000-0000-0000-0008-000000000004',
  'Arquitectura End-to-End: Encadenando herramientas de Claude',
  '40:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Unir Proyectos + Drive + Artefactos + Agentes en un solo circuito empresarial ininterrumpido.',
  NULL,
  'Diseña el diagrama de flujo de tu sistema integral de negocio.',
  '[]'::jsonb,
  7
),
(
  'e0000000-0000-0000-0008-000000000008',
  'd0000000-0000-0000-0008-000000000004',
  'Proyecto Final: El Sistema Autónomo de tu Empresa',
  '50:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Implementación, validación y puesta en marcha del sistema integral automatizado en tus operaciones reales.',
  NULL,
  'Presenta tu sistema autónomo final para obtener la certificación de Especialista en Claude de la Academia.',
  '[]'::jsonb,
  8
);
