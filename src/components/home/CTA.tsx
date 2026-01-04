import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="bg-nordic-gradient rounded-2xl overflow-hidden">
          <div className="px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-xl mb-6">
              <Car className="h-8 w-8 text-white" />
            </div>
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
