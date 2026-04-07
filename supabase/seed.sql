-- ==========================================
-- David Ames Academy - Seed Data
-- Ejecuta este script en el SQL Editor de Supabase
-- para insertar los cursos de prueba
-- ==========================================

-- Declaración de UUIDs fijos para mantener las relaciones referenciales
-- NOTA: Se usan caracteres hexadecimales válidos (a-f, 0-9)
-- Cursos: c000...
-- Modulos: d000...
-- Lecciones: e000...

-- CURSO 1: IA para Marketing
insert into public.courses (id, title, description, long_description, category, category_label, level, price, is_free, rating, students, instructor, duration, lessons_count, thumbnail, is_popular, what_you_learn, requirements, for_who) values
('c0000000-0000-0000-0000-000000000001', 'IA para Marketing en 7 Días', 'Aprenda a integrar inteligencia artificial en su estrategia de marketing digital en solo una semana con casos prácticos.', 'Este curso intensivo te llevará de cero a experto en el uso de herramientas de IA para marketing digital. Aprenderás a crear contenido con ChatGPT, automatizar campañas y analizar datos con IA.', 'marketing', 'Marketing Digital', 'Principiante', 49.99, false, 4.9, 1250, 'David Ames', '4 horas', 12, 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', true, 
array['Integrar herramientas de IA en tu estrategia de marketing', 'Crear contenido de alta calidad con ChatGPT', 'Automatizar campañas de email marketing', 'Analizar datos de clientes con IA', 'Optimizar tu presupuesto de marketing con IA'], 
array['Conocimientos básicos de marketing digital', 'Una cuenta de ChatGPT (gratuita)'], 
array['Marketers que quieren adoptar IA', 'Emprendedores digitales', 'Community managers']);

-- Módulos C1
insert into public.modules (id, course_id, title, order_index) values
('d0000000-0000-0000-0001-000000000001', 'c0000000-0000-0000-0000-000000000001', 'Día 1: Fundamentos de IA en Marketing', 1),
('d0000000-0000-0000-0001-000000000002', 'c0000000-0000-0000-0000-000000000001', 'Día 2: Creación de Contenido con ChatGPT', 2),
('d0000000-0000-0000-0001-000000000003', 'c0000000-0000-0000-0000-000000000001', 'Día 3: Automatización con IA', 3);

-- Lecciones C1M1
insert into public.lessons (id, module_id, title, duration, is_free, video_url, order_index) values
('e0000000-0000-0000-0001-000000000001', 'd0000000-0000-0000-0001-000000000001', 'Introducción y bienvenida', '10:00', true, 'https://www.youtube.com/watch?v=LXb3EKWsInQ', 1),
('e0000000-0000-0000-0001-000000000002', 'd0000000-0000-0000-0001-000000000001', '¿Qué es la IA generativa?', '15:30', true, 'https://www.youtube.com/watch?v=ysz5S6PUM-U', 2);

-- Lecciones C1M2
insert into public.lessons (id, module_id, title, duration, is_free, video_url, order_index) values
('e0000000-0000-0000-0001-000000000003', 'd0000000-0000-0000-0001-000000000002', 'Prompts eficientes para copy', '20:00', false, 'https://www.youtube.com/watch?v=jNQXAC9IVRw', 1),
('e0000000-0000-0000-0001-000000000004', 'd0000000-0000-0000-0001-000000000002', 'Automatizando blogs y redes sociales', '25:00', false, 'https://www.youtube.com/watch?v=VlPiUkzgjcI', 2);

-- Lecciones C1M3
insert into public.lessons (id, module_id, title, duration, is_free, order_index) values
('e0000000-0000-0000-0001-000000000006', 'd0000000-0000-0000-0001-000000000003', 'Email marketing automatizado', '20:00', false, 1),
('e0000000-0000-0000-0001-000000000007', 'd0000000-0000-0000-0001-000000000003', 'Proyecto final: Tu plan de IA', '30:00', false, 2);


-- CURSO 2: Prompt Engineering
insert into public.courses (id, title, description, long_description, category, category_label, level, price, is_free, rating, students, instructor, duration, lessons_count, thumbnail, is_new, what_you_learn, requirements, for_who) values
('c0000000-0000-0000-0000-000000000002', 'Prompt Engineering Masterclass', 'Domina el arte de comunicarte con modelos de IA. Desde principios básicos hasta técnicas avanzadas de prompting.', 'Conviértete en un experto en prompt engineering. Este curso completo cubre desde los fundamentos hasta técnicas avanzadas como chain-of-thought, few-shot learning y más.', 'ia', 'IA para Profesionales', 'Intermedio', 49, false, 4.9, 856, 'David Ames', '8 horas', 20, '', true, 
array['Técnicas avanzadas de prompt engineering', 'Chain-of-thought y few-shot learning', 'Aplicar prompting en contextos profesionales', 'Optimizar resultados de modelos de IA'], 
array['Experiencia básica con ChatGPT o similar', 'Curiosidad y ganas de experimentar'], 
array['Desarrolladores', 'Analistas de datos', 'Profesionales que usan IA diariamente']);

-- Módulos C2
insert into public.modules (id, course_id, title, order_index) values
('d0000000-0000-0000-0002-000000000001', 'c0000000-0000-0000-0000-000000000002', 'Fundamentos del Prompting', 1),
('d0000000-0000-0000-0002-000000000002', 'c0000000-0000-0000-0000-000000000002', 'Técnicas Avanzadas', 2);

-- Lecciones C2M1
insert into public.lessons (id, module_id, title, duration, is_free, order_index) values
('e0000000-0000-0000-0002-000000000001', 'd0000000-0000-0000-0002-000000000001', '¿Qué es Prompt Engineering?', '20:00', true, 1),
('e0000000-0000-0000-0002-000000000002', 'd0000000-0000-0000-0002-000000000001', 'Anatomía de un buen prompt', '25:00', true, 2);

-- Lecciones C2M2
insert into public.lessons (id, module_id, title, duration, is_free, order_index) values
('e0000000-0000-0000-0002-000000000005', 'd0000000-0000-0000-0002-000000000002', 'Chain-of-Thought Prompting', '28:00', false, 1),
('e0000000-0000-0000-0002-000000000006', 'd0000000-0000-0000-0002-000000000002', 'Few-Shot Learning', '25:00', false, 2);
