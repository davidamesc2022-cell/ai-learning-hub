-- =====================================================================
-- MIGRACIÓN OFICIAL: PILAR MARKETING DIGITAL - DOS NIVELES MÉTODO 4C
-- 1. Elimina cursos obsoletos del pilar Marketing
-- 2. Inserta Nivel 1 (Pedagógico / Estrategia y Sistema Integral)
-- 3. Inserta Nivel 2 (Práctico & Premium / Implementación Guiada con Plugin Claude)
-- =====================================================================

BEGIN;

-- ---------------------------------------------------------------------
-- PASO 1: ELIMINAR CURSOS Y DATOS OBSOLETOS DE MARKETING
-- ---------------------------------------------------------------------
-- Eliminar lecciones de cursos viejos de marketing
DELETE FROM public.lessons 
WHERE module_id IN (
  SELECT id FROM public.modules 
  WHERE course_id IN ('c0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002')
);

-- Eliminar módulos de cursos viejos de marketing
DELETE FROM public.modules 
WHERE course_id IN ('c0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002');

-- Eliminar inscripciones anteriores de esos cursos
DELETE FROM public.user_courses 
WHERE course_id IN ('c0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002');

-- Eliminar los cursos obsoletos
DELETE FROM public.courses 
WHERE id IN ('c0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002');


-- ---------------------------------------------------------------------
-- PASO 2: INSERTAR CURSO NIVEL 1 (PEDAGÓGICO / ESTRATEGIA Y SISTEMA INTEGRAL)
-- ---------------------------------------------------------------------
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
  'c0000000-0000-0000-0000-000000000001',
  'Método 4C IA — Nivel 1: Estrategia y Sistema Integral',
  'De la improvisación a un ecosistema comercial predecible: Claridad, Creatividad, Comunicación y Conversión con IA en 12 módulos estratégicos.',
  'El programa completo para dominar el marco conceptual y estratégico del Método 4C. Aprende qué es cada herramienta, por qué tu negocio la necesita y cómo se conecta de forma secuencial: desde el briefing del negocio hasta la fidelización automatizada. Incluye 10 skills independientes para Claude, plantillas descargables y la construcción de tu Carpeta 4C base.',
  'marketing',
  'Marketing Digital',
  'Principiante',
  49.00,
  false,
  4.9,
  950,
  'David Ames',
  '12 horas',
  12,
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  true,
  true,
  ARRAY[
    'Comprender la visión completa del Método 4C y su lógica secuencial no negociable.',
    'Construir el Briefing del negocio, Estudio de Mercado y Cliente Ideal 360° con microdolores reales.',
    'Definir la Propuesta de Valor, Dirección Visual, Banco de Piezas y Guiones de Video.',
    'Diseñar la Ruta de Conversión, Venta Consultiva y Sistema de Fidelización y Retención.'
  ],
  ARRAY[
    'Tener un negocio, producto o servicio activo o en fase de lanzamiento.',
    'Computadora con conexión a internet y cuenta gratuita de Claude o ChatGPT.',
    'No se requiere experiencia técnica ni conocimientos avanzados previos de marketing.'
  ],
  ARRAY[
    'Emprendedores y dueños de negocio que buscan ventas predecibles y organizadas.',
    'Profesionales independientes, marcas personales y agencias de marketing.',
    'Cualquier persona que quiera dejar de improvisar y construir un sistema de crecimiento escalable.'
  ]
);

-- MÓDULOS Y LECCIONES NIVEL 1
-- Módulo 0
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-00', 'c0000000-0000-0000-0000-000000000001', 'Módulo 0', 1);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-00', 'm4c1-mod-00', 'Visión completa del Método 4C', 'Entiende el sistema entero antes de construir cada pieza.', '15:00', true, 1);

-- C1 · Briefing
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-01', 'c0000000-0000-0000-0000-000000000001', 'C1 · Briefing', 2);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-01', 'm4c1-mod-01', 'Documenta lo que tu negocio ya sabe', 'Extrae y organiza la información que tienes en la cabeza pero nunca has escrito.', '20:00', false, 1);

-- C1 · Estudio de Mercado
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-02', 'c0000000-0000-0000-0000-000000000001', 'C1 · Estudio de Mercado', 3);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-02', 'm4c1-mod-02', 'Conoce tu arena antes de competir', 'Investiga competencia, precios, patrones y brechas de oportunidad.', '25:00', false, 1);

-- C1 · Cliente Ideal
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-03', 'c0000000-0000-0000-0000-000000000001', 'C1 · Cliente Ideal', 4);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-03', 'm4c1-mod-03', 'Sabe exactamente a quién le vendes', 'Construye el perfil 360° con microdolores y afirmaciones reales.', '25:00', false, 1);

