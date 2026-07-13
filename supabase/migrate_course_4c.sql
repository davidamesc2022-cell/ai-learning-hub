-- ==========================================
-- Migración: Reemplazo de Estructura Método 4C IA
-- Ejecuta este script en el SQL Editor de Supabase
-- ==========================================

BEGIN;

-- 1. Actualizar información del curso principal
UPDATE public.courses SET
  title = 'MÉTODO 4C IA',
  description = 'IA práctica para emprendedores y dueños de negocio.',
  long_description = 'El Método 4C es un ecosistema educativo diseñado para llevar un emprendimiento desde la definición estratégica hasta el cierre de ventas predecibles, apoyado en inteligencia artificial. De la improvisación a un sistema práctico para entender, construir, comunicar y convertir.',
  category = 'ia',
  category_label = 'IA para Profesionales',
  level = 'Intermedio',
  price = 49.00,
  is_free = false,
  rating = 4.9,
  students = 856,
  instructor = 'David Ames',
  duration = '10 horas',
  lessons_count = 38,
  thumbnail = 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
  is_new = true,
  is_popular = true,
  what_you_learn = array[$$Día 1 (Claridad): Definir el dolor, deseo y propuesta de valor del cliente ideal.$$, $$Día 2 (Creatividad): Diseñar piezas visuales y logotipos profesionales con IA.$$, $$Día 3 (Comunicación): Estructurar guiones virales y producir videos usando IA.$$, $$Día 4 (Conversión): Crear scripts efectivos para cerrar ventas por chats de mensajería.$$],
  requirements = array[$$Ganas de facturar más usando Inteligencia Artificial.$$, $$Conocimientos básicos de uso de redes sociales.$$, $$No requieres experiencia técnica o de diseño previa.$$],
  for_who = array[$$Emprendedores que buscan optimizar su tiempo.$$, $$Dueños de negocio y marcas personales.$$, $$Profesionales de marketing y ventas independientes.$$]
WHERE id = 'c0000000-0000-0000-0000-000000000002';

-- 2. Limpiar módulos y lecciones anteriores del curso
DELETE FROM public.modules WHERE course_id = 'c0000000-0000-0000-0000-000000000002';

-- 3. Insertar nuevos módulos y lecciones
-- Módulo: MÓDULO 0: BASES DE IA Y TRABAJO
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('a5bac610-3c0c-49a5-a237-7c01ca47aafa', 'c0000000-0000-0000-0000-000000000002', 'MÓDULO 0: BASES DE IA Y TRABAJO', 1);

INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('0d793b01-fe6d-41ee-a345-653dd727f4b0', 'a5bac610-3c0c-49a5-a237-7c01ca47aafa', 'Clase 0.1 - Bienvenida y mapa del recorrido', '10:00', true, NULL, 'Presentación del propósito del curso, la transformación esperada y la lógica de las cuatro C. El alumno entiende qué construirá en cada etapa y por qué el orden importa.', '[{"id":"recurso-m-dulo-0-0-1","name":"Entregable: Mapa personal de objetivos del curso: qué quiere ordenar, crear, comunicar y mejorar comercialmente.","url":"","type":"template"}]'::jsonb, 1),
('b974a3a1-c6d8-4858-ac3a-7f0c47d86f14', 'a5bac610-3c0c-49a5-a237-7c01ca47aafa', 'Clase 0.2 - Diagnóstico inicial 4C', '10:00', true, NULL, 'Evaluación sencilla del estado actual del negocio en Claridad, Creatividad, Comunicación y Conversión. No busca calificar al alumno, sino establecer una línea base para comparar avances.', '[{"id":"recurso-m-dulo-0-0-2","name":"Entregable: Scorecard inicial 4C con fortalezas, vacíos principales y prioridades de implementación.","url":"","type":"template"}]'::jsonb, 2),
('95b77ce3-5dfe-4427-a9b9-e6b5a14e828b', 'a5bac610-3c0c-49a5-a237-7c01ca47aafa', 'Clase 0.3 - IA generativa para negocios: qué puede hacer y qué no', '10:00', false, NULL, 'Introducción práctica al uso de IA para investigar, analizar, redactar, crear imágenes, producir contenido y apoyar tareas comerciales. Se explican límites básicos: puede equivocarse, inventar información y producir resultados pobres cuando recibe poco contexto.', '[{"id":"recurso-m-dulo-0-0-3","name":"Entregable: Mapa de usos de IA aplicables al negocio del alumno.","url":"","type":"template"}]'::jsonb, 3),
('8033321e-3876-41da-a030-4bb0c131c896', 'a5bac610-3c0c-49a5-a237-7c01ca47aafa', 'Clase 0.4 - Cómo dar contexto y trabajar por iteraciones', '10:00', false, NULL, 'El alumno aprende una lógica transversal para trabajar con IA: Contexto → Objetivo → Instrucción → Criterios → Formato → Revisión → Mejora. Esta lógica se reutiliza durante las cuatro C.', '[{"id":"recurso-m-dulo-0-0-4","name":"Entregable: Ficha de Contexto Maestro del Negocio para utilizar como base en ejercicios y asistentes de IA.","url":"","type":"template"}]'::jsonb, 4),
('4dfe0667-9013-41e0-a106-1e9fe5752318', 'a5bac610-3c0c-49a5-a237-7c01ca47aafa', 'Clase 0.5 - Criterio humano, validación y uso responsable', '10:00', false, NULL, 'Criterios prácticos para revisar respuestas, contrastar información, proteger datos sensibles, cuidar derechos de imagen y evitar automatizar decisiones que necesitan juicio humano.', '[{"id":"recurso-m-dulo-0-0-5","name":"Entregable: Checklist personal de revisión y validación de resultados generados con IA.","url":"","type":"template"}]'::jsonb, 5);

-- Módulo: C1: CLARIDAD — Entender y Definir
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('aaa5a67f-2f92-46a6-a283-537e4196ddea', 'c0000000-0000-0000-0000-000000000002', 'C1: CLARIDAD — Entender y Definir', 2);

INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('f48be256-246d-48a8-a84b-b95f85deba47', 'aaa5a67f-2f92-46a6-a283-537e4196ddea', 'Clase 1.1 - Briefing del negocio', '15:00', false, NULL, 'El briefing del negocio es la radiografía interna del emprendimiento. Sirve para ordenar la información básica: qué vende, cómo está funcionando, qué productos o servicios tiene, qué canales usa, qué problemas enfrenta y qué objetivos quiere lograr.

*Por qué importa:* Porque antes de usar IA, crear contenido o hacer marketing, el emprendedor necesita entender su propio negocio. Si no tiene claro qué ofrece, a quién sirve y qué necesita mejorar, cualquier contenido que cree será improvisado.', '[{"id":"recurso-c1-1-1","name":"Entregable: Un briefing estratégico del negocio, con información base para trabajar toda la metodología.","url":"","type":"template"}]'::jsonb, 1),
('22b9b834-6dc4-4721-aedd-464e3c66b539', 'aaa5a67f-2f92-46a6-a283-537e4196ddea', 'Clase 1.2 - Estudio de mercado 80/20', '15:00', false, NULL, 'El estudio de mercado 80/20 es una investigación práctica, simple y accionable del entorno donde compite el negocio. No busca hacer un informe complicado, sino entender qué están haciendo otros, cómo comunican, qué venden, qué precios manejan y qué oportunidades existen.

*Por qué importa:* Porque muchos emprendedores toman decisiones solo desde su intuición. El estudio de mercado permite observar la realidad externa y detectar espacios para diferenciarse, mejorar la oferta y comunicar mejor.', '[{"id":"recurso-c1-1-2","name":"Entregable: Un mapa simple de mercado, con competidores, referencias, oportunidades, riesgos y posibles espacios de diferenciación.","url":"","type":"template"}]'::jsonb, 2),
('86cb479f-e96c-453a-abfd-293f78a8c12d', 'aaa5a67f-2f92-46a6-a283-537e4196ddea', 'Clase 1.3 - Cliente ideal profundo', '15:00', false, NULL, 'El cliente ideal profundo es una descripción estratégica y humana de la persona que más puede valorar, necesitar y comprar la oferta del negocio. No se queda solo en edad, género o ubicación; busca entender su situación, comportamiento, necesidades, deseos y forma de decidir.

*Por qué importa:* Porque cuando el emprendedor intenta hablarle a todos, termina conectando con nadie. Definir bien al cliente ideal permite crear mensajes, contenidos, ofertas y ventas mucho más precisas.', '[{"id":"recurso-c1-1-3","name":"Entregable: Un avatar profundo del cliente ideal, con datos demográficos, contexto, necesidades, deseos, objeciones, comportamiento de compra y motivaciones.","url":"","type":"template"}]'::jsonb, 3),
('fcd4251a-1a91-419f-acae-0148bfd880e0', 'aaa5a67f-2f92-46a6-a283-537e4196ddea', 'Clase 1.4 - Afirmaciones del cliente ideal', '15:00', false, NULL, 'Las afirmaciones del cliente ideal son frases escritas en primera persona, como si el cliente estuviera hablando. Sirven para expresar sus dolores, deseos, miedos e intentos fallidos con un lenguaje más emocional y cercano.

*Por qué importa:* Porque el contenido no debe nacer solo desde lo que el negocio quiere vender, sino desde lo que el cliente realmente siente, piensa y necesita escuchar. Las afirmaciones ayudan a crear mensajes más humanos.', '[{"id":"recurso-c1-1-4","name":"Entregable: Una matriz de afirmaciones del cliente ideal, organizada en bloques como:\n\nqué me duele;\n\nqué quiero lograr;\n\nqué miedo tengo;\n\nqué ya intenté;\n\nqué me frustra;\n\nqué necesito.","url":"","type":"template"}]'::jsonb, 4),
('252f5343-ecd9-4034-a17e-5e2ab6c4991f', 'aaa5a67f-2f92-46a6-a283-537e4196ddea', 'Clase 1.5 - Microdolores', '15:00', false, NULL, 'Los microdolores son dolores específicos, concretos y profundos que vive el cliente en situaciones reales. No son problemas generales; son escenas, frustraciones o tensiones que afectan su día a día, su autoestima, sus decisiones, su negocio o su seguridad.

*Por qué importa:* Porque los microdolores hacen que el contenido conecte más. Un dolor general puede sonar frío, pero un microdolor hace que el cliente diga: “Eso me pasa a mí”.', '[{"id":"recurso-c1-1-5","name":"Entregable: Una lista de microdolores prioritarios, clasificados por dolor emocional, dolor práctico, frustración, miedo, objeción o intento fallido.","url":"","type":"template"}]'::jsonb, 5),
('0bfb41b5-473d-41cf-a4c4-65337194acd2', 'aaa5a67f-2f92-46a6-a283-537e4196ddea', 'Clase 1.6 - Propuesta de valor', '15:00', false, NULL, 'La propuesta de valor es la promesa clara de beneficio que hace el negocio. Explica qué problema resuelve, qué resultado entrega, por qué importa y por qué esa solución tiene valor para el cliente.

*Por qué importa:* Porque si el emprendedor no sabe explicar su valor, el cliente tampoco lo va a entender. La propuesta de valor convierte el negocio en una solución clara, no solo en un producto o servicio más.', '[{"id":"recurso-c1-1-6","name":"Entregable: Una propuesta de valor principal, una versión corta comercial, una promesa de transformación y mensajes clave de beneficio.","url":"","type":"template"}]'::jsonb, 6),
('0ced63e0-7aea-42fc-a4c3-ad27036981cf', 'aaa5a67f-2f92-46a6-a283-537e4196ddea', 'Clase 1.7 - Posicionamiento', '15:00', false, NULL, 'El posicionamiento es el lugar que queremos ocupar en la mente del cliente. Define cómo queremos que el mercado nos recuerde, por qué deberían elegirnos y qué diferencia queremos defender frente a otras alternativas.

*Por qué importa:* Porque si el negocio no define su posición, el mercado lo compara por precio, cercanía, moda o apariencia. El posicionamiento ayuda a que el cliente entienda por qué esa opción es diferente y valiosa.', '[{"id":"recurso-c1-1-7","name":"Entregable: Una declaración de posicionamiento, con cliente objetivo, categoría, resultado prometido, diferencial y razón para creer.","url":"","type":"template"}]'::jsonb, 7),
('b16cdf3d-1cfb-4d0c-a3fb-a3fe61fff689', 'aaa5a67f-2f92-46a6-a283-537e4196ddea', 'Clase 1.8 - Branding estratégico base', '15:00', false, NULL, 'El branding estratégico base es la definición de cómo debe sentirse, sonar y verse la marca. No es solo logo o colores; también incluye personalidad, tono de voz, estilo visual, mensajes eje y criterios de comunicación.

*Por qué importa:* Porque una marca sin coherencia genera confusión. El branding ayuda a que todo lo que el negocio comunique tenga una misma dirección: los flyers, los carruseles, los videos, los textos, las promociones y la atención.', '[{"id":"recurso-c1-1-8","name":"Entregable: Una guía básica de marca, con personalidad, tono de voz, estilo visual, mensajes principales, palabras clave, colores de referencia y criterios de comunicación.","url":"","type":"template"}]'::jsonb, 8),
('2447c5e7-b95f-40ab-a6fa-40475d15d4ae', 'aaa5a67f-2f92-46a6-a283-537e4196ddea', 'Clase 1.9 - Plan de contenido', '15:00', false, NULL, 'El plan de contenido es la estructura que organiza qué va a publicar el negocio, para quién, con qué objetivo, desde qué ángulo y en qué formato. Incluye pilares, ideas, temas, formatos, intención y posibles llamados a la acción.

*Por qué importa:* Porque sin plan de contenido, el emprendedor publica por ocurrencia: un día una promoción, otro día una frase, otro día un video sin dirección. El plan permite crear contenido que atrae, educa, genera confianza y prepara la venta.', '[{"id":"recurso-c1-1-9","name":"Entregable: Un plan de contenido estratégico, que incluye pilares, objetivos, ideas iniciales, formatos recomendados, etapa del embudo y llamados a la acción.","url":"","type":"template"}]'::jsonb, 9);

-- Módulo: C2: CREATIVIDAD — Diseñar y Construir
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('e7618d1c-3cfc-43b3-aeaf-b6b80db7a6eb', 'c0000000-0000-0000-0000-000000000002', 'C2: CREATIVIDAD — Diseñar y Construir', 3);

INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('f353a4a8-6796-40d3-a3af-b7476098ad55', 'e7618d1c-3cfc-43b3-aeaf-b6b80db7a6eb', 'Clase 2.1 - Traducción visual de la marca', '15:00', false, NULL, 'La traducción visual de la marca es el proceso de convertir las decisiones estratégicas definidas en C1 en una dirección visual concreta.

En C1 el emprendedor definió aspectos como personalidad de marca, posicionamiento, tono, mensajes principales, características del cliente y criterios generales de branding.

En esta clase esos conceptos comienzan a transformarse en decisiones visuales.

Por ejemplo, una marca puede haber definido en C1 que quiere ser percibida como:

*   cercana;
*   confiable;
*   artesanal;
*   moderna;
*   tecnológica;
*   educativa;
*   premium;
*   juvenil;
*   familiar.

Ahora necesita responder cómo se representa visualmente esa percepción.

*Por qué importa:* Porque una marca puede tener claridad estratégica y, aun así, comunicar visualmente de forma incoherente.

Por ejemplo, un negocio que quiere transmitir confianza y profesionalismo puede utilizar diferentes estilos de imágenes, colores sin relación entre sí, diseños improvisados y fotografías que no representan correctamente al cliente.

La traducción visual ayuda a crear una dirección común antes de comenzar a diseñar.

No se trata todavía de hacer flyers o imágenes, sino de decidir:

cómo debe verse el negocio antes de comenzar a crear.', '[{"id":"recurso-c2-2-1","name":"Entregable: Un Brief de Dirección Visual, que contiene:\n\n*   personalidad visual;\n*   atmósfera de marca;\n*   estilos de imagen recomendados;\n*   referencias visuales;\n*   escenarios principales;\n*   características de los personajes;\n*   iluminación;\n*   colores predominantes;\n*   tipo de composición;\n*   elementos gráficos recomendados;\n*   elementos visuales que deben evitarse.\n\nEste brief servirá como contexto para trabajar posteriormente con herramientas de inteligencia artificial.","url":"","type":"template"}]'::jsonb, 1),
('e26415a6-99d8-474b-a04f-591e6fd053bc', 'e7618d1c-3cfc-43b3-aeaf-b6b80db7a6eb', 'Clase 2.2 - Identidad visual y creación de logo', '15:00', false, NULL, 'La identidad visual es el conjunto de elementos gráficos que permiten reconocer una marca y mantener coherencia en su comunicación.

Incluye el logo, las versiones del logo, la paleta de colores, las tipografías, los elementos gráficos complementarios y algunas reglas básicas de uso.

Esta clase no busca reemplazar el trabajo profesional de una agencia o diseñador especializado cuando el proyecto requiere un desarrollo de branding avanzado.

Su objetivo es permitir que el emprendedor pueda construir una base visual coherente para comenzar a comunicar profesionalmente su negocio.

*Por qué importa:* Porque muchos emprendimientos crean publicaciones sin una identidad reconocible.

Un día utilizan un color, otro día otro estilo, diferentes tipografías y diseños que parecen pertenecer a negocios distintos.

Una identidad visual básica permite comenzar a construir reconocimiento y coherencia.

El logo es parte de este sistema, pero no es toda la marca.

La estrategia de la marca fue definida en C1. En C2 se convierte esa estrategia en un sistema visual aplicable.', '[{"id":"recurso-c2-2-2","name":"Entregable: Un Kit Básico de Identidad Visual, compuesto por:\n\n*   logo principal;\n*   versión horizontal o secundaria, cuando corresponda;\n*   versión clara;\n*   versión oscura;\n*   versión con fondo transparente;\n*   símbolo, monograma o isotipo, cuando aplique;\n*   paleta principal de colores;\n*   tipografías recomendadas;\n*   elementos gráficos de apoyo;\n*   guía básica de aplicación visual.","url":"","type":"template"}]'::jsonb, 2),
('029dcea2-c4ac-4911-ac26-777669fa6157', 'e7618d1c-3cfc-43b3-aeaf-b6b80db7a6eb', 'Clase 2.3 - Creación y edición de imágenes con inteligencia artificial', '15:00', false, NULL, 'La creación y edición de imágenes con inteligencia artificial es el proceso de generar, transformar o mejorar recursos visuales para responder a necesidades concretas del negocio.

No se trata simplemente de pedir imágenes bonitas.

El objetivo es aprender a crear imágenes con intención estratégica y coherencia con:

*   el cliente ideal;
*   la propuesta de valor;
*   el posicionamiento;
*   la identidad visual;
*   el producto;
*   la campaña;
*   el contenido que se desea comunicar.

La inteligencia artificial puede utilizarse tanto para crear imágenes desde cero como para mejorar, modificar, ampliar o adaptar fotografías existentes.

*Por qué importa:* Porque muchos pequeños negocios tienen dificultades para producir continuamente fotografías, escenas publicitarias o recursos visuales de calidad.

La inteligencia artificial permite ampliar las posibilidades creativas de manera accesible, siempre que exista una dirección clara.

Una misma empresa puede necesitar diferentes tipos de imágenes:

*   fotografías de producto;
*   imágenes promocionales;
*   escenarios;
*   fondos;
*   situaciones de uso;
*   representaciones del cliente;
*   imágenes educativas;
*   imágenes aspiracionales;
*   campañas estacionales.', '[{"id":"recurso-c2-2-3","name":"Entregable: Una Biblioteca Inicial de Imágenes del Negocio, organizada en categorías como:\n\n*   producto;\n*   servicio;\n*   cliente;\n*   contexto de uso;\n*   imágenes promocionales;\n*   imágenes educativas;\n*   imágenes aspiracionales;\n*   fondos y escenarios;\n*   campañas especiales;\n*   recursos visuales complementarios.\n\nTambién deja una biblioteca de prompts visuales reutilizables.","url":"","type":"template"}]'::jsonb, 3),
('53e7d114-ede3-4f94-add7-6496c9e8cb57', 'e7618d1c-3cfc-43b3-aeaf-b6b80db7a6eb', 'Clase 2.4 - Visualización de productos y servicios', '15:00', false, NULL, 'La visualización de productos y servicios consiste en representar de manera clara y atractiva aquello que el negocio ofrece.

En el caso de productos físicos, permite mejorar su presentación, mostrar contextos de uso, generar diferentes escenarios y construir imágenes publicitarias.

En el caso de servicios, consultorías, capacitaciones o productos digitales, ayuda a representar visualmente algo que muchas veces no puede fotografiarse directamente.

*Por qué importa:* Porque una buena oferta puede perder valor percibido cuando se presenta deficientemente.

Muchos emprendedores tienen productos buenos, pero utilizan fotografías poco atractivas.

Otros venden servicios y no saben cómo representarlos visualmente.

La creatividad aplicada permite hacer visible:

*   el producto;
*   la experiencia;
*   el uso;
*   la transformación;
*   el resultado;
*   el beneficio.

La idea central es:

No solamente mostrar qué vendo, sino ayudar al cliente a imaginar qué significa utilizarlo, vivirlo o conseguirlo.', '[{"id":"recurso-c2-2-4","name":"Entregable: Un Kit Visual de Producto o Servicio, que puede incluir:\n\n*   imágenes principales de producto;\n*   escenas de uso;\n*   fondos publicitarios;\n*   mockups;\n*   representación de servicios;\n*   imágenes de experiencia;\n*   composición de paquetes;\n*   visualización de beneficios;\n*   imágenes aspiracionales;\n*   diferentes contextos comerciales.","url":"","type":"template"}]'::jsonb, 4),
('ba7d678f-4342-49af-ace9-e0e8a6b65be8', 'e7618d1c-3cfc-43b3-aeaf-b6b80db7a6eb', 'Clase 2.5 - Flyers y piezas visuales promocionales', '15:00', false, NULL, 'Las piezas visuales promocionales son recursos gráficos creados para comunicar una oferta, promoción, evento, lanzamiento, producto, servicio o mensaje comercial.

El flyer forma parte de esta categoría, pero no es el único formato.

Dependiendo del negocio, también pueden existir:

*   publicaciones promocionales;
*   historias;
*   estados de WhatsApp;
*   menús;
*   catálogos simples;
*   banners;
*   piezas para eventos;
*   promociones de temporada;
*   anuncios;
*   invitaciones;
*   portadas.

El objetivo es aprender a organizar información visual y comercial de manera clara.

*Por qué importa:* Porque una pieza promocional no solamente debe verse bonita.

Debe permitir que una persona pueda comprender rápidamente:

*   qué se ofrece;
*   para quién es;
*   cuál es el beneficio;
*   cuál es la promoción;
*   cómo puede comprar;
*   qué acción debe realizar.

Muchos flyers están saturados de información o no tienen una jerarquía clara.

El objetivo de esta clase es aprender a combinar creatividad, claridad y objetivo comercial.', '[{"id":"recurso-c2-2-5","name":"Entregable: Un Kit Básico de Piezas Promocionales, que puede incluir:\n\n*   flyer promocional;\n*   pieza para oferta;\n*   historia vertical;\n*   estado de WhatsApp;\n*   publicación de producto;\n*   pieza para lanzamiento;\n*   pieza para evento;\n*   promoción de temporada.\n\nAdemás, deja una estructura visual reutilizable para futuras campañas.","url":"","type":"template"}]'::jsonb, 5),
('4fa94b61-0a70-43c5-a180-2e66d299c5cd', 'e7618d1c-3cfc-43b3-aeaf-b6b80db7a6eb', 'Clase 2.6 - Carruseles y sistemas visuales de contenido', '15:00', false, NULL, 'El carrusel es una secuencia de piezas visuales conectadas que permiten desarrollar una idea, explicar un problema, educar, contar una historia, mostrar un proceso o presentar una solución.

Dentro de C2, el objetivo no es profundizar todavía en copywriting, hooks o storytelling.

Ese trabajo corresponde principalmente a C3 Comunicación.

En esta etapa se trabajará la estructura visual del carrusel:

*   portada;
*   jerarquía;
*   composición;
*   continuidad;
*   ritmo;
*   consistencia;
*   distribución del texto;
*   uso de imágenes;
*   cierre visual.

*Por qué importa:* Porque una idea valiosa puede perder impacto cuando se presenta de manera desordenada.

El carrusel permite organizar información en pequeños bloques visuales y facilitar su consumo.

Además, un buen sistema visual permite que el emprendedor no tenga que comenzar un diseño desde cero cada vez que desea publicar.

La meta es construir estructuras reutilizables.', '[{"id":"recurso-c2-2-6","name":"Entregable: Un Sistema Visual de Carruseles, que incluye:\n\n*   portada;\n*   estructura interior;\n*   diferentes tipos de páginas;\n*   página de transición;\n*   página de ejemplo;\n*   cierre;\n*   CTA visual;\n*   reglas de composición;\n*   una o dos plantillas reutilizables.","url":"","type":"template"}]'::jsonb, 6),
('c857e232-fe25-4895-a1fa-47d3410c8c15', 'e7618d1c-3cfc-43b3-aeaf-b6b80db7a6eb', 'Clase 2.7 - Avatares, personajes y portavoces digitales', '15:00', false, NULL, 'Los avatares, personajes y portavoces digitales son representaciones visuales creadas para cumplir una función de comunicación dentro de una marca.

Pueden utilizarse como:

*   mascota de marca;
*   personaje comercial;
*   representación del cliente ideal;
*   protagonista de historias;
*   portavoz virtual;
*   presentador;
*   personaje educativo;
*   personaje recurrente para videos.

No todos los negocios necesitan un avatar.

La decisión debe depender de la estrategia, el público y los objetivos de comunicación.

Por ejemplo:

Un restaurante puede tener un personaje relacionado con su historia.

Una academia puede utilizar un portavoz digital para explicar conceptos.

Una marca infantil puede construir una mascota.

Una empresa de servicios puede crear personajes que representen situaciones reales de sus clientes.

*Por qué importa:* Porque las personas conectan con historias, rostros y personajes.

Un personaje consistente puede ayudar a:

*   generar reconocimiento;
*   explicar ideas;
*   representar problemas;
*   dramatizar situaciones;
*   contar historias;
*   humanizar una marca;
*   preparar contenidos audiovisuales.

Sin embargo, para que funcione necesita consistencia visual.

No basta crear una persona diferente cada vez.', '[{"id":"recurso-c2-2-7","name":"Entregable: Una Ficha Maestra de Personaje Visual, que incluye:\n\n*   función estratégica;\n*   descripción física;\n*   personalidad;\n*   vestuario;\n*   accesorios;\n*   colores;\n*   expresiones;\n*   poses;\n*   escenarios;\n*   estilo visual;\n*   referencias;\n*   prompts base;\n*   biblioteca inicial de imágenes consistentes.\n\nEl alumno también puede dejar preparado un personaje principal para utilizar posteriormente en contenidos de C3.","url":"","type":"template"}]'::jsonb, 7);

-- Módulo: C3: COMUNICACIÓN — Expresar, Producir y Publicar
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('6156352d-4507-4fdf-a67d-826415dd258a', 'c0000000-0000-0000-0000-000000000002', 'C3: COMUNICACIÓN — Expresar, Producir y Publicar', 4);

INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('8877a852-3f7f-429e-a582-8dbc9052443f', '6156352d-4507-4fdf-a67d-826415dd258a', 'Clase 3.1 - Mensaje y copywriting aplicado', '15:00', false, NULL, 'El mensaje es la forma en que el negocio convierte sus conocimientos, ideas, experiencia, propuesta de valor y comprensión del cliente en palabras que las personas puedan entender.

El copywriting aplicado es el uso estratégico de palabras para captar atención, explicar una idea, generar interés, conectar con un problema, mostrar un beneficio y motivar una acción.

En esta clase no se busca convertir al emprendedor en un redactor profesional.

El objetivo es ayudarlo a dejar de comunicar desde frases genéricas como:

_“Somos una empresa comprometida con nuestros clientes.”_

_“Ofrecemos productos de calidad.”_

_“Tenemos el mejor servicio.”_

Y comenzar a construir mensajes más concretos, humanos y conectados con la realidad del cliente.

C1 ya ayudó al emprendedor a entender:

*   quién es su cliente;
*   qué necesita;
*   qué desea;
*   qué teme;
*   qué ha intentado;
*   qué le frustra;
*   qué valor ofrece el negocio.

Ahora C3 convierte toda esa información en comunicación.

*Por qué importa:* Porque un negocio puede tener un buen producto y aun así no saber explicarlo.

Muchos emprendedores conocen muy bien su trabajo, pero cuando tienen que comunicarlo utilizan palabras técnicas, frases generales o mensajes centrados únicamente en el producto.

Una buena comunicación permite que el cliente comprenda rápidamente:

*   qué problema se está hablando;
*   por qué ese problema importa;
*   qué oportunidad existe;
*   qué solución ofrece el negocio;
*   qué beneficio puede obtener;
*   qué debería hacer después.

La comunicación empieza cuando el negocio deja de hablar solamente de sí mismo y aprende a conectar su propuesta con la realidad del cliente.', '[{"id":"recurso-c3-3-1","name":"Entregable: Una Matriz de Mensajes del Negocio, organizada en categorías como:\n\n*   mensajes de problema;\n*   mensajes de deseo;\n*   mensajes educativos;\n*   mensajes de oportunidad;\n*   mensajes de diferenciación;\n*   mensajes de autoridad;\n*   mensajes de experiencia;\n*   mensajes de transformación;\n*   mensajes comerciales;\n*   mensajes de confianza.\n\nTambién se construye una biblioteca inicial de frases y mensajes base para futuros contenidos.","url":"","type":"template"}]'::jsonb, 1),
('61c78631-2a4b-4bb7-adae-1c88614210e3', '6156352d-4507-4fdf-a67d-826415dd258a', 'Clase 3.2 - Ángulos, hooks y llamados a la acción', '15:00', false, NULL, 'Los ángulos son diferentes maneras de abordar un mismo tema.

El hook o gancho es el inicio del contenido que busca detener la atención y generar suficiente interés para que la persona quiera continuar.

El llamado a la acción o CTA indica cuál debería ser el siguiente paso de la persona después de consumir el contenido.

Por ejemplo, un mismo producto puede comunicarse desde diferentes ángulos:

*   un problema;
*   un error frecuente;
*   un deseo;
*   una comparación;
*   una oportunidad;
*   una historia;
*   un mito;
*   una demostración;
*   un resultado;
*   una experiencia personal.

El objetivo de esta clase es que el emprendedor deje de depender únicamente de la inspiración y aprenda a generar diferentes enfoques a partir de la información que ya tiene sobre su cliente.

*Por qué importa:* Porque muchas veces el problema no es que el emprendedor no tenga nada que decir.

El problema es que siempre presenta sus ideas de la misma manera.

Por ejemplo:

_“Compra nuestro producto.”_

_“Tenemos una promoción.”_

_“Visítanos.”_

_“Tenemos el mejor servicio.”_

Ese tipo de comunicación pierde rápidamente la atención.

Un mismo tema puede generar muchos contenidos diferentes si se trabaja desde distintos ángulos.

Los hooks ayudan a iniciar una conversación con fuerza.

Los CTA ayudan a darle dirección.

Sin un llamado a la acción, una persona puede consumir el contenido, estar de acuerdo y continuar desplazándose sin realizar ninguna acción.', '[{"id":"recurso-c3-3-2","name":"Entregable: Una Biblioteca de Ángulos, Hooks y CTA, organizada en categorías como:\n\n*   dolor;\n*   deseo;\n*   miedo;\n*   error;\n*   curiosidad;\n*   comparación;\n*   mito;\n*   oportunidad;\n*   experiencia personal;\n*   demostración;\n*   transformación;\n*   pregunta;\n*   advertencia;\n*   aprendizaje.\n\nTambién se construyen llamados a la acción según el objetivo del contenido.","url":"","type":"template"}]'::jsonb, 2),
('670cc86d-4c22-4bf3-a248-0789d68c350c', '6156352d-4507-4fdf-a67d-826415dd258a', 'Clase 3.3 - Storytelling y creación de guiones', '15:00', false, NULL, 'El storytelling es la capacidad de comunicar una idea mediante una estructura narrativa.

El guion es la organización previa del mensaje que se desea comunicar en un video, audio, presentación o contenido.

No todas las publicaciones necesitan contar una historia personal.

Sin embargo, todo contenido necesita algún tipo de estructura.

Un video puede seguir una secuencia como:

Gancho → Contexto → Problema → Desarrollo → Aprendizaje → Solución → CTA

Otro contenido puede utilizar:

Pregunta → Explicación → Ejemplo → Conclusión

Un contenido comercial puede seguir:

Problema → Consecuencia → Solución → Beneficio → Acción

La intención es que el emprendedor aprenda a organizar su pensamiento antes de grabar.

*Por qué importa:* Porque muchas personas saben sobre un tema, pero cuando empiezan a grabar:

*   se repiten;
*   se desvían;
*   utilizan demasiadas palabras;
*   no llegan al punto;
*   comienzan sin fuerza;
*   terminan sin conclusión;
*   no saben cómo conectar una idea con otra.

El guion ayuda a ordenar la comunicación.

El storytelling permite transformar información en una experiencia más humana y memorable.

Además, las historias permiten comunicar:

*   origen;
*   decisiones;
*   dificultades;
*   aprendizajes;
*   procesos;
*   transformaciones;
*   experiencias de clientes;
*   historias de producto;
*   historias del fundador.', '[{"id":"recurso-c3-3-3","name":"Entregable: Un Banco de Guiones del Negocio, que puede contener:\n\n*   guiones educativos;\n*   guiones problema–solución;\n*   guiones de errores frecuentes;\n*   guiones de oportunidad;\n*   guiones comerciales;\n*   guiones de demostración;\n*   historias del fundador;\n*   historias del producto;\n*   historias del cliente;\n*   guiones de transformación;\n*   guiones de preguntas y respuestas.\n\nTambién se deja una biblioteca de estructuras reutilizables.","url":"","type":"template"}]'::jsonb, 3),
('bf04784d-b382-4bbe-ac03-4911a2b77dd1', '6156352d-4507-4fdf-a67d-826415dd258a', 'Clase 3.4 - Formatos de contenido y comunicación frente a cámara', '15:00', false, NULL, 'Los formatos de contenido son diferentes maneras de presentar un mensaje.

El formato se elige según:

*   el objetivo;
*   el tema;
*   la personalidad de la marca;
*   el tipo de negocio;
*   el público;
*   la plataforma;
*   los recursos disponibles.

Algunos formatos son:

*   hablando a cámara;
*   narración con imágenes;
*   tutorial;
*   demostración;
*   antes y después;
*   preguntas y respuestas;
*   lista de consejos;
*   detrás de cámaras;
*   proceso de trabajo;
*   testimonio;
*   entrevista;
*   reacción;
*   comparación;
*   historia personal;
*   presentación de producto;
*   contenido tipo UGC;
*   secuencia de escenas;
*   video con avatar;
*   video con voz en off.

Esta clase también incluye fundamentos básicos para hablar frente a cámara.

*Por qué importa:* Porque muchos emprendedores creen que hacer contenido significa colocarse frente al teléfono y hablar.

Eso genera bloqueos.

Una persona puede comunicar mediante:

*   su rostro;
*   sus manos;
*   su producto;
*   una demostración;
*   una entrevista;
*   una narración;
*   imágenes;
*   un avatar;
*   un proceso;
*   una historia visual.

Aprender diferentes formatos permite encontrar maneras de comunicar que sean sostenibles para cada negocio.

Además, hablar frente a cámara requiere algunos criterios básicos:

*   mirar al lente;
*   modular la voz;
*   controlar la velocidad;
*   utilizar pausas;
*   dividir el mensaje por bloques;
*   cuidar el encuadre;
*   trabajar la iluminación;
*   mantener naturalidad.', '[{"id":"recurso-c3-3-4","name":"Entregable: Un Mapa de Formatos de Contenido del Negocio, donde se define:\n\n*   qué formatos utilizará la marca;\n*   qué tipos de mensajes van en cada formato;\n*   qué formatos utilizar para educar;\n*   qué formatos utilizar para generar confianza;\n*   qué formatos utilizar para mostrar productos;\n*   qué formatos utilizar para vender;\n*   qué formatos utilizar para historias.\n\nTambién se preparan estructuras de grabación para los formatos principales.","url":"","type":"template"}]'::jsonb, 4),
('59d9a97d-c4af-40ac-afd6-116b09619409', '6156352d-4507-4fdf-a67d-826415dd258a', 'Clase 3.5 - Creación de videos con inteligencia artificial', '15:00', false, NULL, 'La creación de videos con inteligencia artificial es el proceso de utilizar herramientas generativas para producir o transformar contenido audiovisual a partir de:

*   texto;
*   imágenes;
*   personajes;
*   productos;
*   escenas;
*   storyboards;
*   referencias visuales.

La IA puede utilizarse para:

*   generar clips;
*   animar imágenes;
*   crear movimientos;
*   construir escenas;
*   representar situaciones;
*   desarrollar personajes;
*   simular escenarios;
*   crear demostraciones visuales;
*   contar pequeñas historias.

El objetivo no es producir videos solamente porque la tecnología permite hacerlo.

El video debe responder siempre a un mensaje y un objetivo previamente definidos.

*Por qué importa:* Porque la creación audiovisual tradicional puede requerir:

*   locaciones;
*   actores;
*   cámaras;
*   desplazamientos;
*   producción;
*   tiempo;
*   presupuesto.

La inteligencia artificial abre posibilidades para pequeños negocios que antes no podían producir determinadas escenas.

Por ejemplo:

Un restaurante puede crear una historia visual sobre la llegada de un cliente.

Una inmobiliaria puede representar experiencias.

Una academia puede crear escenas educativas.

Un profesional puede utilizar un avatar.

Una marca puede animar sus productos.

Sin embargo, para obtener buenos resultados se necesita:

*   concepto;
*   guion;
*   storyboard;
*   consistencia visual;
*   planificación por escenas;
*   prompts claros.', '[{"id":"recurso-c3-3-5","name":"Entregable: Un Proyecto Audiovisual Básico con IA, compuesto por:\n\n*   concepto;\n*   guion;\n*   storyboard;\n*   lista de escenas;\n*   prompts;\n*   personajes;\n*   referencias;\n*   clips generados;\n*   secuencia audiovisual.\n\nTambién se deja una biblioteca de prompts para futuras producciones.","url":"","type":"template"}]'::jsonb, 5),
('3289af26-3020-4a4b-a584-5d47e6f5b974', '6156352d-4507-4fdf-a67d-826415dd258a', 'Clase 3.6 - Voz, narración, música y sonido', '15:00', false, NULL, 'La comunicación audiovisual utiliza tanto imagen como sonido.

Esta clase trabaja los elementos sonoros que acompañan o conducen una pieza de contenido:

*   voz propia;
*   voz en off;
*   narración;
*   voz generada con IA;
*   diálogo;
*   música;
*   efectos de sonido;
*   ambiente;
*   silencios;
*   pausas.

La voz no solamente transmite información.

También transmite:

*   confianza;
*   cercanía;
*   emoción;
*   autoridad;
*   energía;
*   calma;
*   urgencia.

Por eso debe ser coherente con el mensaje y con la personalidad de la marca.

*Por qué importa:* Porque un video visualmente bueno puede perder impacto cuando:

*   la voz no se entiende;
*   el volumen es deficiente;
*   la música compite con el mensaje;
*   el ritmo es demasiado lento;
*   la narración no transmite emoción;
*   los efectos distraen.

También existen negocios donde el propietario no desea o no puede narrar todos sus contenidos.

En esos casos se pueden utilizar diferentes soluciones:

*   voz en off;
*   locución;
*   voz generada con IA;
*   narrador;
*   avatar;
*   combinación de voz y subtítulos.', '[{"id":"recurso-c3-3-6","name":"Entregable: Un Kit Básico de Voz y Sonido para Contenido, que contiene:\n\n*   estilo de narración;\n*   tono de voz recomendado;\n*   criterios de velocidad;\n*   criterios de música;\n*   tipos de efectos;\n*   ejemplos de narración;\n*   voces seleccionadas;\n*   audios producidos;\n*   biblioteca sonora básica.","url":"","type":"template"}]'::jsonb, 6),
('78939339-7514-4945-a6cf-57257fded6f1', '6156352d-4507-4fdf-a67d-826415dd258a', 'Clase 3.7 - Edición, subtítulos y adaptación multiformato', '15:00', false, NULL, 'La edición es el proceso de organizar y combinar los elementos audiovisuales para construir una pieza final.

Incluye:

*   selección de clips;
*   cortes;
*   ritmo;
*   secuencia;
*   voz;
*   música;
*   efectos;
*   textos;
*   subtítulos;
*   transiciones;
*   portada;
*   cierre;
*   adaptación de formato.

La adaptación multiformato consiste en transformar una pieza principal para diferentes canales o necesidades.

Por ejemplo, un mismo contenido puede convertirse en:

*   TikTok;
*   Reel;
*   Short;
*   historia;
*   estado de WhatsApp;
*   clip;
*   versión resumida;
*   fragmento educativo;
*   contenido horizontal.

*Por qué importa:* Porque grabar o generar un video no significa que el contenido esté terminado.

La edición ayuda a:

*   eliminar partes innecesarias;
*   mantener ritmo;
*   reforzar ideas;
*   facilitar la comprensión;
*   agregar subtítulos;
*   mejorar la experiencia.

También permite aprovechar mejor el esfuerzo de producción.

Un emprendedor no necesita crear una idea completamente diferente para cada plataforma.

Puede desarrollar un contenido principal y adaptarlo de manera inteligente.', '[{"id":"recurso-c3-3-7","name":"Entregable: Un Sistema Básico de Edición y Reutilización de Contenido, que incluye:\n\n*   estructura de edición;\n*   formato de subtítulos;\n*   criterios de texto;\n*   portada;\n*   cierre;\n*   versión principal;\n*   adaptaciones;\n*   estrategia básica de reutilización.\n\nEl alumno deja varias piezas terminadas y listas para publicación.","url":"","type":"template"}]'::jsonb, 7),
('aa03ab34-a773-4d54-a3d1-8fe2ef75d382', '6156352d-4507-4fdf-a67d-826415dd258a', 'Clase 3.8 - Calendarización, publicación y sistema de producción', '15:00', false, NULL, 'La calendarización de contenidos es la organización operativa de qué contenido se va a publicar, cuándo, dónde, con qué objetivo y en qué estado se encuentra.

Esta clase no reemplaza el Plan de Contenido trabajado en C1.

La diferencia es la siguiente:

C1 define estratégicamente qué temas, pilares y objetivos tendrá el contenido.

C3 organiza operativamente cuándo se produce, edita y publica cada pieza.

La calendarización convierte la estrategia y los recursos creativos en ejecución.

También se construye un sistema de producción que permita saber en qué etapa se encuentra cada contenido.

Por ejemplo:

Idea → Guion → Preparación → Grabación → Edición → Revisión → Programado → Publicado → Medición

*Por qué importa:* Porque muchos emprendedores tienen:

*   ideas;
*   imágenes;
*   diseños;
*   guiones;
*   videos;
*   fotografías.

Pero no tienen un sistema que les permita publicar con consistencia.

El problema muchas veces no es falta de contenido.

Es falta de organización.

La calendarización ayuda a conectar:

*   la estrategia de C1;
*   los recursos visuales de C2;
*   los mensajes y videos de C3.

Además, evita que el contenido se produzca de manera improvisada todos los días.', '[{"id":"recurso-c3-3-8","name":"Entregable: Un Calendario Editorial de 30 días y un Tablero Básico de Producción de Contenidos.\n\nEl calendario puede incluir:\n\n*   fecha;\n*   plataforma;\n*   tema;\n*   pilar;\n*   objetivo;\n*   etapa del embudo;\n*   formato;\n*   hook;\n*   CTA;\n*   recurso visual;\n*   responsable;\n*   estado;\n*   fecha de publicación.\n\nEl tablero de producción puede utilizar las siguientes etapas:\n\n*   Idea.\n*   En desarrollo.\n*   Guion listo.\n*   Por grabar.\n*   Grabado.\n*   En edición.\n*   En revisión.\n*   Programado.\n*   Publicado.\n*   Medido.","url":"","type":"template"}]'::jsonb, 8);

-- Módulo: C4: CONVERSIÓN — Conversar, Vender y Mejorar
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('635b19c3-6188-489a-af26-871ac35f46b2', 'c0000000-0000-0000-0000-000000000002', 'C4: CONVERSIÓN — Conversar, Vender y Mejorar', 5);

INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('57bb09c2-e8de-4920-a9e1-efe7bfb3f716', '635b19c3-6188-489a-af26-871ac35f46b2', 'Clase 4.1 - Ruta de conversión y proceso comercial', '15:00', false, NULL, 'La ruta de conversión es el recorrido que sigue una persona desde que descubre el negocio hasta que realiza una compra y continúa su relación con la marca.

Cada negocio puede tener una ruta diferente.

Por ejemplo:

Contenido → Comentario → WhatsApp → Primera respuesta → Diagnóstico → Recomendación → Objeciones → Seguimiento → Compra → Postventa

En otro negocio podría ser:

Anuncio → Formulario → Llamada → Diagnóstico → Propuesta → Seguimiento → Firma → Implementación

Y en un restaurante:

Contenido → Consulta → Reserva o pedido → Confirmación → Atención → Experiencia → Recompra → Recomendación

La finalidad de esta clase es que el emprendedor vea la venta como un proceso y no como una respuesta aislada.

*Por qué importa:* Porque muchos emprendedores generan contenido, reciben mensajes y atienden consultas, pero no tienen una ruta definida.

Cada persona recibe una respuesta diferente.

Algunos reciben información.

Otros reciben directamente el precio.

Otros quedan sin seguimiento.

Otros preguntan algo y la conversación se pierde.

Cuando no existe un proceso comercial, las oportunidades dependen de la memoria, el ánimo o la improvisación del emprendedor.

Definir una ruta permite entender:

*   de dónde llegan las personas;
*   qué sucede después;
*   qué preguntas debemos hacer;
*   en qué momento presentamos la solución;
*   cuándo hacemos seguimiento;
*   cuándo consideramos cerrada una oportunidad.', '[{"id":"recurso-c4-4-1","name":"Entregable: Un Mapa de Ruta de Conversión del Negocio, que muestra:\n\n*   origen del contacto;\n*   canal de entrada;\n*   primera respuesta;\n*   diagnóstico;\n*   calificación;\n*   recomendación;\n*   propuesta;\n*   objeción;\n*   seguimiento;\n*   cierre;\n*   postventa;\n*   fidelización.\n\nTambién se define un flujo básico de atención comercial.","url":"","type":"template"}]'::jsonb, 1),
('38586090-938f-444c-a233-5c4ef8702a56', '635b19c3-6188-489a-af26-871ac35f46b2', 'Clase 4.2 - Primer contacto y respuesta inicial', '15:00', false, NULL, 'El primer contacto es el momento en que una persona realiza una acción que demuestra algún nivel de interés.

Puede ser:

*   un mensaje por WhatsApp;
*   una consulta por Messenger;
*   un mensaje directo;
*   un comentario;
*   una llamada;
*   una respuesta a una historia;
*   una solicitud de información;
*   una pregunta sobre precio;
*   una consulta sobre disponibilidad.

La respuesta inicial es la primera interacción comercial del negocio con esa persona.

Su función no es vender inmediatamente.

Su función es:

*   atender;
*   reconocer el interés;
*   generar confianza;
*   comprender la consulta;
*   iniciar correctamente la conversación.

*Por qué importa:* Porque una persona puede haber visto varios contenidos, revisado la marca, comparado alternativas y finalmente decidir escribir.

Ese momento tiene valor.

Sin embargo, muchos negocios responden de manera automática, fría o incompleta.

Por ejemplo:

Cliente:

_“Información.”_

Negocio:

_“¿De qué?”_

O:

Cliente:

_“Precio.”_

Negocio:

_“S/ 350.”_

Y la conversación termina.

Una buena primera respuesta debe hacer que la persona sienta que está hablando con un negocio organizado, atento y dispuesto a comprender lo que necesita.', '[{"id":"recurso-c4-4-2","name":"Entregable: Un Kit de Respuestas Iniciales, que puede incluir:\n\n*   respuesta a “quiero información”;\n*   respuesta a consulta de precio;\n*   respuesta desde redes sociales;\n*   respuesta desde anuncios;\n*   respuesta a recomendados;\n*   respuesta fuera de horario;\n*   respuesta a disponibilidad;\n*   mensaje de bienvenida;\n*   preguntas iniciales de apertura.\n\nTambién se construye un criterio para personalizar las respuestas según el origen y la intención del prospecto.","url":"","type":"template"}]'::jsonb, 2),
('662f2f9f-37d9-4cfd-a228-ae4f43c21d83', '635b19c3-6188-489a-af26-871ac35f46b2', 'Clase 4.3 - Diagnóstico y calificación del prospecto', '15:00', false, NULL, 'El diagnóstico es el proceso de comprender la situación, necesidad, problema o deseo de una persona antes de recomendarle una solución.

La calificación consiste en determinar si existe una oportunidad comercial real y qué tipo de solución puede ser adecuada.

No todas las personas que preguntan están en el mismo momento.

Algunas:

*   están investigando;
*   comparan opciones;
*   tienen una necesidad urgente;
*   todavía no comprenden su problema;
*   necesitan información;
*   tienen interés, pero no están listas;
*   están preparadas para decidir.

Diagnosticar significa preguntar y escuchar antes de intentar vender.

*Por qué importa:* Porque muchos negocios presentan productos o precios sin comprender qué necesita el cliente.

Esto genera conversaciones poco relevantes.

Por ejemplo, una persona puede preguntar:

_“¿Cuánto cuesta?”_

Pero detrás de esa pregunta pueden existir diferentes necesidades.

Una persona puede buscar:

*   la opción más económica;
*   una solución urgente;
*   mayor calidad;
*   acompañamiento;
*   rapidez;
*   seguridad;
*   personalización.

El precio es solamente una parte de la conversación.

Diagnosticar ayuda a recomendar mejor y evita ofrecer la misma solución a todos.', '[{"id":"recurso-c4-4-3","name":"Entregable: Un Guion de Diagnóstico y Calificación, compuesto por:\n\n*   preguntas de situación;\n*   preguntas de necesidad;\n*   preguntas de problema;\n*   preguntas de expectativa;\n*   preguntas de prioridad;\n*   preguntas de urgencia;\n*   preguntas de decisión;\n*   criterios básicos de calificación.\n\nTambién se crea una Ficha Básica de Prospecto, donde se puede registrar:\n\n*   nombre;\n*   fuente de llegada;\n*   necesidad;\n*   problema principal;\n*   interés;\n*   solución recomendada;\n*   nivel de oportunidad;\n*   siguiente paso.","url":"","type":"template"}]'::jsonb, 3),
('3f41fdab-0635-43b7-a5f2-18b12a3396d3', '635b19c3-6188-489a-af26-871ac35f46b2', 'Clase 4.4 - Conversación de venta consultiva y presentación de la solución', '15:00', false, NULL, 'La venta consultiva es una forma de conversar donde el negocio primero comprende y después recomienda.

No parte de presionar al cliente.

Parte de conectar la necesidad identificada con una solución concreta.

La estructura puede resumirse así:

Escuchar → Comprender → Confirmar → Recomendar → Explicar valor → Proponer un siguiente paso

Por ejemplo:

_“Por lo que me comentas, tu principal dificultad es mantener una publicación constante y todavía no tienes claro qué contenidos crear. En ese caso, la opción que más sentido tendría para ti es…”_

La recomendación aparece después del diagnóstico.

*Por qué importa:* Porque muchas conversaciones comerciales empiezan directamente presentando:

*   planes;
*   características;
*   precios;
*   promociones.

Sin haber conectado esos elementos con la necesidad del cliente.

Una persona no compra simplemente porque le explicaron muchas características.

Necesita comprender:

*   por qué esa solución es relevante;
*   cómo se relaciona con su situación;
*   qué problema puede ayudar a resolver;
*   qué beneficio puede obtener;
*   cuál es el siguiente paso.

La conversación consultiva ayuda a vender sin perder humanidad.', '[{"id":"recurso-c4-4-4","name":"Entregable: Un Script Maestro de Conversación Comercial, que contiene:\n\n*   apertura;\n*   diagnóstico;\n*   confirmación de necesidad;\n*   recomendación;\n*   presentación de beneficios;\n*   explicación de la solución;\n*   evidencia;\n*   precio o inversión;\n*   siguiente paso.\n\nTambién se crean diferentes versiones según el tipo de producto o servicio.","url":"","type":"template"}]'::jsonb, 4),
('ba290480-2e65-44d7-a989-96b5b4e401c6', '635b19c3-6188-489a-af26-871ac35f46b2', 'Clase 4.5 - Manejo de objeciones y construcción de confianza', '15:00', false, NULL, 'Una objeción es una duda, preocupación, dificultad o barrera que impide que una persona avance en una decisión.

Algunas objeciones frecuentes son:

*   _“Está caro.”_
*   _“Lo voy a pensar.”_
*   _“No tengo tiempo.”_
*   _“Tengo que consultarlo.”_
*   _“No estoy seguro.”_
*   _“Estoy comparando.”_
*   _“Ya probé algo parecido.”_
*   _“Después te escribo.”_
*   _“No sé si esto funcionará para mí.”_

El manejo de objeciones no significa discutir con el cliente.

Tampoco significa presionarlo hasta conseguir una compra.

La lógica recomendada es:

Escuchar → Validar → Preguntar → Comprender → Responder → Confirmar

*Por qué importa:* Porque muchas ventas no se pierden por el precio.

Se pierden porque el negocio no comprende la verdadera preocupación del cliente.

Por ejemplo:

“Está caro” puede significar:

*   no entiendo el valor;
*   no confío todavía;
*   estoy comparando;
*   no tengo presupuesto ahora;
*   no es prioritario;
*   necesito más información;
*   tengo miedo de equivocarme.

Responder automáticamente con un descuento puede ser un error.

La objeción debe entenderse antes de responder.', '[{"id":"recurso-c4-4-5","name":"Entregable: Una Matriz de Objeciones del Negocio, que contiene:\n\n*   objeción;\n*   posible causa;\n*   pregunta de aclaración;\n*   respuesta recomendada;\n*   evidencia necesaria;\n*   siguiente paso.\n\nLas objeciones pueden clasificarse por:\n\n*   precio;\n*   confianza;\n*   tiempo;\n*   necesidad;\n*   prioridad;\n*   comparación;\n*   experiencia anterior;\n*   autoridad de decisión;\n*   miedo;\n*   urgencia.","url":"","type":"template"}]'::jsonb, 5),
('df323d0a-ffd4-46f2-a12e-eab21bd3afd1', '635b19c3-6188-489a-af26-871ac35f46b2', 'Clase 4.6 - Cierre y facilitación de la decisión', '15:00', false, NULL, 'El cierre es el momento donde una conversación comercial avanza hacia una decisión concreta.

Puede ser:

*   realizar el pago;
*   reservar;
*   firmar;
*   confirmar un pedido;
*   programar una reunión;
*   elegir un plan;
*   iniciar una prueba;
*   completar una inscripción.

Cerrar no significa utilizar presión artificial.

Significa facilitar la decisión cuando existe:

*   necesidad;
*   interés;
*   confianza;
*   claridad;
*   una solución adecuada.

El cierre también incluye explicar claramente qué sucede después.

*Por qué importa:* Porque existen conversaciones donde el cliente muestra interés, pero el negocio no guía el siguiente paso.

Por ejemplo:

_“Avísame cualquier cosa.”_

_“Quedo atento.”_

_“Cuando quieras me escribes.”_

Estas frases dejan la decisión completamente abierta.

Un proceso comercial debe explicar:

*   qué opción corresponde;
*   cuánto cuesta;
*   cómo se paga;
*   qué debe hacer;
*   cuándo empieza;
*   qué recibirá;
*   qué sucede después.', '[{"id":"recurso-c4-4-6","name":"Entregable: Un Sistema Básico de Cierre, que contiene:\n\n*   señales de compra;\n*   preguntas de avance;\n*   confirmación de opción;\n*   instrucciones de pago;\n*   mensaje de confirmación;\n*   protocolo de compra;\n*   mensaje de bienvenida;\n*   siguiente paso.\n\nTambién se construyen cierres adecuados según el modelo de negocio.","url":"","type":"template"}]'::jsonb, 6),
('67aade9c-c47c-4830-a28c-a0f73b30aebe', '635b19c3-6188-489a-af26-871ac35f46b2', 'Clase 4.7 - Seguimiento, nutrición y reactivación', '15:00', false, NULL, 'El seguimiento es el proceso de mantener contacto con una persona que mostró interés, pero todavía no tomó una decisión.

La nutrición consiste en compartir información que ayude a:

*   educar;
*   resolver dudas;
*   fortalecer confianza;
*   recordar el problema;
*   demostrar valor;
*   mantener la relación.

La reactivación consiste en retomar conversaciones antiguas que podrían volver a convertirse en oportunidades.

*Por qué importa:* Porque muchos emprendedores consideran perdida una oportunidad cuando una persona deja de responder.

Sin embargo, una persona puede no comprar inmediatamente por diferentes motivos:

*   estaba ocupada;
*   no era el momento;
*   estaba comparando;
*   necesitaba hablar con alguien;
*   todavía no confiaba;
*   no tenía presupuesto;
*   no era una prioridad.

El seguimiento no debe ser persecución.

Debe tener intención, contexto y respeto.

No se trata de enviar cada día:

_“¿Ya decidiste?”_

Se trata de continuar la relación de manera adecuada.', '[{"id":"recurso-c4-4-7","name":"Entregable: Una Secuencia de Seguimiento y Reactivación, que puede incluir:\n\n*   seguimiento después de consulta;\n*   seguimiento después de propuesta;\n*   seguimiento después de reunión;\n*   seguimiento de interés;\n*   mensaje de valor;\n*   prueba social;\n*   respuesta a duda frecuente;\n*   reactivación;\n*   cierre de ciclo.\n\nTambién se construye un calendario básico de seguimiento comercial.","url":"","type":"template"}]'::jsonb, 7),
('24ceb222-aa37-4e93-af45-b4bf867d12fa', '635b19c3-6188-489a-af26-871ac35f46b2', 'Clase 4.8 - Postventa, fidelización y recomendación', '15:00', false, NULL, 'La postventa es el conjunto de acciones que realiza el negocio después de que una persona compra.

Su objetivo es asegurar que el cliente:

*   comprenda qué sucede después;
*   tenga una buena experiencia;
*   reciba apoyo;
*   pueda resolver dudas;
*   obtenga valor;
*   quiera volver;
*   pueda recomendar.

La fidelización busca construir una relación que no termine en una sola transacción.

La recomendación convierte una buena experiencia en una nueva fuente de oportunidades.

*Por qué importa:* Porque muchos negocios invierten esfuerzo para conseguir un cliente y después descuidan la experiencia posterior a la compra.

Esto puede generar:

*   dudas;
*   frustración;
*   abandono;
*   falta de recompra;
*   pérdida de recomendaciones.

Una buena postventa puede generar:

*   recompra;
*   renovación;
*   venta complementaria;
*   testimonios;
*   recomendaciones;
*   referidos;
*   mayor confianza.

La conversión no debería medirse solamente por cuántas personas pagan una vez.

También importa qué sucede después.', '[{"id":"recurso-c4-4-8","name":"Entregable: Una Ruta Básica de Postventa y Fidelización, que contiene:\n\n*   mensaje de bienvenida;\n*   confirmación de compra;\n*   instrucciones;\n*   seguimiento de satisfacción;\n*   mensaje de acompañamiento;\n*   solicitud de testimonio;\n*   propuesta de recompra;\n*   propuesta complementaria;\n*   solicitud de recomendación;\n*   programa básico de referidos, cuando corresponda.","url":"","type":"template"}]'::jsonb, 8),
('8b12f56e-fe8a-484f-a6a3-25c16a96a263', '635b19c3-6188-489a-af26-871ac35f46b2', 'Clase 4.9 - Pipeline comercial, CRM básico y métricas de conversión', '15:00', false, NULL, 'El pipeline comercial es una representación ordenada de las oportunidades de venta y de la etapa en la que se encuentra cada una.

Un CRM es un sistema que permite registrar y organizar información de clientes y prospectos.

Para un pequeño emprendedor no es necesario comenzar con una plataforma compleja.

Puede comenzar con una herramienta sencilla que permita registrar:

*   nombre;
*   origen;
*   necesidad;
*   etapa;
*   último contacto;
*   siguiente acción;
*   resultado.

El objetivo no es acumular datos.

El objetivo es evitar que las oportunidades se pierdan por falta de organización.

*Por qué importa:* Porque muchos negocios tienen sus oportunidades distribuidas entre:

*   WhatsApp;
*   Messenger;
*   Instagram;
*   cuadernos;
*   notas;
*   memoria.

Esto dificulta saber:

*   cuántas personas preguntaron;
*   cuántas recibieron seguimiento;
*   cuántas compraron;
*   en qué etapa se pierden;
*   de dónde vienen los mejores clientes.

Sin medición, el negocio puede pensar:

_“Este mes estuvo flojo.”_

Pero no sabe por qué.

Tal vez:

*   llegaron pocas consultas;
*   la primera respuesta fue débil;
*   no hubo seguimiento;
*   las propuestas no fueron claras;
*   hubo muchas objeciones de precio;
*   una fuente de tráfico dejó de funcionar.

Las métricas permiten detectar problemas concretos.', '[{"id":"recurso-c4-4-9","name":"Entregable: Un Pipeline Comercial Básico y un Tablero de Métricas de Conversión.\n\nEl pipeline puede incluir etapas como:\n\n*   Nuevo contacto.\n*   Respondido.\n*   En diagnóstico.\n*   Prospecto calificado.\n*   Solución presentada.\n*   Objeción.\n*   Seguimiento.\n*   Cerrado ganado.\n*   Cerrado perdido.\n*   Postventa.\n\nEl tablero de métricas puede incluir:\n\n*   contactos recibidos;\n*   contactos respondidos;\n*   diagnósticos realizados;\n*   prospectos calificados;\n*   propuestas presentadas;\n*   seguimientos;\n*   ventas;\n*   tasa de conversión;\n*   ticket promedio;\n*   recompra;\n*   recomendaciones.","url":"","type":"template"}]'::jsonb, 9);

-- Módulo: MÓDULO 5: IMPLEMENTACIÓN Y CIERRE
INSERT INTO public.modules (id, course_id, title, order_index) VALUES
('234c202b-8863-419f-a7b0-7499209ced15', 'c0000000-0000-0000-0000-000000000002', 'MÓDULO 5: IMPLEMENTACIÓN Y CIERRE', 6);

INSERT INTO public.lessons (id, module_id, title, duration, is_free, video_url, description, resources, order_index) VALUES
('0e57e46a-d7d9-486a-a691-d88ce25ce0c8', '234c202b-8863-419f-a7b0-7499209ced15', 'Clase 1 - Proyecto Integrador — Mi Sistema 4C', '20:00', false, NULL, '# Proyecto Integrador — Mi Sistema 4C

El proyecto final reúne los activos más importantes construidos durante el curso. No busca perfección ni documentos extensos; busca demostrar que las cuatro C están conectadas y listas para ser utilizadas en el negocio.', '[]'::jsonb, 1),
('b929934a-af97-4e4e-a38a-90691081af8f', '234c202b-8863-419f-a7b0-7499209ced15', 'Clase 2 - Plan de Implementación de 30 días', '20:00', false, NULL, 'Clase práctica del Método 4C.', '[]'::jsonb, 2),
('fe4790af-820b-4a99-a995-339e5c59f63c', '234c202b-8863-419f-a7b0-7499209ced15', 'Clase 3 - Evaluación Final 4C (Auditoría de madurez del sistema)', '20:00', false, NULL, 'Clase práctica del Método 4C.', '[]'::jsonb, 3),
('4e6e93e9-ddf6-41cf-a5bd-145a13b5811b', '234c202b-8863-419f-a7b0-7499209ced15', 'Clase 4 - Conclusiones y Cierre (El ciclo de mejora continua)', '20:00', false, NULL, 'Clase práctica del Método 4C.', '[]'::jsonb, 4);

COMMIT;
