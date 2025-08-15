export const Footer = () => {
  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto py-8 grid gap-6 md:grid-cols-4 text-sm text-muted-foreground">
        {/* Contact Details */}
        <div>
          <div className="font-medium mb-2 text-foreground">Contact</div>
          <p>Luxury Client Concierge: +27 87 000 0000</p>
          <p>Email: concierge@urbanstyleluxe.com</p>
          <p>Address: 123 Fashion District, Cape Town, South Africa</p>
        </div>
        
        {/* Navigation */}
        <div>
          <div className="font-medium mb-2 text-foreground">Navigation</div>
          <nav aria-label="Footer navigation">
            <ul className="space-y-1">
              <li><a href="/" className="story-link">Home</a></li>
              <li><a href="/about" className="story-link">About</a></li>
              <li><a href="/lookbook" className="story-link">Lookbook</a></li>
              <li><a href="/contact" className="story-link">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        {/* Company Info */}
        <div>
          <div className="font-display text-lg mb-2 text-foreground">UrbanStyle Luxe</div>
          <p>Exclusive South African luxury fashion in monochrome elegance.</p>
        </div>
        
        {/* Social Icons */}
        <div>
          <div className="font-medium mb-2 text-foreground">Follow Us</div>
          <div className="flex gap-3">
            <div className="w-6 h-6 bg-muted-foreground rounded-sm" title="Instagram"></div>
            <div className="w-6 h-6 bg-muted-foreground rounded-sm" title="Facebook"></div>
            <div className="w-6 h-6 bg-muted-foreground rounded-sm" title="Twitter"></div>
            <div className="w-6 h-6 bg-muted-foreground rounded-sm" title="LinkedIn"></div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} UrbanStyle Luxe. All rights reserved.</p>
      </div>
    </footer>
  );
};
