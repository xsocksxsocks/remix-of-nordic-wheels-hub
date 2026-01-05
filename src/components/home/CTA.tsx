import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dreamCar from "@/assets/dream-car.jpg";

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="rounded-2xl overflow-hidden relative">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={dreamCar} 
              alt="Traumauto auf Landstraße" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
          </div>
          
          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Finden Sie Ihr Traumauto
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Stöbern Sie durch unseren aktuellen Fahrzeugbestand und entdecken Sie geprüfte Gebrauchtwagen zu fairen Preisen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-hero">
                <Link to="/fahrzeuge">
                  Fahrzeuge ansehen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="btn-hero-outline">
                <Link to="/kontakt">
                  Kontakt aufnehmen
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
