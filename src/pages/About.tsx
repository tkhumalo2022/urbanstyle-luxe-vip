import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <section className="py-12 max-w-3xl mx-auto">
      <SEO title="About UrbanStyle Luxe" description="Parisian minimalism meets South African artistry." canonical="https://urbanstyle-luxe.app/about" />
      <h1 className="font-display text-4xl mb-4">About UrbanStyle Luxe</h1>
      <p className="text-muted-foreground leading-relaxed">
        Born from the discipline of Paris and the spirit of Johannesburg, UrbanStyle Luxe crafts monochrome collections that celebrate line, light, and local identity. Each limited-edition piece is photographed on South African talent, framed in sculptural minimalism inspired by Karl Lagerfeld Paris.
      </p>
    </section>
  );
}
