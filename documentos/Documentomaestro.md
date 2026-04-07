# PROMPT MAESTRO - PLATAFORMA DE CURSOS DAVID AMES ACADEMY
## Para Google Antigravity / Cursor AI

---

## CONTEXTO DEL PROYECTO

Este es un proyecto clonado desde Lovable.dev que ya tiene la estructura base configurada. Soy David Ames y necesito continuar desarrollando una plataforma de cursos en línea (LMS) para mi comunidad.

**Pilares de contenido:**
1. Marketing Digital con Inteligencia Artificial
2. Inteligencia Artificial para Profesionales

**Objetivo:** Plataforma LMS completa con modelo freemium escalable a +2000 estudiantes.

---

## STACK TECNOLÓGICO ACTUAL

El proyecto ya está configurado con:

- **Framework:** React 18.3.1 + TypeScript 5.8.3
- **Build Tool:** Vite 5.4.19
- **Routing:** React Router DOM 6.30.1
- **UI Components:** shadcn-ui (basado en Radix UI)
- **Styling:** Tailwind CSS 3.4.17 + tailwindcss-animate
- **Form Handling:** React Hook Form 7.61.1 + Zod 3.25.76
- **State Management:** TanStack Query 5.83.0
- **Icons:** Lucide React 0.462.0
- **Charts:** Recharts 2.15.4
- **Theme:** next-themes 0.3.0
- **Notifications:** Sonner 1.7.4
- **Testing:** Vitest 3.2.4 + Testing Library

**Componentes UI disponibles (Radix UI):**
- Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
- Hover Card, Label, Navigation Menu, Popover, Progress, Radio Group
- Scroll Area, Select, Separator, Slider, Switch, Tabs, Toast, Tooltip
- Toggle, Collapsible, Context Menu, Menubar, Aspect Ratio

---

## INSTRUCCIÓN PRINCIPAL

Continúa el desarrollo de la plataforma siguiendo las especificaciones de diseño y funcionalidad descritas en este documento. El proyecto ya tiene la estructura base de Lovable, así que enfócate en:

1. Crear las páginas y componentes descritos
2. Implementar la navegación y routing
3. Usar los componentes de shadcn-ui ya disponibles
4. Mantener consistencia con Tailwind CSS
5. Seguir las mejores prácticas de React + TypeScript

---

## DISEÑO Y ESTÉTICA

### Paleta de Colores
```css
/* Definir en tailwind.config.ts */
--primary: #2E75B6 (azul profesional)
--secondary: #1A1A1A (negro)
--accent: #00D4FF (azul claro para highlights)
--success: #10B981 (verde)
--warning: #F59E0B (amarillo)
--destructive: #EF4444 (rojo)
--background: #F9FAFB (gris muy claro)
--foreground: #374151 (gris oscuro)
--muted: #6B7280 (gris medio)
```

### Estilo Visual
- Diseño moderno, limpio y profesional
- Cards con `shadow-md` y `rounded-lg`
- Espaciado generoso (usar scale de Tailwind: p-4, p-6, gap-4)
- Tipografía sans-serif (la que viene por defecto en Tailwind)
- Usar componentes de Lucide React para iconos
- Animaciones con `tailwindcss-animate`
- Gradientes para CTAs: `bg-gradient-to-r from-primary to-accent`

### Componentes Clave a Crear

**CourseCard.tsx:**
```tsx
interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: 'marketing_ia' | 'ia_general';
  level: 'beginner' | 'intermediate' | 'advanced';
  price: number;
  isFree: boolean;
  rating: number;
  studentsCount: number;
  instructor: string;
}
```

**ProgressBar.tsx:**
```tsx
interface ProgressBarProps {
  progress: number; // 0-100
  variant?: 'linear' | 'circular';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}
```

**Badge.tsx (Achievement):**
```tsx
interface BadgeProps {
  name: string;
  description: string;
  icon: LucideIcon;
  isUnlocked: boolean;
  earnedAt?: Date;
}
```

