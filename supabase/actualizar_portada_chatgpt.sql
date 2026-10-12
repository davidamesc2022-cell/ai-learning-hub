-- =====================================================================
-- Actualizar la portada del curso: ChatGPT sin confusión
-- Asigna la nueva portada fotográfica con el logo oficial 3D e interfaces
-- =====================================================================

UPDATE public.courses
SET thumbnail = '/images/curso-chatgpt-sin-confusion.jpg'
WHERE id = 'c0000000-0000-0000-0000-000000000005' 
   OR title ILIKE '%ChatGPT sin confusión%';

-- Verificar el cambio
SELECT id, title, thumbnail, category, level 
FROM public.courses 
WHERE id = 'c0000000-0000-0000-0000-000000000005';
