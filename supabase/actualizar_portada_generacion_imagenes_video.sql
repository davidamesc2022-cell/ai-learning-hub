-- =====================================================================
-- Actualizar la portada del curso: Generación de Imágenes y Video con IA
-- Asigna la nueva portada fotográfica hiperrealista de estudio y timeline IA
-- =====================================================================

UPDATE public.courses
SET thumbnail = '/images/generacion-imagenes-video-ia.jpg'
WHERE id = 'c0000000-0000-0000-0000-000000000003' 
   OR title ILIKE '%Generación de Imágenes y Video%';

-- Verificar el cambio
SELECT id, title, thumbnail, category, level 
FROM public.courses 
WHERE id = 'c0000000-0000-0000-0000-000000000003';
