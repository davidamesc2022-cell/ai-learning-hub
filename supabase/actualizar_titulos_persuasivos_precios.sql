-- =====================================================================
-- ACTUALIZACIÓN OFICIAL: TÍTULOS PERSUASIVOS, BENEFICIOS Y PRECIOS EN SOLES
-- Nivel 1: S/ 147 | Nivel 2: S/ 247
-- =====================================================================

BEGIN;

-- ---------------------------------------------------------------------
-- 1. ACTUALIZAR CURSO NIVEL 1 (VENTAS PREDECIBLES - S/ 147)
-- ---------------------------------------------------------------------
UPDATE public.courses
SET 
  title = 'Método 4C IA: De la Improvisación a las Ventas Predecibles',
  description = 'El sistema estratégico para construir tu ecosistema comercial con Inteligencia Artificial y vender sin perseguir clientes.',
  long_description = 'El programa definitivo para pasar de la improvisación caótica a un ecosistema comercial predecible. Domina el marco estratégico no negociable del Método 4C: Claridad radical, Creatividad de alto impacto, Comunicación persuasiva y Conversión consultiva. Incluye 10 skills estratégicas para Claude/ChatGPT, plantillas y la construcción de tu Carpeta 4C activa para tu negocio.',
  price = 147.00,
  thumbnail = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
WHERE id = 'c0000000-0000-0000-0000-000000000001';

-- Módulos y Lecciones Nivel 1
UPDATE public.modules SET title = 'Módulo 0: El Mapa del Ecosistema Predecible' WHERE id = 'd1000000-0000-0000-0000-000000000000';
UPDATE public.lessons SET title = 'El Mapa del Ecosistema Predecible', description = 'Por qué el 90% quema dinero improvisando y cómo activar tu motor 4C sin fricción.' WHERE id = 'e1000000-0000-0000-0000-000000000000';

UPDATE public.modules SET title = 'C1 · Radiografía de Marca y Activos Ocultos' WHERE id = 'd1000000-0000-0000-0000-000000000001';
UPDATE public.lessons SET title = 'Radiografía de Marca y Activos Ocultos', description = 'Extrae el ADN de tu negocio para que la IA trabaje para ti con precisión quirúrgica.' WHERE id = 'e1000000-0000-0000-0000-000000000001';

UPDATE public.modules SET title = 'C1 · Espionaje de Mercado y Océanos Azules' WHERE id = 'd1000000-0000-0000-0000-000000000002';
UPDATE public.lessons SET title = 'Espionaje de Mercado y Océanos Azules', description = 'Detecta dónde tu competencia es débil, valida precios y descubre dinero no reclamado.' WHERE id = 'e1000000-0000-0000-0000-000000000002';

UPDATE public.modules SET title = 'C1 · Perfil de Compra 360° y Microdolores Reales' WHERE id = 'd1000000-0000-0000-0000-000000000003';
UPDATE public.lessons SET title = 'Perfil de Compra 360° y Microdolores Reales', description = 'Entra en la mente de quien ya quiere comprar: miedos y deseos que disparan la venta.' WHERE id = 'e1000000-0000-0000-0000-000000000003';

UPDATE public.modules SET title = 'C1 · Posicionamiento Incomparable y Oferta Irresistible' WHERE id = 'd1000000-0000-0000-0000-000000000004';
UPDATE public.lessons SET title = 'Posicionamiento Incomparable y Oferta Irresistible', description = 'Deja de competir por precio: crea una propuesta que haga ver a los demás obsoletos.' WHERE id = 'e1000000-0000-0000-0000-000000000004';

UPDATE public.modules SET title = 'C1 · Máquina de Atracción de Contenidos (30 Días)' WHERE id = 'd1000000-0000-0000-0000-000000000005';
UPDATE public.lessons SET title = 'Máquina de Atracción de Contenidos (30 Días)', description = 'El plan editorial estratégico: ángulos que filtran mirones y atraen prospectos calificados.' WHERE id = 'e1000000-0000-0000-0000-000000000005';

UPDATE public.modules SET title = 'C2 · Autoridad Visual y Estatus de Marca' WHERE id = 'd1000000-0000-0000-0000-000000000006';
UPDATE public.lessons SET title = 'Autoridad Visual y Estatus de Marca', description = 'El lenguaje visual de marcas de alto valor: genera confianza antes de que lean una sola palabra.' WHERE id = 'e1000000-0000-0000-0000-000000000006';

