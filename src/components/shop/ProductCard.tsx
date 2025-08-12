import { Product } from "@/data/products";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { QuickViewDialog } from "./QuickViewDialog";
import { useState } from "react";

export const ProductCard = ({ product }: { product: Product }) => {
  const [quick, setQuick] = useState(false);
  return (
    <Card className="group overflow-hidden">
      <Link to={`/product/${product.id}`} aria-label={product.name} className="block">
        <div className="relative aspect-square overflow-hidden">
          <img src={product.images[0]} alt={`${product.name} – monochrome South African luxury fashion`} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
          {product.exclusive && (
            <Badge className="absolute left-3 top-3" variant="secondary">Exclusive</Badge>
          )}
          {product.newArrival && (
            <Badge className="absolute right-3 top-3" variant="secondary">New</Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{product.name}</h3>
          <span className="text-sm">R{product.priceZAR.toLocaleString()}</span>
        </div>
        <p className="text-xs text-muted-foreground">Only {product.stock} left</p>
        <button onClick={() => setQuick(true)} className="text-sm story-link">Quick View</button>
      </CardContent>
      <QuickViewDialog product={product} open={quick} onOpenChange={setQuick} />
    </Card>
  );
};
