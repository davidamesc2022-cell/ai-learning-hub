import { createClient } from '@supabase/supabase-js';

const ORIGINAL_SUPABASE_URL = "https://qcddpjagzftwcsowpixm.supabase.co";
const ORIGINAL_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFjZGRwamFnemZ0d2Nzb3dwaXhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NjI5NDEsImV4cCI6MjA4OTQzODk0MX0.FvYekd4CLMFA5XP_XD2BPHhCJt5Tyrzpq05UNf2ofio";

let supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ORIGINAL_SUPABASE_URL;
let supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ORIGINAL_SUPABASE_KEY;

// Garantizar que siempre use la base de datos real de "Plataforma de las clases"
if (!supabaseUrl || supabaseUrl.includes("iufnuzodpsazoepurild")) {
    supabaseUrl = ORIGINAL_SUPABASE_URL;
}
if (!supabaseAnonKey || supabaseAnonKey.startsWith("sb_publishable_")) {
    supabaseAnonKey = ORIGINAL_SUPABASE_KEY;
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
