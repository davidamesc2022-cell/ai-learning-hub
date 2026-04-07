import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1AZcK4Qzu5/?mibextid=wwXIfr",
    color: "hover:text-[#1877F2]",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/davidamescantaro",
    color: "hover:text-[#E1306C]",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@davidamescantaro",
    color: "hover:text-[#FF0000]",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@davidamesc",
    color: "hover:text-white",
    icon: (
      <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-.9 4.45-2.43 6.08-1.5 1.6-3.56 2.57-5.75 2.87-2.32.32-4.79-.13-6.73-1.42-1.99-1.32-3.32-3.41-3.64-5.73-.34-2.5.34-5.18 2.01-7.05 1.63-1.84 3.99-2.91 6.44-3.07v4.06c-1.27.11-2.52.74-3.35 1.7-.82.94-1.14 2.27-.92 3.51.27 1.48 1.45 2.76 2.9 3.16 1.41.39 3.01.07 4.13-.88 1.05-.88 1.62-2.26 1.64-3.64.04-4.8.02-9.61.02-14.41z" />
        </svg>
      </span>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3 text-white">
              <div className="h-8 w-8 rounded-lg gradient-hero flex items-center justify-center text-primary-foreground text-sm font-black">DA</div>
              David Ames
            </div>
            <p className="text-sm text-slate-400">Domina la IA y el Marketing Digital del Futuro. Aprende con cursos prácticos y una comunidad activa.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Cursos</h4>
            <div className="space-y-2 text-sm">
              <Link to="/courses" className="block text-slate-400 hover:text-primary transition-colors">Marketing Digital con IA</Link>
              <Link to="/courses" className="block text-slate-400 hover:text-primary transition-colors">IA para Profesionales</Link>
              <Link to="/courses" className="block text-slate-400 hover:text-primary transition-colors">Todos los cursos</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Comunidad</h4>
            <div className="space-y-2 text-sm">
              <Link to="/community" className="block text-slate-400 hover:text-primary transition-colors">Foro General</Link>
              <Link to="/community" className="block text-slate-400 hover:text-primary transition-colors">Anuncios Oficiales</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-white">Soporte</h4>
            <div className="space-y-2 text-sm">
              <Link to="/pricing" className="block text-slate-400 hover:text-primary transition-colors">Preguntas Frecuentes</Link>
              <a
                href="https://wa.me/51996005543?text=Hola%20David%2C%20necesito%20soporte%20con%20la%20academia."
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-400 hover:text-primary transition-colors"
              >
                Contacto por WhatsApp
              </a>
              <Link to="/terms" className="block text-slate-400 hover:text-primary transition-colors">Términos y condiciones</Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} David Ames Academy. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`text-slate-400 transition-all duration-200 hover:scale-125 inline-flex ${s.color}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
