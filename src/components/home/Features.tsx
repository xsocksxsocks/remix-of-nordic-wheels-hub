import { Shield, Truck, RotateCcw, CheckCircle2, Star, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Shield,
    title: "Geprüfte Qualität",
    description: "Jedes Fahrzeug durchläuft eine umfassende Qualitätsprüfung mit über 200 Checkpunkten.",
    link: "/qualitaet",
  },
  {
    icon: RotateCcw,
    title: "21-Tage Geld-zurück",
    description: "Nicht zufrieden? Geben Sie das Fahrzeug innerhalb von 21 Tagen zurück – ohne Wenn und Aber.",
    link: "/garantie",
  },
  {
    icon: Truck,
    title: "Lieferung deutschlandweit",
    description: "Wir liefern Ihr Traumauto direkt vor Ihre Haustür – bequem und sicher.",
    link: "/lieferung",
  },
  {
    icon: Headphones,
    title: "Persönliche Beratung",
    description: "Unsere Experten stehen Ihnen bei allen Fragen zur Seite – vor und nach dem Kauf.",
    link: "/kontakt",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Warum Nordic-Automobile?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir machen den Autokauf einfach, transparent und sicher – für jeden Kunden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md hover:border-primary transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">B2B & Privat</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-6 w-6 text-primary fill-primary" />
              <span className="font-semibold text-foreground">Zufriedene Kunden</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">Sichere Abwicklung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
