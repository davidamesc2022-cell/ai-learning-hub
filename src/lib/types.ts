// ============================================================
// David Ames Academy — Tipos centrales de TypeScript
// Fuente única de verdad para todas las interfaces del proyecto
// ============================================================

// ── Enumeraciones ────────────────────────────────────────────
export type CourseCategory = "marketing" | "ia";
export type CourseLevel = "Principiante" | "Intermedio" | "Avanzado";
export type UserPlan = "free" | "pro" | "elite";
export type ResourceType = "pdf" | "template" | "code" | "link";
export type NotificationType = "badge" | "lesson" | "forum" | "payment" | "system";

// ── Curso ────────────────────────────────────────────────────
export interface Resource {
  id: string;
  name: string;
  url: string;
  type: ResourceType;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;       // e.g. "15:00"
  isFree: boolean;
  isCompleted?: boolean;
  videoUrl?: string;
  resources?: Resource[];
  description?: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: CourseCategory;
  categoryLabel: string;
  level: CourseLevel;
  price: number;
  isFree: boolean;
  rating: number;
  students: number;
  instructor: string;
  duration: string;       // e.g. "8 horas"
  lessonsCount: number;
  thumbnail: string;
  thumbnailUrl?: string;
  isNew?: boolean;
  isPopular?: boolean;
  updatedAt: string;
  modules: Module[];
  whatYouLearn: string[];
  requirements: string[];
  forWho: string[];
}

// ── Gamificación ─────────────────────────────────────────────
export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  unlockedAt?: string;
  pointsRequired?: number;
}

export interface EnrolledCourse {
  courseId: string;
  progress: number;       // 0-100
  lastLesson: string;
  completed: boolean;
  enrolledAt?: string;
}

// ── Usuario ──────────────────────────────────────────────────
export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  plan: UserPlan;
  points: number;
  streak: number;
  position: number;
  coursesInProgress: number;
  coursesCompleted: number;
  totalHours: number;
  badges: Badge[];
  enrolledCourses: EnrolledCourse[];
  bio?: string;
  createdAt?: string;
}

// ── Leaderboard ──────────────────────────────────────────────
export interface LeaderboardEntry {
  position: number;
  name: string;
  points: number;
  courses: number;
  avatar: string;
  plan: UserPlan;
}

// ── Comunidad / Foro ─────────────────────────────────────────
export interface ForumReply {
  id: string;
  author: string;
  authorAvatar: string;
  content: string;
  upvotes: number;
  createdAt: string;
  isAnswer?: boolean;
}

export interface ForumThread {
  id: string;
  title: string;
  preview: string;
  author: string;
  authorAvatar: string;
  category: string;
  replies: number;
  upvotes: number;
  lastActivity: string;
  solved: boolean;
  content?: string;
  threadReplies?: ForumReply[];
}

// ── Testimonios ──────────────────────────────────────────────
export interface Testimonial {
  name: string;
  title: string;
  avatar: string;
  quote: string;
  rating: number;
}

// ── Notificaciones ───────────────────────────────────────────
export interface Notification {
  id: string;
  message: string;
  time: string;
  read: boolean;
  type?: NotificationType;
  link?: string;
}

// ── Filtros de Cursos ────────────────────────────────────────
export interface CourseFilters {
  category: CourseCategory | "all";
  level: CourseLevel | "all";
  price: "free" | "premium" | "all";
  search: string;
}

// ── Pricing ──────────────────────────────────────────────────
export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  badge?: string;
  highlighted: boolean;
  features: PricingFeature[];
  cta: string;
}

// ── Autenticación ────────────────────────────────────────────
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
