import { SEO } from "@/components/SEO";
import hero from "@/assets/hero-luxe.jpg";

export default function Lookbook() {
  return (
    <section className="py-12">
      <SEO title="Lookbook" description="Seasonal campaigns in monochrome elegance." canonical="https://urbanstyle-luxe.app/lookbook" />
      <h1 className="font-display text-4xl mb-6">Lookbook</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <img src={hero} alt="UrbanStyle Luxe lookbook hero – monochrome South African models" className="rounded" loading="lazy" />
      </div>
    </section>
  );
}
