-- =====================================================================
-- David Ames Academy - Inserción del Curso Oficial:
-- "Claude Laboratorio: 32 Casos Prácticos de Negocio (Nivel 2)"
-- Pilar: Inteligencia Artificial (IA) | Inversión: S/ 147.00
-- =====================================================================

-- 1. Limpieza de versiones previas
DELETE FROM public.courses WHERE id = 'c0000000-0000-0000-0000-000000000007' OR title ILIKE '%Claude Laboratorio%';

-- 2. Insertar Curso Nivel 2 con su portada dedicada oficial (Nivel 2)
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
  'c0000000-0000-0000-0000-000000000007',
  'Claude Laboratorio: 32 Casos Prácticos de Negocio (Nivel 2)',
  'Deja la teoría y resuelve problemas reales: 32 casos aplicados en contratos, propuestas comerciales, auditorías y procesos operativos.',
  'El laboratorio intensivo donde el alumno deja de aprender qué es la herramienta y empieza a resolver retos complejos de su trabajo cotidiano. A través de 6 bloques temáticos estructurados y 32 casos reales paso a paso, dominarás la estructuración de proyectos documentales, auditoría de datos, creación de skills a medida e integración total con tus herramientas de negocio.',
  'ia',
  'Inteligencia Artificial',
  'Intermedio',
  147.00,
  false,
  5.0,
  95,
  'David Ames',
  '16 horas',
  33,
  '/images/curso-claude-nivel2.jpg',
  true,
  true,
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

-- =====================================================================
-- 3. INSERTAR MÓDULOS (MÓDULO 0 + 6 BLOQUES PRÁCTICOS)
-- =====================================================================

INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('d0000000-0000-0000-0007-000000000000', 'c0000000-0000-0000-0000-000000000007', 'Módulo 0: Video de Bienvenida y Metodología del Laboratorio', 0),
('d0000000-0000-0000-0007-000000000001', 'c0000000-0000-0000-0000-000000000007', 'Bloque 1: Arranque rápido: Privacidad, límites y criterios de decisión', 1),
('d0000000-0000-0000-0007-000000000002', 'c0000000-0000-0000-0000-000000000007', 'Bloque 2: Proyectos en acción: Contratos, actas y lanzamientos', 2),
('d0000000-0000-0000-0007-000000000003', 'c0000000-0000-0000-0000-000000000007', 'Bloque 3: Auditoría y validación de datos confiables', 3),
('d0000000-0000-0000-0007-000000000004', 'c0000000-0000-0000-0000-000000000007', 'Bloque 4: Habilidades a la medida: Skills profesionales para tu rubro', 4),
('d0000000-0000-0000-0007-000000000005', 'c0000000-0000-0000-0000-000000000007', 'Bloque 5: Conectores en vivo: Gmail, Google Drive y Calendario', 5),
('d0000000-0000-0000-0007-000000000006', 'c0000000-0000-0000-0000-000000000007', 'Bloque 6: Integración total del flujo de trabajo de inicio a fin', 6);

-- =====================================================================
-- 4. INSERTAR LECCIONES PRÁCTICAS
-- =====================================================================

INSERT INTO public.lessons (
  id, module_id, title, duration, is_free, video_url, description, 
  interactive_classroom_url, assignment, resources, order_index
) VALUES 
-- MÓDULO 0: Video de Bienvenida
(
  'e0000000-0000-0000-0007-000000000000',
  'd0000000-0000-0000-0007-000000000000',
  'Video de Bienvenida y Metodología de los 32 Casos',
  '05:00',
  true, -- Video de bienvenida 05:00 gratuito de muestra
  'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  'Bienvenido al Laboratorio de Claude. En este video de 5 minutos te explico la dinámica de trabajo de los 32 casos, cómo descargar los prompts ejecutables y la estructura de aplicación paso a paso.',
  NULL,
  'Mira el video de bienvenida, descarga el índice de los 32 casos y selecciona el primer reto para resolver en tu empresa.',
  '[{"name": "Índice de los 32 Casos Prácticos (PDF)", "url": "#", "type": "pdf"}]'::jsonb,
  0
),
-- BLOQUE 1: Arranque rápido (Casos 1 al 4)
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

-- BLOQUE 2: Proyectos en acción (Casos 5 al 10)
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

-- BLOQUE 3: Auditoría y validación (Casos 11 al 16)
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

-- BLOQUE 4: Skills profesionales (Casos 17 al 22)
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

-- BLOQUE 5: Conectores en vivo (Casos 23 al 27)
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

-- BLOQUE 6: Integración total (Casos 28 al 32)
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
