


import { Link, useRouterState } from "react-router-dom";
import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart";

const nav = [
  { to: "/", label: "Home" },
  { to: "/collections", label: "Collections" },
  { to: "/collections", label: "New Arrivals" },
  { to: "/collections", label: "Best Sellers" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const { setOpen, count, favorites } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const onHome = path === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = onHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        transparent ? "bg-transparent text-primary-foreground" : "bg-background/85 backdrop-blur-md text-foreground border-b border-border"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-2xl tracking-wide">Lumière</span>
          <span className="text-[10px] tracking-luxe uppercase text-gold hidden sm:inline">Maison</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-[12px] uppercase tracking-luxe">
          {nav.map((n, i) => (
            <Link
              key={i}
              to={n.to}
              className="relative hover:text-gold transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-3">
          <button aria-label="Search" className="p-2 hover:text-gold transition"><Search className="h-[18px] w-[18px]" /></button>
          <button aria-label="Favorites" className="p-2 hover:text-gold transition relative">
            <Heart className="h-[18px] w-[18px]" />
            {favorites.length > 0 && <span className="absolute -top-0.5 -right-0.5 text-[10px] bg-gold text-primary rounded-full h-4 w-4 flex items-center justify-center">{favorites.length}</span>}
          </button>
          <button aria-label="Account" className="p-2 hover:text-gold transition hidden sm:inline-flex"><User className="h-[18px] w-[18px]" /></button>
          <button aria-label="Cart" onClick={() => setOpen(true)} className="p-2 hover:text-gold transition relative">
            <ShoppingBag className="h-[18px] w-[18px]" />
            {count > 0 && <span className="absolute -top-0.5 -right-0.5 text-[10px] bg-gold text-primary rounded-full h-4 w-4 flex items-center justify-center">{count}</span>}
          </button>
          <button aria-label="Menu" onClick={() => setMenu(true)} className="p-2 lg:hidden"><Menu className="h-[18px] w-[18px]" /></button>
        </div>
      </div>

      {menu && (
        <div className="fixed inset-0 z-50 bg-background text-foreground lg:hidden">
          <div className="flex justify-end p-6"><button onClick={() => setMenu(false)}><X /></button></div>
          <nav className="flex flex-col items-center gap-6 mt-8 text-sm uppercase tracking-luxe">
            {nav.map((n, i) => (
              <Link key={i} to={n.to} onClick={() => setMenu(false)} className="hover:text-gold">{n.label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;