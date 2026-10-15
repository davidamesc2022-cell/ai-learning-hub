// ============================================================
// David Ames Academy — Servicio de Correo y Notificaciones
// ============================================================

import { useNotificationStore } from "@/store/useNotificationStore";

export interface WelcomeEmailData {
  userName: string;
  userEmail: string;
  courseTitle?: string;
  courseId?: string;
}

/**
 * Dispara una notificación de bienvenida inmediata en la campanita de la plataforma.
 */
export function triggerInAppWelcomeNotification(userName: string) {
  const { addNotification } = useNotificationStore.getState();
  addNotification({
    type: "system",
    message: `🎉 ¡Bienvenido a David Ames Academy, ${userName}! Revisa tu correo electrónico para confirmar tu cuenta y acceder a tus cursos.`,
  });
}

/**
 * Dispara una notificación de curso matriculado en la campanita de la plataforma.
 */
export function triggerCourseEnrollmentNotification(userName: string, courseTitle: string) {
  const { addNotification } = useNotificationStore.getState();
  addNotification({
    type: "lesson",
    message: `🎓 ¡Felicitaciones ${userName}! Ya tienes acceso oficial a "${courseTitle}". Haz clic en Mis Cursos para comenzar.`,
  });
}

/**
 * Genera el texto estándar de bienvenida para WhatsApp listo para enviar a nuevos inscritos.
 */
export function generateWhatsAppWelcomeText(data: WelcomeEmailData): string {
  const name = data.userName.split(" ")[0];
  const domain = typeof window !== "undefined" ? window.location.origin : "https://davidamesc.com";
  const courseLink = data.courseId ? `${domain}/courses/${data.courseId}` : `${domain}/dashboard`;

  return `¡Hola ${name}! 👋 Te saluda David Ames.\n\n` +
    `¡Bienvenido(a) oficialmente a David Ames Academy! 🎉\n` +
    (data.courseTitle ? `Tu acceso al curso *"${data.courseTitle}"* ya está 100% activo.\n\n` : `Tu cuenta ya está lista.\n\n`) +
    `👉 *Para entrar a tus clases:*\n` +
    `1. Ingresa a: ${courseLink}\n` +
    `2. Inicia sesión con: ${data.userEmail}\n` +
    `3. Tendrás acceso inmediato al aula interactiva, lecciones en video y materiales descargables.\n\n` +
    `Si tienes cualquier duda técnica o pedagógica durante el curso, escríbeme directamente por aquí. ¡A romperla con la IA! 🚀`;
}
