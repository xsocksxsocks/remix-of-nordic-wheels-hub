import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Wrench, Camera, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Quality = () => {
  const qualityPromises = [
    "Alle angebotenen Autos sind aus unserem eigenen Bestand",
    "Jedes Fahrzeug wird von unseren KFZ-Experten geprüft & rundum aufbereitet",
    "Garantie inklusive",
    "21 Tage Geld-Zurück-Garantie bei Nichtgefallen",
    "Mindestens 100 Tage service-frei bei der Auslieferung",
    "Mindestprofiltiefe für Reifen garantiert",
  ];

  const process = [
    {
      icon: Eye,
      title: "Auswahl",
      description: "Wir wählen jedes unserer Fahrzeuge sorgfältig aus, um sicherzustellen, dass es unseren hohen Anforderungen entspricht. Bevor wir ein Fahrzeug annehmen, führen unsere Experten eine gründliche Prüfung durch. Fahrzeuge mit schweren Schäden lehnen wir ab.",
    },
    {
      icon: Shield,
      title: "Prüfung",
      description: "Jedes Fahrzeug wird einer detaillierten optischen und technischen Prüfung unterzogen. Technische Mängel werden für eine professionelle Reparatur gekennzeichnet. Optische Makel werden zur Aufarbeitung ausgewählt oder entsprechend dokumentiert.",
    },
    {
      icon: Wrench,
      title: "Wartung",
      description: "Basierend auf unserer Inspektion bereiten wir unsere Fahrzeuge rundum auf. Wir bieten alle notwendigen Dienstleistungen und technischen Reparaturen an, damit Sie volles Vertrauen in den Zustand und die Sicherheit haben können.",
    },
    {
      icon: Camera,
      title: "Präsentation",
      description: "Nach der Aufarbeitung präsentieren wir Ihnen jedes Fahrzeug inklusive aller Details. Sollten noch optische Gebrauchsspuren vorhanden sein, wird das transparent dargestellt. So können Sie das Auto in Ruhe erkunden.",
    },
  ];

  const faqs = [
    {
      question: "Wem gehören die Autos von Nordic?",
      answer: "Nordic gehören alle Autos, die Sie in unserem Angebot finden. So können wir deren einwandfreien Zustand sicherstellen und Ihnen das beste Kauferlebnis bieten.",
    },
    {
      question: "Gibt es Garantie auf einen Gebrauchtwagen?",
      answer: "Ja, alle Autos von Nordic enthalten eine Garantie. Wir besprechen die Details gerne mit Ihnen.",
    },
    {
      question: "Wie bin ich abgesichert, wenn ich bei Nordic ein Auto kaufe?",
      answer: "Sie können das Auto vorab besichtigen oder alle Details online einsehen. Bei der Übergabe erhalten Sie ein Übergabeprotokoll, das den aktuellen Zustand bestätigt. Und sollte das Auto nicht Ihren Erwartungen entsprechen, können Sie es innerhalb von 21 Tagen nach der Übergabe zurückgeben.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-nordic-gradient py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nordic-Qualitätsstandard
            </h1>
            <p className="text-lg text-white/90">
              Bei Nordic verkaufen wir nur Autos, die wir vorher einer gründlichen Prüfung unterzogen haben. 
              Unten finden Sie unsere Qualitätsstandards im Detail erklärt und wie wir Abnutzung und 
              Verschleiß von Gebrauchsspuren unterscheiden.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Condition */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Visueller Zustand des Autos</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-foreground mb-6">
                Unsere Experten untersuchen den Zustand jedes Autos. Da wir gebrauchte Autos verkaufen, 
                können einige altersentsptrechende Gebrauchsspuren und Abnutzungserscheinungen vorkommen.
              </p>
              <p className="text-foreground mb-6">
                Jedoch zeigen wir alle Gebrauchsspuren, die über eine normale Abnutzung hinausgehen 
                und aus 2 Metern Entfernung sichtbar sind, transparent auf.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-xl">
                  <h4 className="font-semibold mb-2">Äußeres</h4>
                  <p className="text-sm text-muted-foreground">Kratzer, Dellen und Steinschläge werden dokumentiert</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h4 className="font-semibold mb-2">Innenraum</h4>
                  <p className="text-sm text-muted-foreground">Kratzer, Flecken, Beschädigungen und abgenutzte Stellen</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h4 className="font-semibold mb-2">Windschutzscheibe</h4>
                  <p className="text-sm text-muted-foreground">Kratzer und Steinschläge</p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h4 className="font-semibold mb-2">Reifen und Felgen</h4>
                  <p className="text-sm text-muted-foreground">Kratzer oder Schrammen</p>
                </div>
              </div>
            </div>
            
            <div className="bg-muted rounded-xl aspect-square flex items-center justify-center">
              <Eye className="h-32 w-32 text-muted-foreground/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Nordic-Qualitätsversprechen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {qualityPromises.map((promise, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-xl border">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{promise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            So stellen wir Qualität und Transparenz sicher
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Jedes Fahrzeug durchläuft unseren strengen Qualitätsprozess
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Häufig gestellte Fragen</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-nordic-gradient">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-white font-semibold">Garantie inklusive</div>
            </div>
            <div className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-white font-semibold">21 Tage Geld-zurück-Garantie</div>
            </div>
            <div className="text-center p-6">
              <Wrench className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-white font-semibold">Geprüft und aufbereitet</div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Kaufen Sie mit Vertrauen!
            </h2>
            <Button asChild size="lg" className="btn-hero">
              <Link to="/fahrzeuge">Alle Autos ansehen</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
