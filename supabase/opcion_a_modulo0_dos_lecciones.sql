-- =====================================================================
-- OPCIÓN A: MÓDULO 0 CON 2 LECCIONES EN AMBOS NIVELES
-- Lección 1: Video corto de Bienvenida (04:30 min - Abierto / Gratis)
-- Lección 2: Clase completa del temario original (45:00 min - Bloqueado)
-- Total lecciones por curso: 13
-- =====================================================================

BEGIN;

-- ---------------------------------------------------------------------
-- 1. ACTUALIZAR TOTAL DE LECCIONES (13 LECCIONES POR CURSO)
-- ---------------------------------------------------------------------
UPDATE public.courses 
SET lessons_count = 13 
WHERE id IN ('c0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002');


-- ---------------------------------------------------------------------
-- 2. NIVEL 1: MÓDULO 0 (2 LECCIONES)
-- ---------------------------------------------------------------------
UPDATE public.modules 
SET title = 'Módulo 0: Bienvenida y Visión del Método 4C' 
WHERE id = 'd1000000-0000-0000-0000-000000000000';

-- Lección 0.1: Video de bienvenida (4-5 min - ABIERTO)
UPDATE public.lessons 
SET 
  title = 'Bienvenida y Recorrido del Método 4C',
  description = 'Video de bienvenida de 4 a 5 minutos: conoce la ruta del programa, cómo aprovechar cada módulo y tu hoja de ruta.',
  duration = '04:30',
  is_free = true,
  order_index = 1
WHERE id = 'e1000000-0000-0000-0000-000000000000';

-- Lección 0.2: Clase completa de contenido (Temario original - BLOQUEADO)
INSERT INTO public.lessons (
  id, module_id, title, description, duration, is_free, order_index
) VALUES (
  'e1000000-0000-0000-0000-000000000099',
  'd1000000-0000-0000-0000-000000000000',
  'El Mapa del Ecosistema Predecible (Visión Completa)',
  'Entiende el sistema entero antes de construir cada pieza: las 4 C, la Carpeta 4C y por qué el orden secuencial no es negociable.',
  '45:00',
  false,
  2
) ON CONFLICT (id) DO UPDATE SET 
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration = EXCLUDED.duration,
  is_free = EXCLUDED.is_free,
  order_index = EXCLUDED.order_index;


-- ---------------------------------------------------------------------
-- 3. NIVEL 2: SESIÓN 0 (2 LECCIONES)
-- ---------------------------------------------------------------------
UPDATE public.modules 
SET title = 'Sesión 0 · Bienvenida y Setup del Acelerador' 
WHERE id = 'd2000000-0000-0000-0000-000000000000';

-- Lección 0.1: Video de bienvenida (4-5 min - ABIERTO)
UPDATE public.lessons 
SET 
  title = 'Bienvenida y Dinámica del Acelerador en Vivo',
  description = 'Video de bienvenida de 4 a 5 minutos: dinámica de las 10 sesiones en vivo, reglas del juego y preparación del negocio a trabajar.',
  duration = '04:30',
  is_free = true,
  order_index = 1
WHERE id = 'e2000000-0000-0000-0000-000000000000';

-- Lección 0.2: Clase completa de setup del plugin (Temario original - BLOQUEADO)
INSERT INTO public.lessons (
  id, module_id, title, description, duration, is_free, order_index
) VALUES (
  'e2000000-0000-0000-0000-000000000099',
  'd2000000-0000-0000-0000-000000000000',
  'Setup del Entorno e Instalación del Plugin 4C',
  'Configuración guiada paso a paso del Plugin Oficial en Claude, funcionamiento del orquestador y estructura de la Carpeta 4C.',
  '45:00',
  false,
  2
) ON CONFLICT (id) DO UPDATE SET 
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  duration = EXCLUDED.duration,
  is_free = EXCLUDED.is_free,
  order_index = EXCLUDED.order_index;

COMMIT;

-- Comprobación de Lecciones del Módulo 0
SELECT m.title AS modulo, l.title AS leccion, l.duration, l.is_free, l.order_index 
FROM public.lessons l
JOIN public.modules m ON l.module_id = m.id
WHERE m.order_index = 1 AND m.course_id IN ('c0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002')
ORDER BY m.course_id, l.order_index;
