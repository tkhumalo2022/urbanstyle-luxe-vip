import heroImage from "@/assets/hero-luxe.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { ChatbotWidget } from "@/components/ChatbotWidget";
import { SupportForm } from "@/components/SupportForm";
const Index = () => {
  return (
    <div>
      <SEO title="UrbanStyle Luxe – Luxury Fashion" description="Exclusive South African luxury fashion in monochrome elegance." canonical="https://urbanstyle-luxe.app/" />
      <section className="relative min-h-[70vh] md:min-h-[80vh] grid place-items-center rounded-b-xl overflow-hidden">
        <img src={heroImage} alt="UrbanStyle Luxe monochrome hero featuring South African models" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
        <div className="relative z-10 text-center px-6 py-16">
          <h1 className="font-display text-4xl md:text-6xl tracking-wide mb-4">Monochrome. Minimal. Majestic.</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">Invitation-only luxury inspired by Karl Lagerfeld Paris. Shot on South African talent.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/collections/men"><Button variant="hero" size="lg" className="min-w-40">Shop Men</Button></Link>
            <Link to="/collections/women"><Button variant="premium" size="lg" className="min-w-40">Shop Women</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="font-display text-2xl mb-4">Exclusive Drops</h2>
        <p className="text-muted-foreground">Limited runs. High-contrast statements. Precision in every seam.</p>
      </section>

      <section className="py-12">
        <h2 className="font-display text-2xl mb-2">Concierge Support</h2>
        <p className="text-muted-foreground mb-6">Questions about fit, styling, or availability? Speak to our team.</p>
        <SupportForm />
      </section>

      <ChatbotWidget />
    </div>
  );
};

export default Index;
