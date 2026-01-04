import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, ExternalLink, Search } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

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

const Cars = () => {
  const [cars, setCars] = useState<CarItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
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

    fetchCars();
  }, []);

  const filteredCars = cars.filter((car) => {
    const searchLower = search.toLowerCase();
    return (
      car.brand.toLowerCase().includes(searchLower) ||
      car.model.toLowerCase().includes(searchLower) ||
      car.name.toLowerCase().includes(searchLower)
    );
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("de-DE").format(mileage) + " km";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "sold":
        return <Badge variant="destructive">Verkauft</Badge>;
      case "reserved":
        return <Badge variant="secondary" className="bg-amber-100 text-amber-800 border-amber-200">Reserviert</Badge>;
      default:
        return <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">Verfügbar</Badge>;
    }
  };

  const CarCard = ({ car }: { car: CarItem }) => {
    const content = (
      <div className="bg-card rounded-lg border shadow-soft overflow-hidden card-hover h-full">
        <div className="aspect-video bg-muted relative">
          {car.image_url ? (
            <img
              src={car.image_url}
              alt={car.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Car className="h-16 w-16 text-muted-foreground/30" />
            </div>
          )}
          <div className="absolute top-3 right-3">
            {getStatusBadge(car.status)}
          </div>
        </div>
        <div className="p-5">
          <div className="text-sm text-muted-foreground mb-1">{car.brand}</div>
          <h3 className="text-lg font-serif font-bold mb-2">{car.name}</h3>
          <div className="text-2xl font-bold text-accent mb-4">
            {formatPrice(car.price)}
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {car.year && <div>Baujahr: {car.year}</div>}
            {car.mileage && <div>{formatMileage(car.mileage)}</div>}
            {car.fuel_type && <div>{car.fuel_type}</div>}
            {car.transmission && <div>{car.transmission}</div>}
          </div>
          {car.external_link && car.status === "available" && (
            <div className="mt-4 flex items-center text-sm text-accent">
              <ExternalLink className="h-4 w-4 mr-1" />
              Details auf mobile.de
            </div>
          )}
        </div>
      </div>
    );

    if (car.external_link && car.status === "available") {
      return (
        <a
          href={car.external_link}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {content}
        </a>
      );
    }

    return <div>{content}</div>;
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-nordic-gradient py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Unser Fahrzeugbestand
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Entdecken Sie unsere aktuellen Gebrauchtwagen. Alle Fahrzeuge sind geprüft und 
              aufbereitet. Klicken Sie auf ein Fahrzeug für weitere Details auf mobile.de.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          {/* Search */}
          <div className="mb-8 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Fahrzeug suchen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-lg border animate-pulse">
                  <div className="aspect-video bg-muted" />
                  <div className="p-5 space-y-3">
                    <div className="h-4 bg-muted rounded w-1/3" />
                    <div className="h-6 bg-muted rounded w-2/3" />
                    <div className="h-8 bg-muted rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : cars.length === 0 ? (
            <div className="text-center py-16">
              <Car className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-bold mb-2">
                Aktuell keine Fahrzeuge im Bestand
              </h2>
              <p className="text-muted-foreground mb-6">
                Wir aktualisieren unseren Bestand regelmäßig. Kontaktieren Sie uns für Anfragen.
              </p>
              <Button asChild>
                <Link to="/kontakt">Kontakt aufnehmen</Link>
              </Button>
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-bold mb-2">
                Keine Fahrzeuge gefunden
              </h2>
              <p className="text-muted-foreground">
                Versuchen Sie eine andere Suche.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Nicht das Richtige dabei?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns mit Ihren Wünschen. Wir helfen Ihnen gerne, 
            das passende Fahrzeug zu finden.
          </p>
          <Button asChild size="lg">
            <Link to="/kontakt">Anfrage stellen</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Cars;
