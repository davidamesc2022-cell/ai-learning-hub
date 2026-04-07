import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import { useAuth } from "@/hooks/useAuth";
import OnboardingModal from "@/components/OnboardingModal";

// ── Schemas de validación ─────────────────────────────────────
const loginSchema = z.object({
  email: z.string().email("Ingresa un email válido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
  remember: z.boolean().optional(),
});

const registerSchema = z
  .object({
    name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
    email: z.string().email("Ingresa un email válido"),
    password: z
      .string()
      .min(8, "Mínimo 8 caracteres")
      .regex(/[A-Z]/, "Debe contener al menos una mayúscula")
      .regex(/[0-9]/, "Debe contener al menos un número"),
    confirmPassword: z.string(),
    terms: z.boolean().refine((v) => v === true, "Debes aceptar los términos"),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

type LoginForm = z.infer<typeof loginSchema>;
type RegisterForm = z.infer<typeof registerSchema>;

// ── Componente Google SVG ─────────────────────────────────────
function GoogleIcon() {
  return (
    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

// ── Formulario de Login ───────────────────────────────────────
function LoginFormComponent() {
  const [showPass, setShowPass] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { login, isLoading, error } = useAuth();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginForm) => {
    const ok = await login({ email: data.email, password: data.password });
    if (ok) {
      setSuccess(true);
      setTimeout(() => navigate("/dashboard"), 800);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Error global */}
      {error && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {error}
        </div>
      )}
      {success && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-success/10 text-success text-sm">
          <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
          ¡Inicio de sesión exitoso! Redirigiendo...
        </div>
      )}

      {/* Email */}
      <div>
        <label className="text-sm font-medium mb-1 block">Email</label>
        <Input
          id="login-email"
          type="email"
          placeholder="tu@email.com"
          className={errors.email ? "border-destructive" : ""}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label className="text-sm font-medium mb-1 block">Contraseña</label>
        <div className="relative">
          <Input
            id="login-password"
            type={showPass ? "text" : "password"}
            placeholder="••••••••"
            className={errors.password ? "border-destructive pr-10" : "pr-10"}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {errors.password && (
          <p className="text-xs text-destructive mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm cursor-pointer">
          <Controller
            name="remember"
            control={control}
            render={({ field }) => (
              <Checkbox 
                id="remember" 
                checked={field.value} 
                onCheckedChange={field.onChange} 
              />
            )}
          />
          Recordarme
        </label>
        <a href="#" className="text-sm text-primary hover:underline">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <Button
        id="login-submit"
        type="submit"
        className="w-full gradient-hero text-primary-foreground border-0"
        size="lg"
        disabled={isLoading || success}
      >
        {isLoading ? (
          <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Iniciando sesión...</>
        ) : (
          "Iniciar Sesión"
        )}
      </Button>

      {/* Divider */}
      <div className="relative my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs text-muted-foreground">
          <span className="bg-card px-2">O continúa con</span>
        </div>
      </div>

      <Button type="button" variant="outline" className="w-full" size="lg">
        <GoogleIcon /> Google
      </Button>
    </form>
  );
}

// ── Formulario de Registro ────────────────────────────────────
function RegisterFormComponent() {
  const [showPass, setShowPass] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [registeredName, setRegisteredName] = useState("");
  const navigate = useNavigate();
  const { register: registerUser, isLoading, error } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<RegisterForm>({ resolver: zodResolver(registerSchema) });

  const password = watch("password", "");

  const strengthChecks = [
    { label: "8+ caracteres", ok: password.length >= 8 },
    { label: "Una mayúscula", ok: /[A-Z]/.test(password) },
    { label: "Un número", ok: /[0-9]/.test(password) },
  ];
  
  const strengthScore = strengthChecks.filter(c => c.ok).length;
  const strengthColor = ['bg-destructive', 'bg-warning', 'bg-success'][strengthScore - 1] || 'bg-muted';

  const onSubmit = async (data: RegisterForm) => {
    const ok = await registerUser({
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    });
    if (ok) {
      setSuccess(true);
      setRegisteredName(data.name);
      // Mostrar onboarding en lugar de redirigir directamente
      setTimeout(() => setShowOnboarding(true), 600);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {error && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 text-destructive text-sm">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {error}
        </div>
      )}
      {success && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-success/10 text-success text-sm">
          <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
          ¡Cuenta creada! Redirigiendo...
        </div>
      )}

      {/* Nombre */}
      <div>
        <label className="text-sm font-medium mb-1 block">Nombre completo</label>
        <Input
          id="reg-name"
          placeholder="Tu nombre"
          className={errors.name ? "border-destructive" : ""}
          {...register("name")}
        />
        {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium mb-1 block">Email</label>
        <Input
          id="reg-email"
          type="email"
          placeholder="tu@email.com"
          className={errors.email ? "border-destructive" : ""}
          {...register("email")}
        />
        {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
      </div>

      {/* Contraseña */}
      <div>
        <label className="text-sm font-medium mb-1 block">Contraseña</label>
        <div className="relative">
          <Input
            id="reg-password"
            type={showPass ? "text" : "password"}
            placeholder="••••••••"
            className={errors.password ? "border-destructive pr-10" : "pr-10"}
            {...register("password")}
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {/* Indicador de fortaleza */}
        {password.length > 0 && (
          <div className="mt-2">
            <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${strengthColor}`}
                style={{ width: `${(strengthScore / 3) * 100}%` }}
              />
            </div>
            <div className="flex gap-3 mt-1.5">
              {strengthChecks.map((c) => (
                <span key={c.label} className={`text-[10px] flex items-center gap-1 ${c.ok ? "text-success" : "text-muted-foreground"}`}>
                  {c.ok ? "✓" : "○"} {c.label}
                </span>
              ))}
            </div>
          </div>
        )}
        {errors.password && <p className="text-xs text-destructive mt-1">{errors.password.message}</p>}
      </div>

      {/* Confirmar */}
      <div>
        <label className="text-sm font-medium mb-1 block">Confirmar contraseña</label>
        <Input
          id="reg-confirm"
          type="password"
          placeholder="••••••••"
          className={errors.confirmPassword ? "border-destructive" : ""}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && <p className="text-xs text-destructive mt-1">{errors.confirmPassword.message}</p>}
      </div>

      {/* Términos */}
      <div>
        <label className="flex items-start gap-2 text-sm cursor-pointer">
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <Checkbox 
                id="terms" 
                className="mt-0.5" 
                checked={field.value} 
                onCheckedChange={field.onChange} 
              />
            )}
          />
          <span>
            Acepto los{" "}
            <a href="#" className="text-primary hover:underline">términos y condiciones</a>{" "}
            y la{" "}
            <a href="#" className="text-primary hover:underline">política de privacidad</a>
          </span>
        </label>
        {errors.terms && <p className="text-xs text-destructive mt-1">{errors.terms.message}</p>}
      </div>

      <Button
        id="register-submit"
        type="submit"
        className="w-full gradient-hero text-primary-foreground border-0"
        size="lg"
        disabled={isLoading || success}
      >
        {isLoading ? (
          <><Loader2 className="h-4 w-4 mr-2 animate-spin" /> Creando cuenta...</>
        ) : (
          "Crear Cuenta Gratis"
        )}
      </Button>

      <div className="relative my-2">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs text-muted-foreground">
          <span className="bg-card px-2">O regístrate con</span>
        </div>
      </div>

      <Button type="button" variant="outline" className="w-full" size="lg">
        <GoogleIcon /> Google
      </Button>

      {/* Onboarding Modal */}
      <OnboardingModal
        open={showOnboarding}
        userName={registeredName}
        onComplete={() => setShowOnboarding(false)}
      />
    </form>
  );
}

// ── Página principal ──────────────────────────────────────────
export default function Auth() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link to="/">
              <div className="h-14 w-14 rounded-2xl gradient-hero flex items-center justify-center text-primary-foreground text-xl font-black mx-auto mb-4 shadow-lg">
                DA
              </div>
            </Link>
            <h1 className="text-2xl font-bold">David Ames Academy</h1>
            <p className="text-sm text-muted-foreground mt-1">
              La plataforma líder de IA y Marketing Digital
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-4 mb-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">🔒 Seguro SSL</span>
            <span className="flex items-center gap-1">✅ +2,000 estudiantes</span>
            <span className="flex items-center gap-1">🎓 Gratis para empezar</span>
          </div>

          <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
            <Tabs defaultValue="login">
              <TabsList className="w-full bg-muted/50 mb-6">
                <TabsTrigger value="login" className="flex-1">Iniciar Sesión</TabsTrigger>
                <TabsTrigger value="register" className="flex-1">Registrarse</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <LoginFormComponent />
              </TabsContent>
              <TabsContent value="register">
                <RegisterFormComponent />
              </TabsContent>
            </Tabs>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-4">
            Al continuar, aceptas nuestros{" "}
            <a href="#" className="text-primary hover:underline">Términos de Servicio</a>
          </p>
        </div>
      </div>
    </div>
  );
}
