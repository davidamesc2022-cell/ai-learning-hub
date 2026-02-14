import { useState } from "react";
import { CheckCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const plans = [
  {
    name: "Free",
    monthly: 0,
    annual: 0,
    badge: "Más Popular",
    features: [
      { text: "5 cursos gratuitos", included: true },
      { text: "Acceso a comunidad básica", included: true },
      { text: "Certificados digitales", included: true },
      { text: "Cursos premium", included: false },
      { text: "Webinars en vivo", included: false },
      { text: "Soporte prioritario", included: false },
    ],
    cta: "Comenzar Gratis",
    highlighted: false,
  },
  {
    name: "Pro",
    monthly: 29,
    annual: 24,
    badge: "Recomendado",
    features: [
      { text: "TODO lo de Free", included: true },
      { text: "Acceso a TODOS los cursos premium", included: true },
      { text: "Comunidad completa", included: true },
      { text: "Certificados verificados", included: true },
      { text: "Soporte prioritario", included: true },
      { text: "Webinars exclusivos", included: false },
    ],
    cta: "Comenzar Prueba Gratis",
    highlighted: true,
  },
  {
    name: "Elite",
    monthly: 99,
    annual: 79,
    badge: "Mejor Valor",
    features: [
      { text: "TODO lo de Pro", included: true },
      { text: "Webinars mensuales en vivo", included: true },
      { text: "2 sesiones 1-on-1 al mes", included: true },
      { text: "Acceso anticipado a nuevos cursos", included: true },
      { text: "Soporte VIP 24/7", included: true },
      { text: "Networking exclusivo", included: true },
    ],
    cta: "Comenzar Elite",
    highlighted: false,
  },
];

const faqs = [
  { q: "¿Puedo cancelar mi suscripción en cualquier momento?", a: "Sí, puedes cancelar tu suscripción cuando quieras sin penalización. Mantendrás el acceso hasta el final de tu período de facturación." },
  { q: "¿Qué métodos de pago aceptan?", a: "Aceptamos tarjetas de crédito/débito (Visa, Mastercard, AMEX) y PayPal." },
  { q: "¿Hay garantía de devolución?", a: "Sí, ofrecemos una garantía de 30 días. Si no estás satisfecho, te devolvemos el 100% de tu dinero." },
  { q: "¿Los cursos gratuitos son realmente gratis?", a: "¡Sí! Los cursos gratuitos son completamente gratis, sin costos ocultos. Solo necesitas crear una cuenta." },
  { q: "¿Puedo cambiar de plan en cualquier momento?", a: "Sí, puedes actualizar o degradar tu plan cuando quieras. Los cambios se aplican al inicio del siguiente período de facturación." },
  { q: "¿Los certificados tienen validez profesional?", a: "Nuestros certificados son verificables digitalmente y reconocidos en la industria. Con el plan Pro y Elite obtienes certificados con verificación blockchain." },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Elige el Plan Perfecto Para Ti</h1>
          <p className="text-muted-foreground mb-6">Comienza gratis, actualiza cuando quieras</p>
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!annual ? "" : "text-muted-foreground"}`}>Mensual</span>
            <Switch checked={annual} onCheckedChange={setAnnual} />
            <span className={`text-sm font-medium ${annual ? "" : "text-muted-foreground"}`}>Anual <Badge className="bg-success/10 text-success border-success/30 text-[10px] ml-1">Ahorra 20%</Badge></span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {plans.map((plan) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <div key={plan.name} className={`bg-card rounded-xl border p-6 card-hover relative ${plan.highlighted ? "border-primary shadow-xl ring-2 ring-primary/20 scale-105" : "border-border"}`}>
                {plan.highlighted && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-hero text-primary-foreground border-0 px-4">{plan.badge}</Badge>}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">${price}</span>
                  <span className="text-muted-foreground text-sm">/mes</span>
                  {annual && plan.monthly > 0 && <p className="text-xs text-muted-foreground mt-1">Facturado anualmente (${price * 12}/año)</p>}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-2 text-sm">
                      {f.included ? <CheckCircle className="h-4 w-4 text-success flex-shrink-0" /> : <X className="h-4 w-4 text-muted-foreground/30 flex-shrink-0" />}
                      <span className={f.included ? "" : "text-muted-foreground/50 line-through"}>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.highlighted ? "gradient-hero text-primary-foreground border-0" : ""}`} variant={plan.highlighted ? "default" : "outline"} size="lg">
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>

        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-sm font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
