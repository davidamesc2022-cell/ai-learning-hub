import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-extrabold mb-8">Términos y Condiciones</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground text-justify">
          <p>Última actualización: {new Date().toLocaleDateString('es-ES')}</p>
          
          <h2 className="text-2xl font-bold text-foreground mt-8">1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar la plataforma de enseñanza "David Ames Academy" (en adelante, la "Plataforma"), 
            usted acepta estar sujeto a estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, 
            no podrá acceder a nuestros servicios.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8">2. Descripción del Servicio</h2>
          <p>
            David Ames Academy ofrece cursos en línea, mentorías y una comunidad orientada al dominio de la Inteligencia Artificial 
            y el Marketing Digital. Los servicios pueden ser adquiridos de manera individual o a través de suscripciones o membresías periódicas.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8">3. Uso de la Plataforma y Cuentas de Usuario</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Usted debe tener al menos 18 años para crear una cuenta y realizar compras.</li>
            <li>Es responsable de mantener la confidencialidad de su cuenta y contraseña.</li>
            <li>La cuenta es personal e intransferible. Queda estrictamente prohibido compartir el acceso con terceros.</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground mt-8">4. Propiedad Intelectual</h2>
          <p>
            Todo el contenido de los cursos, material audiovisual, textos, plantillas y gráficos presentes en la Plataforma 
            son propiedad exclusiva de David Ames. La reproducción, distribución o comercialización no autorizada del contenido 
            constituye una violación a las leyes de propiedad intelectual penalizada por ley.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8">5. Pagos y Reembolsos</h2>
          <p>
            Todos los pagos realizados son definitivos a menos que se indique lo contrario en una política técnica como la "garantía de 30 días".
            Si usted hace uso de una garantía aplicable, el reembolso se procesará al mismo método de pago original y perderá acceso inmediato a 
            la Plataforma y sus beneficios (certificados, comunidad, descargas).
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8">6. Terminación</h2>
          <p>
            Nos reservamos el derecho de suspender o terminar su acceso a la Plataforma sin previo aviso si se detecta un incumplimiento 
            de estos Términos, tal como la piratería o el comportamiento inadecuado dentro de la comunidad.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8">7. Modificaciones a los Términos</h2>
          <p>
            David Ames Academy se reserva el derecho de modificar o reemplazar estos Términos en cualquier momento. 
            Es su responsabilidad revisar esta página periódicamente para conocer los cambios.
          </p>

          <p className="mt-8">
            Si tiene alguna pregunta sobre estos Términos, comuníquese a nuestro soporte.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
