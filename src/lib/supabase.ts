import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
        // Mock de Web Locks para prevenir de forma definitiva los cuelgues infinitos al iniciar sesión o registrarse
        lock: async (name, acquireTimeout, fn) => {
            return await fn();
        }
    }
});

// Cliente secundario SIN persistencia de sesión para tablas públicas (Evita los deadlocks de Web Locks en desarrollo local y multi-tab)
export const publicSupabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false
    }
});
