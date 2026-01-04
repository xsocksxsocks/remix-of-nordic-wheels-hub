import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding bg-nordic-gradient">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Interesse geweckt?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Kontaktieren Sie uns für eine persönliche Beratung. Wir finden das passende Fahrzeug für Sie – ob privat oder gewerblich.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/kontakt">
                Kontaktformular
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-hero-outline">
              <a href="tel:+4910000000">
                <Phone className="mr-2 h-5 w-5" />
                Anrufen
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
            <Mail className="h-4 w-4" />
            <a href="mailto:kontakt@nordic.de" className="hover:text-accent transition-colors">
              kontakt@nordic.de
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
