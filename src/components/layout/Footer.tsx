import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nordic-gradient text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Das ist Nordic */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide text-accent">Das ist Nordic</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link to="/so-funktionierts" className="hover:text-white transition-colors">
                  So funktioniert's
                </Link>
              </li>
              <li>
                <Link to="/qualitaet" className="hover:text-white transition-colors">
                  Qualitätsstandard
                </Link>
              </li>
              <li>
                <Link to="/fahrzeuge" className="hover:text-white transition-colors">
                  Fahrzeugbestand
                </Link>
              </li>
            </ul>
          </div>

          {/* Vorteile */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide text-accent">Vorteile</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link to="/garantie" className="hover:text-white transition-colors">
                  21-Tage Geld-zurück-Garantie
                </Link>
              </li>
              <li>
                <Link to="/lieferung" className="hover:text-white transition-colors">
                  Lieferung & Übergabe
                </Link>
              </li>
              <li>
                <Link to="/qualitaet" className="hover:text-white transition-colors">
                  Geprüfte Qualität
                </Link>
              </li>
            </ul>
          </div>

          {/* Hilfe & Service */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide text-accent">Hilfe & Service</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link to="/kontakt" className="hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/impressum" className="hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontaktdaten */}
          <div>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wide text-accent">Kontakt</h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>
                  Ellernreihe 59, c/o Lenart<br />
                  D-22179 Hamburg
                </span>
              </li>
              <li>
                <a href="tel:+4910000000" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                  +49 100 000 00
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@nordic.de" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                  kontakt@nordic.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span className="text-lg font-extrabold text-white tracking-tight">NORDIC</span>
              <span className="text-lg font-light text-white/90 tracking-wide">AUTOMOBILE</span>
            </div>
            <div className="flex items-center gap-6">
              <Link to="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors">
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
