-- =====================================================================
-- DAVID AMES ACADEMY - SCRIPT DE INSERCIÓN PARA EL NUEVO CURSO:
-- "DOMINA LA IA: TU TRANSFORMACIÓN COMPLETA"
--
-- Ejecuta este script en el SQL Editor de tu panel de Supabase.
-- =====================================================================

-- 0. Limpieza previa en caso de re-ejecución (para evitar duplicados por UUIDs fijos)
DELETE FROM public.courses WHERE id = 'c0000000-0000-0000-0000-000000000004';

-- 1. INSERTAR EL CURSO PRINCIPAL
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
  'c0000000-0000-0000-0000-000000000004',
  'Domina la IA: Tu Transformación Completa',
  'De no saber nada de Inteligencia Artificial a construir tu propia herramienta digital, en 7 semanas de clases en vivo.',
  'Un solo curso, tres públicos, sin diluir a ninguno. Cada módulo tiene una estructura fija de tres capas: núcleo común → demo en vivo → aplicación diferenciada por perfil (emprendedor / profesional / principiante). El principiante nunca se pierde, el profesional nunca se aburre. Progresión narrativa de 7 módulos de entender → crear → actuar → conectar → construir.',
  'ia',
  'Inteligencia Artificial',
  'Principiante',
  99.00, -- Precio base de entrada (ajustable)
  false, -- Curso premium
  5.0,
  145, -- Número inicial de estudiantes simulado
  'David Ames',
  '10 horas',
  24, -- Total de lecciones insertadas
  'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800', -- Portada temática sobre IA (activa)
  true, -- Se marca como nuevo
  true, -- Se marca como destacado / popular
  
  -- Lo que aprenderás (what_you_learn)
  ARRAY[
    'Entender la evolución exponencial de la IA y cómo afecta a tu sector.',
    'Elegir y dominar los principales modelos (ChatGPT, Claude, Gemini).',
    'Crear prompts y sistemas de contexto maestro que multipliquen tu productividad.',
    'Generar contenido multimedia profesional (texto, imágenes, video, audio y música).',
    'Configurar y conectar agentes de IA autónomos que ejecuten tareas por ti.',
    'Automatizar flujos de trabajo diarios conectando herramientas con Make y n8n.',
    'Aprender Vibe Coding para construir tus propias aplicaciones web sin saber programar.'
  ],
  
  -- Requisitos (requirements)
  ARRAY[
    'No se requiere experiencia técnica o conocimientos de programación.',
    'Computadora con conexión estable a internet.',
    'Ganas de transformarte y adoptar la mentalidad de IA.'
  ],
  
  -- Para quién es (for_who)
  ARRAY[
    'Emprendedores que buscan optimizar su tiempo y automatizar ventas.',
    'Profesionales que desean diferenciarse en su industria y automatizar reportes.',
    'Principiantes que no quieren quedarse atrás en la revolución tecnológica.'
  ]
);

-- 2. INSERTAR LOS MÓDULOS DEL CURSO
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('d0000000-0000-0000-0004-000000000000', 'c0000000-0000-0000-0000-000000000004', 'Módulo 0: Antes de empezar (Onboarding)', 1),
('d0000000-0000-0000-0004-000000000001', 'c0000000-0000-0000-0000-000000000004', 'Módulo 1: Evolución exponencial de la IA', 2),
('d0000000-0000-0000-0004-000000000002', 'c0000000-0000-0000-0000-000000000004', 'Módulo 2: Modelos de IA y dominio de interfaz', 3),
('d0000000-0000-0000-0004-000000000003', 'c0000000-0000-0000-0000-000000000004', 'Módulo 3: Ingeniería de Prompts y de Contexto', 4),
('d0000000-0000-0000-0004-000000000004', 'c0000000-0000-0000-0000-000000000004', 'Módulo 4: IA Generativa: Crear contenido', 5),
('d0000000-0000-0000-0004-000000000005', 'c0000000-0000-0000-0000-000000000004', 'Módulo 5: Agentes de IA: Cuando la IA actúa por ti', 6),
('d0000000-0000-0000-0004-000000000006', 'c0000000-0000-0000-0000-000000000004', 'Módulo 6: Automatización: Conectando todo', 7),
('d0000000-0000-0000-0004-000000000007', 'c0000000-0000-0000-0000-000000000004', 'Módulo 7: Vibe Coding: Construir sin ser programador', 8),
('d0000000-0000-0000-0004-000000000008', 'c0000000-0000-0000-0000-000000000004', 'Bonus: Masterclass de herramientas complementarias', 9);

