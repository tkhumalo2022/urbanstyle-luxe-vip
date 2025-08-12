import { useParams, useSearchParams } from "react-router-dom";
import { products, categories, type Gender } from "@/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { SEO } from "@/components/SEO";
import { useMemo, useState } from "react";

export default function Collections() {
  const { gender } = useParams<{ gender: string }>();
  const [params, setParams] = useSearchParams();
  const qParam = params.get("q") ?? "";
  const [q, setQ] = useState(qParam);
  const [price, setPrice] = useState<number[]>([0, 15000]);
  const [sort, setSort] = useState("new");
  const activeGender: Gender | "all" = (gender === "men" || gender === "women") ? (gender as Gender) : "all";

  const filtered = useMemo(() => {
    let list = products.filter((p) => activeGender === "all" ? true : p.gender === activeGender);
    if (q) list = list.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()) || p.description.toLowerCase().includes(q.toLowerCase()));
    list = list.filter((p) => p.priceZAR >= price[0] && p.priceZAR <= price[1]);
    switch (sort) {
      case "priceDesc": list = [...list].sort((a,b) => b.priceZAR - a.priceZAR); break;
      case "exclusive": list = [...list].sort((a,b) => (Number(b.exclusive) - Number(a.exclusive))); break;
      default: list = [...list].sort((a,b) => Number(b.newArrival) - Number(a.newArrival));
    }
    return list;
  }, [activeGender, q, price, sort]);

  return (
    <section className="py-10">
      <SEO title={`${activeGender === "all" ? "Collections" : activeGender === "men" ? "Men's Collection" : "Women's Collection"}`} description="Exclusive monochrome luxury fashion. Shop UrbanStyle Luxe collections." canonical={`https://urbanstyle-luxe.app/collections/${gender ?? "all"}`} />
      <header className="mb-8">
        <h1 className="font-display text-3xl md:text-4xl mb-2">{activeGender === "all" ? "All Collections" : activeGender === "men" ? "Men’s Collection" : "Women’s Collection"}</h1>
        <p className="text-muted-foreground">Curated South African luxury, inspired by Karl Lagerfeld Paris.</p>
      </header>

      <div className="grid gap-6 md:grid-cols-4">
        <aside className="md:col-span-1 space-y-6">
          <div>
            <div className="text-sm mb-2">Search</div>
            <form onSubmit={(e) => {e.preventDefault(); setParams({ q });}}>
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" />
            </form>
          </div>

          <div>
            <div className="text-sm mb-2">Price Range (ZAR)</div>
            <Slider min={0} max={15000} step={500} value={price} onValueChange={setPrice} />
            <div className="text-xs text-muted-foreground mt-1">R{price[0].toLocaleString()} – R{price[1].toLocaleString()}</div>
          </div>

          <div>
            <div className="text-sm mb-2">Sort by</div>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="new">New Arrivals</SelectItem>
                <SelectItem value="priceDesc">Price High→Low</SelectItem>
                <SelectItem value="exclusive">Exclusive Collection</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </aside>

        <div className="md:col-span-3 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
