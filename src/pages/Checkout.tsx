import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CreditCard, Lock, ArrowLeft, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCartStore } from "@/store/useCartStore";
import { useAuth } from "@/hooks/useAuth";

export default function Checkout() {
  const navigate = useNavigate();
  const { cartCourse, clearCart } = useCartStore();
  const { enrollInCourse, user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!cartCourse) {
    navigate('/cart');
    return null;
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/auth?redirect=/checkout');
      return;
    }

    setIsProcessing(true);
    setError(null);

    // Simular un pequeño delay de procesamiento de pago
    await new Promise(resolve => setTimeout(resolve, 1500));

    const success = await enrollInCourse(cartCourse.id);
    
    if (success) {
      const courseId = cartCourse.id;
      clearCart();
      navigate(`/thank-you/${courseId}`);
    } else {
      setIsProcessing(false);
      setError("Hubo un error al procesar la inscripción. Por favor intenta de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto flex items-center mb-8">
           <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" /> Volver al carrito
          </Link>
        </div>

        <div className="flex flex-col-reverse lg:flex-row gap-8 max-w-4xl mx-auto">
          {/* Formulario de Pago */}
          <div className="flex-1">
            <div className="bg-card rounded-xl border border-border p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Detalles de Pago</h2>
              
              {error && (
                <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg mb-6 border border-destructive/20">
                  {error}
                </div>
              )}

              <form onSubmit={handlePayment} className="space-y-6">
                {/* Datos Personales simulados (podrían venir del perfil autocompletados) */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="bg-primary/20 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                    Información Personal
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" defaultValue={user?.name?.split(' ')[0] || ''} required placeholder="Ingresa tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" defaultValue={user?.name?.split(' ').slice(1).join(' ') || ''} required placeholder="Ingresa tu apellido" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" defaultValue={user?.email || ''} required placeholder="tucorreo@ejemplo.com" />
                  </div>
                </div>

                {/* Tarjeta simulada */}
                <div className="space-y-4 pt-6 mt-6 border-t border-border">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <span className="bg-primary/20 text-primary w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                    Método de Pago
                  </h3>
                  
                  <div className="p-4 bg-muted/30 rounded-lg border border-border space-y-4">
                     <div className="space-y-2">
                      <Label htmlFor="cardNumber">Número de Tarjeta</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input id="cardNumber" placeholder="0000 0000 0000 0000" className="pl-10 font-mono" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiryDate">Fecha de Expiración</Label>
                        <Input id="expiryDate" placeholder="MM/AA" className="font-mono" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" maxLength={4} className="font-mono" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Nombre en la tarjeta</Label>
                      <Input id="cardName" placeholder="Como aparece en la tarjeta" required />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  disabled={isProcessing} 
                  className="w-full gradient-hero text-primary-foreground border-0 py-6 text-lg mt-8"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Procesando pago...
                    </>
                  ) : (
                    <>
                      <Lock className="mr-2 h-5 w-5" />
                      Pagar ${cartCourse.price} USD de forma segura
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                  <Lock className="h-3 w-3" /> Transacción encriptada de extremo a extremo
                </p>
              </form>
            </div>
          </div>

          {/* Resumen Sidebar */}
          <aside className="lg:w-[350px]">
            <div className="bg-muted/30 rounded-xl border border-border p-6 sticky top-24">
              <h3 className="font-bold text-lg mb-4 text-center">Resumen del Pedido</h3>
              
              <div className="flex gap-4 mb-6 pb-6 border-b border-border">
                <div className="w-16 h-12 rounded-md bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">
                    {cartCourse.category === "marketing" ? "📊" : "🤖"}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm line-clamp-2">{cartCourse.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Acceso de por vida</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-muted-foreground text-sm">
                  <span>Precio</span>
                  <span>${cartCourse.price} USD</span>
                </div>
                 <div className="flex justify-between text-muted-foreground text-sm">
                  <span>Impuestos incluidos</span>
                  <span>$0.00 USD</span>
                </div>
                <div className="flex justify-between font-bold text-xl pt-4 border-t border-border">
                  <span>Total</span>
                  <span className="text-primary">${cartCourse.price} USD</span>
                </div>
              </div>

              <div className="space-y-3 mt-8">
                <div className="flex gap-3 items-start p-3 bg-card rounded-lg border border-border/50">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">Garantía de 30 días</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Si no estás satisfecho, te devolvemos el dinero.</p>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
