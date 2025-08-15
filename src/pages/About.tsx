import { SEO } from "@/components/SEO";

export default function About() {
  return (
    <main className="py-12 max-w-4xl mx-auto container">
      <SEO title="About UrbanStyle Luxe" description="Parisian minimalism meets South African artistry." canonical="https://urbanstyle-luxe.app/about" />
      
      <h1 className="font-display text-4xl md:text-5xl mb-8 text-center">About UrbanStyle Luxe</h1>
      
      {/* Full Description */}
      <section className="mb-12">
        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
          Born from the discipline of Paris and the spirit of Johannesburg, UrbanStyle Luxe crafts monochrome collections that celebrate line, light, and local identity. Each limited-edition piece is photographed on South African talent, framed in sculptural minimalism inspired by Karl Lagerfeld Paris.
        </p>
        <p className="text-muted-foreground leading-relaxed text-lg">
          Our brand represents more than fashion; it's a celebration of South African creativity on the global stage. We believe in the power of simplicity, the elegance of monochrome palettes, and the timeless appeal of minimalist design. Every garment tells a story of craftsmanship, attention to detail, and the unique perspective that comes from our African heritage.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-12">
        <h2 className="font-display text-2xl md:text-3xl mb-4">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          To elevate South African fashion to international luxury standards while maintaining our authentic voice and celebrating local talent. We strive to create pieces that transcend trends, focusing on timeless elegance and superior craftsmanship that speaks to the discerning global consumer.
        </p>
      </section>

      {/* Vision */}
      <section className="mb-12">
        <h2 className="font-display text-2xl md:text-3xl mb-4">Our Vision</h2>
        <p className="text-muted-foreground leading-relaxed">
          To become the leading African luxury fashion house recognized globally for our innovative approach to minimalist design, our commitment to showcasing South African talent, and our dedication to creating pieces that embody both modern sophistication and cultural authenticity.
        </p>
      </section>

      {/* Directors */}
      <section className="mb-12">
        <h2 className="font-display text-2xl md:text-3xl mb-4">Our Leadership</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          UrbanStyle Luxe is guided by a team of visionary leaders who bring together decades of experience in fashion, luxury retail, and creative direction:
        </p>
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Creative Director:</strong> Inspired by the minimalist philosophy of Karl Lagerfeld and the vibrant energy of South African culture, our creative team ensures every piece reflects our commitment to excellence.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Brand Director:</strong> With extensive experience in luxury fashion markets, our brand leadership focuses on maintaining the highest standards of quality and customer experience.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Operations Director:</strong> Overseeing our commitment to ethical production and sustainable practices while ensuring our South African manufacturing partners meet international luxury standards.
          </p>
        </div>
      </section>
    </main>
  );
}
