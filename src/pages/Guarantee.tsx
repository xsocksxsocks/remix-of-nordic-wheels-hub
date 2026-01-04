import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, RotateCcw, Banknote, CheckCircle, AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Guarantee = () => {
  const faqs = [
    {
      question: "Wer kann die 21-Tage-Geld-zurück-Garantie nutzen?",
      answer: "Die Garantie ist für Privatkäufer verfügbar. Autohändler sind nicht berechtigt.",
    },
    {
      question: "Sind irgendwelche Autos ausgeschlossen?",
      answer: "Nein. Keine Ausschlüsse nach Fahrzeugtyp oder Preis.",
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
      question: "Was, wenn ich die Rückgabe nicht innerhalb von 21 Tagen planen kann?",
      answer: "Wenn Sie uns innerhalb der 21-Tage-Frist mitteilen, dass Sie das Auto zurückgeben möchten, akzeptieren wir die Rückgabe, auch wenn die Rückgabe später erfolgt.",
    },
    {
      question: "Was wird erstattet und wann erhalte ich es?",
      answer: "Sie erhalten eine 100%ige Rückerstattung des Rechnungsbetrags, einschließlich aller Steuern und Gebühren. Rückerstattungen werden innerhalb von 10 Werktagen nach Erhalt und Inspektion des Autos bearbeitet.",
    },
    {
      question: "Muss ich einen Grund für meine Rückgabe angeben?",
      answer: "Ja. Wir werden nach Ihrem Grund fragen und ihn für interne Analysen aufzeichnen. Dies beeinträchtigt nicht Ihr Rückgaberecht.",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-nordic-gradient py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Geld-zurück-Garantie
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Probieren Sie Ihr Nordic-Auto 21 Tage lang aus. Passt es nicht? 
              Geben Sie es für eine volle Rückerstattung zurück. 
              Keine versteckten Gebühren, einfache Abwicklung.
            </p>
            <Button asChild size="lg" className="btn-hero">
              <Link to="/fahrzeuge">Finde dein Auto</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container">
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

      {/* How it works */}
      <section className="section-padding bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            So funktioniert die 21-Tage-Geld-zurück-Garantie
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-4">1</div>
              <h3 className="text-xl font-bold mb-4">Genießen Sie eine 21-tägige Probefahrt</h3>
              <p className="text-muted-foreground">
                Sie haben 21 Tage ab der Schlüsselübergabe, um Ihr Auto wirklich kennenzulernen. 
                Nutzen Sie es für Ihren täglichen Arbeitsweg, Wochenendausflüge oder Familienausflüge. 
                Überzeugen Sie sich, dass es zu Ihrem Lebensstil passt.
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-4">2</div>
              <h3 className="text-xl font-bold mb-4">Nicht die perfekte Wahl?</h3>
              <p className="text-muted-foreground">
                Wenn das Auto nicht das Richtige für Sie ist, lassen Sie es uns einfach innerhalb 
                der 21 Tage wissen. Wir vereinbaren einen passenden Termin zur Rückgabe.
                Kontaktieren Sie uns unter kontakt@nordic.de
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border shadow-sm">
              <div className="text-4xl font-bold text-primary mb-4">3</div>
              <h3 className="text-xl font-bold mb-4">Schnelle Rückerstattung</h3>
              <p className="text-muted-foreground">
                Sobald wir das Auto erhalten haben, inspizieren wir es und veranlassen die 
                100%ige Rückerstattung der Rechnung innerhalb von 10 Werktagen.
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
            Kaufen Sie mit Vertrauen!
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Mit unserer 21-Tage-Geld-zurück-Garantie gehen Sie kein Risiko ein.
          </p>
          <Button asChild size="lg" className="btn-hero">
            <Link to="/fahrzeuge">Alle Autos ansehen</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Guarantee;
