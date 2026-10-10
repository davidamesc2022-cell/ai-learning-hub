-- =====================================================================
-- DAVID AMES ACADEMY - SCRIPT COMPLETO DE RESTAURACIÓN DE BASE DE DATOS
-- Ejecuta este script en el "SQL Editor" de tu nuevo proyecto de Supabase.
-- =====================================================================

-- 1. Crear tabla de perfiles (extendiendo auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid REFERENCES auth.users ON DELETE CASCADE NOT NULL PRIMARY KEY,
  name text,
  avatar text,
  bio text,
  plan text DEFAULT 'free',
  points integer DEFAULT 0,
  streak integer DEFAULT 0,
  position integer DEFAULT 999
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Public profiles are viewable by everyone." ON profiles;
CREATE POLICY "Public profiles are viewable by everyone." ON profiles FOR SELECT USING (true);
DROP POLICY IF EXISTS "Users can insert their own profile." ON profiles;
CREATE POLICY "Users can insert their own profile." ON profiles FOR INSERT WITH CHECK (auth.uid() = id);
DROP POLICY IF EXISTS "Users can update own profile." ON profiles;
CREATE POLICY "Users can update own profile." ON profiles FOR UPDATE USING (auth.uid() = id);

-- Trigger para crear perfil automáticamente al registrarse en Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, name, avatar)
  VALUES (new.id, new.raw_user_meta_data->>'name', 'https://api.dicebear.com/7.x/avataaars/svg?seed=' || new.id);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();


-- 2. Crear tabla de cursos
CREATE TABLE IF NOT EXISTS public.courses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  description text NOT NULL,
  long_description text,
  category text,
  category_label text,
  level text,
  price numeric DEFAULT 0,
  is_free boolean DEFAULT false,
  rating numeric DEFAULT 0,
  students integer DEFAULT 0,
  instructor text,
  duration text,
  lessons_count integer DEFAULT 0,
  thumbnail text,
  is_new boolean DEFAULT false,
  is_popular boolean DEFAULT false,
  what_you_learn text[],
  requirements text[],
  for_who text[]
);
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Courses are viewable by everyone." ON courses;
CREATE POLICY "Courses are viewable by everyone." ON courses FOR SELECT USING (true);


-- 3. Crear tabla de módulos
CREATE TABLE IF NOT EXISTS public.modules (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id uuid REFERENCES public.courses ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  order_index integer DEFAULT 0
);
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Modules are viewable by everyone." ON modules;
CREATE POLICY "Modules are viewable by everyone." ON modules FOR SELECT USING (true);


-- 4. Crear tabla de lecciones
CREATE TABLE IF NOT EXISTS public.lessons (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  module_id uuid REFERENCES public.modules ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  duration text,
  is_free boolean DEFAULT false,
  video_url text,
  description text,
  resources jsonb DEFAULT '[]'::jsonb,
  order_index integer DEFAULT 0
);
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Lessons viewable by everyone." ON lessons;
CREATE POLICY "Lessons viewable by everyone." ON lessons FOR SELECT USING (true);


-- 5. Inscripciones a cursos
CREATE TABLE IF NOT EXISTS public.enrolled_courses (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES public.profiles ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES public.courses ON DELETE CASCADE NOT NULL,
  progress integer DEFAULT 0,
  last_lesson_id uuid REFERENCES public.lessons ON DELETE SET NULL,
  completed boolean DEFAULT false,
  enrolled_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.enrolled_courses ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view their own enrollments." ON enrolled_courses;
CREATE POLICY "Users can view their own enrollments." ON enrolled_courses FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can insert their own enrollments." ON enrolled_courses;
CREATE POLICY "Users can insert their own enrollments." ON enrolled_courses FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can update their own enrollments." ON enrolled_courses;
CREATE POLICY "Users can update their own enrollments." ON enrolled_courses FOR UPDATE USING (auth.uid() = user_id);


-- 6. Progreso de lecciones (Vistas/Completadas)
CREATE TABLE IF NOT EXISTS public.user_progress (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES public.profiles ON DELETE CASCADE NOT NULL,
  lesson_id uuid REFERENCES public.lessons ON DELETE CASCADE NOT NULL,
  completed boolean DEFAULT true,
  completed_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  UNIQUE(user_id, lesson_id)
);
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view their own progress." ON user_progress;
CREATE POLICY "Users can view their own progress." ON user_progress FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can insert their own progress" ON user_progress;
CREATE POLICY "Users can insert their own progress" ON user_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can update their own progress" ON user_progress;
CREATE POLICY "Users can update their own progress" ON user_progress FOR ALL USING (auth.uid() = user_id);


-- 6b. Progreso detallado por curso
CREATE TABLE IF NOT EXISTS public.lesson_progress (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  course_id uuid REFERENCES public.courses(id) ON DELETE CASCADE NOT NULL,
  lesson_id uuid REFERENCES public.lessons(id) ON DELETE CASCADE NOT NULL,
  completed boolean DEFAULT true,
  completed_at timestamp with time zone DEFAULT timezone('utc'::text, now()),
  UNIQUE(user_id, course_id, lesson_id)
);
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view their own lesson progress" ON lesson_progress;
CREATE POLICY "Users can view their own lesson progress" ON lesson_progress FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can insert their own lesson progress" ON lesson_progress;
CREATE POLICY "Users can insert their own lesson progress" ON lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "Users can update their own lesson progress" ON lesson_progress;
CREATE POLICY "Users can update their own lesson progress" ON lesson_progress FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);


