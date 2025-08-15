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
      
      <main>
        {/* Hero Section with Heading and Description */}
        <section className="relative min-h-[70vh] md:min-h-[80vh] grid place-items-center rounded-b-xl overflow-hidden">
          <img src={heroImage} alt="UrbanStyle Luxe monochrome hero featuring South African models" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
          <div className="relative z-10 text-center px-6 py-16">
            <h1 className="font-display text-4xl md:text-6xl tracking-wide mb-4">Monochrome. Minimal. Majestic.</h1>
            <p className="text-foreground/90 max-w-2xl mx-auto mb-8 font-medium">Invitation-only luxury inspired by Karl Lagerfeld Paris. Shot on South African talent.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link to="/collections/men"><Button variant="hero" size="lg" className="min-w-40">Shop Men</Button></Link>
              <Link to="/collections/women"><Button variant="premium" size="lg" className="min-w-40">Shop Women</Button></Link>
            </div>
          </div>
        </section>

        {/* Organization Description */}
        <section className="py-12 container mx-auto">
          <h2 className="font-display text-3xl md:text-4xl mb-6 text-center">Our Story</h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl mx-auto text-center mb-8">
            UrbanStyle Luxe represents the pinnacle of South African luxury fashion, where Parisian minimalism meets local artistry. 
            Each piece in our collection is meticulously crafted to embody sophistication, elegance, and timeless style. 
            Our monochrome aesthetic celebrates the beauty of simplicity while showcasing the extraordinary talent of South African models and designers.
          </p>
        </section>

        {/* Full-width Photo Section */}
        <section className="mb-12">
          <img 
            src={heroImage} 
            alt="UrbanStyle Luxe collection showcase featuring South African models in monochrome luxury fashion" 
            className="w-full h-[60vh] object-cover"
          />
        </section>

        <section className="py-12 container mx-auto">
          <h2 className="font-display text-2xl mb-4">Exclusive Drops</h2>
          <p className="text-muted-foreground">Limited runs. High-contrast statements. Precision in every seam.</p>
        </section>

        <section className="py-12 container mx-auto">
          <h2 className="font-display text-2xl mb-2">Concierge Support</h2>
          <p className="text-muted-foreground mb-6">Questions about fit, styling, or availability? Speak to our team.</p>
          <SupportForm />
        </section>
      </main>

      <ChatbotWidget />
    </div>
  );
};

export default Index;
