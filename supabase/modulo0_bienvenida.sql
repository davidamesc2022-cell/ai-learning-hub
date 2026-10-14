-- =====================================================================
-- AJUSTE MÓDULO 0: VIDEO DE BIENVENIDA Y EXPLICACIÓN (4-5 MIN)
-- =====================================================================

BEGIN;

-- Nivel 1: Módulo 0 y Lección de Bienvenida (05:00 - Abierto)
UPDATE public.modules 
SET title = 'Módulo 0: Bienvenida y Mapa del Ecosistema' 
WHERE id = 'd1000000-0000-0000-0000-000000000000';

UPDATE public.lessons 
SET 
  title = 'Bienvenida y Recorrido del Método 4C',
  description = 'Conoce la ruta exacta del programa, cómo aprovechar cada módulo y el mapa para construir tu ecosistema comercial predecible.',
  duration = '05:00',
  is_free = true
WHERE id = 'e1000000-0000-0000-0000-000000000000';


-- Nivel 2: Sesión 0 y Lección de Bienvenida (05:00 - Abierto)
UPDATE public.modules 
SET title = 'Sesión 0 · Bienvenida y Setup del Acelerador' 
WHERE id = 'd2000000-0000-0000-0000-000000000000';

UPDATE public.lessons 
SET 
  title = 'Bienvenida y Dinámica del Acelerador en Vivo',
  description = 'Cómo trabajaremos en las 10 sesiones en vivo, la instalación de tu Plugin en Claude y la validación de tu negocio paso a paso.',
  duration = '05:00',
  is_free = true
WHERE id = 'e2000000-0000-0000-0000-000000000000';

COMMIT;

-- Comprobación
SELECT m.title AS modulo, l.title AS leccion, l.duration, l.is_free 
FROM public.lessons l
JOIN public.modules m ON l.module_id = m.id
WHERE l.id IN ('e1000000-0000-0000-0000-000000000000', 'e2000000-0000-0000-0000-000000000000');
