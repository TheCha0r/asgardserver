import { Button } from "@/components/ui/button";
import logoAsgard from "@/assets/logo-asgard.png";
import ComprovanteForm from "@/components/ComprovanteForm";
import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-asgard-yellow/30 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src={logoAsgard} 
            alt="ASGARD Logo" 
            className="h-8 w-8"
          />
          <div className="text-2xl font-bold text-asgard-orange">
            ASGARD
          </div>
        </div>
        
        <nav className="flex gap-4">
          <ThemeToggle />
          <Button 
            variant="outline" 
            size="sm" 
            className="border-asgard-orange text-asgard-orange hover:bg-asgard-orange hover:text-white"
            onClick={() => window.location.href = '/admin'}
          >
            Admin
          </Button>
          <ComprovanteForm>
            <Button variant="asgard" size="sm">
              📄 Enviar Comprovante
            </Button>
          </ComprovanteForm>
        </nav>
      </div>
    </header>
  );
};

export default Header;