-- =====================================================================
-- DAVID AMES ACADEMY - SCRIPT DE ACTUALIZACIÓN A LA VERSIÓN 6:
-- "DOMINA LA IA: TU TRANSFORMACIÓN COMPLETA" (CON MÓDULO 8 DE n8n)
--
-- Ejecuta este script en el SQL Editor de tu panel de Supabase.
-- =====================================================================

-- 0. Limpieza previa del curso para asegurar que se actualice de forma limpia
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
  'De no saber nada de Inteligencia Artificial a construir tu propio agente de IA, en 8 semanas de clases en vivo.',
  'Un solo curso, tres públicos, sin diluir a ninguno. Cada módulo tiene una estructura fija de tres capas: núcleo común → demo en vivo → aplicación diferenciada por perfil (emprendedor / profesional / principiante). El principiante nunca se pierde, el profesional nunca se aburre. Progresión narrativa de 8 módulos de entender → crear → actuar → conectar → construir.',
  'ia',
  'Inteligencia Artificial',
  'Principiante',
  99.00, -- Precio base ajustable
  false, -- Curso premium
  5.0,
  145, -- Estudiantes iniciales
  'David Ames',
  '12 horas', -- Duración ampliada
  30, -- Total de lecciones insertadas
  'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800', -- Portada temática sobre IA
  true, -- Nuevo
  true, -- Popular
  
  -- Lo que aprenderán (what_you_learn)
  ARRAY[
    'Entender la evolución exponencial de la IA y cómo afecta a tu sector.',
    'Elegir y dominar los principales modelos (ChatGPT, Claude, Gemini).',
    'Crear prompts y sistemas de contexto maestro que multipliquen tu productividad.',
    'Generar contenido multimedia profesional (texto, imágenes, video, audio y música).',
    'Configurar y conectar agentes de IA autónomos que ejecuten tareas por ti.',
    'Automatizar flujos de trabajo diarios conectando herramientas con Make y n8n.',
    'Aprender Vibe Coding para construir tus propias aplicaciones web sin saber programar.',
    'Construir un agente real con trigger, memoria, herramientas y modelo usando n8n.'
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
('d0000000-0000-0000-0004-000000000008', 'c0000000-0000-0000-0000-000000000004', 'Módulo 8: Agentes de IA en acción: Construye tu primer agente con n8n', 9),
('d0000000-0000-0000-0004-000000000009', 'c0000000-0000-0000-0000-000000000004', 'Bonus: Masterclass de herramientas complementarias', 10);

-- 3. INSERTAR LAS LECCIONES DE CADA MÓDULO

-- Módulo 0: Onboarding
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000001', 'd0000000-0000-0000-0004-000000000000', 'Clase 0: Cómo crear tu cuenta en ChatGPT, Gemini y Claude', '15:00', true, 'https://www.youtube.com/watch?v=ysz5S6PUM-U', 'Video práctico paso a paso para resolver la fricción inicial de registro y configuración técnica antes de iniciar las clases en vivo.', '[]'::jsonb, 1);

-- Módulo 1: Evolución Exponencial
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000002', 'd0000000-0000-0000-0004-000000000001', 'Clase 1.1: Bloque A — Cómo ha crecido la IA (adopción global)', '25:00', true, NULL, 'Análisis de datos de velocidad de adopción de la IA generativa en comparación con PC e Internet (Stanford AI Index 2026).', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000003', 'd0000000-0000-0000-0004-000000000001', 'Clase 1.2: Bloque B — El salto de Chat a Agente autónomo', '25:00', false, NULL, 'La evolución desde modelos que responden preguntas turno por turno a sistemas que resuelven tareas complejas de forma autónoma.', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000004', 'd0000000-0000-0000-0004-000000000001', 'Clase 1.3: Bloque C — Impacto sectorial en Medicina, Minería y Retail', '30:00', false, NULL, 'Métricas reales sobre aumento de productividad en 5 sectores clave, con enfoque especial en minería y educación.', '[]'::jsonb, 3);

-- Módulo 2: Modelos de IA
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000005', 'd0000000-0000-0000-0004-000000000002', 'Clase 2.1: Qué modelo elegir (ChatGPT vs Claude vs Gemini)', '35:00', false, NULL, 'Comparativa de capacidades y fortalezas para perfiles de emprendedores, profesionales y principiantes.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000006', 'd0000000-0000-0000-0004-000000000002', 'Clase 2.2: Domina tu herramienta (tutorial práctico de interfaz)', '45:00', false, NULL, 'Niveles de razonamiento, Deep Research, gestión de Proyectos en Claude, artefactos editables y conectores integrados.', '[]'::jsonb, 2);

-- Módulo 3: Ingeniería de Prompts
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000007', 'd0000000-0000-0000-0004-000000000003', 'Clase 3.1: El modelo mental (Input -> Caja Negra -> Output)', '20:00', false, NULL, 'Por qué no necesitas entender los misterios internos del modelo, sino dominar la única palanca de control: tu input.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000008', 'd0000000-0000-0000-0004-000000000003', 'Clase 3.2: Anatomía de un buen input', '25:00', false, NULL, 'Estructura paso a paso de un prompt efectivo: Rol, Tarea, Contexto, Restricciones y Ejemplos (Few-Shot Prompting).', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000009', 'd0000000-0000-0000-0004-000000000003', 'Clase 3.3: Ingeniería de Contexto', '25:00', false, NULL, 'Cómo crear un sistema con memoria para que la IA sepa quién eres y qué necesitas, sin repetir directrices.', '[]'::jsonb, 3),
('e0000000-0000-0000-0004-000000000010', 'd0000000-0000-0000-0004-000000000003', 'Clase 3.4: Aplicación diferenciada según perfiles', '30:00', false, NULL, 'Ejercicios de prompts adaptados a emprendedores (negocios/ventas) y profesionales (informes/análisis).', '[]'::jsonb, 4),
('e0000000-0000-0000-0004-000000000011', 'd0000000-0000-0000-0004-000000000003', 'Clase 3.5: Cierre: de la fórmula a la conversación natural', '20:00', false, NULL, 'Cómo superar la rigidez de las plantillas y hablar con la IA como un socio de negocio real.', '[]'::jsonb, 5);