**VideoPlayer.tsx:**
```tsx
interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  onComplete: () => void;
  progress: number;
}
```

---

## ESTRUCTURA DE CARPETAS RECOMENDADA

```
src/
├── components/
│   ├── ui/              # shadcn-ui components (ya existen)
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MainLayout.tsx
│   ├── course/
│   │   ├── CourseCard.tsx
│   │   ├── CourseGrid.tsx
│   │   ├── CourseFilters.tsx
│   │   ├── VideoPlayer.tsx
│   │   └── LessonSidebar.tsx
│   ├── dashboard/
│   │   ├── StatsCard.tsx
│   │   ├── ProgressCircle.tsx
│   │   └── RecentActivity.tsx
│   ├── community/
│   │   ├── ThreadCard.tsx
│   │   ├── ThreadList.tsx
│   │   └── CommentSection.tsx
│   └── gamification/
│       ├── BadgeCard.tsx
│       ├── Leaderboard.tsx
│       └── PointsDisplay.tsx
├── pages/
│   ├── Home.tsx
│   ├── Courses.tsx
│   ├── CourseDetail.tsx
│   ├── CoursePlayer.tsx
│   ├── Dashboard.tsx
│   ├── Profile.tsx
│   ├── Leaderboard.tsx
│   ├── Community.tsx
│   ├── Pricing.tsx
│   └── Auth.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useCourses.ts
│   └── useProgress.ts
├── lib/
│   ├── utils.ts          # ya existe
│   └── types.ts
├── data/
│   └── mockData.ts       # datos de prueba
└── App.tsx
```

---

## PÁGINAS Y FUNCIONALIDADES

### 1. HOME PAGE (`/`)

**Componentes necesarios:**
- `Hero.tsx` - Sección principal con headline y CTAs
- `PillarsSection.tsx` - 2 cards de pilares
- `FeaturedCourses.tsx` - Grid de cursos destacados
- `Testimonials.tsx` - Carousel de testimonios
- `PricingPreview.tsx` - Cards de planes

**Layout:**
```tsx
<MainLayout>
  <Hero />
  <PillarsSection />
  <FeaturedCourses />
  <Testimonials />
  <PricingPreview />
</MainLayout>
```

### 2. CATÁLOGO DE CURSOS (`/courses`)

**Componentes:**
- `CourseFilters.tsx` - Sidebar con filtros (usar Checkbox, RadioGroup)
- `CourseGrid.tsx` - Grid responsive de CourseCard
- `SearchBar.tsx` - Input con icono Search

**Estado a manejar:**
```tsx
const [filters, setFilters] = useState({
  category: 'all',
  level: 'all',
  price: 'all',
  duration: 'all'
});
const [searchQuery, setSearchQuery] = useState('');
```

### 3. DETALLE DE CURSO (`/courses/:id`)

**Tabs usando Radix UI Tabs:**
- Tab 1: Descripción (qué aprenderás, requisitos)
- Tab 2: Curriculum (Accordion de módulos/lecciones)
- Tab 3: Reviews (lista de reviews con Avatar)

**Sidebar sticky:**
- Precio destacado
- Lista de features (usar Lucide icons)
- CTA button (Button component de shadcn)
- Estadísticas (estudiantes, última actualización)

### 4. PLAYER DE CURSO (`/learn/:courseId/:lessonId`)

**Layout 2 columnas:**
```tsx
<div className="grid lg:grid-cols-[1fr_350px] gap-6">
  <div>
    <VideoPlayer />
    <Tabs>
      <TabsList>
        <TabsTrigger value="description">Descripción</TabsTrigger>
        <TabsTrigger value="resources">Recursos</TabsTrigger>
        <TabsTrigger value="notes">Notas</TabsTrigger>
        <TabsTrigger value="comments">Comentarios</TabsTrigger>
      </TabsList>
      {/* Tab content */}
    </Tabs>
  </div>
  
  <div>
    <LessonSidebar lessons={lessons} currentLessonId={id} />
    <Progress value={courseProgress} />
    <Button onClick={markAsComplete}>Marcar como Completada</Button>
  </div>
</div>
```