-- 3. INSERTAR LAS LECCIONES DE CADA MÓDULO

-- Módulo 0: Onboarding (Fricción Técnica Inicial)
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000001', 'd0000000-0000-0000-0004-000000000000', 'Clase 0: Cómo crear tu cuenta en ChatGPT, Gemini y Claude', '15:00', true, 'https://www.youtube.com/watch?v=ysz5S6PUM-U', 'Video práctico paso a paso para resolver la fricción inicial de registro y configuración técnica antes de iniciar las clases en vivo.', '[]'::jsonb, 1);

-- Módulo 1: Evolución Exponencial
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000002', 'd0000000-0000-0000-0004-000000000001', 'Clase 1.1: El impacto y urgencia de la IA', '30:00', true, NULL, 'Análisis de datos de adopción global y LatAm. ¿Por qué el crecimiento actual no tiene precedentes en la historia de la informática?', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000003', 'd0000000-0000-0000-0004-000000000001', 'Clase 1.2: El salto de Chat a Agente autónomo', '25:00', false, NULL, 'Cómo pasamos de modelos que responden preguntas a sistemas capaces de razonar y resolver tareas lógicas en entornos reales.', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000004', 'd0000000-0000-0000-0004-000000000001', 'Clase 1.3: Impacto sectorial en Medicina, Minería y Educación', '35:00', false, NULL, 'Casos de éxito aplicados. Enfoque especial en minería y educación, analizando métricas de productividad reales.', '[]'::jsonb, 3);

-- Módulo 2: Modelos de IA
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000005', 'd0000000-0000-0000-0004-000000000002', 'Clase 2.1: Qué modelo elegir (ChatGPT vs Claude vs Gemini)', '40:00', false, NULL, 'Comparación conceptual basada en rendimiento, límites y casos de uso óptimos para cada marca.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000006', 'd0000000-0000-0000-0004-000000000002', 'Clase 2.2: Tutorial práctico de interfaces y razonamiento', '45:00', false, NULL, 'Uso de Deep Research, memoria persistente (Proyectos), artefactos editables y conectores integrados.', '[]'::jsonb, 2);

-- Módulo 3: Ingeniería de Prompts
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000007', 'd0000000-0000-0000-0004-000000000003', 'Clase 3.1: El modelo mental (Input -> Caja Negra -> Output)', '25:00', false, NULL, 'Por qué la explicabilidad de la IA sigue sin resolverse y cómo tu input es la única palanca de control.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000008', 'd0000000-0000-0000-0004-000000000003', 'Clase 3.2: Anatomía de un buen input', '35:00', false, NULL, 'Fórmulas y componentes clave: Rol, Tarea, Contexto, Restricciones y Ejemplos prácticos.', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000009', 'd0000000-0000-0000-0004-000000000003', 'Clase 3.3: Ingeniería de Contexto y Conversación Natural', '30:00', false, NULL, 'Cómo instruir a la IA a través del contexto acumulado para evitar repetir directrices y comunicarte como un socio de negocios.', '[]'::jsonb, 3);

