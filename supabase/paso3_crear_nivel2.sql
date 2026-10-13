-- =====================================================================
-- PARTE 3: MÉTODO 4C IA — NIVEL 2: IMPLEMENTACIÓN GUIADA PREMIUM
-- Inserta el curso de Nivel 2 con sus 12 sesiones prácticas y lecciones
-- =====================================================================

BEGIN;

-- 1. Crear el Curso Nivel 2
INSERT INTO public.courses (
  id, title, description, long_description, category, category_label, 
  level, price, is_free, rating, students, instructor, duration, 
  lessons_count, thumbnail, is_new, is_popular, what_you_learn, requirements, for_who
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

-- 2. Sesiones y Lecciones Nivel 2
INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-00', 'c0000000-0000-0000-0000-000000000002', 'Sesión 0 · Setup', 1) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-00', 'm4c2-mod-00', 'Instala y configura el Plugin 4C IA', 'Preparación del entorno y definición del negocio a trabajar.', '30:00', true, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-01', 'c0000000-0000-0000-0000-000000000002', 'Sesión 1 · Briefing en vivo', 2) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-01', 'm4c2-mod-01', 'Ejecuta tu briefing con IA', 'Documentación completa de tu negocio en una sesión.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-02', 'c0000000-0000-0000-0000-000000000002', 'Sesión 2 · Estudio de Mercado en vivo', 3) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-02', 'm4c2-mod-02', 'Investiga tu mercado en tiempo real', 'Competencia, precios y oportunidades con búsqueda real.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-03', 'c0000000-0000-0000-0000-000000000002', 'Sesión 3 · Cliente Ideal en vivo', 4) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-03', 'm4c2-mod-03', 'Construye tu perfil de cliente sobre datos reales', 'Perfil 360° verificable aplicado a tu negocio.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-04', 'c0000000-0000-0000-0000-000000000002', 'Sesión 4 · Valor y Posicionamiento en vivo', 5) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-04', 'm4c2-mod-04', 'Formula tu diferencial con datos', 'Propuesta de valor y posicionamiento aplicados.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-05', 'c0000000-0000-0000-0000-000000000002', 'Sesión 5 · Estrategia de Contenidos en vivo', 6) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-05', 'm4c2-mod-05', 'Arma tu calendario editorial real', 'Plan de 30 días listo para publicar.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-06', 'c0000000-0000-0000-0000-000000000002', 'Sesión 6 · Branding y Dirección Visual en vivo', 7) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-06', 'm4c2-mod-06', 'Traduce tu marca a un sistema visual', 'Guía visual completa y documentada.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-07', 'c0000000-0000-0000-0000-000000000002', 'Sesión 7 · Piezas Visuales en vivo', 8) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-07', 'm4c2-mod-07', 'Produce piezas listas para publicar', 'Contenido real producido en sesión.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-08', 'c0000000-0000-0000-0000-000000000002', 'Sesión 8 · Mensajes y Video en vivo', 9) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-08', 'm4c2-mod-08', 'Tu banco de mensajes y tu primer guión', 'Hooks, copy y guión de video aprobado.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-09', 'c0000000-0000-0000-0000-000000000002', 'Sesión 9 · Ruta de Conversión en vivo', 10) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-09', 'm4c2-mod-09', 'Diseña tu proceso de venta completo', 'Del primer mensaje al cierre, personalizado.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-10', 'c0000000-0000-0000-0000-000000000002', 'Sesión 10 · Fidelización en vivo', 11) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-10', 'm4c2-mod-10', 'Construye tu sistema de retención', 'Postventa, referidos, pipeline y métricas.', '60:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

INSERT INTO public.modules (id, course_id, title, order_index) VALUES ('m4c2-mod-11', 'c0000000-0000-0000-0000-000000000002', 'Cierre y Graduación', 12) ON CONFLICT (id) DO NOTHING;
INSERT INTO public.lessons (id, module_id, title, description, duration, is_free, order_index) VALUES ('m4c2-les-11', 'm4c2-mod-11', 'Tu Carpeta 4C aplicada y tu plugin permanente', 'Revisión final, presentación de resultados y entrega oficial.', '45:00', false, 1) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

COMMIT;
