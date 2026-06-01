-- =====================================================================
-- David Ames Academy - Insertar Curso Gratuito de Prueba
-- Ejecuta este script en el SQL Editor de tu panel de Supabase
-- =====================================================================

-- 1. Insertar el curso gratuito "Generación de Imágenes y Video con IA"
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
  'c0000000-0000-0000-0000-000000000003',
  'Generación de Imágenes y Video con IA',
  'Aprende a dominar las mejores herramientas de inteligencia artificial para la creación de imágenes y video profesional en minutos.',
  'Este curso práctico te enseñará paso a paso cómo utilizar herramientas avanzadas de Inteligencia Artificial para generar contenido multimedia (imágenes y videos) de alta calidad. Desde los fundamentos creativos hasta la automatización de la producción visual para tus redes sociales o negocios.',
  'ia',
  'IA para Profesionales',
  'Principiante',
  0,
  true, -- ¡Es gratuito!
  5.0,
  150,
  'David Ames',
  '52 min',
  1,
  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
  true, -- Es nuevo
  true, -- Es popular
  ARRAY['Dominar las herramientas líderes de generación de imágenes con IA', 'Crear y editar videos profesionales optimizados por IA', 'Diseñar prompts avanzados para obtener resultados hiperrealistas', 'Automatizar el flujo de trabajo de creación de contenido visual'],
  ARRAY['Computadora con conexión a internet', 'No se requiere experiencia previa en diseño o edición de video'],
  ARRAY['Creadores de contenido', 'Emprendedores y profesionales de marketing', 'Cualquier persona interesada en el potencial de la Inteligencia Artificial']
);

-- 2. Insertar el módulo del curso
INSERT INTO public.modules (
  id, 
  course_id, 
  title, 
  order_index
) VALUES (
  'd0000000-0000-0000-0003-000000000001',
  'c0000000-0000-0000-0000-000000000003',
  'Módulo 1: Fundamentos y Práctica Creativa',
  1
);

-- 3. Insertar la lección con tu video de YouTube
INSERT INTO public.lessons (
  id, 
  module_id, 
  title, 
  duration, 
  is_free, 
  video_url, 
  description, 
  order_index
) VALUES (
  'e0000000-0000-0000-0003-000000000001',
  'd0000000-0000-0000-0003-000000000001',
  'Clase Completa: Creación de Imágenes y Videos con IA',
  '52:56',
  true, -- Accesible gratuitamente
  'https://youtu.be/7QXxVOzJC1s',
  'En esta clase completa verás el paso a paso de cómo generar imágenes impactantes y crear videos sorprendentes utilizando herramientas de IA aplicadas al mundo real.',
  1
);
