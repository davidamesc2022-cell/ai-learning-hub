-- =====================================================================
-- PARTE 2: MÉTODO 4C IA — NIVEL 1: ESTRATEGIA Y SISTEMA INTEGRAL
-- =====================================================================
BEGIN;

-- 1. Insertar Curso Nivel 1
INSERT INTO public.courses (
  id, title, description, long_description, category, category_label, 
  level, price, is_free, rating, students, instructor, duration, 
  lessons_count, thumbnail, is_new, is_popular, what_you_learn, requirements, for_who
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

-- 2. Módulos y Lecciones Nivel 1 (Con UUIDs estándar)
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

COMMIT;
