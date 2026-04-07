import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Menu, X, ChevronDown, LogOut, User, BookOpen, Settings, CheckCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNotificationStore } from "@/store/useNotificationStore";
import { GlobalSearch } from "@/components/layout/GlobalSearch";
import { useAuth } from "@/hooks/useAuth";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { useTheme } from "next-themes";

const NAV_LINKS_PUBLIC = [
  { label: "Cursos", to: "/courses" },
  { label: "Comunidad", to: "/community" },
  { label: "Precios", to: "/pricing" },
];

const NAV_LINKS_AUTH = [
  { label: "Cursos", to: "/courses" },
  { label: "Mi Dashboard", to: "/dashboard" },
  { label: "Comunidad", to: "/community" },
  { label: "Leaderboard", to: "/leaderboard" },
];

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const isAuth = isAuthenticated;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();
  const links = isAuth ? NAV_LINKS_AUTH : NAV_LINKS_PUBLIC;
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotificationStore();

  return (
    <nav className={`sticky top-0 z-50 border-b shadow-lg backdrop-blur-xl transition-colors duration-300
      ${ isDark
        ? "bg-slate-900/95 border-slate-800"
        : "bg-white/95 border-slate-200"
      }`
    }>
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className={`flex items-center gap-2 font-bold text-xl ${isDark ? "text-white" : "text-slate-900"}`}>
          <div className="h-8 w-8 rounded-lg gradient-hero flex items-center justify-center text-white text-sm font-black shadow-sm">DA</div>
          <span className="hidden sm:inline">David Ames</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-primary font-bold"
                  : isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <div className="hidden md:block"><ThemeToggle /></div>
          <GlobalSearch />

          {isAuth ? (
            <>
              {/* Notifications */}
              <div className="relative">
                <button onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }} className="relative p-2 rounded-lg hover:bg-slate-800 transition-colors">
                  <Bell className="h-5 w-5 text-slate-300" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center font-bold animate-pulse">{unreadCount}</span>
                  )}
                </button>
                {notifOpen && (
                  <div className="absolute right-0 sm:-right-20 top-12 w-80 sm:w-96 bg-card rounded-xl shadow-xl border border-border overflow-hidden animate-fade-in z-50">
                    <div className="p-4 border-b border-border flex items-center justify-between bg-muted/30">
                      <h4 className="font-semibold">Notificaciones</h4>
                      {unreadCount > 0 && (
                        <button onClick={markAllAsRead} className="text-xs text-primary hover:underline flex items-center gap-1">
                          <CheckCheck className="h-3 w-3" /> Marcar todas leídas
                        </button>
                      )}
                    </div>
                    <div className="max-h-[400px] overflow-y-auto p-2">
                      {notifications.length === 0 ? (
                        <div className="p-8 text-center text-muted-foreground">
                          <Bell className="h-8 w-8 mx-auto mb-3 opacity-20" />
                          <p className="text-sm">No tienes notificaciones</p>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          {notifications.map((n) => (
                            <div
                              key={n.id}
                              onClick={() => markAsRead(n.id)}
                              className={`text-sm p-3 rounded-lg cursor-pointer transition-colors flex gap-3 ${n.read ? "hover:bg-muted/50" : "bg-primary/5 hover:bg-primary/10 border-l-2 border-primary"}`}
                            >
                              <div className="flex-1">
                                <p className={`${n.read ? "text-muted-foreground" : "text-foreground font-medium"}`}>{n.message}</p>
                                <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-2">
                                  {n.time}
                                  {!n.read && <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse inline-block" />}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="relative">
                <button onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-slate-800 transition-colors">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold overflow-hidden">
                    {user?.avatar ? <img src={user.avatar} className="w-full h-full object-cover" alt={user.name} /> : (user?.name?.split(' ').map(n => n[0]).join('').substring(0, 2) || 'U')}
                  </div>
                  <ChevronDown className="h-3 w-3 text-slate-300 hidden sm:block" />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 top-12 w-48 bg-card rounded-xl shadow-xl border border-border py-2 animate-fade-in z-50">
                    <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors" onClick={() => setProfileOpen(false)}><User className="h-4 w-4" /> Mi Perfil</Link>
                    <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors" onClick={() => setProfileOpen(false)}><BookOpen className="h-4 w-4" /> Mis Cursos</Link>
                    <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors" onClick={() => setProfileOpen(false)}><Settings className="h-4 w-4" /> Configuración</Link>
                    <hr className="my-1 border-border" />
                    <button onClick={() => { logout(); setProfileOpen(false); }} className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors w-full text-destructive"><LogOut className="h-4 w-4" /> Cerrar Sesión</button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/auth"><Button variant="ghost" size="sm" className={`font-semibold ${isDark ? "text-slate-200 hover:text-white hover:bg-slate-800" : "text-slate-700 hover:bg-slate-100"}`}>Iniciar Sesión</Button></Link>
              <Link to="/auth"><Button size="sm" className="gradient-hero text-white border-0 font-bold shadow-md">Registrarse</Button></Link>
            </>
          )}

          {/* Mobile menu btn */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen
              ? <X className={`h-5 w-5 ${isDark ? "text-white" : "text-slate-900"}`} />
              : <Menu className={`h-5 w-5 ${isDark ? "text-white" : "text-slate-900"}`} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`md:hidden border-t animate-fade-in ${isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"}`}>
          <div className="container mx-auto px-4 py-4 space-y-3">
            <div className="pb-2 border-b border-slate-800">
              <ThemeToggle />
            </div>
            {links.map((l) => (
              <Link key={l.to} to={l.to} className={`block py-2 text-sm font-medium ${isDark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}`} onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
