import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye, EyeOff, Mail, Phone, Save, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { de } from "date-fns/locale";

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  hidden: boolean;
  notes: string | null;
  created_at: string;
}

const AdminContacts = () => {
  const { toast } = useToast();
  const [contacts, setContacts] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [showHidden, setShowHidden] = useState(false);
  const [selectedContact, setSelectedContact] = useState<ContactRequest | null>(null);
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from("contact_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setContacts(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const toggleHidden = async (contact: ContactRequest) => {
    const { error } = await supabase
      .from("contact_requests")
      .update({ hidden: !contact.hidden })
      .eq("id", contact.id);

    if (error) {
      toast({
        title: "Fehler",
        description: "Konnte Status nicht ändern.",
        variant: "destructive",
      });
    } else {
      setContacts((prev) =>
        prev.map((c) =>
          c.id === contact.id ? { ...c, hidden: !c.hidden } : c
        )
      );
      toast({
        title: contact.hidden ? "Sichtbar gemacht" : "Versteckt",
        description: contact.hidden
          ? "Anfrage ist wieder sichtbar."
          : "Anfrage wurde versteckt.",
      });
    }
  };

  const saveNotes = async () => {
    if (!selectedContact) return;

    setSaving(true);
    const { error } = await supabase
      .from("contact_requests")
      .update({ notes })
      .eq("id", selectedContact.id);

    if (error) {
      toast({
        title: "Fehler",
        description: "Notizen konnten nicht gespeichert werden.",
        variant: "destructive",
      });
    } else {
      setContacts((prev) =>
        prev.map((c) =>
          c.id === selectedContact.id ? { ...c, notes } : c
        )
      );
      toast({
        title: "Gespeichert",
        description: "Notizen wurden gespeichert.",
      });
      setSelectedContact(null);
    }
    setSaving(false);
  };

  const openNotesDialog = (contact: ContactRequest) => {
    setSelectedContact(contact);
    setNotes(contact.notes || "");
  };

  const filteredContacts = showHidden
    ? contacts
    : contacts.filter((c) => !c.hidden);

  const hiddenCount = contacts.filter((c) => c.hidden).length;

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-32 bg-muted rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-serif font-bold">Kontaktanfragen</h2>
          <p className="text-muted-foreground">
            {contacts.length} Anfragen insgesamt
            {hiddenCount > 0 && ` (${hiddenCount} versteckt)`}
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => setShowHidden(!showHidden)}
        >
          {showHidden ? (
            <>
              <EyeOff className="h-4 w-4 mr-2" />
              Versteckte ausblenden
            </>
          ) : (
            <>
              <Eye className="h-4 w-4 mr-2" />
              Versteckte anzeigen
            </>
          )}
        </Button>
      </div>

      {/* Contacts List */}
      {filteredContacts.length === 0 ? (
        <div className="text-center py-12">
          <Mail className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">
            {contacts.length === 0
              ? "Noch keine Kontaktanfragen."
              : "Keine sichtbaren Anfragen."}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredContacts.map((contact) => (
            <Card
              key={contact.id}
              className={contact.hidden ? "opacity-60" : ""}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {contact.name}
                      {contact.hidden && (
                        <Badge variant="secondary">Versteckt</Badge>
                      )}
                      {contact.notes && (
                        <Badge variant="outline">Notizen</Badge>
                      )}
                    </CardTitle>
                    <CardDescription>
                      {format(new Date(contact.created_at), "PPp", {
                        locale: de,
                      })}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openNotesDialog(contact)}
                    >
                      <MessageSquare className="h-4 w-4 mr-1" />
                      Notizen
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleHidden(contact)}
                    >
                      {contact.hidden ? (
                        <Eye className="h-4 w-4" />
                      ) : (
                        <EyeOff className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-4 text-sm">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-1 text-accent hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {contact.email}
                  </a>
                  {contact.phone && (
                    <a
                      href={`tel:${contact.phone}`}
                      className="flex items-center gap-1 text-accent hover:underline"
                    >
                      <Phone className="h-4 w-4" />
                      {contact.phone}
                    </a>
                  )}
                </div>
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm whitespace-pre-wrap">{contact.message}</p>
                </div>
                {contact.notes && (
                  <div className="bg-accent/10 p-3 rounded-md">
                    <p className="text-xs font-semibold text-accent mb-1">
                      Notizen:
                    </p>
                    <p className="text-sm whitespace-pre-wrap">{contact.notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Notes Dialog */}
      <Dialog
        open={!!selectedContact}
        onOpenChange={() => setSelectedContact(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Notizen für {selectedContact?.name}</DialogTitle>
            <DialogDescription>
              Fügen Sie interne Notizen zu dieser Anfrage hinzu.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Interne Notizen..."
              rows={5}
            />
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setSelectedContact(null)}
              >
                Abbrechen
              </Button>
              <Button onClick={saveNotes} disabled={saving}>
                <Save className="h-4 w-4 mr-2" />
                {saving ? "Speichern..." : "Speichern"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminContacts;
