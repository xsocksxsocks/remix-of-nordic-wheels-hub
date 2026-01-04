import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, MapPin, Clock, FileText, Phone, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Delivery = () => {
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
      question: "Was muss ich am Tag der Lieferung beachten?",
      answer: "Der Fahrer wird Sie anrufen, sobald er unterwegs ist, um Ihnen seine voraussichtliche Ankunftszeit mitzuteilen. Bitte sorgen Sie dafür, dass genügend Platz zum Parken und Abladen vorhanden ist.",
    },
    {
      question: "Kann ich am Tag der Lieferung eine genaue Lieferzeit buchen?",
      answer: "Unsere Lieferungen werden innerhalb eines Zeitfensters geplant – wir tun dies, um eine sichere und reibungslose Lieferung zu gewährleisten. Während dieses Zeitfensters bitten wir Sie, an der Lieferadresse anwesend zu sein.",
    },
    {
      question: "Fallen für die Lieferung und Übergabe Kosten an?",
      answer: "Die Kosten variieren je nach Entfernung. Abholung bei uns ist kostenlos. Lieferung nach Hause je nach Entfernung zwischen €99 und €399.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-nordic-gradient py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lieferung & Übergabe
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Lieferung und Übergabe sind die letzten Schritte, die Sie zu Ihrem neuen Auto führen – 
              bei Nordic achten wir sehr genau auf diese beiden Prozesse, um sicherzustellen, 
              dass diese letzten Schritte sofort zu einer großartigen Beziehung mit Ihrem neuen Auto führen!
            </p>
            <Button asChild size="lg" className="btn-hero">
              <Link to="/fahrzeuge">Finde dein Auto</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Preparation */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Vorbereitung der Lieferung und Übergabe</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-foreground mb-6">
                Wenn Sie Ihr Auto bei uns bestellen, beginnen wir sofort, Ihr neues Auto für die Lieferung 
                vorzubereiten. Dies dauert in der Regel zwischen 3 Tagen und einer Woche. Wir geben immer 
                unser Bestes, um uns an das vereinbarte Lieferdatum zu halten.
              </p>
              <p className="text-foreground mb-6">
                Wir informieren Sie sofort per E-Mail, wenn das konkrete Zeitfenster für Ihre Übergabe feststeht, 
                egal ob Sie sich für die Abholung oder die Lieferung nach Hause entschieden haben.
              </p>
              <p className="text-foreground">
                Wenn Sie sich für die Lieferung nach Hause entschieden haben, beachten Sie bitte, 
                dass wir genügend Platz brauchen, um den Lieferwagen zu parken und Ihr Fahrzeug abzuladen.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-xl flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Schnelle Bearbeitung</h4>
                  <p className="text-sm text-muted-foreground">Vorbereitung in 3-7 Tagen</p>
                </div>
              </div>
              <div className="p-4 bg-muted rounded-xl flex items-start gap-4">
                <FileText className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Alle Papiere vorbereitet</h4>
                  <p className="text-sm text-muted-foreground">Vollständige Dokumentation</p>
                </div>
              </div>
              <div className="p-4 bg-muted rounded-xl flex items-start gap-4">
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

      {/* What is the handover */}
      <section className="section-padding bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-card rounded-xl aspect-video flex items-center justify-center shadow-md">
              <Truck className="h-24 w-24 text-muted-foreground/30" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Was ist die Übergabe?</h2>
              <p className="text-foreground mb-4">
                Die Übergabe ist das Treffen, bei dem Sie Ihr Auto zum ersten Mal sehen und offiziell 
                in Besitz nehmen. Wir überwachen den gesamten Prozess genau, damit alles reibungslos verläuft.
              </p>
              <p className="text-foreground mb-4">
                Bei der Übergabe zeigt Ihnen unser Experte alle Details Ihres neuen Autos und beantwortet 
                alle Fragen. Er geht ein Übergabeprotokoll durch und erklärt Ihnen alle Funktionen.
              </p>
              <p className="text-foreground">
                Denken Sie daran: Sie haben 21 Tage Zeit, um Ihr neues Fahrzeug Probe zu fahren, 
                und wir erstatten Ihnen in dieser Zeit den vollen Betrag zurück, wenn es aus irgendeinem 
                Grund nicht Ihren Erwartungen entspricht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Lieferoptionen</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Noch Fragen zur Lieferung?
          </h2>
          <p className="text-white/90 mb-8">
            Kontaktieren Sie uns – wir helfen Ihnen gerne weiter!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/kontakt">Kontakt aufnehmen</Link>
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

export default Delivery;