-- 7. Tabla de Insignias y Logros
CREATE TABLE IF NOT EXISTS public.badges (
  id text PRIMARY KEY,
  name text NOT NULL,
  icon text NOT NULL,
  description text NOT NULL,
  points_required integer DEFAULT 0
);
ALTER TABLE public.badges ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Badges viewable by everyone." ON badges;
CREATE POLICY "Badges viewable by everyone." ON badges FOR SELECT USING (true);

CREATE TABLE IF NOT EXISTS public.user_badges (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES public.profiles ON DELETE CASCADE NOT NULL,
  badge_id text REFERENCES public.badges ON DELETE CASCADE NOT NULL,
  unlocked_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  UNIQUE(user_id, badge_id)
);
ALTER TABLE public.user_badges ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can view own unlocked badges." ON user_badges;
CREATE POLICY "Users can view own unlocked badges." ON user_badges FOR SELECT USING (auth.uid() = user_id);

-- Semilla de insignias
INSERT INTO public.badges (id, name, icon, description, points_required) VALUES 
('first-lesson', 'Primera Lección', '🎓', 'Completa tu primera lección', 0),
('first-course', 'Curso Completado', '🏆', 'Termina tu primer curso', 0),
('ia-expert', 'Experto en IA', '🤖', 'Completa 5 cursos de IA', 500),
('marketing-pro', 'Marketing Master', '📊', 'Completa 5 cursos de Marketing', 500),
('streak-7', 'Racha de Fuego', '🔥', '7 días consecutivos aprendiendo', 200)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  icon = EXCLUDED.icon,
  description = EXCLUDED.description,
  points_required = EXCLUDED.points_required;


-- 8. Hilos del foro (Comunidad)
CREATE TABLE IF NOT EXISTS public.forum_threads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES public.profiles ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  upvotes integer DEFAULT 0,
  replies_count integer DEFAULT 0,
  solved boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.forum_threads ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Threads are viewable by everyone." ON forum_threads;
CREATE POLICY "Threads are viewable by everyone." ON forum_threads FOR SELECT USING (true);
DROP POLICY IF EXISTS "Authenticated users can post threads." ON forum_threads;
CREATE POLICY "Authenticated users can post threads." ON forum_threads FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "Authors can update their threads." ON forum_threads;
CREATE POLICY "Authors can update their threads." ON forum_threads FOR UPDATE USING (auth.uid() = user_id);


-- 9. Respuestas del foro
CREATE TABLE IF NOT EXISTS public.forum_replies (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  thread_id uuid REFERENCES public.forum_threads ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES public.profiles ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  upvotes integer DEFAULT 0,
  is_answer boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);
ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Replies are viewable by everyone." ON forum_replies;
CREATE POLICY "Replies are viewable by everyone." ON forum_replies FOR SELECT USING (true);
DROP POLICY IF EXISTS "Authenticated users can post replies." ON forum_replies;
CREATE POLICY "Authenticated users can post replies." ON forum_replies FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Trigger: incrementar replies_count en forum_threads al insertar respuesta
CREATE OR REPLACE FUNCTION public.increment_thread_replies()
RETURNS trigger AS $$
BEGIN
  UPDATE public.forum_threads
  SET replies_count = replies_count + 1
  WHERE id = NEW.thread_id;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_forum_reply_created ON public.forum_replies;
