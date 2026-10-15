-- =====================================================================
-- David Ames Academy - Actualización de Seguridad y Panel de Administrador
-- Ejecuta este script en el SQL Editor de tu Dashboard de Supabase
-- =====================================================================

-- 1. Agregar columna email en la tabla pública profiles si no existe
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS email text;

-- 2. Sincronizar correos de los usuarios existentes desde auth.users
UPDATE public.profiles p
SET email = u.email
FROM auth.users u
WHERE p.id = u.id AND (p.email IS NULL OR p.email = '');

-- 3. Actualizar la función trigger para que guarde el correo automáticamente al registrarse
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, name, avatar, email)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', 'Estudiante'),
    'https://api.dicebear.com/7.x/avataaars/svg?seed=' || NEW.id,
    NEW.email
  )
  ON CONFLICT (id) DO UPDATE
  SET 
    email = EXCLUDED.email,
    name = COALESCE(EXCLUDED.name, profiles.name);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recrear el trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 4. Políticas de Seguridad (RLS) para el Panel de Administrador
-- Permitir a los administradores gestionar inscripciones libremente
ALTER TABLE public.enrolled_courses ENABLE ROW LEVEL SECURITY;

-- Eliminar políticas previas para evitar duplicidad
DROP POLICY IF EXISTS "Users can view their own enrollments." ON public.enrolled_courses;
DROP POLICY IF EXISTS "Admins and users can view enrollments." ON public.enrolled_courses;
DROP POLICY IF EXISTS "Admins and users can insert enrollments." ON public.enrolled_courses;
DROP POLICY IF EXISTS "Admins can delete enrollments." ON public.enrolled_courses;

-- Política de Lectura: Alumnos ven sus propios cursos; Administradores ven todas las matrículas
CREATE POLICY "Admins and users can view enrollments." ON public.enrolled_courses
FOR SELECT USING (
  auth.uid() = user_id
  OR auth.jwt()->>'email' IN ('hablemos@davidamesc.com', 'davidamesc2022@gmail.com')
);

-- Política de Inserción: El propio alumno o el Administrador pueden matricular
CREATE POLICY "Admins and users can insert enrollments." ON public.enrolled_courses
FOR INSERT WITH CHECK (
  auth.uid() = user_id
  OR auth.jwt()->>'email' IN ('hablemos@davidamesc.com', 'davidamesc2022@gmail.com')
);

-- Política de Eliminación: Administradores pueden revocar accesos
CREATE POLICY "Admins can delete enrollments." ON public.enrolled_courses
FOR DELETE USING (
  auth.jwt()->>'email' IN ('hablemos@davidamesc.com', 'davidamesc2022@gmail.com')
);

-- 5. Confirmación final
COMMENT ON TABLE public.enrolled_courses IS 'Tabla de inscripciones con candado RLS y acceso de superadministrador';
