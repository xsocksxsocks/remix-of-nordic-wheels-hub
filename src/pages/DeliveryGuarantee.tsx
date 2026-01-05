import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Clock, FileText, Phone, CheckCircle, Shield, RotateCcw, Banknote, AlertCircle, Car, Wrench, MapPin, Award, Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import carTransportImage from "@/assets/car-transport.jpg";

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
      question: "Wie funktioniert die 21-Tage Geld-zurück-Garantie?",
      answer: "Innerhalb von 21 Tagen nach Übergabe können Sie das Fahrzeug zurückgeben. Für gefahrene Kilometer werden €0,30 pro km berechnet. Bei nicht vertragsgemäßem Zustand erfolgt die Rückgabe kostenlos.",
    },
    {
      question: "Was ist der Unterschied zwischen Nordic Garantie und Premium Garantie?",
      answer: "Die Nordic Garantie (1 Jahr oder 10.000 km) ist bei jedem Fahrzeug inklusive. Die Premium Garantie (3 Jahre oder 60.000 km) können Sie zusätzlich erwerben für erweiterten Schutz.",
    },
    {
      question: "Welche Mängel berechtigen zur kostenlosen Rückgabe?",
      answer: "Fehlende Ausstattungsmerkmale, optische Mängel, technische Defekte oder jede Abweichung vom vertraglich vereinbarten Zustand berechtigen zur kostenlosen Rückgabe ohne Kilometer-Abzug.",
    },
  ];

  const shippingLocations = [
    "Hamburg", "Berlin", "München", "Köln", "Frankfurt", "Stuttgart", 
    "Düsseldorf", "Leipzig", "Hannover", "Nürnberg", "Dresden", "Bremen"
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
              per Einzeltransport sicher zu Ihnen geliefert. Mit umfassenden Garantieleistungen.
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

      {/* Shipping Locations */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <div className="p-4 rounded-xl bg-primary/10 w-fit mx-auto mb-4">
              <MapPin className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Versandstandorte in ganz Deutschland</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wir liefern deutschlandweit direkt zu Ihnen nach Hause. 
              Unsere Logistikpartner sind in allen Regionen für Sie im Einsatz.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {shippingLocations.map((city) => (
              <span key={city} className="px-4 py-2 bg-card rounded-full border text-sm font-medium">
                {city}
              </span>
            ))}
            <span className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
              + viele weitere
            </span>
          </div>
        </div>
      </section>

      {/* 21-Day Money Back Guarantee */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <RotateCcw className="h-4 w-4" />
              21 Tage Rückgaberecht
            </div>
            <h2 className="text-3xl font-bold mb-4">21-Tage Geld-zurück-Garantie</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Testen Sie Ihr neues Fahrzeug in Ruhe. Innerhalb von 21 Tagen können Sie 
              es zurückgeben – mit fairer Kilometer-Abrechnung.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-card rounded-xl border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                So funktioniert's
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground">21 Tage Bedenkzeit nach Fahrzeugübergabe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground">Rückgabe ohne Angabe von Gründen möglich</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground">Kostenlose Abholung bei Ihnen zu Hause</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground">Rückerstattung innerhalb von 5 Werktagen</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-card rounded-xl border">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                Kilometer-Abrechnung
              </h3>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <p className="text-2xl font-bold text-amber-800">€0,30 <span className="text-lg font-normal">pro km</span></p>
              </div>
              <p className="text-muted-foreground">
                Für jeden gefahrenen Kilometer über den Stand bei Übergabe wird eine 
                Pauschale von €0,30 berechnet. Fair und transparent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Return due to defects */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              Rücktrittsrecht bei Mängeln
            </div>
            <h2 className="text-3xl font-bold mb-4">Rücktritt bei nicht vertragsgemäßem Zustand</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Entspricht das Fahrzeug nicht dem vereinbarten Zustand? 
              Dann erfolgt die Rückabwicklung kostenlos – ohne Kilometer-Abzug.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            <div className="p-6 bg-card rounded-xl border text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Fehlende Ausstattung</h4>
              <p className="text-sm text-muted-foreground">
                Versprochene Features nicht vorhanden
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Optische Mängel</h4>
              <p className="text-sm text-muted-foreground">
                Kratzer, Dellen, Lackschäden
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Technische Defekte</h4>
              <p className="text-sm text-muted-foreground">
                Motor, Getriebe, Elektronik
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Vertragsabweichung</h4>
              <p className="text-sm text-muted-foreground">
                Jede Abweichung vom Vertrag
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card p-8 rounded-xl border shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-bold mb-4">Mangel melden</h3>
              <p className="text-muted-foreground">
                Kontaktieren Sie uns mit einer Beschreibung des Problems. Wir vereinbaren sofort einen Termin.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">Kostenlose Abholung</h3>
              <p className="text-muted-foreground">
                Wir holen das Fahrzeug bei Ihnen ab – komplett kostenfrei, ohne Kilometer-Abzug.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">Volle Rückerstattung</h3>
              <p className="text-muted-foreground">
                Ihr Geld zurück innerhalb von 5 Werktagen nach Abholung – garantiert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Unsere Garantiepakete</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Zusätzlich zum Rückgaberecht bieten wir umfassende Garantieleistungen 
              für Ihr Fahrzeug – für langfristige Sicherheit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Nordic Garantie */}
            <div className="p-8 bg-card rounded-xl border relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                  Inklusive
                </span>
              </div>
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Nordic Garantie</h3>
              <p className="text-3xl font-bold text-primary mb-4">
                1 Jahr <span className="text-lg font-normal text-muted-foreground">oder 10.000 km</span>
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Bei jedem Fahrzeug inklusive</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Abdeckung wichtiger Komponenten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Schnelle Schadensabwicklung</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Deutschlandweiter Service</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Standardmäßig bei jedem Kauf dabei – ohne Aufpreis.
              </p>
            </div>
            
            {/* Premium Garantie */}
            <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border-2 border-primary relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-xs font-medium flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  Premium
                </span>
              </div>
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Garantie</h3>
              <p className="text-3xl font-bold text-primary mb-4">
                3 Jahre <span className="text-lg font-normal text-muted-foreground">oder 60.000 km</span>
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Erweiterter Komponentenschutz</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Inklusive Verschleißteile</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Mobilitätsgarantie inklusive</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Prioritärer Kundenservice</span>
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Optional beim Kauf hinzubuchbar – für maximale Sicherheit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info with Image */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Lieferdetails</h2>
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
            
            <div className="rounded-2xl overflow-hidden">
              <img 
                src={carTransportImage} 
                alt="Sichere Fahrzeuglieferung per Einzeltransport" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
      </section>

      {/* FAQs */}
      <section className="section-padding">
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
            Sicher kaufen – rundum geschützt
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            21 Tage Geld-zurück-Garantie, Nordic Garantie inklusive und optional Premium Garantie. 
            Deutschlandweite Lieferung direkt zu Ihnen.
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
