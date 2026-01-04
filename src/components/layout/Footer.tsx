import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Das ist Nordic */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide">Das ist Nordic</h3>
            <ul className="space-y-3 text-sm text-accent-foreground/80">
              <li>
                <Link to="/so-funktionierts" className="hover:text-primary transition-colors">
                  So funktioniert's
                </Link>
              </li>
              <li>
                <Link to="/qualitaet" className="hover:text-primary transition-colors">
                  Qualitätsstandard
                </Link>
              </li>
              <li>
                <Link to="/fahrzeuge" className="hover:text-primary transition-colors">
                  Fahrzeugbestand
                </Link>
              </li>
            </ul>
          </div>

          {/* Vorteile */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide">Vorteile</h3>
            <ul className="space-y-3 text-sm text-accent-foreground/80">
              <li>
                <Link to="/garantie" className="hover:text-primary transition-colors">
                  21-Tage Geld-zurück-Garantie
                </Link>
              </li>
              <li>
                <Link to="/lieferung" className="hover:text-primary transition-colors">
                  Lieferung & Übergabe
                </Link>
              </li>
              <li>
                <Link to="/qualitaet" className="hover:text-primary transition-colors">
                  Geprüfte Qualität
                </Link>
              </li>
            </ul>
          </div>

          {/* Hilfe & Service */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide">Hilfe & Service</h3>
            <ul className="space-y-3 text-sm text-accent-foreground/80">
              <li>
                <Link to="/kontakt" className="hover:text-primary transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:text-primary transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-primary transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontaktdaten */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide">Kontakt</h3>
            <ul className="space-y-3 text-sm text-accent-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  Ellernreihe 59, c/o Lenart<br />
                  D-22179 Hamburg
                </span>
              </li>
              <li>
                <a href="tel:+4910000000" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                  +49 100 000 00
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@nordic.de" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary" />
                  kontakt@nordic.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-accent-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-accent-foreground/60">
            <div className="flex items-center gap-2">
              <div className="bg-primary rounded px-2 py-1">
                <span className="font-bold text-primary-foreground text-xs">NORDIC</span>
              </div>
              <span>Nordic-Automobile cnr GmbH</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/impressum" className="hover:text-primary transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-primary transition-colors">
                Datenschutz
              </Link>
            </div>
            <div>
              © {new Date().getFullYear()} Alle Rechte vorbehalten
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
