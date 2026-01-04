import { CheckCircle, Car, FileCheck, Handshake, Clock, MapPin } from "lucide-react";

const features = [
  {
    icon: Car,
    title: "Große Auswahl",
    description: "Breites Sortiment an Marken und Modellen für jeden Bedarf und jedes Budget.",
  },
  {
    icon: FileCheck,
    title: "Geprüfte Fahrzeuge",
    description: "Jedes Fahrzeug wird vor dem Verkauf gründlich geprüft und aufbereitet.",
  },
  {
    icon: Handshake,
    title: "Faire Preise",
    description: "Transparente Preisgestaltung ohne versteckte Kosten oder Überraschungen.",
  },
  {
    icon: Clock,
    title: "Schnelle Abwicklung",
    description: "Unkomplizierte Kaufabwicklung und zeitnahe Fahrzeugübergabe.",
  },
  {
    icon: MapPin,
    title: "Standort Hamburg",
    description: "Persönliche Beratung vor Ort oder bequem online von überall.",
  },
  {
    icon: CheckCircle,
    title: "Zufriedenheitsgarantie",
    description: "Ihre Zufriedenheit steht bei uns an erster Stelle.",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Warum Nordic-Automobile?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir bieten Ihnen einen rundum sorglosen Autokauf mit persönlicher Betreuung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-card rounded-lg border shadow-soft card-hover"
            >
              <div className="p-3 rounded-full bg-accent/10 w-fit mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
