-- =====================================================================
-- David Ames Academy - Ecosistema Completo de Cursos Claude (3 Niveles)
-- Ejecuta este script en el SQL Editor de tu Dashboard de Supabase
-- =====================================================================

BEGIN;

-- 1. Asegurar columnas para el Aula Interactiva y Actividades prácticas
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS interactive_classroom_url text;
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS assignment text;
ALTER TABLE public.lessons ADD COLUMN IF NOT EXISTS allow_classroom_download boolean DEFAULT true;

-- 2. Limpieza de versiones previas si existieran
DELETE FROM public.courses WHERE id IN (
  'c0000000-0000-0000-0000-000000000006',
  'c0000000-0000-0000-0000-000000000007',
  'c0000000-0000-0000-0000-000000000008'
) OR title ILIKE '%Claude AI%' OR title ILIKE '%Claude Laboratorio%' OR title ILIKE '%Claude Autónomo%';

-- =====================================================================
-- CURSO NIVEL 1: CLAUDE AI: SISTEMA DE TRABAJO Y PRODUCTIVIDAD (S/ 50.00)
-- =====================================================================
INSERT INTO public.courses (
  id, title, description, long_description, category, category_label, level,
  price, is_free, rating, students, instructor, duration, lessons_count, thumbnail,
  is_new, is_popular, what_you_learn, requirements, for_who
) VALUES (
  'c0000000-0000-0000-0000-000000000006',
  'Claude AI: Sistema de Trabajo y Productividad (Nivel 1)',
  'Domina el ecosistema completo de Claude: proyectos, artefactos, skills, conectores y agentes para multiplicar tu rendimiento profesional.',
  'Aprende a transformar Claude en tu colaborador digital más potente. Un recorrido práctico y estructurado por las 11 herramientas del ecosistema de Anthropic: desde el razonamiento básico hasta artefactos interactivos, skills especializadas y agentes autónomos. Cada módulo incluye aula interactiva, recursos y actividades de aplicación inmediata para tu negocio.',
  'ia', 'Inteligencia Artificial', 'Principiante',
  50.00, false, 5.0, 142, 'David Ames', '8 horas', 12,
  '/images/curso-claude-nivel1.jpg', true, true,
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

-- Módulos Nivel 1
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

-- Lecciones Nivel 1
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES 
(
  'e0000000-0000-0000-0006-000000000000',
  'd0000000-0000-0000-0006-000000000000',
  'Video de Bienvenida y Explicación del Curso',
  '05:00',
  true, -- Abierta gratuitamente
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

-- =====================================================================
-- CURSO NIVEL 2: CLAUDE LABORATORIO: 32 CASOS PRÁCTICOS (S/ 147.00)
-- =====================================================================
INSERT INTO public.courses (
  id, title, description, long_description, category, category_label, level,
  price, is_free, rating, students, instructor, duration, lessons_count, thumbnail,
  is_new, is_popular, what_you_learn, requirements, for_who
) VALUES (
  'c0000000-0000-0000-0000-000000000007',
  'Claude Laboratorio: 32 Casos Prácticos de Negocio (Nivel 2)',
  'Deja la teoría y resuelve problemas reales: 32 casos aplicados en contratos, propuestas comerciales, auditorías y procesos operativos.',
  'El laboratorio intensivo donde el alumno deja de aprender qué es la herramienta y empieza a resolver retos complejos de su trabajo cotidiano. A través de 6 bloques temáticos estructurados y 32 casos reales paso a paso, dominarás la estructuración de proyectos documentales, auditoría de datos, creación de skills a medida e integración total con tus herramientas de negocio.',
  'ia', 'Inteligencia Artificial', 'Intermedio',
  147.00, false, 5.0, 95, 'David Ames', '16 horas', 33,
  '/images/curso-claude-nivel2.jpg', true, true,
  ARRAY[
    'Resolver 32 casos prácticos de negocio real usando Claude sin rodeos teóricos.',
    'Construir y organizar contratos, actas y lanzamientos de programas en Proyectos.',
    'Auditar y validar reportes financieros y bases de datos con máxima precisión.',
    'Crear Skills a medida para propuestas comerciales, selección de personal y cotizaciones.',
    'Conectar correo, documentos y calendarios en un flujo de trabajo continuo.',
    'Integrar todo el ecosistema de Claude en una cadena de valor corporativa.'
  ],
  ARRAY[
    'Haber completado el Nivel 1 (Claude AI: Sistema de Trabajo y Productividad) o tener bases del ecosistema.',
    'Cuenta activa en Claude (Pro recomendada para proyectos pesados).',
    'Casos o documentación de tu propio negocio para aplicar en tiempo real.'
  ],
  ARRAY[
    'Dueños de negocio, directores y gerentes que buscan acelerar la toma de decisiones y operaciones.',
    'Consultores y profesionales independientes que deben entregar propuestas y análisis de alto valor.',
    'Equipos operativos que quieren eliminar cuellos de botella en redacción y auditoría.'
  ]
);

-- Módulos Nivel 2
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('d0000000-0000-0000-0007-000000000000', 'c0000000-0000-0000-0000-000000000007', 'Módulo 0: Video de Bienvenida y Metodología del Laboratorio', 0),
('d0000000-0000-0000-0007-000000000001', 'c0000000-0000-0000-0000-000000000007', 'Bloque 1: Arranque rápido: Privacidad, límites y criterios de decisión', 1),
('d0000000-0000-0000-0007-000000000002', 'c0000000-0000-0000-0000-000000000007', 'Bloque 2: Proyectos en acción: Contratos, actas y lanzamientos', 2),
('d0000000-0000-0000-0007-000000000003', 'c0000000-0000-0000-0000-000000000007', 'Bloque 3: Auditoría y validación de datos confiables', 3),
('d0000000-0000-0000-0007-000000000004', 'c0000000-0000-0000-0000-000000000007', 'Bloque 4: Habilidades a la medida: Skills profesionales para tu rubro', 4),
('d0000000-0000-0000-0007-000000000005', 'c0000000-0000-0000-0000-000000000007', 'Bloque 5: Conectores en vivo: Gmail, Google Drive y Calendario', 5),
('d0000000-0000-0000-0007-000000000006', 'c0000000-0000-0000-0000-000000000007', 'Bloque 6: Integración total del flujo de trabajo de inicio a fin', 6);

-- Lecciones Nivel 2
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES 
(
  'e0000000-0000-0000-0007-000000000000',
  'd0000000-0000-0000-0007-000000000000',
  'Video de Bienvenida y Metodología de los 32 Casos',
  '05:00',
  true, -- Video de bienvenida 05:00 abierto
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Bienvenido al Laboratorio de Claude. En este video de 5 minutos te explico la dinámica de trabajo de los 32 casos, cómo descargar los prompts ejecutables y la estructura de aplicación paso a paso.',
  NULL,
  'Mira el video de bienvenida, descarga el índice de los 32 casos y selecciona el primer reto para resolver en tu empresa.',
  '[{"name": "Índice de los 32 Casos Prácticos (PDF)", "url": "#", "type": "pdf"}]'::jsonb,
  0
),
(
  'e0000000-0000-0000-0007-000000000001',
  'd0000000-0000-0000-0007-000000000001',
  'Caso 1: Criterio de selección de herramientas en Claude',
  '18:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Matriz de decisión para saber cuándo utilizar Chat, Proyectos, Artefactos o Skills según el tipo de problema.',
  NULL,
  'Aplica la matriz a 3 tareas pendientes de tu trabajo de esta semana.',
  '[]'::jsonb,
  1
),
(
  'e0000000-0000-0000-0007-000000000002',
  'd0000000-0000-0000-0007-000000000001',
  'Caso 2: Protocolo de privacidad y anonimización de datos',
  '20:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Cómo trabajar con información confidencial, clientes reales y números empresariales sin riesgos legales.',
  NULL,
  'Anonimiza un reporte financiero real utilizando la plantilla de filtrado de datos.',
  '[]'::jsonb,
  2
),
(
  'e0000000-0000-0000-0007-000000000003',
  'd0000000-0000-0000-0007-000000000001',
  'Caso 3: Límites de contexto y gestión de documentos extensos',
  '22:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Técnicas para cargar libros, balances de 200 páginas o expedientes completos sin perder precisión.',
  NULL,
  'Carga un expediente extenso y extrae un cuadro comparativo sin alucinaciones.',
  '[]'::jsonb,
  3
),
(
  'e0000000-0000-0000-0007-000000000004',
  'd0000000-0000-0000-0007-000000000001',
  'Caso 4: Estructura del Prompt Ejecutivo de Alto Retorno',
  '25:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'La fórmula de 5 partes para obtener respuestas listas para presentar a directorios o clientes sin editar.',
  NULL,
  'Redacta un prompt ejecutivo para resolver una objeción crítica de un cliente.',
  '[]'::jsonb,
  4
),
(
  'e0000000-0000-0000-0007-000000000005',
  'd0000000-0000-0000-0007-000000000002',
  'Caso 5: Proyecto Corporativo: Redacción y revisión de contratos',
  '30:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Estructuración de un Proyecto con jurisprudencia y términos comerciales para auditar cláusulas de riesgo.',
  NULL,
  'Configura el Proyecto de contratos y detecta 3 cláusulas ambiguas en un contrato de prueba.',
  '[]'::jsonb,
  5
),
(
  'e0000000-0000-0000-0007-000000000006',
  'd0000000-0000-0000-0007-000000000002',
  'Caso 6: Actas ejecutivas y minutas de directorio automáticas',
  '24:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Transformar transcripciones desordenadas de reuniones en actas formales con acuerdos y responsables.',
  NULL,
  'Convierte un audio transcrito en un acta formal con tabla de entregables y fechas límite.',
  '[]'::jsonb,
  6
),
(
  'e0000000-0000-0000-0007-000000000007',
  'd0000000-0000-0000-0007-000000000002',
  'Caso 7: Lanzamiento comercial: Cronograma y entregables de programa',
  '32:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Gestión integral de un lanzamiento de producto desde un solo Proyecto con copys, secuencias y cronograma.',
  NULL,
  'Estructura el cronograma de 4 semanas de lanzamiento en un Artefacto interactivo.',
  '[]'::jsonb,
  7
),
(
  'e0000000-0000-0000-0007-000000000008',
  'd0000000-0000-0000-0007-000000000003',
  'Caso 11: Auditoría de consistencia en reportes financieros',
  '28:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Método de doble verificación cruzada para encontrar discrepancias contables y errores de suma oculta.',
  NULL,
  'Audita un balance de prueba y genera la lista de anomalías con su ubicación de celda.',
  '[]'::jsonb,
  8
),
(
  'e0000000-0000-0000-0007-000000000009',
  'd0000000-0000-0000-0007-000000000003',
  'Caso 12: Validación de datos de clientes y bases de prospectos',
  '26:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Limpieza masiva, normalización de números de teléfono, correos y segmentación por poder adquisitivo.',
  NULL,
  'Limpia una lista de 100 prospectos y descarga el CSV normalizado.',
  '[]'::jsonb,
  9
),
(
  'e0000000-0000-0000-0007-000000000010',
  'd0000000-0000-0000-0007-000000000004',
  'Caso 17: Skill Comercial: Generador de propuestas B2B de alto impacto',
  '35:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Creación de una Skill que cotiza y redacta la propuesta completa a partir de 3 datos del cliente.',
  NULL,
  'Genera una propuesta B2B personalizada en menos de 3 minutos usando tu nueva Skill.',
  '[]'::jsonb,
  10
),
(
  'e0000000-0000-0000-0007-000000000011',
  'd0000000-0000-0000-0007-000000000004',
  'Caso 18: Skill de Selección: Filtro y calificación de candidatos',
  '30:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Matriz de evaluación ciega para analizar decenas de currículums frente al perfil del puesto.',
  NULL,
  'Evalúa 5 CVs con la rúbrica automática y obtén el ranking justificado.',
  '[]'::jsonb,
  11
),
(
  'e0000000-0000-0000-0007-000000000012',
  'd0000000-0000-0000-0007-000000000005',
  'Caso 23: Conexión con Gmail: Respuestas ejecutivas contextuales',
  '26:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Lectura de hilos de correo largos y redacción de respuestas acordes al tono de la empresa.',
  NULL,
  'Conecta tu bandeja y redacta borradores para los 3 correos más urgentes del día.',
  '[]'::jsonb,
  12
),
(
  'e0000000-0000-0000-0007-000000000013',
  'd0000000-0000-0000-0007-000000000005',
  'Caso 24: Conexión con Google Drive: Informes consolidados en la nube',
  '30:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Extracción y síntesis directa de documentos alojados en carpetas compartidas de Google Drive.',
  NULL,
  'Genera un informe ejecutivo consolidando datos de 2 archivos distintos de tu Drive.',
  '[]'::jsonb,
  13
),
(
  'e0000000-0000-0000-0007-000000000014',
  'd0000000-0000-0000-0007-000000000006',
  'Caso 28: Flujo End-to-End: De la reunión al entregable final y facturación',
  '45:00',
  false,
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Cadena completa: Audio de reunión -> Minuta -> Propuesta -> Aprobación -> Tareas en calendario.',
  NULL,
  'Ejecuta la cadena completa con un caso simulado de tu empresa.',
  '[]'::jsonb,
  14
);

-- =====================================================================
-- CURSO NIVEL 3: CLAUDE AUTÓNOMO: AUTOMATIZACIÓN Y AGENTES (S/ 247.00)
-- =====================================================================
INSERT INTO public.courses (
  id, title, description, long_description, category, category_label, level,
  price, is_free, rating, students, instructor, duration, lessons_count, thumbnail,
  is_new, is_popular, what_you_learn, requirements, for_who
) VALUES (
  'c0000000-0000-0000-0000-000000000008',
  'Claude Autónomo: Automatización Empresarial y Agentes (Nivel 3)',
  'Lleva Claude a tu empresa: conecta Google Drive, programa agentes autónomos y construye flujos de trabajo que corren solos 24/7.',
  'El nivel de especialización definitivo. Pasa de ejecutar tareas manualmente a tener procesos que se disparan y resuelven solos en tu computadora y en la nube. Aprende a conectar tu Google Drive para que tus hojas de cálculo, reportes y carpetas se actualicen sin tu intervención, y programa agentes que trabajen mientras duermes en horarios fijos.',
  'ia', 'Inteligencia Artificial', 'Avanzado',
  247.00, false, 5.0, 58, 'David Ames', '14 horas', 13,
  '/images/curso-claude-nivel3.jpg', true, true,
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

-- Módulos Nivel 3
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('d0000000-0000-0000-0008-000000000000', 'c0000000-0000-0000-0000-000000000008', 'Módulo 0: Video de Bienvenida y Hoja de Ruta de Automatización', 0),
('d0000000-0000-0000-0008-000000000001', 'c0000000-0000-0000-0000-000000000008', 'Módulo 1: Automatización de tareas repetitivas recurrentes', 1),
('d0000000-0000-0000-0008-000000000002', 'c0000000-0000-0000-0000-000000000008', 'Módulo 2: Tu Google Drive conectado a Claude (Reportes vivos)', 2),
('d0000000-0000-0000-0008-000000000003', 'c0000000-0000-0000-0000-000000000008', 'Módulo 3: Agentes programados: Trabaja mientras duermes', 3),
('d0000000-0000-0000-0008-000000000004', 'c0000000-0000-0000-0000-000000000008', 'Módulo 4: Flujos de trabajo de punta a punta (End-to-End)', 4);

-- Lecciones Nivel 3
INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES 
(
  'e0000000-0000-0000-0008-000000000000',
  'd0000000-0000-0000-0008-000000000000',
  'Video de Bienvenida y Arquitectura de Automatización',
  '05:00',
  true, -- Clase 0 de bienvenida 05:00 abierta
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Bienvenido al Nivel 3. En este video de 5 minutos te presento el mapa de conexión con Google Drive y la programación de agentes autónomos que trabajan 24/7 sin supervisión manual.',
  NULL,
  'Mira el video de bienvenida, descarga la arquitectura de integración y configura tu carpeta de Google Drive para las automatizaciones.',
  '[{"name": "Arquitectura de Automatización Claude (PDF)", "url": "#", "type": "pdf"}]'::jsonb,
  0
),
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
(
  'e0000000-0000-0000-0008-000000000004',
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
  'e0000000-0000-0000-0008-000000000004',
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

COMMIT;
