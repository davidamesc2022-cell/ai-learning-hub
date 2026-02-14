import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bell, Menu, X, ChevronDown, LogOut, User, BookOpen, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notifications } from "@/data/mockData";

const NAV_LINKS_PUBLIC = [
  { label: "Cursos", to: "/courses" },
  { label: "Comunidad", to: "/community" },
  { label: "Pricing", to: "/pricing" },
];

const NAV_LINKS_AUTH = [
  { label: "Cursos", to: "/courses" },
  { label: "Mi Dashboard", to: "/dashboard" },
  { label: "Comunidad", to: "/community" },
  { label: "Leaderboard", to: "/leaderboard" },
];

export default function Navbar() {
  const [isAuth] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const location = useLocation();
  const links = isAuth ? NAV_LINKS_AUTH : NAV_LINKS_PUBLIC;
  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="h-8 w-8 rounded-lg gradient-hero flex items-center justify-center text-primary-foreground text-sm font-black">DA</div>
          <span className="hidden sm:inline">David Ames</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === l.to ? "text-primary" : "text-muted-foreground"}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {isAuth ? (
            <>
              {/* Notifications */}
              <div className="relative">
                <button onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); }} className="relative p-2 rounded-lg hover:bg-muted transition-colors">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-destructive text-destructive-foreground text-[10px] flex items-center justify-center font-bold">{unreadCount}</span>
                  )}
                </button>
                {notifOpen && (
                  <div className="absolute right-0 top-12 w-80 bg-card rounded-xl shadow-xl border border-border p-4 animate-fade-in">
                    <h4 className="font-semibold mb-3">Notificaciones</h4>
                    <div className="space-y-3">
                      {notifications.map((n) => (
                        <div key={n.id} className={`text-sm p-2 rounded-lg ${n.read ? "text-muted-foreground" : "bg-primary/5 font-medium"}`}>
                          <p>{n.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{n.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="relative">
                <button onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); }} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-muted transition-colors">
                  <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">MG</div>
                  <ChevronDown className="h-3 w-3 text-muted-foreground hidden sm:block" />
                </button>
                {profileOpen && (
                  <div className="absolute right-0 top-12 w-48 bg-card rounded-xl shadow-xl border border-border py-2 animate-fade-in">
                    <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors" onClick={() => setProfileOpen(false)}><User className="h-4 w-4" /> Mi Perfil</Link>
                    <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors" onClick={() => setProfileOpen(false)}><BookOpen className="h-4 w-4" /> Mis Cursos</Link>
                    <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors" onClick={() => setProfileOpen(false)}><Settings className="h-4 w-4" /> Configuración</Link>
                    <hr className="my-1 border-border" />
                    <button className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted transition-colors w-full text-destructive"><LogOut className="h-4 w-4" /> Cerrar Sesión</button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/auth"><Button variant="ghost" size="sm">Iniciar Sesión</Button></Link>
              <Link to="/auth"><Button size="sm" className="gradient-hero text-primary-foreground border-0">Registrarse</Button></Link>
            </>
          )}

          {/* Mobile menu btn */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="block py-2 text-sm font-medium hover:text-primary" onClick={() => setMobileOpen(false)}>{l.label}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
