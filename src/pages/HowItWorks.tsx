import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, CreditCard, Truck, ThumbsUp, Car, Shield, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Bestellung",
      subtitle: "Wo Sie das perfekte Auto finden",
      description: "Wir bieten eine breite Palette an Marken und Modellen an. Unser Online-Angebot ermöglicht es Ihnen, jedes Auto mit detaillierten Fotos zu betrachten. Sie sind herzlich eingeladen, uns persönlich zu besuchen und Ihren Kauf vor Ort abzuschließen.",
      features: ["100+ Autos auf Lager", "Geprüft & aufbereitet"],
    },
    {
      icon: CreditCard,
      title: "Bezahlung",
      subtitle: "Hier entscheiden Sie, wie Sie bezahlen wollen",
      description: "Keine versteckten Gebühren und Optionen für jeden! Möchten Sie den gesamten Betrag mit einer einzigen Zahlung begleichen? Nach erfolgreicher Überprüfung können Sie bei Übergabe per Banküberweisung zahlen. Wir bieten auch Finanzierungsoptionen an.",
      features: ["Flexible Zahlungsoptionen", "Inzahlungnahme möglich"],
    },
    {
      icon: Truck,
      title: "Lieferung",
      subtitle: "Wie Sie Ihr Auto entgegennehmen möchten",
      description: "Bei Nordic bieten wir für alle Autos bequeme Liefer- und Abholmöglichkeiten an. Sie können Ihr Fahrzeug bei uns abholen oder wir liefern es direkt zu Ihnen nach Hause. Vor der Auslieferung bereiten wir alle Papiere vor und reinigen Ihr Auto gründlich.",
      features: ["Lieferung nach Hause", "Abholung vor Ort möglich"],
    },
    {
      icon: ThumbsUp,
      title: "Zufriedenheit",
      subtitle: "Nur wenn Sie glücklich sind, haben wir einen Deal",
      description: "Wir wollen sicherstellen, dass Sie mit Ihrem neuen Auto ein ideales Erlebnis haben. Wir sind immer bereit, Sie zu unterstützen. Mit unserer Geld-zurück-Garantie können Sie Ihr Auto 21 Tage lang testen und richtig kennenlernen.",
      features: ["Garantie inklusive", "21 Tage Geld-zurück-Garantie"],
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-nordic-gradient py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Alles klar beim Autokauf – so funktioniert's!
            </h1>
            <p className="text-lg text-white/90">
              Unser Team steht Ihnen jederzeit zur Verfügung, um Ihnen beim Autokauf zu helfen. 
              Egal ob Sie bequem von zu Hause aus kaufen möchten oder uns persönlich besuchen wollen – 
              wir haben alles im Griff. Unser Ziel ist es, sicherzustellen, dass Sie Ihren nächsten 
              Gebrauchtwagen auf eine bequeme, sichere und geschützte Weise kaufen können.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Wie es funktioniert</h2>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-primary font-semibold">Schritt {index + 1}</span>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                    </div>
                  </div>
                  <h4 className="text-xl text-muted-foreground mb-4">{step.subtitle}</h4>
                  <p className="text-foreground/80 mb-6">{step.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {step.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                    <step.icon className="h-24 w-24 text-muted-foreground/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nordic */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Warum Nordic wählen?</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Weil wir Ihren Gebrauchtwagenkauf ganz einfach gestalten! Mit einem erstklassigen Bestand, 
            fairer Preisgestaltung und persönlicher Beratung haben wir viele Möglichkeiten für Sie.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Zufriedene Kunden</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Autos verkauft</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">Hamburg</div>
              <div className="text-muted-foreground">Standort in Deutschland</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/fahrzeuge">Fahrzeuge ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;