CREATE TRIGGER on_forum_reply_created
  AFTER INSERT ON public.forum_replies
  FOR EACH ROW EXECUTE PROCEDURE public.increment_thread_replies();


-- =====================================================================
-- 10. INSERTAR DATOS INICIALES (CURSOS, MÓDULOS, LECCIONES)
-- =====================================================================

-- CURSO 1: IA para Marketing
INSERT INTO public.courses (id, title, description, long_description, category, category_label, level, price, is_free, rating, students, instructor, duration, lessons_count, thumbnail, is_popular, what_you_learn, requirements, for_who) VALUES
('c0000000-0000-0000-0000-000000000001', 'IA para Marketing en 7 Días', 'Aprenda a integrar inteligencia artificial en su estrategia de marketing digital en solo una semana con casos prácticos.', 'Este curso intensivo te llevará de cero a experto en el uso de herramientas de IA para marketing digital. Aprenderás a crear contenido con ChatGPT, automatizar campañas y analizar datos con IA.', 'marketing', 'Marketing Digital', 'Principiante', 49.99, false, 4.9, 1250, 'David Ames', '4 horas', 12, 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', true, 
array['Integrar herramientas de IA en tu estrategia de marketing', 'Crear contenido de alta calidad con ChatGPT', 'Automatizar campañas de email marketing', 'Analizar datos de clientes con IA', 'Optimizar tu presupuesto de marketing con IA'], 
array['Conocimientos básicos de marketing digital', 'Una cuenta de ChatGPT (gratuita)'], 
array['Marketers que quieren adoptar IA', 'Emprendedores digitales', 'Community managers'])
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  long_description = EXCLUDED.long_description;

-- Módulos C1
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('d0000000-0000-0000-0001-000000000001', 'c0000000-0000-0000-0000-000000000001', 'Día 1: Fundamentos de IA en Marketing', 1),
('d0000000-0000-0000-0001-000000000002', 'c0000000-0000-0000-0000-000000000001', 'Día 2: Creación de Contenido con ChatGPT', 2),
('d0000000-0000-0000-0001-000000000003', 'c0000000-0000-0000-0000-000000000001', 'Día 3: Automatización con IA', 3)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;

