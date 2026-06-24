import { useState, useEffect } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Link, } from "react-router-dom";
import { useCart } from "../../Contexts/CartContext";
// ✅ importando o hook useCart do CartProvider



const navLinks = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Novas Coleções" },
  { to: "/about", label: "Sobre" },
  { to: "/contact", label: "Contato" },
];



const Header = () => {
  const { totalItems, openCart } = useCart(); // ✅ aqui dentro
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-gold" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-serif text-2xl font-bold text-primary">
          Lumière <span className="text-foreground">Maison</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-sans-body font-medium text-foreground/80 hover:text-primary transition-colors duration-300 tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 text-alt-accent-foreground cursor-pointer hover:text-ring transition-colors">
            <Search size={20} />
          </button>
          <button
            onClick={openCart}
            className="p-2 text-alt-accent-foreground cursor-pointer hover:text-ring transition-colors relative"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden text-foreground"
      >
        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
    

      {
    mobileOpen && (
      <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
        <div className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.label}
              onClick={() => setMobileOpen(false)}
              className="text-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
         
        </div>
      </div>
    )
  }
    </header >
  );
};

export default Header;