### 5. DASHBOARD (`/dashboard`)

**Grid de estadísticas:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <StatsCard title="Cursos en Progreso" value={3} icon={BookOpen} />
  <StatsCard title="Completados" value={2} icon={CheckCircle} />
  <StatsCard title="Horas Totales" value={24} icon={Clock} />
  <StatsCard title="Puntos" value={450} icon={Trophy} />
</div>
```

**Secciones:**
- Continúa Aprendiendo (cards horizontales con Progress)
- Cursos Completados (grid con badges)
- Logros Recientes (lista con Timeline)

### 6. PERFIL (`/profile`)

**Tabs:**
```tsx
<Tabs defaultValue="info">
  <TabsList>
    <TabsTrigger value="info">Mi Información</TabsTrigger>
    <TabsTrigger value="badges">Mis Badges</TabsTrigger>
    <TabsTrigger value="stats">Estadísticas</TabsTrigger>
    <TabsTrigger value="settings">Configuración</TabsTrigger>
  </TabsList>
  {/* Tab content */}
</Tabs>
```

**Tab Info:**
- Avatar upload (usar Input type="file")
- Form con React Hook Form + Zod validation
- Campos: nombre, email (disabled), bio (Textarea)

### 7. LEADERBOARD (`/leaderboard`)

**Componentes:**
```tsx
// Top 3 podio
<div className="grid grid-cols-3 gap-4 mb-8">
  <PodiumCard rank={2} user={users[1]} />
  <PodiumCard rank={1} user={users[0]} className="scale-110" />
  <PodiumCard rank={3} user={users[2]} />
</div>

// Tabla del resto
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Posición</TableHead>
      <TableHead>Usuario</TableHead>
      <TableHead>Puntos</TableHead>
      <TableHead>Cursos</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/* Map users 4-50 */}
  </TableBody>
</Table>
```

### 8. COMUNIDAD (`/community`)

**Layout:**
```tsx
<Tabs defaultValue="all">
  <TabsList>
    <TabsTrigger value="all">Todo</TabsTrigger>
    <TabsTrigger value="marketing">Marketing IA</TabsTrigger>
    <TabsTrigger value="ia">IA General</TabsTrigger>
    <TabsTrigger value="support">Soporte</TabsTrigger>
  </TabsList>
  
  <div className="flex justify-between mb-4">
    <Input placeholder="Buscar threads..." />
    <Button>Nueva Pregunta</Button>
  </div>
  
  <ThreadList threads={filteredThreads} />
</Tabs>
```

**ThreadCard:**
- Avatar del autor (usar Avatar component)
- Título y preview
- Badges: categoría, "RESUELTO"
- Stats: respuestas, upvotes, última actividad

### 9. PRICING (`/pricing`)

**Toggle mensual/anual:**
```tsx
<div className="flex items-center justify-center gap-4 mb-8">
  <span>Mensual</span>
  <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
  <span>Anual <Badge>Ahorra 20%</Badge></span>
</div>
```

**3 Cards de planes:**
```tsx
<div className="grid md:grid-cols-3 gap-6">
  <PricingCard 
    name="Free"
    price={0}
    features={freeFeatures}
    highlighted={false}
  />
  <PricingCard 
    name="Pro"
    price={isAnnual ? 24 : 29}
    features={proFeatures}
    highlighted={true}
    badge="Recomendado"
  />
  <PricingCard 
    name="Elite"
    price={isAnnual ? 79 : 99}
    features={eliteFeatures}
    highlighted={false}
  />
</div>
```

### 10. AUTH (`/auth`)

**Tabs Login/Registro:**
```tsx
<Card className="w-full max-w-md mx-auto">
  <Tabs defaultValue="login">
    <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
      <TabsTrigger value="register">Registrarse</TabsTrigger>
    </TabsList>
    
    <TabsContent value="login">
      <LoginForm />
    </TabsContent>
    
    <TabsContent value="register">
      <RegisterForm />
    </TabsContent>
  </Tabs>
