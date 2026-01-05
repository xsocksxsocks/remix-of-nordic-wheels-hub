import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Clock, FileText, Phone, CheckCircle, Shield, RotateCcw, Banknote, AlertCircle, Car, Wrench } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DeliveryGuarantee = () => {
  const faqs = [
    {
      question: "Zu welchen Zeiten erfolgt die Lieferung?",
      answer: "Die aktiven Lieferzeiten sind 8:30 bis 17:30 Uhr, Montag bis Samstag, außer an Feiertagen.",
    },
    {
      question: "Was muss ich zur Übergabe mitbringen?",
      answer: "Sie brauchen nur Ihren Personalausweis und bei Zahlung bei Übergabe Zugang zu Ihrem Online-Banking-Konto.",
    },
    {
      question: "Wie lange dauert die Rückerstattung?",
      answer: "Nach Abholung des Fahrzeugs erhalten Sie die volle Rückerstattung innerhalb von 5 Werktagen.",
    },
    {
      question: "Welche Mängel berechtigen zur Rückgabe?",
      answer: "Fehlende Ausstattungsmerkmale, optische Mängel, technische Defekte oder jede Abweichung vom vertraglich vereinbarten Zustand berechtigen zur kostenlosen Rückgabe.",
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
              Jedes Fahrzeug wird optisch und technisch geprüft, professionell aufbereitet und 
              per Einzeltransport sicher zu Ihnen geliefert. Nicht zufrieden? Volle Rückerstattung.
            </p>
            <Button asChild size="lg" className="btn-hero">
              <Link to="/fahrzeuge">Finde dein Auto</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Unser Lieferablauf</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                <Wrench className="h-10 w-10 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">1</div>
              <h3 className="text-xl font-bold mb-2">Technische Prüfung</h3>
              <p className="text-muted-foreground">
                Umfassende technische Inspektion aller Fahrzeugkomponenten
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">2</div>
              <h3 className="text-xl font-bold mb-2">Optische Kontrolle</h3>
              <p className="text-muted-foreground">
                Detaillierte Begutachtung von Lack, Innenraum und Zustand
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                <Car className="h-10 w-10 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">3</div>
              <h3 className="text-xl font-bold mb-2">Professionelle Aufbereitung</h3>
              <p className="text-muted-foreground">
                Gründliche Reinigung innen und außen für perfekte Übergabe
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                <Truck className="h-10 w-10 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">4</div>
              <h3 className="text-xl font-bold mb-2">Einzeltransport</h3>
              <p className="text-muted-foreground">
                Sichere Anlieferung per geschlossenem Einzeltransporter
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Unsere Garantie</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Entspricht das Fahrzeug nicht dem vertraglich vereinbarten Zustand? 
            Kein Problem – Sie erhalten die volle Rückerstattung.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-card rounded-xl border">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rücktrittsrecht</h3>
              <p className="text-muted-foreground">
                Bei nicht vertragsgemäßem Zustand – kostenlose Rückabwicklung
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                <RotateCcw className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kostenlose Abholung</h3>
              <p className="text-muted-foreground">
                Wir holen das Fahrzeug bei Ihnen ab – ohne zusätzliche Kosten
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border">
              <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
                <Banknote className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Schnelle Erstattung</h3>
              <p className="text-muted-foreground">
                Volle Rückerstattung innerhalb von 5 Werktagen
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Return Conditions */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Rückgabebedingungen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-card rounded-xl border">
              <h3 className="text-xl font-bold mb-4">Rückgabegründe</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Fehlende Ausstattungsmerkmale</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Optische Mängel (Lack, Innenraum)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Technische Defekte</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Abweichung vom Vertragszustand</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-card rounded-xl border">
              <h3 className="text-xl font-bold mb-4">Kilometer-Abrechnung</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Mehr gefahrene Kilometer: <strong>€0,30 pro km</strong>
                  </span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-4">
                Für jeden zusätzlich gefahrenen Kilometer über den Stand bei Übergabe 
                wird eine Pauschale von €0,30 berechnet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            So läuft die Rückabwicklung
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-bold mb-4">Melden Sie den Mangel</h3>
              <p className="text-muted-foreground">
                Kontaktieren Sie uns und schildern Sie den nicht vertragsgemäßen Zustand. 
                Wir vereinbaren umgehend einen Abholtermin.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">Kostenlose Abholung</h3>
              <p className="text-muted-foreground">
                Wir holen das Fahrzeug bei Ihnen ab – ohne zusätzliche Kosten. 
                Die Kilometer-Pauschale wird ggf. verrechnet.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">Volle Rückerstattung</h3>
              <p className="text-muted-foreground">
                Sie erhalten Ihre vollständige Zahlung innerhalb von 5 Werktagen 
                nach Abholung zurück auf Ihr Konto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Lieferdetails</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-foreground mb-6">
                Nach Ihrer Bestellung bereiten wir das Fahrzeug sorgfältig vor. 
                Die technische und optische Prüfung sowie die Aufbereitung dauern 
                in der Regel 3-7 Werktage.
              </p>
              <p className="text-foreground mb-6">
                Die Anlieferung erfolgt per geschlossenem Einzeltransporter – 
                so kommt Ihr Fahrzeug sicher und geschützt bei Ihnen an.
              </p>
              <p className="text-foreground">
                Bei der Übergabe prüfen wir gemeinsam das Fahrzeug, gehen alle 
                Dokumente durch und beantworten Ihre Fragen.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-xl flex items-start gap-4 border">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Vorbereitungszeit</h4>
                  <p className="text-sm text-muted-foreground">3-7 Werktage für Prüfung und Aufbereitung</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-xl flex items-start gap-4 border">
                <Truck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Einzeltransport</h4>
                  <p className="text-sm text-muted-foreground">Geschützter Transport auf geschlossenem Anhänger</p>
                </div>
              </div>
              <div className="p-4 bg-card rounded-xl flex items-start gap-4 border">
                <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Vollständige Dokumentation</h4>
                  <p className="text-sm text-muted-foreground">Alle Papiere vorbereitet und übergabebereit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Häufig gestellte Fragen</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-card rounded-xl border px-6">
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
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sicher kaufen – ohne Risiko
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Geprüft, aufbereitet und sicher geliefert. Bei Mängeln: Volle Rückerstattung in 5 Werktagen.
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
