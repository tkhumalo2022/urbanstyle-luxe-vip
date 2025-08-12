import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/data/products";

export const QuickViewDialog = ({ product, open, onOpenChange }: { product: Product; open: boolean; onOpenChange: (open: boolean) => void }) => {
  const { addItem } = useCart();
  const [size, setSize] = useState<string | undefined>(product.sizes[0]);
  const [color, setColor] = useState<string | undefined>(product.colors[0]);

  const add = () => {
    addItem(product, { size, color }, 1);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display">{product.name}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 sm:grid-cols-2">
          <img src={product.images[0]} alt={`${product.name} preview`} className="rounded" />
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">{product.description}</p>
            <div className="grid grid-cols-2 gap-3">
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
            <div className="flex items-center justify-between">
              <div className="text-sm">R{product.priceZAR.toLocaleString()}</div>
              <Button variant="hero" onClick={add}>Add to Cart</Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
