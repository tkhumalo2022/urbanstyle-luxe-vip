import { useParams, useNavigate } from "react-router-dom";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { SEO } from "@/components/SEO";

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();
  const [size, setSize] = useState(product?.sizes[0]);
  const [color, setColor] = useState(product?.colors[0]);

  if (!product) return <div className="py-12">Product not found.</div>;

  const add = () => addItem(product, { size, color }, 1);

  return (
    <section className="py-10">
      <SEO title={`${product.name}`} description={product.description} canonical={`https://urbanstyle-luxe.app/product/${product.id}`} structuredData={{"@context":"https://schema.org","@type":"Product","name":product.name,"description":product.description,"offers":{"@type":"Offer","priceCurrency":"ZAR","price":product.priceZAR}}} />
      <div className="grid gap-8 md:grid-cols-2">
        <div className="grid gap-3">
          {product.images.map((img, i) => (
            <img key={i} src={img} alt={`${product.name} view ${i+1}`} className="rounded" loading="lazy" />
          ))}
        </div>
        <div className="space-y-4">
          <h1 className="font-display text-3xl md:text-4xl">{product.name}</h1>
          <div className="text-xl">R{product.priceZAR.toLocaleString()}</div>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="text-sm">Only {product.stock} left</div>

          <div className="grid grid-cols-2 gap-4 max-w-md">
            <div>
              <div className="text-xs mb-1">Size</div>
              <Select value={size} onValueChange={setSize}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {product.sizes.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <div className="text-xs mb-1">Color</div>
              <Select value={color} onValueChange={setColor}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  {product.colors.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="hero" onClick={add}>Add to Cart</Button>
            <Button variant="outline" onClick={() => navigate(-1)}>Back</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