UPDATE public.modules SET title = 'C2 · Fábrica de Piezas Visuales de Alto Rendimiento' WHERE id = 'd1000000-0000-0000-0000-000000000007';
UPDATE public.lessons SET title = 'Fábrica de Piezas Visuales de Alto Rendimiento', description = 'Produce carruseles y anuncios de alta retención a escala sin depender de diseñadores.' WHERE id = 'e1000000-0000-0000-0000-000000000007';

UPDATE public.modules SET title = 'C3 · Copywriting Magnético y Guiones de Video' WHERE id = 'd1000000-0000-0000-0000-000000000008';
UPDATE public.lessons SET title = 'Copywriting Magnético y Guiones de Video', description = 'Hooks y estructuras narrativas que frenan el scroll en 3 segundos y generan ventas.' WHERE id = 'e1000000-0000-0000-0000-000000000008';

UPDATE public.modules SET title = 'C4 · El Embudo de Cierre y Venta Consultiva' WHERE id = 'd1000000-0000-0000-0000-000000000009';
UPDATE public.lessons SET title = 'El Embudo de Cierre y Venta Consultiva', description = 'De seguidor curioso a cliente de pago: la ruta paso a paso de conversión sin presiones.' WHERE id = 'e1000000-0000-0000-0000-000000000009';

UPDATE public.modules SET title = 'C4 · Retención Automática, Recompra y Referidos' WHERE id = 'd1000000-0000-0000-0000-000000000010';
UPDATE public.lessons SET title = 'Retención Automática, Recompra y Referidos', description = 'El multiplicador de ganancias: haz que cada cliente vuelva a comprarte y te traiga a otros.' WHERE id = 'e1000000-0000-0000-0000-000000000010';

UPDATE public.modules SET title = 'Cierre: Tu Sistema 4C Blindado y Escalable' WHERE id = 'd1000000-0000-0000-0000-000000000011';
UPDATE public.lessons SET title = 'Tu Sistema 4C Blindado y Escalable', description = 'Consolida tu activo de negocio terminado y prepárate para la aceleración en vivo.' WHERE id = 'e1000000-0000-0000-0000-000000000011';


-- ---------------------------------------------------------------------
-- 2. ACTUALIZAR CURSO NIVEL 2 (ACELERADOR EN VIVO - S/ 247)
-- ---------------------------------------------------------------------
UPDATE public.courses
SET 
  title = 'Acelerador 4C en Vivo: Tu Sistema de Ventas Instalado con IA',
  description = '10 sesiones prácticas guiadas + Plugin Orquestador. Sal de cada clase con tus activos de marketing creados, validados y listos para facturar.',
  long_description = 'El programa de acompañamiento directo y aceleración práctica premium del Método 4C. Diseñado para emprendedores y empresas que quieren su sistema funcionando en tiempo récord con acompañamiento en vivo de David Ames. Acceso exclusivo al Plugin Oficial de Claude con las 10 herramientas orquestadas para generar, validar y desplegar toda tu estrategia directamente sobre tu negocio real.',
  price = 247.00,
  thumbnail = 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800'
WHERE id = 'c0000000-0000-0000-0000-000000000002';

-- Sesiones y Lecciones Nivel 2
UPDATE public.modules SET title = 'Sesión 0 · Activación del Plugin 4C y Setup del Motor IA' WHERE id = 'd2000000-0000-0000-0000-000000000000';
UPDATE public.lessons SET title = 'Activación del Plugin 4C y Setup del Motor IA', description = 'Configura tu entorno de trabajo inteligente y deja listo tu centro de mando en Claude.' WHERE id = 'e2000000-0000-0000-0000-000000000000';

UPDATE public.modules SET title = 'Sesión 1 · Inyección de ADN de Negocio en Tiempo Real' WHERE id = 'd2000000-0000-0000-0000-000000000001';
UPDATE public.lessons SET title = 'Inyección de ADN de Negocio en Tiempo Real', description = 'Tu briefing completo documentado y validado en vivo con supervisión directa.' WHERE id = 'e2000000-0000-0000-0000-000000000001';

