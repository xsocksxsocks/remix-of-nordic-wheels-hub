import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Wrench, Camera, CheckCircle, Gauge, ClipboardCheck, Sparkles, Car } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import workshopImage from "@/assets/workshop-inspection.jpg";
import tireInspectionImage from "@/assets/tire-inspection.jpg";
import carPreparationImage from "@/assets/car-preparation.jpg";
import conditionDocImage from "@/assets/condition-documentation.jpg";

const Quality = () => {
  const qualityPromises = [
    "Alle angebotenen Autos sind aus unserem eigenen Bestand",
    "Jedes Fahrzeug wird von unseren KFZ-Experten geprüft & rundum aufbereitet",
    "Garantie inklusive",
    "21 Tage Geld-Zurück-Garantie bei Nichtgefallen",
    "Mindestens 100 Tage service-frei bei der Auslieferung",
    "Mindestprofiltiefe von 4mm für alle Reifen garantiert",
  ];

  const inspectionPoints = [
    "Motor und Getriebe",
    "Bremsen und Bremsbeläge",
    "Fahrwerk und Lenkung",
    "Auspuffanlage",
    "Klimaanlage",
    "Elektrik und Beleuchtung",
    "Ölstand und Flüssigkeiten",
    "Batterie und Ladezustand",
  ];

  const process = [
    {
      icon: ClipboardCheck,
      title: "Technische Prüfung",
      description: "Umfassende Inspektion nach Herstellervorgaben. Alle Komponenten werden systematisch geprüft – von Motor über Bremsen bis zur Elektronik.",
    },
    {
      icon: Eye,
      title: "Optische Kontrolle",
      description: "Detaillierte Begutachtung von Lack, Karosserie und Innenraum. Alle sichtbaren Gebrauchsspuren werden dokumentiert und transparent dargestellt.",
    },
    {
      icon: Gauge,
      title: "Reifenprüfung",
      description: "Messung der Profiltiefe an allen Reifen. Wir garantieren mindestens 4mm Restprofil – unter diesem Wert werden Reifen ersetzt.",
    },
    {
      icon: Sparkles,
      title: "Professionelle Aufbereitung",
      description: "Gründliche Innen- und Außenreinigung, Lackpflege, Innenraumreinigung und Desinfektion für ein Fahrzeug wie neu.",
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
      question: "Was bedeutet die 4mm Mindestprofiltiefe?",
      answer: "Wir messen die Profiltiefe jedes Reifens. Liegt sie unter 4mm, werden die Reifen vor der Übergabe ausgetauscht – ohne Aufpreis für Sie.",
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
              Bei Nordic verkaufen wir nur Autos, die wir vorher einer gründlichen Prüfung nach 
              Herstellervorgaben unterzogen haben. Jedes Fahrzeug wird technisch und optisch geprüft, 
              professionell aufbereitet und mit Mindestprofiltiefe garantiert.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="section-padding">
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
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">
            Unser Prüf- und Aufbereitungsprozess
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Jedes Fahrzeug durchläuft unseren strengen 4-Stufen-Qualitätsprozess
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center bg-card p-6 rounded-xl border">
                <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-2">{index + 1}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Inspection Details */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Technische Prüfung nach Herstellervorgaben</h2>
              <p className="text-foreground mb-6">
                Unsere KFZ-Meister prüfen jedes Fahrzeug nach den Vorgaben des Herstellers. 
                Das bedeutet: Alle Komponenten werden systematisch kontrolliert und bei Bedarf 
                instandgesetzt oder ausgetauscht.
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {inspectionPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden aspect-video lg:aspect-square">
              <img 
                src={workshopImage} 
                alt="Professionelle Fahrzeugprüfung in der Werkstatt" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tire Inspection */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden aspect-video lg:aspect-square">
              <img 
                src={tireInspectionImage} 
                alt="Reifenprüfung mit Profiltiefenmessung" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Mindestprofiltiefe garantiert</h2>
              <p className="text-foreground mb-6">
                Sicherheit hat Priorität. Deshalb messen wir bei jedem Fahrzeug die Profiltiefe 
                aller vier Reifen. Unsere Garantie:
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-card rounded-xl border flex items-start gap-4">
                  <div className="text-3xl font-bold text-primary">4mm</div>
                  <div>
                    <h4 className="font-semibold">Mindestprofiltiefe</h4>
                    <p className="text-sm text-muted-foreground">
                      Alle Reifen haben mindestens 4mm Restprofil bei Übergabe
                    </p>
                  </div>
                </div>
                
                <div className="p-4 bg-card rounded-xl border flex items-start gap-4">
                  <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Kostenloser Austausch</h4>
                    <p className="text-sm text-muted-foreground">
                      Reifen unter 4mm werden vor der Übergabe ohne Aufpreis ersetzt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Preparation */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professionelle Aufbereitung</h2>
              <p className="text-foreground mb-6">
                Bevor ein Fahrzeug zu Ihnen kommt, wird es von unseren Spezialisten 
                professionell aufbereitet – innen und außen.
              </p>
              
              <div className="space-y-4">
                <div className="p-4 bg-muted rounded-xl">
                  <h4 className="font-semibold mb-2">Außenaufbereitung</h4>
                  <p className="text-sm text-muted-foreground">
                    Gründliche Wäsche, Lackpflege, Felgenreinigung und Versiegelung
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h4 className="font-semibold mb-2">Innenraumreinigung</h4>
                  <p className="text-sm text-muted-foreground">
                    Tiefenreinigung aller Oberflächen, Polster und Teppiche
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h4 className="font-semibold mb-2">Desinfektion</h4>
                  <p className="text-sm text-muted-foreground">
                    Hygienische Reinigung und Geruchsneutralisierung
                  </p>
                </div>
                <div className="p-4 bg-muted rounded-xl">
                  <h4 className="font-semibold mb-2">Motorwäsche</h4>
                  <p className="text-sm text-muted-foreground">
                    Reinigung des Motorraums für bessere Übersicht
                  </p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden aspect-video lg:aspect-square">
              <img 
                src={carPreparationImage} 
                alt="Professionelle Fahrzeugaufbereitung" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Condition */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Transparente Zustandsdokumentation</h2>
          
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
                <div className="p-4 bg-card rounded-xl border">
                  <h4 className="font-semibold mb-2">Äußeres</h4>
                  <p className="text-sm text-muted-foreground">Kratzer, Dellen und Steinschläge werden dokumentiert</p>
                </div>
                <div className="p-4 bg-card rounded-xl border">
                  <h4 className="font-semibold mb-2">Innenraum</h4>
                  <p className="text-sm text-muted-foreground">Kratzer, Flecken, Beschädigungen und abgenutzte Stellen</p>
                </div>
                <div className="p-4 bg-card rounded-xl border">
                  <h4 className="font-semibold mb-2">Windschutzscheibe</h4>
                  <p className="text-sm text-muted-foreground">Kratzer und Steinschläge</p>
                </div>
                <div className="p-4 bg-card rounded-xl border">
                  <h4 className="font-semibold mb-2">Reifen und Felgen</h4>
                  <p className="text-sm text-muted-foreground">Kratzer, Schrammen und Profiltiefe</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden aspect-square">
              <img 
                src={conditionDocImage} 
                alt="Digitale Zustandsdokumentation mit Tablet" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6">
              <ClipboardCheck className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-white font-semibold">Nach Herstellervorgaben geprüft</div>
            </div>
            <div className="text-center p-6">
              <Gauge className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-white font-semibold">4mm Mindestprofil garantiert</div>
            </div>
            <div className="text-center p-6">
              <Sparkles className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-white font-semibold">Professionell aufbereitet</div>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <div className="text-white font-semibold">Garantie inklusive</div>
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