-- Lecciones C1M1
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, order_index) VALUES
('e0000000-0000-0000-0001-000000000001', 'd0000000-0000-0000-0001-000000000001', 'Introducción y bienvenida', '10:00', true, 'https://www.youtube.com/watch?v=LXb3EKWsInQ', 1),
('e0000000-0000-0000-0001-000000000002', 'd0000000-0000-0000-0001-000000000001', '¿Qué es la IA generativa?', '15:30', true, 'https://www.youtube.com/watch?v=ysz5S6PUM-U', 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, duration = EXCLUDED.duration, video_url = EXCLUDED.video_url;

-- Lecciones C1M2
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, order_index) VALUES
('e0000000-0000-0000-0001-000000000003', 'd0000000-0000-0000-0001-000000000002', 'Prompts eficientes para copy', '20:00', false, 'https://www.youtube.com/watch?v=jNQXAC9IVRw', 1),
('e0000000-0000-0000-0001-000000000004', 'd0000000-0000-0000-0001-000000000002', 'Automatizando blogs y redes sociales', '25:00', false, 'https://www.youtube.com/watch?v=VlPiUkzgjcI', 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, duration = EXCLUDED.duration, video_url = EXCLUDED.video_url;

-- Lecciones C1M3
INSERT INTO public.lessons (id, module_id, title, duration, is_free, order_index) VALUES
('e0000000-0000-0000-0001-000000000006', 'd0000000-0000-0000-0001-000000000003', 'Email marketing automatizado', '20:00', false, 1),
('e0000000-0000-0000-0001-000000000007', 'd0000000-0000-0000-0001-000000000003', 'Proyecto final: Tu plan de IA', '30:00', false, 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, duration = EXCLUDED.duration;


-- CURSO 2: Prompt Engineering
INSERT INTO public.courses (id, title, description, long_description, category, category_label, level, price, is_free, rating, students, instructor, duration, lessons_count, thumbnail, is_new, what_you_learn, requirements, for_who) VALUES
('c0000000-0000-0000-0000-000000000002', 'Prompt Engineering Masterclass', 'Domina el arte de comunicarte con modelos de IA. Desde principios básicos hasta técnicas avanzadas de prompting.', 'Conviértete en un experto en prompt engineering. Este curso completo cubre desde los fundamentos hasta técnicas avanzadas como chain-of-thought, few-shot learning y más.', 'ia', 'IA para Profesionales', 'Intermedio', 49, false, 4.9, 856, 'David Ames', '8 horas', 20, '', true, 
array['Técnicas avanzadas de prompt engineering', 'Chain-of-thought y few-shot learning', 'Aplicar prompting en contextos profesionales', 'Optimizar resultados de modelos de IA'], 
array['Experiencia básica con ChatGPT o similar', 'Curiosidad y ganas de experimentar'], 
array['Desarrolladores', 'Analistas de datos', 'Profesionales que usan IA diariamente'])
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

-- Módulos C2
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('d0000000-0000-0000-0002-000000000001', 'c0000000-0000-0000-0000-000000000002', 'Fundamentos del Prompting', 1),
('d0000000-0000-0000-0002-000000000002', 'c0000000-0000-0000-0000-000000000002', 'Técnicas Avanzadas', 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;

-- Lecciones C2M1
INSERT INTO public.lessons (id, module_id, title, duration, is_free, order_index) VALUES
('e0000000-0000-0000-0002-000000000001', 'd0000000-0000-0000-0002-000000000001', '¿Qué es Prompt Engineering?', '20:00', true, 1),
('e0000000-0000-0000-0002-000000000002', 'd0000000-0000-0000-0002-000000000001', 'Anatomía de un buen prompt', '25:00', true, 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, duration = EXCLUDED.duration;

-- Lecciones C2M2
INSERT INTO public.lessons (id, module_id, title, duration, is_free, order_index) VALUES
('e0000000-0000-0000-0002-000000000005', 'd0000000-0000-0000-0002-000000000002', 'Chain-of-Thought Prompting', '28:00', false, 1),
('e0000000-0000-0000-0002-000000000006', 'd0000000-0000-0000-0002-000000000002', 'Few-Shot Learning', '25:00', false, 2)
ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, duration = EXCLUDED.duration;


-- CURSO 3: Generación de Imágenes y Video con IA (Gratuito)
INSERT INTO public.courses (id, title, description, long_description, category, category_label, level, price, is_free, rating, students, instructor, duration, lessons_count, thumbnail, is_new, is_popular, what_you_learn, requirements, for_who) VALUES (
  'c0000000-0000-0000-0000-000000000003',
  'Generación de Imágenes y Video con IA',
  'Aprende a dominar las mejores herramientas de inteligencia artificial para la creación de imágenes y video profesional en minutos.',
  'Este curso práctico te enseñará paso a paso cómo utilizar herramientas avanzadas de Inteligencia Artificial para generar contenido multimedia (imágenes y videos) de alta calidad. Desde los fundamentos creativos hasta la automatización de la producción visual para tus redes sociales o negocios.',
  'ia',
  'IA para Profesionales',
  'Principiante',
  0,
  true,
  5.0,
  150,
  'David Ames',
  '52 min',
  1,
  '/images/generacion-imagenes-video-ia.jpg',
  true,
  true,
  ARRAY['Dominar las herramientas líderes de generación de imágenes con IA', 'Crear y editar videos profesionales optimizados por IA', 'Diseñar prompts avanzados para obtener resultados hiperrealistas', 'Automatizar el flujo de trabajo de creación de contenido visual'],
  ARRAY['Computadora con conexión a internet', 'No se requiere experiencia previa en diseño o edición de video'],
  ARRAY['Creadores de contenido', 'Emprendedores y profesionales de marketing', 'Cualquier persona interesada en el potencial de la Inteligencia Artificial']
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, description = EXCLUDED.description;

-- Módulos C3
INSERT INTO public.modules (id, course_id, title, order_index) VALUES (
  'd0000000-0000-0000-0003-000000000001',
  'c0000000-0000-0000-0000-000000000003',
  'Módulo 1: Fundamentos y Práctica Creativa',
  1
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, order_index = EXCLUDED.order_index;

-- Lección C3
INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, order_index) VALUES (
  'e0000000-0000-0000-0003-000000000001',
  'd0000000-0000-0000-0003-000000000001',
  'Clase Completa: Creación de Imágenes y Videos con IA',
  '52:56',
  true,
  'https://youtu.be/7QXxVOzJC1s',
  'En esta clase completa verás el paso a paso de cómo generar imágenes impactantes y crear videos sorprendentes utilizando herramientas de IA aplicadas al mundo real.',
  1
) ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, duration = EXCLUDED.duration, video_url = EXCLUDED.video_url;
