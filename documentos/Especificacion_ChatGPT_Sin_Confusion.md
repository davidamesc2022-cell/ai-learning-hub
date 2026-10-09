CHATGPT SIN CONFUSIÓN
Especificación funcional para implementación en la Academia
Handoff técnico para Antigravity · Versión 1
Objetivo: programar la experiencia del curso respetando la arquitectura pedagógica ya aprobada, sin convertirla en una simple sucesión de videos.
1. Propósito del documento
Este documento define cómo debe implementarse en la Academia el curso “ChatGPT sin confusión: del Chat a los Sistemas”. La fuente conceptual del curso es el Documento Maestro del Ecosistema ChatGPT y la arquitectura pedagógica vigente de la Etapa 1.
La implementación debe preservar una idea central: el alumno no consume solo videos. El profesor enseña utilizando el aula interactiva, el alumno recibe esa misma aula para volver a recorrerla y practicar, y se complementa con recursos descargables y tareas externas cuando aporten valor.
2. Principios no negociables
La Etapa 1 conserva 11 módulos. No crear módulos adicionales ni renumerarlos sin aprobación.
El aula interactiva es el soporte didáctico principal de cada módulo, no un extra decorativo.
El video principal se graba guiando al alumno sobre el aula interactiva: concepto, ejemplos, comparaciones, interacción y límites de la herramienta.
El alumno debe poder volver a abrir el aula interactiva por su cuenta y, cuando corresponda, descargarla.
Los descargables complementan: prompts, plantillas, checklists, matrices, ejemplos o guías. No deben duplicar innecesariamente el contenido del aula.
Las tareas externas se agregan solo cuando permiten aplicar lo aprendido en la cuenta real del alumno.
No forzar la misma cantidad de recursos o actividades en todos los módulos. La estructura responde a la necesidad pedagógica.
La presentación existente puede servir como material del instructor o referencia, pero no debe programarse como pieza obligatoria para el alumno salvo decisión posterior.
3. Arquitectura general del curso en la Academia
3.1 Introducción al curso (no cuenta como módulo)
Antes de M1 debe existir una entrada breve al curso.
Video de bienvenida y recorrido general: aproximadamente 3 a 5 minutos.
Explicación de qué aprenderá el alumno y cómo recorrer el curso.
Mapa visual de M1 a M11.
Indicación de cómo usar las aulas interactivas y los descargables.
Botón principal: “Comenzar curso” o equivalente.
3.2 Patrón funcional de cada módulo
Componente
Función
Obligatorio
Comportamiento esperado
1. Video guiado
El profesor explica utilizando el aula interactiva en pantalla.
Sí
Reproductor de video con progreso y estado completado.
2. Aula interactiva
El alumno vuelve a recorrer, explorar y practicar el mismo contenido.
Sí
Abrir dentro de la plataforma cuando técnicamente sea viable y ofrecer acceso reutilizable/descargable.
3. Recursos
Prompts, plantillas, ejemplos, checklist, matrices o guías.
Según módulo
Lista de archivos con nombre, descripción y botón de descarga.
4. Actividad / tarea
Aplicar el aprendizaje en una situación real o en la cuenta del alumno.
Según módulo
Consigna breve; no requiere sistema complejo de evaluación en V1.
Secuencia recomendada dentro de cada módulo: Video guiado → Aula interactiva → Recursos → Tarea (si aporta).
4. Estructura oficial de la Etapa 1
Los siguientes identificadores y temas son la arquitectura vigente. Los títulos comerciales pueden editarse desde administración; no deben quedar hard-codeados en la aplicación.
Módulo
Tema oficial
Transformación principal
M1
Comunicación con IA
Instrucción simple → contexto → estructura de prompt → conversación → multimodal.
M2
Interfaz de ChatGPT
Orientación práctica dentro de la plataforma.
M3
Chat
Pensar, conversar, analizar, crear, corregir y decidir.
M4
Projects
Contexto, continuidad, chats, archivos e instrucciones.
M5
Work
Delegar trabajos amplios y producir entregables.
M6
Conectores
Conectar, autorizar y usar fuentes externas reales.
M7
Sites
Convertir necesidades/resultados en experiencias web ligeras.
M8
Skills
Estandarizar una forma de trabajar reutilizable.
M9
Codex
Trabajar con software, código, archivos y verificación técnica.
M10
Automatización
Definir cuándo o bajo qué condición ocurre un proceso validado.
M11
De asistente a agente · GPT-6 Astra
Cerrar con delegación de objetivos, coordinación de herramientas y supervisión.
4.1 Regla para títulos visibles
La interfaz debe permitir mostrar un título pedagógico/comercial y conservar el nombre oficial de la herramienta. Ejemplo de patrón: “Organiza tu trabajo con Projects”. El contenido debe administrarse desde datos/CMS y poder editarse sin tocar código.
5. Experiencia del alumno dentro de un módulo
El alumno entra al módulo y ve título, breve promesa de aprendizaje y estado de progreso.
Reproduce el video donde David guía la explicación utilizando el aula interactiva.
Accede a la sección “Explora y practica” para abrir el aula interactiva de ese módulo.
Descarga los recursos complementarios disponibles.
Si el módulo incluye aplicación externa, recibe una consigna clara en “Ahora hazlo tú”.
Marca o completa el módulo y avanza al siguiente.
6. Requisitos funcionales para Antigravity
Función
Requisito
Gestión de contenido
Cada módulo debe ser administrable: título, subtítulo, descripción, video, aula HTML, recursos y tarea.
Video
Admitir URL/archivo de video según la infraestructura actual. Mostrar reproducción, duración si está disponible y estado de progreso.
Aula HTML
Permitir asociar un HTML por módulo. Preferencia: visualizarlo dentro de una vista dedicada o embebida sin romper sus interacciones. Si la seguridad/plataforma no permite embebido, abrirlo en una vista propia.
Descarga del aula
Cuando el archivo esté autorizado como descargable, mostrar botón claro “Descargar aula interactiva”.
Recursos
Soportar múltiples archivos por módulo, con nombre, tipo, breve descripción y descarga individual.
Tarea
Campo opcional de texto enriquecido para consignas. En V1 no se requiere calificación automática ni subida obligatoria de evidencia.
Progreso
Registrar módulos/lecciones completados. El alumno debe poder retomar desde donde quedó.
Navegación
Anterior/Siguiente dentro del curso y acceso permanente al currículo completo. Evitar encerrar al alumno en una sola pantalla.
Responsive
Video, textos, botones y aula deben funcionar en escritorio, tablet y móvil. Si el aula requiere más ancho, mostrar aviso o modo pantalla completa.
Accesibilidad práctica
Contraste suficiente, botones legibles, estados visibles, textos alternativos cuando corresponda y navegación por teclado donde sea razonable.
Administración
No hard-codear rutas ni nombres. Todo recurso debe poder sustituirse por una versión nueva desde administración/configuración.
7. Modelo de datos mínimo sugerido
Antigravity puede implementar la estructura con entidades equivalentes a las siguientes:
Curso: id, slug, título, descripción, portada, instructor, nivel, duración estimada, estado.
Módulo: id, course_id, orden, código M1–M11, título visible, tema oficial, descripción, estado.
Video: module_id, título, URL/archivo, duración, orden.
Aula interactiva: module_id, título, archivo/URL HTML, permitir_descarga, versión.
Recurso: module_id, nombre, descripción, tipo, archivo/URL, orden.
Tarea: module_id, título, consigna, opcional.
Progreso: user_id, module_id, video_completado, aula_abierta, modulo_completado, fecha_actualización.
8. Recomendaciones de interfaz
Mantener coherencia con la academia actual: navegación superior, ficha clara del curso, currículo visible y jerarquía visual sobria.
Dentro del módulo, priorizar el contenido: video arriba, aula interactiva como segundo protagonista y recursos debajo.
Usar etiquetas simples: “Video”, “Aula interactiva”, “Recursos”, “Ahora hazlo tú”.
Evitar llenar la pantalla con tarjetas si no aportan jerarquía.
Añadir opción de pantalla completa para el aula interactiva.
Mostrar versión del aula o fecha solo en administración, salvo que pedagógicamente convenga mostrarla al alumno.
9. Estados y comportamiento
Estado
Comportamiento
No iniciado
El módulo está disponible pero no tiene progreso.
En progreso
El alumno reprodujo el video o abrió el aula.
Completado
El alumno marcó/completó el módulo según la lógica definida.
Bloqueado
Solo si la academia ya utiliza liberación secuencial. No introducir bloqueo nuevo por defecto.
10. Fuera de alcance de esta V1
No implementar sin aprobación específica:
Gamificación compleja, puntos, insignias o rankings.
Exámenes obligatorios por cada módulo.
Calificación automática de tareas.
Foros o comentarios nuevos si la plataforma todavía no los tiene.
Certificación condicionada a reglas nuevas.
Rediseño de las aulas HTML ya aprobadas.
Creación de módulos adicionales a M1–M11.
Conversión de la presentación del instructor en una lección obligatoria separada.
11. Criterios de aceptación
☐ El curso muestra una introducción y los 11 módulos en el orden correcto.
☐ Cada módulo puede tener video, aula HTML, recursos y tarea opcional.
☐ Las aulas HTML mantienen sus clics, interacciones y navegación interna.
☐ El alumno puede abrir y, cuando se habilite, descargar el aula correspondiente.
☐ Los recursos se descargan correctamente y pueden sustituirse desde administración.
☐ El progreso se conserva entre sesiones.
☐ La navegación funciona en escritorio y móvil sin pérdida de contenido.
☐ Los títulos, textos y archivos pueden actualizarse sin modificar el código de la aplicación.
☐ No se incorporan funcionalidades pedagógicas no aprobadas.
12. Flujo visual de implementación
BIENVENIDA  →  M1  →  M2  →  M3  →  M4  →  M5  →  M6  →  M7  →  M8  →  M9  →  M10  →  M11  →  CIERRE
Dentro de cada módulo: VIDEO GUIADO → AULA INTERACTIVA → RECURSOS → APLICACIÓN (SI APORTA)
13. Orden recomendado de programación
1. Construir el componente genérico de módulo con campos configurables.
2. Probar el componente con un solo módulo real (preferentemente M1 o M4).
3. Validar video + aula HTML + descargas + progreso + responsive.
4. Corregir el patrón antes de replicarlo.
5. Cargar M1–M11 reutilizando el mismo componente configurable.
6. Realizar QA integral del curso antes de publicar.
14. Cierre para el equipo de desarrollo
La prioridad no es agregar más funciones, sino implementar con estabilidad la experiencia ya diseñada. La fortaleza diferencial del curso es que David enseña sobre una aula interactiva construida específicamente para cada tema y el alumno conserva esa experiencia para practicar. La programación debe hacer esa secuencia simple, clara, reutilizable y fácil de mantener.
