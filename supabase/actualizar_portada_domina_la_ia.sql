-- =====================================================================
-- Actualizar imagen de portada de "Domina la IA: Tu Transformación Completa"
-- Ejecuta este script en el SQL Editor de Supabase si deseas sincronizar la DB
-- =====================================================================

UPDATE public.courses
SET thumbnail = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800'
WHERE id = 'c0000000-0000-0000-0000-000000000004'
   OR title ILIKE '%Domina la IA%';
