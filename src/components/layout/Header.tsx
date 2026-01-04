import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Startseite" },
    { href: "/fahrzeuge", label: "Fahrzeugbestand" },
    { href: "/so-funktionierts", label: "So funktioniert's" },
    { href: "/lieferung", label: "Lieferung" },
    { href: "/garantie", label: "Garantie" },
    { href: "/qualitaet", label: "Qualität" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+4910000000" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+49 100 000 00</span>
            </a>
            <a href="mailto:kontakt@nordic.de" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">kontakt@nordic.de</span>
            </a>
          </div>
          <div className="text-xs text-primary-foreground/80">
            Für Privat- & Geschäftskunden
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card border-b shadow-soft">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold text-primary">Nordic</span>
              <span className="text-xs tracking-wider text-muted-foreground -mt-1">AUTOMOBILE</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(link.href)
                    ? "text-accent bg-accent/10"
                    : "text-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-card">
            <div className="container py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-accent bg-accent/10"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
