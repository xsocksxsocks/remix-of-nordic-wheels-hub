import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Das ist Nordic */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-accent">Das ist Nordic</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link to="/so-funktionierts" className="hover:text-accent transition-colors">
                  So funktioniert's
                </Link>
              </li>
              <li>
                <Link to="/qualitaet" className="hover:text-accent transition-colors">
                  Qualitätsstandard
                </Link>
              </li>
              <li>
                <Link to="/fahrzeuge" className="hover:text-accent transition-colors">
                  Fahrzeugbestand
                </Link>
              </li>
            </ul>
          </div>

          {/* Vorteile */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-accent">Vorteile</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link to="/garantie" className="hover:text-accent transition-colors">
                  Geld-zurück-Garantie
                </Link>
              </li>
              <li>
                <Link to="/lieferung" className="hover:text-accent transition-colors">
                  Lieferung & Übergabe
                </Link>
              </li>
              <li>
                <Link to="/qualitaet" className="hover:text-accent transition-colors">
                  Geprüfte Qualität
                </Link>
              </li>
            </ul>
          </div>

          {/* Hilfe & Service */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-accent">Hilfe & Service</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>
                <Link to="/kontakt" className="hover:text-accent transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:text-accent transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-accent transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontaktdaten */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-accent">Kontakt</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>
                  Ellernreihe 59, c/o Lenart<br />
                  D-22179 Hamburg
                </span>
              </li>
              <li>
                <a href="tel:+4910000000" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                  +49 100 000 00
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@nordic.de" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                  kontakt@nordic.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-primary-foreground">Nordic-Automobile</span>
              <span>cnr GmbH</span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/impressum" className="hover:text-accent transition-colors">
                Impressum
              </Link>
              <span>|</span>
              <Link to="/datenschutz" className="hover:text-accent transition-colors">
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
