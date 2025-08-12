import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, Search } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export const Header = () => {
  const { itemCount, setOpen } = useCart();
  const navigate = useNavigate();
  const [q, setQ] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/collections/all?q=${encodeURIComponent(q)}`);
  };

  return (
    <header className="sticky top-0 z-40 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto flex items-center justify-between py-3">
        <Link to="/" className="font-display text-2xl tracking-wide hover-scale" aria-label="UrbanStyle Luxe Home">
          UrbanStyle Luxe
        </Link>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <NavLink to="/collections/men" className="story-link">Men</NavLink>
          <NavLink to="/collections/women" className="story-link">Women</NavLink>
          <NavLink to="/lookbook" className="story-link">Lookbook</NavLink>
          <NavLink to="/about" className="story-link">About</NavLink>
          <NavLink to="/contact" className="story-link">Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <form onSubmit={onSubmit} className="hidden sm:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="pl-8 w-48" aria-label="Search products" />
            </div>
          </form>
          <Button variant="premium" size="sm" onClick={() => setOpen(true)} aria-label="Open cart" className="relative">
            <ShoppingBag />
            <span className="sr-only">Open cart</span>
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 h-5 min-w-5 rounded-full bg-primary text-primary-foreground text-xs grid place-items-center px-1">
                {itemCount}
              </span>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
