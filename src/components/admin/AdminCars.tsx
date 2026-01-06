import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2, Car, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CarItem {
  id: string;
  brand: string;
  model: string;
  name: string;
  price: number;
  year: number | null;
  mileage: number | null;
  fuel_type: string | null;
  transmission: string | null;
  image_url: string | null;
  external_link: string | null;
  status: string;
}

const emptyCarForm = {
  brand: "",
  model: "",
  name: "",
  price: "",
  year: "",
  mileage: "",
  fuel_type: "",
  transmission: "",
  image_url: "",
  external_link: "",
  status: "available",
};

const AdminCars = () => {
  const { toast } = useToast();
  const [cars, setCars] = useState<CarItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCar, setEditingCar] = useState<CarItem | null>(null);
  const [formData, setFormData] = useState(emptyCarForm);
  const [saving, setSaving] = useState(false);

  const fetchCars = async () => {
    const { data, error } = await supabase
      .from("cars")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setCars(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (value: string) => {
    setFormData((prev) => ({ ...prev, status: value }));
  };

  const openAddDialog = () => {
    setEditingCar(null);
    setFormData(emptyCarForm);
    setDialogOpen(true);
  };

  const openEditDialog = (car: CarItem) => {
    setEditingCar(car);
    setFormData({
      brand: car.brand,
      model: car.model,
      name: car.name,
      price: car.price.toString(),
      year: car.year?.toString() || "",
      mileage: car.mileage?.toString() || "",
      fuel_type: car.fuel_type || "",
      transmission: car.transmission || "",
      image_url: car.image_url || "",
      external_link: car.external_link || "",
      status: car.status,
    });
    setDialogOpen(true);
  };

  // Validate URL to only allow http/https schemes (prevents javascript: URLs)
  const isValidUrl = (url: string): boolean => {
    if (!url) return true; // Empty is allowed
    try {
      const parsed = new URL(url);
      return ['http:', 'https:'].includes(parsed.protocol);
    } catch {
      return false;
    }
  };

  // Validate numeric inputs with reasonable ranges
  const validateNumericInputs = (): string | null => {
    const price = parseInt(formData.price);
    if (isNaN(price) || price <= 0 || price > 100000000) {
      return "Preis muss zwischen 1 und 100.000.000 € liegen.";
    }

    if (formData.year) {
      const year = parseInt(formData.year);
      const currentYear = new Date().getFullYear();
      if (isNaN(year) || year < 1900 || year > currentYear + 1) {
        return `Baujahr muss zwischen 1900 und ${currentYear + 1} liegen.`;
      }
    }

    if (formData.mileage) {
      const mileage = parseInt(formData.mileage);
      if (isNaN(mileage) || mileage < 0 || mileage > 10000000) {
        return "Kilometerstand muss zwischen 0 und 10.000.000 km liegen.";
      }
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.brand || !formData.model || !formData.name || !formData.price) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }

    // Validate URLs to prevent XSS via javascript: or data: URLs
    if (formData.image_url && !isValidUrl(formData.image_url)) {
      toast({
        title: "Fehler",
        description: "Bild-URL muss eine gültige HTTP/HTTPS URL sein.",
        variant: "destructive",
      });
      return;
    }

    if (formData.external_link && !isValidUrl(formData.external_link)) {
      toast({
        title: "Fehler",
        description: "Externer Link muss eine gültige HTTP/HTTPS URL sein.",
        variant: "destructive",
      });
      return;
    }

    // Validate numeric inputs
    const numericError = validateNumericInputs();
    if (numericError) {
      toast({
        title: "Fehler",
        description: numericError,
        variant: "destructive",
      });
      return;
    }

    setSaving(true);

    const carData = {
      brand: formData.brand,
      model: formData.model,
      name: formData.name,
      price: parseInt(formData.price),
      year: formData.year ? parseInt(formData.year) : null,
      mileage: formData.mileage ? parseInt(formData.mileage) : null,
      fuel_type: formData.fuel_type || null,
      transmission: formData.transmission || null,
      image_url: formData.image_url || null,
      external_link: formData.external_link || null,
      status: formData.status,
    };

    try {
      if (editingCar) {
        const { error } = await supabase
          .from("cars")
          .update(carData)
          .eq("id", editingCar.id);

        if (error) throw error;

        setCars((prev) =>
          prev.map((c) =>
            c.id === editingCar.id ? { ...c, ...carData } : c
          )
        );

        toast({
          title: "Gespeichert",
          description: "Fahrzeug wurde aktualisiert.",
        });
      } else {
        const { data, error } = await supabase
          .from("cars")
          .insert(carData)
          .select()
          .single();

        if (error) throw error;

        setCars((prev) => [data, ...prev]);

        toast({
          title: "Hinzugefügt",
          description: "Fahrzeug wurde hinzugefügt.",
        });
      }

      setDialogOpen(false);
      setFormData(emptyCarForm);
      setEditingCar(null);
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Fahrzeug konnte nicht gespeichert werden.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const deleteCar = async (car: CarItem) => {
    if (!confirm(`Möchten Sie "${car.name}" wirklich löschen?`)) return;

    const { error } = await supabase.from("cars").delete().eq("id", car.id);

    if (error) {
      toast({
        title: "Fehler",
        description: "Fahrzeug konnte nicht gelöscht werden.",
        variant: "destructive",
      });
    } else {
      setCars((prev) => prev.filter((c) => c.id !== car.id));
      toast({
        title: "Gelöscht",
        description: "Fahrzeug wurde gelöscht.",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sold":
        return <Badge variant="destructive">Verkauft</Badge>;
      case "reserved":
        return (
          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
            Reserviert
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Verfügbar
          </Badge>
        );
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-24 bg-muted rounded-lg animate-pulse"
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
          <h2 className="text-2xl font-serif font-bold">Fahrzeugbestand</h2>
          <p className="text-muted-foreground">{cars.length} Fahrzeuge</p>
        </div>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog}>
              <Plus className="h-4 w-4 mr-2" />
              Fahrzeug hinzufügen
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingCar ? "Fahrzeug bearbeiten" : "Neues Fahrzeug"}
              </DialogTitle>
              <DialogDescription>
                Fügen Sie ein neues Fahrzeug zum Bestand hinzu oder bearbeiten
                Sie ein bestehendes.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="brand">Marke *</Label>
                  <Input
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    placeholder="z.B. BMW"
                  />
                </div>
                <div>
                  <Label htmlFor="model">Modell *</Label>
                  <Input
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    placeholder="z.B. 3er"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="name">Bezeichnung *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="z.B. BMW 320d xDrive Touring"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="price">Preis (€) *</Label>
                  <Input
                    id="price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="z.B. 25000"
                  />
                </div>
                <div>
                  <Label htmlFor="year">Baujahr</Label>
                  <Input
                    id="year"
                    name="year"
                    type="number"
                    value={formData.year}
                    onChange={handleChange}
                    placeholder="z.B. 2021"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="mileage">Kilometerstand</Label>
                  <Input
                    id="mileage"
                    name="mileage"
                    type="number"
                    value={formData.mileage}
                    onChange={handleChange}
                    placeholder="z.B. 45000"
                  />
                </div>
                <div>
                  <Label htmlFor="fuel_type">Kraftstoff</Label>
                  <Input
                    id="fuel_type"
                    name="fuel_type"
                    value={formData.fuel_type}
                    onChange={handleChange}
                    placeholder="z.B. Diesel"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="transmission">Getriebe</Label>
                  <Input
                    id="transmission"
                    name="transmission"
                    value={formData.transmission}
                    onChange={handleChange}
                    placeholder="z.B. Automatik"
                  />
                </div>
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select
                    value={formData.status}
                    onValueChange={handleStatusChange}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Verfügbar</SelectItem>
                      <SelectItem value="reserved">Reserviert</SelectItem>
                      <SelectItem value="sold">Verkauft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="image_url">Bild-URL</Label>
                <Input
                  id="image_url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  placeholder="https://..."
                />
              </div>

              <div>
                <Label htmlFor="external_link">Externer Link (mobile.de)</Label>
                <Input
                  id="external_link"
                  name="external_link"
                  value={formData.external_link}
                  onChange={handleChange}
                  placeholder="https://www.mobile.de/..."
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Optional. Wenn leer, wird kein Link angezeigt.
                </p>
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setDialogOpen(false)}
                >
                  Abbrechen
                </Button>
                <Button type="submit" disabled={saving}>
                  {saving
                    ? "Speichern..."
                    : editingCar
                    ? "Aktualisieren"
                    : "Hinzufügen"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Cars List */}
      {cars.length === 0 ? (
        <div className="text-center py-12">
          <Car className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
          <p className="text-muted-foreground">Noch keine Fahrzeuge im Bestand.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cars.map((car) => (
            <Card key={car.id}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-24 h-16 bg-muted rounded-md overflow-hidden flex-shrink-0">
                      {car.image_url ? (
                        <img
                          src={car.image_url}
                          alt={car.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Car className="h-8 w-8 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        {car.name}
                        {getStatusBadge(car.status)}
                      </CardTitle>
                      <CardDescription>
                        {car.brand} {car.model}
                        {car.year && ` • ${car.year}`}
                        {car.mileage && ` • ${car.mileage.toLocaleString("de-DE")} km`}
                      </CardDescription>
                      <div className="text-lg font-bold text-accent mt-1">
                        {formatPrice(car.price)}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {car.external_link && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={car.external_link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openEditDialog(car)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteCar(car)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminCars;
