import { useEffect, useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, ExternalLink, Search, X, ArrowUpDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [cars, setCars] = useState<CarItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [brandFilter, setBrandFilter] = useState<string>("all");
  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

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

  // Get unique brands for filter
  const brands = useMemo(() => {
    const uniqueBrands = [...new Set(cars.map((car) => car.brand))];
    return uniqueBrands.sort();
  }, [cars]);

  // Get unique years for filter
  const years = useMemo(() => {
    const uniqueYears = [...new Set(cars.map((car) => car.year).filter(Boolean))] as number[];
    return uniqueYears.sort((a, b) => b - a);
  }, [cars]);

  const hasActiveFilters = search || brandFilter !== "all" || priceFilter !== "all" || yearFilter !== "all" || sortBy !== "newest";

  const resetAllFilters = () => {
    setSearch("");
    setBrandFilter("all");
    setPriceFilter("all");
    setYearFilter("all");
    setSortBy("newest");
    setSearchParams({});
  };

  const filteredAndSortedCars = useMemo(() => {
    let result = cars.filter((car) => {
      // Text search
      const searchLower = search.toLowerCase();
      const matchesSearch =
        car.brand.toLowerCase().includes(searchLower) ||
        car.model.toLowerCase().includes(searchLower) ||
        car.name.toLowerCase().includes(searchLower);

      // Brand filter
      const matchesBrand = brandFilter === "all" || car.brand === brandFilter;

      // Price filter
      let matchesPrice = true;
      if (priceFilter === "under10k") matchesPrice = car.price < 10000;
      else if (priceFilter === "10k-20k") matchesPrice = car.price >= 10000 && car.price < 20000;
      else if (priceFilter === "20k-30k") matchesPrice = car.price >= 20000 && car.price < 30000;
      else if (priceFilter === "30k-50k") matchesPrice = car.price >= 30000 && car.price < 50000;
      else if (priceFilter === "over50k") matchesPrice = car.price >= 50000;

      // Year filter
      let matchesYear = true;
      if (yearFilter !== "all" && car.year) {
        matchesYear = car.year === parseInt(yearFilter);
      } else if (yearFilter !== "all" && !car.year) {
        matchesYear = false;
      }

      return matchesSearch && matchesBrand && matchesPrice && matchesYear;
    });

    // Sorting
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "year-desc":
        result.sort((a, b) => (b.year || 0) - (a.year || 0));
        break;
      case "year-asc":
        result.sort((a, b) => (a.year || 0) - (b.year || 0));
        break;
      case "mileage-asc":
        result.sort((a, b) => (a.mileage || 0) - (b.mileage || 0));
        break;
      case "mileage-desc":
        result.sort((a, b) => (b.mileage || 0) - (a.mileage || 0));
        break;
      // "newest" is default - already sorted by created_at from DB
    }

    return result;
  }, [cars, search, brandFilter, priceFilter, yearFilter, sortBy]);

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

  // Validate URL to only allow http/https schemes (prevents javascript: URLs)
  const isValidUrl = (url: string | null): boolean => {
    if (!url) return false;
    try {
      const parsed = new URL(url);
      return ['http:', 'https:'].includes(parsed.protocol);
    } catch {
      return false;
    }
  };

  const CarCard = ({ car }: { car: CarItem }) => {
    const hasValidImageUrl = isValidUrl(car.image_url);
    const hasValidExternalLink = isValidUrl(car.external_link);

    const content = (
      <div className="bg-card rounded-lg border shadow-soft overflow-hidden card-hover h-full">
        <div className="aspect-video bg-muted relative">
          {hasValidImageUrl ? (
            <img
              src={car.image_url!}
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
          {hasValidExternalLink && car.status === "available" && (
            <div className="mt-4 flex items-center text-sm text-accent">
              <ExternalLink className="h-4 w-4 mr-1" />
              Details auf mobile.de
            </div>
          )}
        </div>
      </div>
    );

    if (hasValidExternalLink && car.status === "available") {
      return (
        <a
          href={car.external_link!}
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
          {/* Filters */}
          <div className="mb-8 space-y-4">
            {/* Search row */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Fahrzeug suchen..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center gap-4">
                {hasActiveFilters && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={resetAllFilters}
                  >
                    <X className="h-4 w-4 mr-1" />
                    Filter zurücksetzen
                  </Button>
                )}
                {!loading && (
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {filteredAndSortedCars.length} {filteredAndSortedCars.length === 1 ? "Fahrzeug" : "Fahrzeuge"} gefunden
                  </span>
                )}
              </div>
            </div>

            {/* Filter dropdowns */}
            <div className="flex flex-wrap gap-3">
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Marke" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Marken</SelectItem>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Preis" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Preise</SelectItem>
                  <SelectItem value="under10k">Unter 10.000 €</SelectItem>
                  <SelectItem value="10k-20k">10.000 - 20.000 €</SelectItem>
                  <SelectItem value="20k-30k">20.000 - 30.000 €</SelectItem>
                  <SelectItem value="30k-50k">30.000 - 50.000 €</SelectItem>
                  <SelectItem value="over50k">Über 50.000 €</SelectItem>
                </SelectContent>
              </Select>

              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Baujahr" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Baujahre</SelectItem>
                  {years.map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <ArrowUpDown className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sortieren" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Neueste zuerst</SelectItem>
                  <SelectItem value="price-asc">Preis aufsteigend</SelectItem>
                  <SelectItem value="price-desc">Preis absteigend</SelectItem>
                  <SelectItem value="year-desc">Baujahr neueste</SelectItem>
                  <SelectItem value="year-asc">Baujahr älteste</SelectItem>
                  <SelectItem value="mileage-asc">Kilometerstand ↑</SelectItem>
                  <SelectItem value="mileage-desc">Kilometerstand ↓</SelectItem>
                </SelectContent>
              </Select>
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
          ) : filteredAndSortedCars.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedCars.map((car) => (
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
