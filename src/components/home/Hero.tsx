import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroShowroom from "@/assets/hero-showroom.jpg";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/fahrzeuge?search=${encodeURIComponent(searchQuery)}`);
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
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Suche nach Marke, Modell oder Stichwort..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 pr-14 rounded-lg text-foreground bg-white shadow-xl focus:outline-none focus:ring-2 focus:ring-accent text-lg"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-white p-3 rounded-lg transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
