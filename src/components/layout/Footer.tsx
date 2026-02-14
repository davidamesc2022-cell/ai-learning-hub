import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-3">
              <div className="h-8 w-8 rounded-lg gradient-hero flex items-center justify-center text-primary-foreground text-sm font-black">DA</div>
              David Ames
            </div>
            <p className="text-sm text-muted-foreground">Domina la IA y el Marketing Digital del Futuro. Aprende con cursos prácticos y una comunidad activa.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Cursos</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/courses" className="block hover:text-primary transition-colors">Marketing Digital con IA</Link>
              <Link to="/courses" className="block hover:text-primary transition-colors">IA para Profesionales</Link>
              <Link to="/courses" className="block hover:text-primary transition-colors">Todos los cursos</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Comunidad</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/community" className="block hover:text-primary transition-colors">Foro</Link>
              <Link to="/leaderboard" className="block hover:text-primary transition-colors">Leaderboard</Link>
              <Link to="/community" className="block hover:text-primary transition-colors">Anuncios</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Soporte</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link to="/pricing" className="block hover:text-primary transition-colors">Preguntas frecuentes</Link>
              <Link to="/pricing" className="block hover:text-primary transition-colors">Contacto</Link>
              <span className="block">Términos y condiciones</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© 2026 David Ames Academy. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">YouTube</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
