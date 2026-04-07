import { Link, useNavigate } from "react-router-dom";
import { Trash2, CreditCard, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCartStore } from "@/store/useCartStore";

export default function Cart() {
  const navigate = useNavigate();
  const { cartCourse, clearCart } = useCartStore();

  if (!cartCourse) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
          <div className="bg-muted w-24 h-24 rounded-full flex items-center justify-center mb-6">
            <span className="text-4xl">🛒</span>
          </div>
          <h1 className="text-3xl font-extrabold mb-4">Tu carrito está vacío</h1>
          <p className="text-muted-foreground mb-8 max-w-md">
            Parece que aún no has agregado ningún curso a tu carrito. Explora nuestro catálogo y encuentra el curso ideal para ti.
          </p>
          <Link to="/courses">
            <Button size="lg">Explorar Cursos</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-3xl font-extrabold mb-8">Carrito de Compras</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Detalles del carrito */}
          <div className="flex-1">
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                {/* Thumbnail */}
                <div className="w-full sm:w-40 h-32 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-5xl opacity-80">
                    {cartCourse.category === "marketing" ? "📊" : "🤖"}
                  </span>
                </div>
                
                {/* Info del curso */}
                <div className="flex-1 flex flex-col sm:h-32 justify-between w-full">
                  <div>
                    <h2 className="text-xl font-bold mb-2 line-clamp-2">{cartCourse.title}</h2>
                    <p className="text-sm text-muted-foreground mb-2">Por David Ames</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <button 
                      onClick={clearCart}
                      className="text-sm text-destructive hover:text-destructive/80 flex items-center gap-1 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" /> Eliminar
                    </button>
                    <span className="font-extrabold text-xl text-primary">${cartCourse.price} USD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resumen del pedido */}
          <aside className="lg:w-[350px]">
            <div className="bg-card rounded-xl border border-border p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4">Resumen</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground">
                  <span>Precio original</span>
                  <span>${cartCourse.price} USD</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-4 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">${cartCourse.price} USD</span>
                </div>
              </div>
              
              <Button 
                size="lg" 
                className="w-full gradient-hero text-primary-foreground border-0 mb-4"
                onClick={() => navigate('/checkout')}
              >
                <CreditCard className="mr-2 h-4 w-4" /> Proceder al pago
              </Button>
              
              <div className="text-center">
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <ShieldCheck className="h-3 w-3 text-success" /> Pago 100% seguro y encriptado
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
