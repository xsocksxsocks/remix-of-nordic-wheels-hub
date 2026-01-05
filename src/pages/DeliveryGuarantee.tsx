import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, Clock, FileText, Phone, CheckCircle, Shield, RotateCcw, Banknote, AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DeliveryGuarantee = () => {
  const deliveryFaqs = [
    {
      question: "Zu welchen Zeiten erfolgt die Lieferung?",
      answer: "Die aktiven Lieferzeiten sind 8:30 bis 17:30 Uhr, Montag bis Samstag, außer an Feiertagen.",
    },
    {
      question: "Was muss ich zur Übergabe mitbringen?",
      answer: "Sie brauchen nur Ihren Personalausweis und bei Zahlung bei Übergabe Zugang zu Ihrem Online-Banking-Konto.",
    },
    {
      question: "Was muss ich am Tag der Lieferung beachten?",
      answer: "Der Fahrer wird Sie anrufen, sobald er unterwegs ist, um Ihnen seine voraussichtliche Ankunftszeit mitzuteilen. Bitte sorgen Sie dafür, dass genügend Platz zum Parken und Abladen vorhanden ist.",
    },
    {
      question: "Fallen für die Lieferung und Übergabe Kosten an?",
      answer: "Die Kosten variieren je nach Entfernung. Abholung bei uns ist kostenlos. Lieferung nach Hause je nach Entfernung zwischen €99 und €399.",
    },
  ];

  const guaranteeFaqs = [
    {
      question: "Wer kann die 21-Tage-Geld-zurück-Garantie nutzen?",
      answer: "Die Garantie ist für Privatkäufer verfügbar. Autohändler sind nicht berechtigt.",
    },
    {
      question: "Wie lange gilt die Garantie?",
      answer: "Die Garantie ist immer 21 Tage ab dem Liefer- oder Abholdatum gültig.",
    },
    {
      question: "Gibt es eine Kilometerbegrenzung für die Rückgabe?",
      answer: "Sie können bis zu 500 km kostenlos fahren. Für Kilometerstände zwischen 500 und 1.000 km fällt eine Gebühr von €0,50 pro Kilometer an. Wenn Sie insgesamt mehr als 1.000 km fahren, ist das Auto nicht mehr rückgabeberechtigt.",
    },
    {
      question: "Was wird erstattet und wann erhalte ich es?",
      answer: "Sie erhalten eine 100%ige Rückerstattung des Rechnungsbetrags, einschließlich aller Steuern und Gebühren. Rückerstattungen werden innerhalb von 10 Werktagen nach Erhalt und Inspektion des Autos bearbeitet.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-nordic-gradient py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lieferung & Garantie
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Wir liefern Ihr Traumauto direkt zu Ihnen – und mit unserer 21-Tage-Geld-zurück-Garantie 
              kaufen Sie komplett risikofrei.
            </p>
            <Button asChild size="lg" className="btn-hero">
              <Link to="/fahrzeuge">Finde dein Auto</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Guarantee Benefits */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">21-Tage-Geld-zurück-Garantie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Risikofreier Kauf</h3>
              <p className="text-muted-foreground">21 Tage Zeit zum Testen</p>
            </div>
            <div className="text-center p-6">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                <RotateCcw className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Einfache Rückgabe</h3>
              <p className="text-muted-foreground">Unkomplizierte Abwicklung</p>
            </div>
            <div className="text-center p-6">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                <Banknote className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Volle Rückerstattung</h3>
              <p className="text-muted-foreground">100% Geld zurück</p>
            </div>
          </div>
        </div>
      </section>

      {/* How Guarantee works */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            So funktioniert die Garantie
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-bold mb-4">21-tägige Probefahrt</h3>
              <p className="text-muted-foreground">
                Sie haben 21 Tage ab der Schlüsselübergabe, um Ihr Auto wirklich kennenzulernen. 
                Nutzen Sie es für Ihren täglichen Arbeitsweg oder Wochenendausflüge.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">Nicht die perfekte Wahl?</h3>
              <p className="text-muted-foreground">
                Wenn das Auto nicht das Richtige für Sie ist, lassen Sie es uns einfach innerhalb 
                der 21 Tage wissen. Wir vereinbaren einen passenden Termin zur Rückgabe.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">Schnelle Rückerstattung</h3>
              <p className="text-muted-foreground">
                Sobald wir das Auto erhalten haben, inspizieren wir es und veranlassen die 
                100%ige Rückerstattung innerhalb von 10 Werktagen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Kilometer- und Zustandsregeln</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-card rounded-xl border">
              <h3 className="text-xl font-bold mb-4">Kilometerstand</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">0–500 km: Kostenlos</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">500–1.000 km: €0,50 pro Kilometer</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Über 1.000 km: Garantie ungültig</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-card rounded-xl border">
              <h3 className="text-xl font-bold mb-4">Zustand</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Auto mit allen erhaltenen Gegenständen zurückgeben</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Über neue Schäden informieren</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Inspektion bei der Rückgabe</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Preparation */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Lieferung & Übergabe</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-foreground mb-6">
                Wenn Sie Ihr Auto bei uns bestellen, beginnen wir sofort, Ihr neues Auto für die Lieferung 
                vorzubereiten. Dies dauert in der Regel zwischen 3 Tagen und einer Woche.
              </p>
              <p className="text-foreground mb-6">
                Wir informieren Sie sofort per E-Mail, wenn das konkrete Zeitfenster für Ihre Übergabe feststeht, 
                egal ob Sie sich für die Abholung oder die Lieferung nach Hause entschieden haben.
              </p>
              <p className="text-foreground">
                Bei der Übergabe zeigt Ihnen unser Experte alle Details Ihres neuen Autos und beantwortet 
                alle Fragen. Er geht ein Übergabeprotokoll durch und erklärt Ihnen alle Funktionen.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-xl flex items-start gap-4 border">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Schnelle Bearbeitung</h4>
                  <p className="text-sm text-muted-foreground">Vorbereitung in 3-7 Tagen</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-xl flex items-start gap-4 border">
                <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Alle Papiere vorbereitet</h4>
                  <p className="text-sm text-muted-foreground">Vollständige Dokumentation</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-xl flex items-start gap-4 border">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Fahrzeug gereinigt</h4>
                  <p className="text-sm text-muted-foreground">Innen und außen aufbereitet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Lieferoptionen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-xl border shadow-sm">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lieferung nach Hause</h3>
              <p className="text-muted-foreground mb-4">
                Wir liefern das Fahrzeug direkt an Ihre Adresse. Einer unserer Experten nimmt die Übergabe vor.
              </p>
              <div className="text-lg font-semibold text-primary">Ab €99 je nach Entfernung</div>
            </div>
            
            <div className="p-8 bg-card rounded-xl border shadow-sm">
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Abholung vor Ort</h3>
              <p className="text-muted-foreground mb-4">
                Holen Sie Ihr Fahrzeug bei uns in Hamburg ab. Wir führen die Übergabe vor Ort durch.
              </p>
              <div className="text-lg font-semibold text-primary">Kostenlos</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Häufig gestellte Fragen</h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Zur Lieferung</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {deliveryFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`delivery-${index}`} className="bg-card rounded-xl border px-6">
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
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Zur Garantie</h3>
              <Accordion type="single" collapsible className="space-y-4">
                {guaranteeFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`guarantee-${index}`} className="bg-card rounded-xl border px-6">
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
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-nordic-gradient">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Kaufen Sie mit Vertrauen!
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Mit unserer 21-Tage-Geld-zurück-Garantie und flexiblen Lieferoptionen gehen Sie kein Risiko ein.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/fahrzeuge">Alle Autos ansehen</Link>
            </Button>
            <Button asChild size="lg" className="btn-hero-outline">
              <a href="tel:+4910000000">
                <Phone className="mr-2 h-5 w-5" />
                Anrufen
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DeliveryGuarantee;
