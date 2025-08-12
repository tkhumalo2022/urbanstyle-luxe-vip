import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CartDrawer = ({ open, onOpenChange }: Props) => {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const formatZAR = (v: number) => `R${v.toLocaleString()}`;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild><span /></SheetTrigger>
      <SheetContent side="right" className="w-[420px] max-w-full">
        <SheetHeader>
          <SheetTitle className="font-display">Your Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-4">
          {items.length === 0 && (
            <p className="text-muted-foreground">Your cart is empty.</p>
          )}
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 items-center border-b pb-4">
              <img src={item.product.images[0]} alt={`${item.product.name} product image`} className="h-16 w-16 object-cover rounded" loading="lazy" />
              <div className="flex-1">
                <div className="font-medium">{item.product.name}</div>
                <div className="text-sm text-muted-foreground">{item.size} {item.color}</div>
                <div className="text-sm">R{item.product.priceZAR.toLocaleString()}</div>
                <div className="flex items-center gap-2 mt-2">
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</Button>
                  <span className="text-sm w-6 text-center">{item.quantity}</span>
                  <Button variant="outline" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                  <Button variant="ghost" size="sm" onClick={() => removeItem(item.id)}>Remove</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-sm"><span>Subtotal</span><span>{formatZAR(subtotal)}</span></div>
            <Button className="w-full" variant="hero" onClick={() => (window.location.href = "/checkout")}>Proceed to Checkout</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
