import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/fahrzeuge", label: "Auto kaufen" },
    { href: "/so-funktionierts", label: "So funktioniert's" },
    { href: "/lieferung-garantie", label: "Lieferung & Garantie" },
    { href: "/qualitaet", label: "Unsere Qualitätsstandards" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-nordic-gradient shadow-md">
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-extrabold text-white tracking-tight">NORDIC</span>
            <span className="text-2xl font-light text-white/90 ml-2 tracking-wide">AUTOMOBILE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(link.href) ? "text-white bg-white/20" : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side - Contact & Menu */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+4910000000"
              className="hidden md:flex items-center gap-2 text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>+49 100 000 00</span>
            </a>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="container py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.href) ? "text-white bg-white/20" : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+4910000000"
              className="flex items-center gap-2 px-4 py-3 text-white/90 hover:text-white transition-colors text-sm font-medium"
            >
              <Phone className="h-4 w-4" />
              <span>+49 100 000 00</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
