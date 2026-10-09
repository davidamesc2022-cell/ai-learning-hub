-- =====================================================================
-- Actualizar imagen de portada de "Domina la IA: Tu Transformación Completa"
-- Portada única y realista: Profesional trabajando en tecnología
-- =====================================================================

UPDATE public.courses
SET thumbnail = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
WHERE id = 'c0000000-0000-0000-0000-000000000004'
   OR title ILIKE '%Domina la IA%';
