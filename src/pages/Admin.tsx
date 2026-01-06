import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogOut, Mail, Car, Shield } from "lucide-react";
import AdminContacts from "@/components/admin/AdminContacts";
import AdminCars from "@/components/admin/AdminCars";
import { useToast } from "@/hooks/use-toast";

const Admin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [session, setSession] = useState<Session | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        if (!session) {
          navigate("/admin/login");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (!session) {
        navigate("/admin/login");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    const checkAdminRole = async () => {
      if (!session?.user?.id) {
        setLoading(false);
        return;
      }

      // Use server-side RPC function for secure admin verification
      const { data, error } = await supabase.rpc('is_admin');

      if (error) {
        setIsAdmin(false);
      } else {
        setIsAdmin(!!data);
      }
      setLoading(false);
    };

    if (session) {
      checkAdminRole();
    }
  }, [session]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  // Show loading state while checking auth and admin status to prevent UI flash
  if (loading || isAdmin === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">Laden...</div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <Shield className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-serif font-bold mb-2">Kein Zugang</h1>
          <p className="text-muted-foreground mb-6">
            Sie haben keine Admin-Berechtigung. Bitte kontaktieren Sie den Administrator.
          </p>
          <div className="space-y-3">
            <Button onClick={handleLogout} variant="outline" className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Abmelden
            </Button>
            <a href="/" className="block text-sm text-muted-foreground hover:text-accent">
              ← Zurück zur Website
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-serif font-bold">Nordic-Automobile</h1>
            <p className="text-sm text-primary-foreground/70">Admin-Panel</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-primary-foreground/70">
              {session?.user?.email}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Abmelden
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <Tabs defaultValue="contacts" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Kontaktanfragen
            </TabsTrigger>
            <TabsTrigger value="cars" className="flex items-center gap-2">
              <Car className="h-4 w-4" />
              Fahrzeuge
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts">
            <AdminContacts />
          </TabsContent>

          <TabsContent value="cars">
            <AdminCars />
          </TabsContent>
        </Tabs>
      </main>

      {/* Back to website */}
      <div className="container pb-8">
        <a href="/" className="text-sm text-muted-foreground hover:text-accent">
          ← Zurück zur Website
        </a>
      </div>
    </div>
  );
};

export default Admin;