-- C1 · Valor y Posicionamiento
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-04', 'c0000000-0000-0000-0000-000000000001', 'C1 · Valor y Posicionamiento', 5);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-04', 'm4c1-mod-04', 'Define por qué deberían elegirte a ti', 'Propuesta de valor, posicionamiento y personalidad verbal de tu marca.', '20:00', false, 1);

-- C1 · Estrategia de Contenidos
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-05', 'c0000000-0000-0000-0000-000000000001', 'C1 · Estrategia de Contenidos', 6);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-05', 'm4c1-mod-05', 'Tu plan de 30 días listo para ejecutar', 'Pilares, ángulos, formatos y calendario editorial con propósito.', '25:00', false, 1);

-- C2 · Branding y Dirección Visual
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-06', 'c0000000-0000-0000-0000-000000000001', 'C2 · Branding y Dirección Visual', 7);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-06', 'm4c1-mod-06', 'Define cómo se ve todo lo que produces', 'Paleta, tipografías, estilo y reglas de aplicación visual.', '20:00', false, 1);

-- C2 · Piezas Visuales
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-07', 'c0000000-0000-0000-0000-000000000001', 'C2 · Piezas Visuales', 8);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-07', 'm4c1-mod-07', 'Produce contenido visual con sistema', 'Briefs, jerarquía, copy y dirección de arte por pieza.', '25:00', false, 1);

-- C3 · Mensajes, Guiones y Video
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-08', 'c0000000-0000-0000-0000-000000000001', 'C3 · Mensajes, Guiones y Video', 9);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-08', 'm4c1-mod-08', 'Las palabras y los guiones que venden', 'Matriz de mensajes, hooks, copy por formato y guiones de video.', '30:00', false, 1);

-- C4 · Ruta de Conversión
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-09', 'c0000000-0000-0000-0000-000000000001', 'C4 · Ruta de Conversión', 10);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-09', 'm4c1-mod-09', 'Del primer contacto al cierre', 'Mapa de ruta, diagnóstico, objeciones y cierre ético.', '30:00', false, 1);

-- C4 · Fidelización y Seguimiento
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-10', 'c0000000-0000-0000-0000-000000000001', 'C4 · Fidelización y Seguimiento', 11);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-10', 'm4c1-mod-10', 'Que cada cliente vuelva y te recomiende', 'Postventa, nutrición, reactivación, referidos y métricas.', '25:00', false, 1);

-- Cierre del Nivel 1
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c1-mod-11', 'c0000000-0000-0000-0000-000000000001', 'Cierre del Nivel 1', 12);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c1-les-11', 'm4c1-mod-11', 'Tu Carpeta 4C completa', 'Revisión final del sistema y presentación del Nivel 2.', '20:00', false, 1);


-- ---------------------------------------------------------------------
-- PASO 3: INSERTAR CURSO NIVEL 2 (PRÁCTICO / IMPLEMENTACIÓN GUIADA PREMIUM)
-- ---------------------------------------------------------------------
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
  'c0000000-0000-0000-0000-000000000002',
  'Método 4C IA — Nivel 2: Implementación Guiada & Plugin Orquestador',
  'Ejecución directa sobre tu negocio real: 10 sesiones en vivo con el Plugin 4C para Claude, validación y tu Carpeta 4C terminada.',
  'El programa de aceleración práctica y premium del Método 4C. Diseñado para emprendedores y empresas que ya conocen la metodología y quieren implementarla a máxima velocidad con acompañamiento guiado. Accede al Plugin oficial de Claude con las 10 herramientas automatizadas más el /4c-orquestador para generar y validar toda tu estrategia en tiempo real sobre tu propio negocio.',
  'marketing',
  'Marketing Digital',
  'Avanzado',
  197.00,
  false,
  5.0,
  180,
  'David Ames',
  '16 horas',
  12,
  'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
  true,
  true,
  ARRAY[
    'Instalar y dominar el Plugin oficial Método 4C IA con el orquestador en Claude.',
    'Ejecutar las 10 herramientas del método en sesiones de trabajo sobre tu negocio real.',
    'Recibir retroalimentación y validación directa en cada entregable estratégico.',
    'Terminar con tu Carpeta 4C real, validada y lista para facturar y escalar.'
  ],
  ARRAY[
    'Haber completado o cursar el Método 4C Nivel 1 (Pedagógico).',
    'Tener un negocio activo, marca personal o producto con información real.',
    'Cuenta activa de Claude (preferentemente plan Pro para uso fluido del plugin).'
  ],
  ARRAY[
    'Emprendedores que priorizan velocidad y quieren su sistema de marketing listo en días.',
    'Dueños de negocio que desean implementar un pipeline de prospección y ventas validado.',
    'Consultores y profesionales que quieren automatizar su proceso de entrega a clientes.'
  ]
);