UPDATE public.modules SET title = 'Sesión 2 · Auditoría de Competencia y Validación de Mercado' WHERE id = 'd2000000-0000-0000-0000-000000000002';
UPDATE public.lessons SET title = 'Auditoría de Competencia y Validación de Mercado', description = 'Espionaje en vivo de competidores, precios y brechas con búsqueda inteligente.' WHERE id = 'e2000000-0000-0000-0000-000000000002';

UPDATE public.modules SET title = 'Sesión 3 · Radiografía de tu Comprador Ideal en Directo' WHERE id = 'd2000000-0000-0000-0000-000000000003';
UPDATE public.lessons SET title = 'Radiografía de tu Comprador Ideal en Directo', description = 'Construye tu perfil de cliente de alta conversión sobre datos reales verificables.' WHERE id = 'e2000000-0000-0000-0000-000000000003';

UPDATE public.modules SET title = 'Sesión 4 · Blindaje de Propuesta de Valor y Diferencial' WHERE id = 'd2000000-0000-0000-0000-000000000004';
UPDATE public.lessons SET title = 'Blindaje de Propuesta de Valor y Diferencial', description = 'Formulamos en sesión tu oferta ganadora para sacarte de la guerra de precios.' WHERE id = 'e2000000-0000-0000-0000-000000000004';

UPDATE public.modules SET title = 'Sesión 5 · Construcción del Calendario Editorial de Impacto' WHERE id = 'd2000000-0000-0000-0000-000000000005';
UPDATE public.lessons SET title = 'Construcción del Calendario Editorial de Impacto', description = 'Tu estrategia de contenidos de 30 días terminada y lista para publicar.' WHERE id = 'e2000000-0000-0000-0000-000000000005';

UPDATE public.modules SET title = 'Sesión 6 · Dirección de Arte y Sistema Visual en Vivo' WHERE id = 'd2000000-0000-0000-0000-000000000006';
UPDATE public.lessons SET title = 'Dirección de Arte y Sistema Visual en Vivo', description = 'Traduce la personalidad de tu negocio a una guía estética coherente y premium.' WHERE id = 'e2000000-0000-0000-0000-000000000006';

UPDATE public.modules SET title = 'Sesión 7 · Producción de Activos Visuales Listos para Lanzar' WHERE id = 'd2000000-0000-0000-0000-000000000007';
UPDATE public.lessons SET title = 'Producción de Activos Visuales Listos para Lanzar', description = 'Generamos tus creativos publicitarios y piezas de feed durante la sesión.' WHERE id = 'e2000000-0000-0000-0000-000000000007';

UPDATE public.modules SET title = 'Sesión 8 · Arsenal de Mensajes y tu Primer Video Grabado' WHERE id = 'd2000000-0000-0000-0000-000000000008';
UPDATE public.lessons SET title = 'Arsenal de Mensajes y tu Primer Video Grabado', description = 'Validación en directo de tus ganchos (hooks), copy maestro y guión publicitario.' WHERE id = 'e2000000-0000-0000-0000-000000000008';

UPDATE public.modules SET title = 'Sesión 9 · Despliegue de tu Proceso de Venta y Cierre' WHERE id = 'd2000000-0000-0000-0000-000000000009';
UPDATE public.lessons SET title = 'Despliegue de tu Proceso de Venta y Cierre', description = 'Diseño del flujo comercial personalizado: del primer mensaje al dinero en cuenta.' WHERE id = 'e2000000-0000-0000-0000-000000000009';

UPDATE public.modules SET title = 'Sesión 10 · Arquitectura de Fidelización y LTV Máximo' WHERE id = 'd2000000-0000-0000-0000-000000000010';
UPDATE public.lessons SET title = 'Arquitectura de Fidelización y LTV Máximo', description = 'Montaje de tu protocolo de postventa, pipeline de seguimiento y referidos.' WHERE id = 'e2000000-0000-0000-0000-000000000010';

UPDATE public.modules SET title = 'Graduación · Lanzamiento Oficial y Entrega de Carpeta 4C' WHERE id = 'd2000000-0000-0000-0000-000000000011';
UPDATE public.lessons SET title = 'Lanzamiento Oficial y Entrega de Carpeta 4C', description = 'Auditoría integral de tu sistema, entrega del plugin permanente y luz verde comercial.' WHERE id = 'e2000000-0000-0000-0000-000000000011';

COMMIT;

-- Comprobación
SELECT id, title, price, level 
FROM public.courses 
WHERE category = 'marketing'
ORDER BY id;
