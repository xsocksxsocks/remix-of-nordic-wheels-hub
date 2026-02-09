import nordicLogo from "@/assets/nordic-logo-new.png";
import { Wrench, Mail, Phone } from "lucide-react";

const Maintenance = () => {
  return (
    <div className="min-h-screen bg-nordic-gradient flex items-center justify-center p-6">
      <div className="max-w-lg w-full text-center text-white">
        <img src={nordicLogo} alt="Nordic Automobile" className="h-20 mx-auto mb-10" />

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
          <Wrench className="h-16 w-16 mx-auto mb-6 text-accent animate-pulse" />

          <h1 className="text-3xl font-bold mb-3 tracking-tight">
            Wartungsarbeiten
          </h1>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Wir arbeiten gerade an Verbesserungen für Sie. Unsere Seite ist in Kürze wieder verfügbar.
          </p>

          <div className="border-t border-white/20 pt-6 space-y-3 text-sm text-white/70">
            <p className="font-semibold text-white/90">Bei Fragen erreichen Sie uns:</p>
            <a href="tel:+4910000000" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4" />
              +49 100 000 00
            </a>
            <a href="mailto:kontakt@nordic.de" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              kontakt@nordic.de
            </a>
          </div>
        </div>

        <p className="mt-8 text-xs text-white/40">
          © {new Date().getFullYear()} Nordic Automobile. Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  );
};

export default Maintenance;
