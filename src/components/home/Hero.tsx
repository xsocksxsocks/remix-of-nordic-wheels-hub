import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Truck, ThumbsUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-nordic-gradient min-h-[600px] flex items-center">
      {/* Background overlay with pattern */}
      <div className="absolute inset-0 bg-hero-overlay" />
      
      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in">
            Ihr zuverlässiger Partner für{" "}
            <span className="text-accent">Gebrauchtwagen</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl" style={{ animationDelay: "0.1s" }}>
            Nordic-Automobile – Qualitätsfahrzeuge für Privat- und Geschäftskunden in Hamburg und deutschlandweit.
            Persönliche Beratung, geprüfte Qualität und faire Preise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="btn-hero">
              <Link to="/fahrzeuge">
                Fahrzeuge ansehen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-hero-outline">
              <Link to="/kontakt">
                Beratung anfordern
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-accent/20">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-primary-foreground">Geprüfte Qualität</div>
                <div className="text-sm text-primary-foreground/70">Jedes Fahrzeug inspiziert</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-accent/20">
                <Truck className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-primary-foreground">Lieferung möglich</div>
                <div className="text-sm text-primary-foreground/70">Deutschlandweit</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-accent/20">
                <ThumbsUp className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-primary-foreground">B2B & Privat</div>
                <div className="text-sm text-primary-foreground/70">Für jeden Kunden</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
