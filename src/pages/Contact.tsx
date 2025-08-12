import { SEO } from "@/components/SEO";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-12 max-w-2xl mx-auto text-center">
      <SEO title="Contact" description="Connect with the UrbanStyle Luxe Concierge." canonical="https://urbanstyle-luxe.app/contact" />
      <h1 className="font-display text-4xl mb-3">Contact</h1>
      <p className="text-muted-foreground mb-6">Our Luxury Client Concierge is at your service.</p>
      <div className="flex items-center justify-center gap-6">
        <a href="tel:+27870000000" className="story-link inline-flex items-center gap-2"><Phone /> +27 87 000 0000</a>
        <a href="mailto:concierge@urbanstyleluxe.com" className="story-link inline-flex items-center gap-2"><Mail /> concierge@urbanstyleluxe.com</a>
      </div>
    </section>
  );
}
