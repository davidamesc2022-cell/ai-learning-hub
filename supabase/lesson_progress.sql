-- ==========================================
-- David Ames Academy - Lesson Progress Table
-- Ejecuta este script en el SQL Editor de Supabase
-- ==========================================

-- Crear tabla para registrar el progreso de las lecciones
CREATE TABLE IF NOT EXISTS public.lesson_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.lessons(id) ON DELETE CASCADE,
  completed BOOLEAN DEFAULT true,
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
  
  -- Asegurar que un usuario solo tenga un registro por lección
  UNIQUE(user_id, course_id, lesson_id)
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;

-- Políticas de seguridad
-- Permitir a los usuarios ver su propio progreso
CREATE POLICY "Users can view their own lesson progress" 
ON public.lesson_progress FOR SELECT 
USING (auth.uid() = user_id);

-- Permitir a los usuarios insertar/marcar su propio progreso
CREATE POLICY "Users can insert their own lesson progress" 
ON public.lesson_progress FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Permitir a los usuarios actualizar su propio progreso
CREATE POLICY "Users can update their own lesson progress" 
ON public.lesson_progress FOR UPDATE 
USING (auth.uid() = user_id) 
WITH CHECK (auth.uid() = user_id);