-- Módulo 4: IA Generativa
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000010', 'd0000000-0000-0000-0004-000000000004', 'Clase 4.1: Creación de contenidos y textos persuasivos', '25:00', false, NULL, 'Técnicas de redacción para propuestas de valor, guiones virales y artículos redactados con inteligencia artificial.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000011', 'd0000000-0000-0000-0004-000000000004', 'Clase 4.2: Generación visual de imágenes con IA', '25:00', false, NULL, 'Uso de herramientas gratuitas (Meta AI, Gemini Nano) y avanzadas (Midjourney) para diseño gráfico comercial.', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000012', 'd0000000-0000-0000-0004-000000000004', 'Clase 4.3: Producción de videos profesionales con IA', '20:00', false, NULL, 'Creación de clips usando modelos de última generación: Gemini Omni Flash, Seedance, Veo y Sora.', '[]'::jsonb, 3),
('e0000000-0000-0000-0004-000000000013', 'd0000000-0000-0000-0004-000000000004', 'Clase 4.4: Clonación de voz y composición de audio', '20:00', false, NULL, 'Clonación de voz profesional con ElevenLabs y generación de música publicitaria con Suno.', '[]'::jsonb, 4);

-- Módulo 5: Agentes de IA
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000014', 'd0000000-0000-0000-0004-000000000005', 'Clase 5.1: Nivel I — Agentes Configurados (GPTs, Gems y Skills)', '25:00', false, NULL, 'Creación de asistentes personalizados con reglas específicas de respuesta paso a paso sin programación.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000015', 'd0000000-0000-0000-0004-000000000005', 'Clase 5.2: Nivel II — Agentes Conectados', '25:00', false, NULL, 'Agentes que acceden a tus herramientas (Gmail, Google Drive, Slack) y ejecutan tareas complejas bajo aprobación.', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000016', 'd0000000-0000-0000-0004-000000000005', 'Clase 5.3: Nivel III — Agentes Autónomos', '25:00', false, NULL, 'Agentes con permisos automáticos que deciden de forma independiente dentro de flujos n8n preconfigurados.', '[]'::jsonb, 3);

-- Módulo 6: Automatización
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000017', 'd0000000-0000-0000-0004-000000000006', 'Clase 6.1: Reglas fijas vs. Criterio propio con IA', '25:00', false, NULL, 'Distinción entre automatización secuencial y automatización cognitiva asistida por inteligencia artificial.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000018', 'd0000000-0000-0000-0004-000000000006', 'Clase 6.2: Automatización ágil con Make', '35:00', false, NULL, 'Diseño práctico en vivo de un escenario de automatización de 3 pasos (Google Sheets + ChatGPT + Email).', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000019', 'd0000000-0000-0000-0004-000000000006', 'Clase 6.3: Automatización corporativa avanzada con n8n', '30:00', false, NULL, 'Estructura e infraestructura para conectar triggers, bases de datos y agentes autónomos de n8n.', '[]'::jsonb, 3);

-- Módulo 7: Vibe Coding
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000020', 'd0000000-0000-0000-0004-000000000007', 'Clase 7.1: ¿Qué es Vibe Coding y cómo nos empodera?', '25:00', false, NULL, 'El cambio de paradigma: programar describiendo tu idea a una IA en lenguaje natural. Cifras y futuro del software.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000021', 'd0000000-0000-0000-0004-000000000007', 'Clase 7.2: Ecosistema de herramientas (Lovable, Bolt, v0)', '25:00', false, NULL, 'Introducción a las plataformas de generación de código, despliegues automáticos a producción y repositorios GitHub.', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000022', 'd0000000-0000-0000-0004-000000000007', 'Clase 7.3: Qué construir (Calculadoras, Landing Pages y Dashboards)', '30:00', false, NULL, 'Ejemplos enfocados en mejorar la productividad y conversiones comerciales utilizando plantillas y bases de datos.', '[]'::jsonb, 3),
('e0000000-0000-0000-0004-000000000023', 'd0000000-0000-0000-0004-000000000007', 'Clase 7.4: Demo en vivo: Construyendo una landing de negocio de cero a producción', '40:00', false, NULL, 'Caso práctico de creación de sitio web responsivo, interactivo y publicado en tiempo real.', '[]'::jsonb, 4);

-- Módulo Bonus: Masterclass
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000024', 'd0000000-0000-0000-0004-000000000008', 'Clase Bonus: Herramientas complementarias (NotebookLM, Gamma, Perplexity)', '45:00', false, NULL, 'Masterclass enfocada en investigación rápida, generación automatizada de presentaciones e investigación web.', '[]'::jsonb, 1);
