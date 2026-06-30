import { Link } from "react-router-dom";


export function Footer() {
  return (
    <footer className="bg-[#0C0806] text-primary-foreground mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-4">
        <div>
          <div className="font-display text-3xl">Lumière</div>
          <div className="text-[10px] tracking-luxe uppercase text-gold mt-1">Maison de Joaillerie</div>
          <p className="mt-6 text-sm text-primary-foreground/70 leading-relaxed">
            Handcrafted fine jewelry for moments that endure. Designed in Paris, made by artisans across Europe.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Maison</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-gold">Our Story</Link></li>
            <li><Link to="/collections" className="hover:text-gold">Collections</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Boutiques</Link></li>
            <li><a href="#" className="hover:text-gold">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-luxe uppercase text-gold mb-5">Care</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><a href="#" className="hover:text-gold">Shipping</a></li>
            <li><a href="#" className="hover:text-gold">Returns</a></li>
            <li><a href="#" className="hover:text-gold">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold">Terms</a></li>
          </ul>
        </div>

       
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-3 justify-between text-xs text-primary-foreground/50">
          <span>© {new Date().getFullYear()} Lumière Maison. All rights reserved.</span>
          <span>Crafted with devotion in Paris.</span>
        </div>
      </div>
    </footer>
  );
}