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
) ON CONFLICT (id) DO UPDATE SET 
  title = EXCLUDED.title, 
  description = EXCLUDED.description,
  long_description = EXCLUDED.long_description,
  category = EXCLUDED.category,
  price = EXCLUDED.price;

-- MÓDULOS Y LECCIONES NIVEL 1
INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000000', 'c0000000-0000-0000-0000-000000000001', 'Módulo 0', 1) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000000', 'd1000000-0000-0000-0000-000000000000', 'Visión completa del Método 4C', 'Entiende el sistema entero antes de construir cada pieza.', '15:00', true, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 'C1 · Briefing', 2) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000001', 'd1000000-0000-0000-0000-000000000001', 'Documenta lo que tu negocio ya sabe', 'Extrae y organiza la información que tienes en la cabeza pero nunca has escrito.', '20:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000001', 'C1 · Estudio de Mercado', 3) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000002', 'd1000000-0000-0000-0000-000000000002', 'Conoce tu arena antes de competir', 'Investiga competencia, precios, patrones y brechas de oportunidad.', '25:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000001', 'C1 · Cliente Ideal', 4) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000003', 'd1000000-0000-0000-0000-000000000003', 'Sabe exactamente a quién le vendes', 'Construye el perfil 360° con microdolores y afirmaciones reales.', '25:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000004', 'c0000000-0000-0000-0000-000000000001', 'C1 · Valor y Posicionamiento', 5) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000004', 'd1000000-0000-0000-0000-000000000004', 'Define por qué deberían elegirte a ti', 'Propuesta de valor, posicionamiento y personalidad verbal de tu marca.', '20:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000005', 'c0000000-0000-0000-0000-000000000001', 'C1 · Estrategia de Contenidos', 6) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000005', 'd1000000-0000-0000-0000-000000000005', 'Tu plan de 30 días listo para ejecutar', 'Pilares, ángulos, formatos y calendario editorial con propósito.', '25:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000006', 'c0000000-0000-0000-0000-000000000001', 'C2 · Branding y Dirección Visual', 7) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000006', 'd1000000-0000-0000-0000-000000000006', 'Define cómo se ve todo lo que produces', 'Paleta, tipografías, estilo y reglas de aplicación visual.', '20:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000007', 'c0000000-0000-0000-0000-000000000001', 'C2 · Piezas Visuales', 8) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000007', 'd1000000-0000-0000-0000-000000000007', 'Produce contenido visual con sistema', 'Briefs, jerarquía, copy y dirección de arte por pieza.', '25:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000008', 'c0000000-0000-0000-0000-000000000001', 'C3 · Mensajes, Guiones y Video', 9) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000008', 'd1000000-0000-0000-0000-000000000008', 'Las palabras y los guiones que venden', 'Matriz de mensajes, hooks, copy por formato y guiones de video.', '30:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000009', 'c0000000-0000-0000-0000-000000000001', 'C4 · Ruta de Conversión', 10) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000009', 'd1000000-0000-0000-0000-000000000009', 'Del primer contacto al cierre', 'Mapa de ruta, diagnóstico, objeciones y cierre ético.', '30:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000010', 'c0000000-0000-0000-0000-000000000001', 'C4 · Fidelización y Seguimiento', 11) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000010', 'd1000000-0000-0000-0000-000000000010', 'Que cada cliente vuelva y te recomiende', 'Postventa, nutrición, reactivación, referidos y métricas.', '25:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d1000000-0000-0000-0000-000000000011', 'c0000000-0000-0000-0000-000000000001', 'Cierre del Nivel 1', 12) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e1000000-0000-0000-0000-000000000011', 'd1000000-0000-0000-0000-000000000011', 'Tu Carpeta 4C completa', 'Revisión final del sistema y presentación del Nivel 2.', '20:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;


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
) ON CONFLICT (id) DO UPDATE SET 
  title = EXCLUDED.title, 
  description = EXCLUDED.description,
  long_description = EXCLUDED.long_description,
  category = EXCLUDED.category,
  price = EXCLUDED.price;

-- MÓDULOS Y LECCIONES NIVEL 2
INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000000', 'c0000000-0000-0000-0000-000000000002', 'Sesión 0 · Setup', 1) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000000', 'd2000000-0000-0000-0000-000000000000', 'Instala y configura el Plugin 4C IA', 'Preparación del entorno y definición del negocio a trabajar.', '30:00', true, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002', 'Sesión 1 · Briefing en vivo', 2) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000001', 'd2000000-0000-0000-0000-000000000001', 'Ejecuta tu briefing con IA', 'Documentación completa de tu negocio en una sesión.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000002', 'Sesión 2 · Estudio de Mercado en vivo', 3) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000002', 'd2000000-0000-0000-0000-000000000002', 'Investiga tu mercado en tiempo real', 'Competencia, precios y oportunidades con búsqueda real.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000002', 'Sesión 3 · Cliente Ideal en vivo', 4) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000003', 'd2000000-0000-0000-0000-000000000003', 'Construye tu perfil de cliente sobre datos reales', 'Perfil 360° verificable aplicado a tu negocio.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000004', 'c0000000-0000-0000-0000-000000000002', 'Sesión 4 · Valor y Posicionamiento en vivo', 5) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000004', 'd2000000-0000-0000-0000-000000000004', 'Formula tu diferencial con datos', 'Propuesta de valor y posicionamiento aplicados.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000005', 'c0000000-0000-0000-0000-000000000002', 'Sesión 5 · Estrategia de Contenidos en vivo', 6) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000005', 'd2000000-0000-0000-0000-000000000005', 'Arma tu calendario editorial real', 'Plan de 30 días listo para publicar.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000006', 'c0000000-0000-0000-0000-000000000002', 'Sesión 6 · Branding y Dirección Visual en vivo', 7) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000006', 'd2000000-0000-0000-0000-000000000006', 'Traduce tu marca a un sistema visual', 'Guía visual completa y documentada.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000007', 'c0000000-0000-0000-0000-000000000002', 'Sesión 7 · Piezas Visuales en vivo', 8) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000007', 'd2000000-0000-0000-0000-000000000007', 'Produce piezas listas para publicar', 'Contenido real producido en sesión.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000008', 'c0000000-0000-0000-0000-000000000002', 'Sesión 8 · Mensajes y Video en vivo', 9) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000008', 'd2000000-0000-0000-0000-000000000008', 'Tu banco de mensajes y tu primer guión', 'Hooks, copy y guión de video aprobado.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000009', 'c0000000-0000-0000-0000-000000000002', 'Sesión 9 · Ruta de Conversión en vivo', 10) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000009', 'd2000000-0000-0000-0000-000000000009', 'Diseña tu proceso de venta completo', 'Del primer mensaje al cierre, personalizado.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000010', 'c0000000-0000-0000-0000-000000000002', 'Sesión 10 · Fidelización en vivo', 11) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000010', 'd2000000-0000-0000-0000-000000000010', 'Construye tu sistema de retención', 'Postventa, referidos, pipeline y métricas.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('d2000000-0000-0000-0000-000000000011', 'c0000000-0000-0000-0000-000000000002', 'Cierre y Graduación', 12) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('e2000000-0000-0000-0000-000000000011', 'd2000000-0000-0000-0000-000000000011', 'Tu Carpeta 4C aplicada y tu plugin permanente', 'Revisión final, presentación de resultados y entrega oficial.', '45:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

COMMIT;

-- Comprobación final
SELECT id, title, category, price, lessons_count, level 
FROM public.courses 
WHERE category = 'marketing' OR title ILIKE '%Método 4C%'
ORDER BY id;