-- MÓDULOS Y LECCIONES NIVEL 2
-- Sesión 0 · Setup
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-00', 'c0000000-0000-0000-0000-000000000002', 'Sesión 0 · Setup', 1);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-00', 'm4c2-mod-00', 'Instala y configura el Plugin 4C IA', 'Preparación del entorno y definición del negocio a trabajar.', '30:00', true, 1);

-- Sesión 1 · Briefing en vivo
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-01', 'c0000000-0000-0000-0000-000000000002', 'Sesión 1 · Briefing en vivo', 2);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-01', 'm4c2-mod-01', 'Ejecuta tu briefing con IA', 'Documentación completa de tu negocio en una sesión.', '60:00', false, 1);

-- Sesión 2 · Estudio de Mercado en vivo
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-02', 'c0000000-0000-0000-0000-000000000002', 'Sesión 2 · Estudio de Mercado en vivo', 3);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-02', 'm4c2-mod-02', 'Investiga tu mercado en tiempo real', 'Competencia, precios y oportunidades con búsqueda real.', '60:00', false, 1);

-- Sesión 3 · Cliente Ideal en vivo
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-03', 'c0000000-0000-0000-0000-000000000002', 'Sesión 3 · Cliente Ideal en vivo', 4);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-03', 'm4c2-mod-03', 'Construye tu perfil de cliente sobre datos reales', 'Perfil 360° verificable aplicado a tu negocio.', '60:00', false, 1);

-- Sesión 4 · Valor y Posicionamiento en vivo
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-04', 'c0000000-0000-0000-0000-000000000002', 'Sesión 4 · Valor y Posicionamiento en vivo', 5);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-04', 'm4c2-mod-04', 'Formula tu diferencial con datos', 'Propuesta de valor y posicionamiento aplicados.', '60:00', false, 1);

-- Sesión 5 · Estrategia de Contenidos en vivo
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-05', 'c0000000-0000-0000-0000-000000000002', 'Sesión 5 · Estrategia de Contenidos en vivo', 6);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-05', 'm4c2-mod-05', 'Arma tu calendario editorial real', 'Plan de 30 días listo para publicar.', '60:00', false, 1);

-- Sesión 6 · Branding y Dirección Visual en vivo
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-06', 'c0000000-0000-0000-0000-000000000002', 'Sesión 6 · Branding y Dirección Visual en vivo', 7);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-06', 'm4c2-mod-06', 'Traduce tu marca a un sistema visual', 'Guía visual completa y documentada.', '60:00', false, 1);

-- Sesión 7 · Piezas Visuales en vivo
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-07', 'c0000000-0000-0000-0000-000000000002', 'Sesión 7 · Piezas Visuales en vivo', 8);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-07', 'm4c2-mod-07', 'Produce piezas listas para publicar', 'Contenido real producido en sesión.', '60:00', false, 1);

-- Sesión 8 · Mensajes y Video en vivo
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-08', 'c0000000-0000-0000-0000-000000000002', 'Sesión 8 · Mensajes y Video en vivo', 9);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-08', 'm4c2-mod-08', 'Tu banco de mensajes y tu primer guión', 'Hooks, copy y guión de video aprobado.', '60:00', false, 1);

-- Sesión 9 · Ruta de Conversión en vivo
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-09', 'c0000000-0000-0000-0000-000000000002', 'Sesión 9 · Ruta de Conversión en vivo', 10);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-09', 'm4c2-mod-09', 'Diseña tu proceso de venta completo', 'Del primer mensaje al cierre, personalizado.', '60:00', false, 1);

-- Sesión 10 · Fidelización en vivo
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-10', 'c0000000-0000-0000-0000-000000000002', 'Sesión 10 · Fidelización en vivo', 11);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-10', 'm4c2-mod-10', 'Construye tu sistema de retención', 'Postventa, referidos, pipeline y métricas.', '60:00', false, 1);

-- Cierre y Graduación
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('m4c2-mod-11', 'c0000000-0000-0000-0000-000000000002', 'Cierre y Graduación', 12);

INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES
('m4c2-les-11', 'm4c2-mod-11', 'Tu Carpeta 4C aplicada y tu plugin permanente', 'Revisión final, presentación de resultados y entrega oficial.', '45:00', false, 1);

COMMIT;

-- Comprobación final
SELECT id, title, category, price, lessons_count, level 
FROM public.courses 
WHERE category = 'marketing' OR title ILIKE '%Método 4C%'
ORDER BY id;
