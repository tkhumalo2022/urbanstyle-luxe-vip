import { Header } from "./Header";
import { Footer } from "./Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { useCart } from "@/context/CartContext";

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, setOpen } = useCart();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 animate-fade-in">
        {children}
      </main>
      <Footer />
      <CartDrawer open={isOpen} onOpenChange={setOpen} />
    </div>
  );
};
