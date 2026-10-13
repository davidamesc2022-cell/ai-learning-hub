-- =====================================================================
-- PARTE 1: LIMPIEZA DEL PILAR MARKETING DIGITAL
-- Elimina los cursos obsoletos anteriores y sus lecciones
-- =====================================================================

BEGIN;

-- 1. Eliminar lecciones anteriores
DELETE FROM public.lessons 
WHERE module_id IN (
  SELECT id FROM public.modules 
  WHERE course_id IN ('c0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002')
);

-- 2. Eliminar módulos anteriores
DELETE FROM public.modules 
WHERE course_id IN ('c0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002');

-- 3. Eliminar inscripciones anteriores
DELETE FROM public.user_courses 
WHERE course_id IN ('c0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002');

-- 4. Eliminar los cursos obsoletos
DELETE FROM public.courses 
WHERE id IN ('c0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002');

COMMIT;