-- Módulo 4: IA Generativa
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000012', 'd0000000-0000-0000-0004-000000000004', 'Clase 4.1: Producción y estructuración de textos', '25:00', false, NULL, 'Creación práctica de propuestas comerciales, guiones, y artículos profesionales con el tono de marca.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000013', 'd0000000-0000-0000-0004-000000000004', 'Clase 4.2: Creación de imágenes con IA', '25:00', false, NULL, 'Uso práctico de generadores de imágenes: Meta AI, Gemini y la calidad artística avanzada en Midjourney.', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000014', 'd0000000-0000-0000-0004-000000000004', 'Clase 4.3: Generación de video avanzado', '25:00', false, NULL, 'Edición conversacional con Gemini Omni Flash y generación cinematográfica con Seedance, Veo y Sora.', '[]'::jsonb, 3),
('e0000000-0000-0000-0004-000000000015', 'd0000000-0000-0000-0004-000000000004', 'Clase 4.4: Clonación de voz y composición de audio', '25:00', false, NULL, 'Uso de ElevenLabs para clonación de voz y Suno para la creación de pistas musicales publicitarias en español.', '[]'::jsonb, 4);

-- Módulo 5: Agentes de IA
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000016', 'd0000000-0000-0000-0004-000000000005', 'Clase 5.1: Nivel I — Agente Configurado (GPTs, Gems y Claude Skills)', '25:00', false, NULL, 'Creación de asistentes conversacionales estructurados con instrucciones fijas y personalidad definida.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000017', 'd0000000-0000-0000-0004-000000000005', 'Clase 5.2: Nivel II — Agente Conectado a herramientas', '25:00', false, NULL, 'Conexión de agentes de IA a tus servicios habituales (Gmail, Drive, Slack) con ciclos de aprobación humana.', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000018', 'd0000000-0000-0000-0004-000000000005', 'Clase 5.3: Nivel III — Agente Autónomo y límites de acierto', '25:00', false, NULL, 'Configuración de ejecución automática y análisis del margen de error (~66% en tareas complejas).', '[]'::jsonb, 3);

