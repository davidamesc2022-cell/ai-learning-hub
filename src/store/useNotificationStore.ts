import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Notification } from '@/lib/types';

interface NotificationStore {
    notifications: Notification[];
    unreadCount: number;
    addNotification: (notification: Omit<Notification, 'id' | 'time' | 'read'>) => void;
    markAsRead: (id: string) => void;
    markAllAsRead: () => void;
    clearAll: () => void;
}

// Datos iniciales para que la bandeja no esté vacía
const initialNotifications: Notification[] = [
    { id: "n1", message: "Nueva lección disponible en 'IA para Marketing'", time: "Hace 2h", read: false, type: "lesson" },
    { id: "n2", message: "¡Has desbloqueado el badge 'Curso Completado'!", time: "Hace 5h", read: false, type: "badge" },
    { id: "n3", message: "Carlos Ramírez respondió tu pregunta en el foro", time: "Hace 1d", read: true, type: "forum" },
    { id: "n4", message: "Bienvenido a David Ames Academy. Completa tu perfil para ganar puntos.", time: "Hace 2d", read: true, type: "system" },
];

export const useNotificationStore = create<NotificationStore>()(
    persist(
        (set) => ({
            notifications: initialNotifications,
            unreadCount: initialNotifications.filter((n) => !n.read).length,

            addNotification: (notification) =>
                set((state) => {
                    const newNotif: Notification = {
                        ...notification,
                        id: `notif_${Date.now()}`,
                        time: "Justo ahora",
                        read: false,
                    };
                    const newNotifications = [newNotif, ...state.notifications];
                    return {
                        notifications: newNotifications,
                        unreadCount: state.unreadCount + 1,
                    };
                }),

            markAsRead: (id) =>
                set((state) => {
                    const updated = state.notifications.map((n) =>
                        n.id === id ? { ...n, read: true } : n
                    );
                    return {
                        notifications: updated,
                        unreadCount: updated.filter((n) => !n.read).length,
                    };
                }),

            markAllAsRead: () =>
                set((state) => ({
                    notifications: state.notifications.map((n) => ({ ...n, read: true })),
                    unreadCount: 0,
                })),

            clearAll: () => set({ notifications: [], unreadCount: 0 }),
        }),
        {
            name: 'notifications-storage',
        }
    )
);
