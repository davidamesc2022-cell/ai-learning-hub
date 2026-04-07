import { useState, useCallback, useEffect } from "react";
import type { User, AuthState, LoginCredentials, RegisterCredentials } from "@/lib/types";
import { supabase } from "@/lib/supabase";

// ─────────────────────────────────────────────────────────────
// useAuth — Hook centralizado de autenticación conectado a Supabase
// ─────────────────────────────────────────────────────────────
export function useAuth() {
    const [state, setState] = useState<AuthState>({
        user: null,
        isAuthenticated: false,
        isLoading: true, // Empieza cargando mientras vemos si hay sesión
        error: null,
    });

    useEffect(() => {
        // Consultar el perfil a DB sabiendo la UUID del User Auth
        const fetchProfile = async (authUserId: string) => {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', authUserId)
                .single();

            if (error || !data) {
                console.error("Error fetching profile:", error);
                return null;
            }

            // Cargar inscripciones reales (enrolled_courses)
            const { data: enrollmentsData } = await supabase
                .from('enrolled_courses')
                .select('*')
                .eq('user_id', authUserId);

            const enrolledCourses = enrollmentsData ? enrollmentsData.map((e: any) => ({
                courseId: e.course_id,
                progress: e.progress || 0,
                completed: e.completed || false,
                lastLesson: e.last_lesson_id || undefined
            })) : [];

            // Transformamos el registro Profile a la estructura Type User
            const userProfile: User = {
                id: data.id,
                name: data.name || "Sin nombre",
                email: "", // El email viene de supabase.auth, no del profile
                avatar: data.avatar || "",
                plan: data.plan || "free",
                points: data.points || 0,
                streak: data.streak || 0,
                position: data.position || 0,
                bio: data.bio || undefined,
                coursesInProgress: enrolledCourses.filter((e: any) => !e.completed).length,
                coursesCompleted: enrolledCourses.filter((e: any) => e.completed).length,
                totalHours: 0,
                badges: [],           
                enrolledCourses: enrolledCourses
            };
            return userProfile;
        };

        // Escuchar cambios de sesión
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (session?.user) {
                const profile = await fetchProfile(session.user.id);
                if (profile) {
                    profile.email = session.user.email || "";
                    setState({
                        user: profile,
                        isAuthenticated: true,
                        isLoading: false,
                        error: null
                    });
                } else {
                    setState({ user: null, isAuthenticated: false, isLoading: false, error: null });
                }
            } else {
                setState({ user: null, isAuthenticated: false, isLoading: false, error: null });
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    // ── Login ──────────────────────────────────────────────────
    const login = useCallback(async (credentials: LoginCredentials): Promise<boolean> => {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email: credentials.email,
                password: credentials.password
            });

            if (error) throw error;
            // No hacemos setState aquí porque el onAuthStateChange ya lo actualizará
            return true;
        } catch (error: any) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message || "Email o contraseña incorrectos.",
            }));
            return false;
        }
    }, []);

    // ── Registro ───────────────────────────────────────────────
    const register = useCallback(async (data: RegisterCredentials): Promise<boolean> => {
        setState((prev) => ({ ...prev, isLoading: true, error: null }));
        try {
            const { error } = await supabase.auth.signUp({
                email: data.email,
                password: data.password,
                options: {
                    data: {
                        name: data.name
                    }
                }
            });

            if (error) throw error;
            return true;
        } catch (error: any) {
            setState((prev) => ({
                ...prev,
                isLoading: false,
                error: error.message || "Error al crear la cuenta. Intenta de nuevo.",
            }));
            return false;
        }
    }, []);

    // ── Logout ─────────────────────────────────────────────────
    const logout = useCallback(async () => {
        await supabase.auth.signOut();
        // onAuthStateChange se encargará
    }, []);

    // ── Utilidades ─────────────────────────────────────────────
    const clearError = useCallback(() => {
        setState((prev) => ({ ...prev, error: null }));
    }, []);

    const isEnrolledIn = useCallback(
        (courseId: string): boolean => {
            return (
                state.user?.enrolledCourses.some((e) => e.courseId === courseId) ?? false
            );
        },
        [state.user]
    );

    const getCourseProgress = useCallback(
        (courseId: string): number => {
            const enrollment = state.user?.enrolledCourses.find(
                (e) => e.courseId === courseId
            );
            return enrollment?.progress ?? 0;
        },
        [state.user]
    );

    const enrollInCourse = useCallback(async (courseId: string) => {
        if (!state.user) return false;
        try {
            const { error } = await supabase
                .from('enrolled_courses')
                .insert({
                    user_id: state.user.id,
                    course_id: courseId
                });
            if (error && error.code !== '23505') {
                console.error("Enrollment error:", error);
                return false;
            }
            
            // Actialización Optimista UI
            setState(prev => {
                if (!prev.user) return prev;
                if (prev.user.enrolledCourses.some(e => e.courseId === courseId)) return prev;
                
                return {
                    ...prev,
                    user: {
                        ...prev.user,
                        enrolledCourses: [
                            ...prev.user.enrolledCourses,
                            { courseId, progress: 0, completed: false, lastLesson: undefined }
                        ],
                        coursesInProgress: prev.user.coursesInProgress + 1
                    }
                };
            });
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }, [state.user]);

    const getCompletedLessons = useCallback(async (lessonIds: string[]): Promise<string[]> => {
        if (!state.user || lessonIds.length === 0) return [];
        try {
            const { data, error } = await supabase
                .from('user_progress')
                .select('lesson_id')
                .eq('user_id', state.user.id)
                .eq('completed', true)
                .in('lesson_id', lessonIds);
            
            if (error) throw error;
            return data.map((d: any) => d.lesson_id);
        } catch (e) {
            console.error("Error fetching completed lessons:", e);
            return [];
        }
    }, [state.user]);

    const completeLesson = useCallback(async (courseId: string, lessonId: string, completedLessonIds: string[], totalCourseLessons: number) => {
        if (!state.user) return false;
        try {
           if (!completedLessonIds.includes(lessonId)) {
               const { error: progressError } = await supabase
                   .from('user_progress')
                   .insert({
                       user_id: state.user.id,
                       lesson_id: lessonId,
                       completed: true
                   });
               if (progressError) throw progressError;
           }

            const newCompletedCount = completedLessonIds.includes(lessonId) ? completedLessonIds.length : completedLessonIds.length + 1;
            const newProgress = totalCourseLessons > 0 ? Math.round((newCompletedCount / totalCourseLessons) * 100) : 0;
            const isCompleted = newProgress >= 100;

            const { error: enrolledError } = await supabase
                .from('enrolled_courses')
                .update({
                    progress: newProgress,
                    last_lesson_id: lessonId,
                    completed: isCompleted
                })
                .eq('user_id', state.user.id)
                .eq('course_id', courseId);

            if (enrolledError) throw enrolledError;

            setState(prev => {
                if (!prev.user) return prev;
                const updatedCourses = prev.user.enrolledCourses.map(e => {
                    if (e.courseId === courseId) {
                        return { ...e, progress: newProgress, lastLesson: lessonId, completed: isCompleted };
                    }
                    return e;
                });
                return {
                    ...prev,
                    user: {
                        ...prev.user,
                        enrolledCourses: updatedCourses,
                        coursesCompleted: updatedCourses.filter(e => e.completed).length,
                        coursesInProgress: updatedCourses.filter(e => !e.completed).length
                    }
                };
            });
            
            return true;
        } catch (e) {
            console.error("Error completing lesson:", e);
            return false;
        }
    }, [state.user]);

    const updateProfile = useCallback(async (fields: { name?: string; bio?: string }): Promise<boolean> => {
        if (!state.user) return false;
        try {
            const { error } = await supabase
                .from('profiles')
                .update({ name: fields.name, bio: fields.bio })
                .eq('id', state.user.id);
            if (error) throw error;

            setState(prev => {
                if (!prev.user) return prev;
                return {
                    ...prev,
                    user: { ...prev.user, ...fields }
                };
            });
            return true;
        } catch (e) {
            console.error("Error updating profile:", e);
            return false;
        }
    }, [state.user]);

    const fetchBadges = useCallback(async () => {
        if (!state.user) return [];
        try {
            // Traer TODAS las insignias disponibles
            const { data: allBadges, error: badgesErr } = await supabase
                .from('badges')
                .select('*');
            if (badgesErr) throw badgesErr;

            // Traer las que el usuario desbloqueó
            const { data: userBadges, error: userBadgesErr } = await supabase
                .from('user_badges')
                .select('badge_id, unlocked_at')
                .eq('user_id', state.user.id);
            if (userBadgesErr) throw userBadgesErr;

            const unlockedMap = new Map(
                (userBadges || []).map((ub: any) => [ub.badge_id, ub.unlocked_at])
            );

            return (allBadges || []).map((b: any) => ({
                id: b.id,
                name: b.name,
                icon: b.icon,
                description: b.description,
                pointsRequired: b.points_required,
                unlocked: unlockedMap.has(b.id),
                unlockedAt: unlockedMap.get(b.id) ?? undefined,
            }));
        } catch (e) {
            console.error("Error fetching badges:", e);
            return [];
        }
    }, [state.user]);

    return {
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        isLoading: state.isLoading,
        error: state.error,
        login,
        register,
        logout,
        clearError,
        isEnrolledIn,
        getCourseProgress,
        enrollInCourse,
        getCompletedLessons,
        completeLesson,
        updateProfile,
        fetchBadges,
    };
}
