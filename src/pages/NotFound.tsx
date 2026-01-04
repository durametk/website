import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex items-center justify-center min-h-screen pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="font-heading font-bold text-8xl text-primary mb-4">404</h1>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="default" size="lg">
                <Link to="/">
                  <Home className="h-4 w-4" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/industries">
                  <ArrowLeft className="h-4 w-4" />
                  Browse Industries
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
