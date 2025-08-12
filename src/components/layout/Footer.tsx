export const Footer = () => {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto py-8 grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
        <div>
          <div className="font-display text-lg mb-2 text-foreground">UrbanStyle Luxe</div>
          <p>Exclusive South African luxury fashion in monochrome elegance.</p>
        </div>
        <div>
          <div className="font-medium mb-2">Information</div>
          <ul className="space-y-1">
            <li><a href="/about" className="story-link">About</a></li>
            <li><a href="/lookbook" className="story-link">Lookbook</a></li>
            <li><a href="/contact" className="story-link">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium mb-2">Concierge</div>
          <p>Luxury Client Concierge: +27 87 000 0000</p>
          <p>Email: concierge@urbanstyleluxe.com</p>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} UrbanStyle Luxe. All rights reserved.</div>
    </footer>
  );
};
