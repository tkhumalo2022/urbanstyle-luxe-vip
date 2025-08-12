import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { SEO } from "@/components/SEO";

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSuccess(true);
    clear();
  };

  if (success) {
    return (
      <section className="py-12 text-center max-w-2xl mx-auto">
        <SEO title="Order Confirmed" description="VIP confirmation for your UrbanStyle Luxe purchase." />
        <h1 className="font-display text-3xl mb-3">Merci. Your order is confirmed.</h1>
        <p className="text-muted-foreground">Our Luxury Client Concierge will reach out shortly with details. A receipt has been emailed to you.</p>
      </section>
    );
  }

  return (
    <section className="py-10 max-w-3xl mx-auto">
      <SEO title="Checkout" description="Complete your UrbanStyle Luxe purchase." canonical="https://urbanstyle-luxe.app/checkout" />
      <h1 className="font-display text-3xl mb-6">Checkout</h1>
      <div className="space-y-6">
        <div className="border rounded p-4">
          <div className="mb-3 font-medium">Order Summary</div>
          {items.length === 0 ? (
            <p className="text-muted-foreground">Your cart is empty.</p>
          ) : (
            <ul className="space-y-2">
              {items.map((i) => (
                <li key={i.id} className="flex justify-between text-sm">
                  <span>{i.product.name} × {i.quantity}</span>
                  <span>R{(i.product.priceZAR * i.quantity).toLocaleString()}</span>
                </li>
              ))}
              <li className="flex justify-between font-medium pt-2 border-t">
                <span>Subtotal</span>
                <span>R{subtotal.toLocaleString()}</span>
              </li>
            </ul>
          )}
        </div>

        <form onSubmit={submit} className="grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
            <Input placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <Input placeholder="Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
          </div>
          <Button variant="hero" className="mt-2">Pay Now</Button>
        </form>
      </div>
    </section>
  );
}
