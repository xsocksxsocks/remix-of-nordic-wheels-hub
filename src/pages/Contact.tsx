import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name muss mindestens 2 Zeichen haben").max(100, "Name zu lang"),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255, "E-Mail zu lang"),
  phone: z.string().trim().max(30, "Telefonnummer zu lang").optional(),
  message: z.string().trim().min(10, "Nachricht muss mindestens 10 Zeichen haben").max(2000, "Nachricht zu lang"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_requests").insert({
        name: result.data.name,
        email: result.data.email,
        phone: result.data.phone || null,
        message: result.data.message,
      });

      if (error) throw error;

      setIsSubmitted(true);
      toast({
        title: "Nachricht gesendet!",
        description: "Wir werden uns so schnell wie möglich bei Ihnen melden.",
      });
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-nordic-gradient py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Kontaktieren Sie uns
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Haben Sie Fragen zu unseren Fahrzeugen oder benötigen Sie eine persönliche Beratung? 
              Wir sind für Sie da – egal ob Privatkunde oder Geschäftskunde.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Schreiben Sie uns</h2>
              
              {isSubmitted ? (
                <div className="p-8 bg-green-50 border border-green-200 rounded-lg text-center">
                  <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Vielen Dank für Ihre Nachricht!
                  </h3>
                  <p className="text-green-700">
                    Wir werden uns so schnell wie möglich bei Ihnen melden.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ihr vollständiger Name"
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ihre.email@beispiel.de"
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefon (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+49 ..."
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <Label htmlFor="message">Ihre Nachricht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Wie können wir Ihnen helfen?"
                      rows={5}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Nachricht senden
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Kontaktdaten</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-card rounded-lg border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Nordic-Automobile cnr GmbH<br />
                        Ellernreihe 59, c/o Lenart<br />
                        D-22179 Hamburg
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-lg border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefon</h3>
                      <a href="tel:+4910000000" className="text-accent hover:underline">
                        +49 100 000 00
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-lg border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">E-Mail</h3>
                      <a href="mailto:kontakt@nordic.de" className="text-accent hover:underline">
                        kontakt@nordic.de
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card rounded-lg border">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Öffnungszeiten</h3>
                      <p className="text-muted-foreground">
                        Montag – Freitag: 9:00 – 18:00 Uhr<br />
                        Samstag: 10:00 – 14:00 Uhr<br />
                        Sonntag: Geschlossen
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div className="mt-8 p-6 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Für Geschäftskunden</h3>
                <p className="text-sm text-muted-foreground">
                  Wir bieten spezielle Konditionen für Firmenkunden, Autohäuser und 
                  gewerbliche Käufer. Kontaktieren Sie uns für ein individuelles Angebot.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