-- Módulo 6: Automatización
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000019', 'd0000000-0000-0000-0004-000000000006', 'Clase 6.1: Reglas fijas vs. Automatización cognitiva', '25:00', false, NULL, 'Diferencias entre flujos deterministas tradicionales y flujos que integran la capacidad de juicio de la IA.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000020', 'd0000000-0000-0000-0004-000000000006', 'Clase 6.2: Automatización práctica con Make', '35:00', false, NULL, 'Creación paso a paso de tu primer escenario de 3 pasos conectando servicios populares.', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000021', 'd0000000-0000-0000-0004-000000000006', 'Clase 6.3: Introducción a la automatización avanzada con n8n', '30:00', false, NULL, 'Conceptos básicos de nodos, triggers y estructura técnica que utilizaremos en la fase práctica.', '[]'::jsonb, 3);

-- Módulo 7: Vibe Coding
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000022', 'd0000000-0000-0000-0004-000000000007', 'Clase 7.1: ¿Qué es Vibe Coding y cómo nos empodera?', '25:00', false, NULL, 'El cambio de paradigma donde programar consiste en describir tus ideas en lenguaje natural (60% del código en 2026).', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000023', 'd0000000-0000-0000-0004-000000000007', 'Clase 7.2: Ecosistema de desarrollo (Lovable, Bolt y v0)', '25:00', false, NULL, 'Ventajas de Lovable, integración automática con GitHub y despliegue simple a producción.', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000024', 'd0000000-0000-0000-0004-000000000007', 'Clase 7.3: Qué construir (calculadoras, landings, dashboards de Excel)', '30:00', false, NULL, 'Ideas concretas y ejemplos prácticos para crear utilidades operativas y visuales en tu negocio.', '[]'::jsonb, 3),
('e0000000-0000-0000-0004-000000000025', 'd0000000-0000-0000-0004-000000000007', 'Clase 7.4: Demo en vivo: Creación y despliegue de una Landing Page', '40:00', false, NULL, 'Construcción y publicación de una landing real en vivo de principio a fin.', '[]'::jsonb, 4);

-- Módulo 8: Agentes de IA en Acción
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000026', 'd0000000-0000-0000-0004-000000000008', 'Clase 8.1: Recapitulación rápida e integración de automatización', '20:00', false, NULL, 'Cómo conectar la teoría del Módulo 5 con la infraestructura de flujos de trabajo del Módulo 6.', '[]'::jsonb, 1),
('e0000000-0000-0000-0004-000000000027', 'd0000000-0000-0000-0004-000000000008', 'Clase 8.2: Construcción en vivo de tu primer agente autónomo', '45:00', false, NULL, 'Flujo práctico paso a paso de un agente que toma decisiones lógicas basado en trigger, memoria y herramientas en n8n.', '[]'::jsonb, 2),
('e0000000-0000-0000-0004-000000000028', 'd0000000-0000-0000-0004-000000000008', 'Clase 8.3: Pruebas, depuración y control de errores', '25:00', false, NULL, 'Técnicas esenciales para corregir comportamientos inesperados y bucles infinitos en el agente autónomo.', '[]'::jsonb, 3),
('e0000000-0000-0000-0004-000000000029', 'd0000000-0000-0000-0004-000000000008', 'Clase 8.4: Criterio técnico y supervisión', '30:00', false, NULL, 'Criterios de gobernanza de agentes de IA: cuándo automatizar con total autonomía y cuándo requerir supervisión humana.', '[]'::jsonb, 4);

-- Módulo Bonus: Masterclass
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('e0000000-0000-0000-0004-000000000030', 'd0000000-0000-0000-0004-000000000009', 'Clase Bonus: NotebookLM, Claude Design, Gamma y Perplexity', '45:00', false, NULL, 'Masterclass práctica con herramientas adicionales indispensables para tu día a día profesional.', '[]'::jsonb, 1);
