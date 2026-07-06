import { useState, useEffect } from "react";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../../Contexts/CartContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Novas Coleções" },
  { to: "/about", label: "Sobre" },
  { to: "/contact", label: "Contato" },
];

const Header = () => {
  const { totalItems, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Texto escuro quando: não está na home OU já rolou a página
  const isDark = !isHome || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-background/95 backdrop-blur-md shadow-gold"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          to="/"
          className={`font-serif text-2xl font-bold transition-colors duration-500 ${
            isDark ? "text-primary" : "text-white"
          }`}
        >
          Lumière{" "}
          <span className={isDark ? "text-foreground" : "text-white/80"}>
            Maison
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`text-sm font-sans-body font-medium tracking-wide uppercase transition-colors duration-300 hover:text-primary ${
                isDark ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            className={`p-2 cursor-pointer transition-colors hover:text-primary ${
              isDark ? "text-foreground/80" : "text-white/90"
            }`}
          >
            <Search size={20} />
          </button>
          <button
            onClick={openCart}
            className={`p-2 cursor-pointer transition-colors relative hover:text-primary ${
              isDark ? "text-foreground/80" : "text-white/90"
            }`}
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

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${isDark ? "text-foreground" : "text-white"}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-in">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;