</Card>
```

**Form validation con Zod:**
```tsx
const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres")
});

type LoginFormData = z.infer<typeof loginSchema>;
```

---

## NAVEGACIÓN Y ROUTING

### Configuración de React Router

**App.tsx:**
```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/learn/:courseId/:lessonId" element={<CoursePlayer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/community" element={<Community />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
```

### Navbar Component

```tsx
import { Link } from 'react-router-dom';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  const isAuthenticated = true; // Simular por ahora
  
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-primary">
            David Ames Academy
          </Link>
          
          {isAuthenticated && (
            <div className="hidden md:flex gap-6">
              <Link to="/courses" className="text-sm font-medium hover:text-primary">
                Cursos
              </Link>
              <Link to="/dashboard" className="text-sm font-medium hover:text-primary">
                Mi Dashboard
              </Link>
              <Link to="/community" className="text-sm font-medium hover:text-primary">
                Comunidad
              </Link>
              <Link to="/leaderboard" className="text-sm font-medium hover:text-primary">
                Leaderboard
              </Link>
            </div>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="/avatar.jpg" />
                    <AvatarFallback>DA</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Mi Perfil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Mis Cursos</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>Configuración</DropdownMenuItem>
                  <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link to="/auth">Iniciar Sesión</Link>
              </Button>
              <Button asChild>
                <Link to="/auth">Registrarse</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
```

---

## DATOS DE PRUEBA (MOCK DATA)

**data/mockData.ts:**

```typescript
export const mockCourses = [
  {
    id: '1',
    title: 'IA para Marketing en 7 Días',
    slug: 'ia-marketing-7-dias',
    description: 'Aprende a usar IA para revolucionar tu estrategia de marketing en solo una semana',
    thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: 'marketing_ia' as const,
    level: 'beginner' as const,
    price: 0,
    isFree: true,
    rating: 4.8,
    studentsCount: 1234,
    instructor: 'David Ames',
    duration: 150, // minutos
    lessonsCount: 7,
    modules: [
      {
        id: 'm1',
        title: 'Introducción a la IA en Marketing',
        lessons: [
          { id: 'l1', title: 'Bienvenida al curso', duration: 10, videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'l2', title: '¿Qué es la IA y cómo funciona?', duration: 15, videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'l3', title: 'Aplicaciones de IA en marketing', duration: 20, videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ]
      },
      {
        id: 'm2',
        title: 'ChatGPT para Content Marketing',
        lessons: [
          { id: 'l4', title: 'Introducción a ChatGPT', duration: 18, videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
          { id: 'l5', title: 'Creando contenido con IA', duration: 25, videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Prompt Engineering Masterclass',
    slug: 'prompt-engineering-masterclass',
    description: 'Domina el arte de escribir prompts efectivos para obtener resultados excepcionales',
    thumbnail: 'https://images.unsplash.com/photo-1676277791608-ac5c30a90f49',
    category: 'ia_general' as const,
    level: 'intermediate' as const,
    price: 49,
    isFree: false,
    rating: 4.9,
    studentsCount: 856,
    instructor: 'David Ames',
    duration: 480,
    lessonsCount: 20,
    modules: []
  },
  {
    id: '3',
    title: 'Email Marketing Automatizado con IA',
    slug: 'email-marketing-automatizado',
    description: 'Automatiza y optimiza tus campañas de email marketing usando herramientas de IA',
    thumbnail: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2',
    category: 'marketing_ia' as const,
    level: 'intermediate' as const,
    price: 39,
    isFree: false,
    rating: 4.7,
    studentsCount: 623,
    instructor: 'David Ames',
    duration: 300,
    lessonsCount: 12,
    modules: []
  },
  {
    id: '4',
    title: 'IA Generativa: Imagen, Audio, Video',
    slug: 'ia-generativa',
    description: 'Explora las herramientas más avanzadas de IA generativa para crear contenido visual y audiovisual',
    thumbnail: 'https://images.unsplash.com/photo-1686191128892-2b4c293e3b8a',
    category: 'ia_general' as const,
    level: 'advanced' as const,
    price: 79,
    isFree: false,
    rating: 4.9,
    studentsCount: 412,
    instructor: 'David Ames',
    duration: 600,
    lessonsCount: 25,
    modules: []
  }
];

export const mockUsers = [
  {
    id: '1',
    name: 'María González',
    email: 'maria@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maria',
    role: 'free' as const,
    points: 150,
    coursesInProgress: 1,
    coursesCompleted: 1,
    badgesUnlocked: 2,
    leaderboardPosition: 47
  },
  {
    id: '2',
    name: 'Carlos Ramírez',
    email: 'carlos@example.com',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    role: 'pro' as const,
    points: 520,
    coursesInProgress: 2,
    coursesCompleted: 3,
    badgesUnlocked: 5,
    leaderboardPosition: 12
  }
];

export const mockBadges = [
  {
    id: 'b1',
    name: 'Primera Lección',
    description: 'Completa tu primera lección',
    icon: '🎓',
    pointsRequired: 10,
    isUnlocked: true,
    earnedAt: new Date('2025-02-10')
  },
  {
    id: 'b2',
    name: 'Curso Completado',
    description: 'Termina tu primer curso',
    icon: '🏆',
    pointsRequired: 50,
    isUnlocked: true,
    earnedAt: new Date('2025-02-12')
  },
  {
    id: 'b3',
    name: 'Experto en IA',
    description: 'Completa 5 cursos de IA',
    icon: '🤖',
    pointsRequired: 250,
    isUnlocked: false
  }
];

export const mockThreads = [
  {
    id: 't1',
    title: '¿Cómo optimizar prompts para Claude?',
    author: mockUsers[0],
    content: 'He estado experimentando con Claude y me gustaría saber...',
    category: 'ia_general',
    repliesCount: 12,
    upvotes: 24,
    isSolved: true,
    createdAt: new Date('2025-02-13')
  }
];
```

---

## TIPOS DE DATOS (TypeScript)

**lib/types.ts:**

```typescript
export type CourseCategory = 'marketing_ia' | 'ia_general';
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type UserRole = 'free' | 'pro' | 'elite' | 'instructor';

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  category: CourseCategory;
  level: CourseLevel;
  price: number;
  isFree: boolean;
  rating: number;
  studentsCount: number;
  instructor: string;
  duration: number;
  lessonsCount: number;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: number;
  videoUrl: string;
  resources?: Resource[];
}

export interface Resource {
  name: string;
  url: string;
  type: 'pdf' | 'template' | 'code';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: UserRole;
  points: number;
  coursesInProgress: number;
  coursesCompleted: number;
  badgesUnlocked: number;
  leaderboardPosition: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  pointsRequired: number;
  isUnlocked: boolean;
  earnedAt?: Date;
}

export interface Thread {
  id: string;
  title: string;
  author: User;
  content: string;
  category: string;
  repliesCount: number;
  upvotes: number;
  isSolved: boolean;
  createdAt: Date;
}
```

---

## HOOKS PERSONALIZADOS

**hooks/useAuth.ts:**
```typescript
import { useState } from 'react';

export function useAuth() {
  const [user, setUser] = useState<User | null>(mockUsers[0]);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  const login = async (email: string, password: string) => {
    // Simular login
    setUser(mockUsers[0]);
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };
  
  return { user, isAuthenticated, login, logout };
}
```

**hooks/useCourses.ts:**
```typescript
import { useState, useEffect } from 'react';
import { mockCourses } from '@/data/mockData';

export function useCourses(filters?: CourseFilters) {
  const [courses, setCourses] = useState(mockCourses);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Simular filtrado
    if (filters) {
      const filtered = mockCourses.filter(course => {
        if (filters.category !== 'all' && course.category !== filters.category) return false;
        if (filters.level !== 'all' && course.level !== filters.level) return false;
        if (filters.price === 'free' && !course.isFree) return false;
        if (filters.price === 'premium' && course.isFree) return false;
        return true;
      });
      setCourses(filtered);
    }
  }, [filters]);
  
  return { courses, isLoading };
}
```

---

## TAREAS PRIORITARIAS

### FASE 1: Estructura Base (EMPEZAR AQUÍ)
1. ✅ Crear estructura de carpetas
2. ✅ Configurar routing en App.tsx
3. ✅ Crear componentes de layout (Navbar, Footer, MainLayout)
4. ✅ Crear archivo de tipos (types.ts)
5. ✅ Crear archivo de datos mock (mockData.ts)

### FASE 2: Páginas Principales
6. ✅ Implementar Home page con Hero y secciones
7. ✅ Implementar Catálogo de cursos con filtros
8. ✅ Implementar Detalle de curso
9. ✅ Implementar Dashboard básico

### FASE 3: Componentes Avanzados
10. ✅ Crear CourseCard component
11. ✅ Crear VideoPlayer component
12. ✅ Crear ProgressBar component
13. ✅ Implementar Player de curso completo

### FASE 4: Gamificación y Comunidad
14. ✅ Implementar sistema de badges
15. ✅ Implementar Leaderboard
16. ✅ Implementar Comunidad/Foro básico
17. ✅ Implementar Perfil de usuario

### FASE 5: Pricing y Auth
18. ✅ Implementar página de Pricing
19. ✅ Implementar Auth (Login/Registro UI)
20. ✅ Conectar navegación y estados

---

## COMANDOS ÚTILES

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Tests
npm run test

# Linting
npm run lint
```

---

## NOTAS IMPORTANTES

### Mejores Prácticas

1. **Componentes:**
   - Usa componentes funcionales con hooks
   - Mantén componentes pequeños y reutilizables
   - Extrae lógica compleja a custom hooks

2. **TypeScript:**
   - Define interfaces para todas las props
   - Usa tipos estrictos, evita `any`
   - Aprovecha la inferencia de tipos

3. **Tailwind:**
   - Usa las clases utilitarias de Tailwind
   - Mantén consistencia en espaciado (p-4, gap-6, etc.)
   - Usa los componentes de shadcn-ui sin modificar su estructura base

4. **Estado:**
   - Usa useState para estado local
   - Considera TanStack Query para datos remotos (cuando integres backend)
   - Evita prop drilling, usa Context si es necesario

5. **Performance:**
   - Usa lazy loading para rutas: `const Home = lazy(() => import('./pages/Home'))`
   - Optimiza imágenes (WebP, lazy loading)
   - Memoiza componentes pesados con React.memo

### shadcn-ui

Los componentes ya están instalados. Para usarlos:

```tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Y así con todos los componentes listados en dependencies
```

### Responsive Design

Usa los breakpoints de Tailwind:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px
- `2xl:` - 1536px

Ejemplo:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

---

## PRÓXIMOS PASOS INMEDIATOS

1. **Revisar la estructura actual del proyecto** - Familiarízate con lo que ya existe
2. **Crear estructura de carpetas** - Organiza components/, pages/, hooks/, data/
3. **Implementar Navbar y Footer** - Componentes de layout base
4. **Crear mockData.ts** - Datos de prueba completos
5. **Implementar Home page** - Primera página funcional
6. **Configurar routing** - React Router con todas las rutas

**Objetivo:** Tener un prototipo funcional navegable en 1-2 semanas.

---

## RECURSOS

- [shadcn-ui Docs](https://ui.shadcn.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/)
- [Lucide Icons](https://lucide.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

---

**¡Comienza con la FASE 1 y construye paso a paso!** 

Cada componente debe ser funcional, tipado correctamente, y seguir el diseño especificado. Usa los componentes de shadcn-ui como base y personalízalos con Tailwind para lograr el look & feel de David Ames Academy.