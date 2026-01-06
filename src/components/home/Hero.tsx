import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Car } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroShowroom from "@/assets/hero-showroom.jpg";
import { supabase } from "@/integrations/supabase/client";

interface CarSuggestion {
  id: string;
  brand: string;
  name: string;
  price: number;
  image_url: string | null;
}

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<CarSuggestion[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      const { data } = await supabase
        .from("cars")
        .select("id, brand, name, price, image_url")
        .eq("status", "available")
        .limit(10);
      
      if (data && data.length > 0) {
        // Shuffle and take up to 5 random cars for dropdown
        const shuffled = [...data].sort(() => 0.5 - Math.random());
        setSuggestions(shuffled.slice(0, 5));
      }
    };
    fetchSuggestions();
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDropdown(false);
    navigate(`/fahrzeuge?search=${encodeURIComponent(searchQuery)}`);
  };

  const handleSuggestionClick = (car: CarSuggestion) => {
    setShowDropdown(false);
    navigate(`/fahrzeuge?search=${encodeURIComponent(car.name)}`);
  };

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroShowroom} 
          alt="Premium Autohaus Showroom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-white rounded-full blur-2xl" />
      </div>
      
      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Auto kaufen: Endlich einfach
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Nordic-Automobile – Ihr zuverlässiger Partner für Gebrauchtwagen. Für Privat- und Geschäftskunden in Hamburg und deutschlandweit.
          </p>
          
          {/* Search Box */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8 relative">
            <div className="relative">
              <input
                type="text"
                placeholder="Suche nach Marke, Modell oder Stichwort..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                className="w-full px-6 py-4 pr-14 rounded-lg text-foreground bg-white shadow-xl focus:outline-none focus:ring-2 focus:ring-accent text-lg"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-white p-3 rounded-lg transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
            
            {/* Dropdown suggestions */}
            {showDropdown && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border overflow-hidden z-20">
                <div className="px-4 py-2 text-xs text-muted-foreground bg-muted/50 border-b">
                  Verfügbare Fahrzeuge
                </div>
                {suggestions.map((car) => (
                  <button
                    key={car.id}
                    type="button"
                    onClick={() => handleSuggestionClick(car)}
                    className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors text-left"
                  >
                    {car.image_url ? (
                      <img src={car.image_url} alt={car.name} className="w-10 h-10 rounded object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded bg-muted flex items-center justify-center">
                        <Car className="w-5 h-5 text-muted-foreground" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-foreground truncate">{car.brand} {car.name}</div>
                    </div>
                    <div className="text-accent font-semibold">{formatPrice(car.price)}</div>
                  </button>
                ))}
                <Link 
                  to="/fahrzeuge" 
                  className="block px-4 py-3 text-center text-sm text-accent hover:bg-muted/50 border-t font-medium"
                >
                  Alle Fahrzeuge anzeigen →
                </Link>
              </div>
            )}
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="btn-hero">
              <Link to="/fahrzeuge">
                Finde dein Auto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="btn-hero-outline">
              <Link to="/kontakt">
                Beratung anfordern
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
