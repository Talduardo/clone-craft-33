import { Button } from "@/components/ui/button";
import { Menu, Trophy } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-8 h-8 text-primary" />
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            PRÊMIOS
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
            Rifas
          </a>
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
            Ganhadores
          </a>
          <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
            Como Funciona
          </a>
          <Button variant="outline" size="sm">
            Meus Títulos
          </Button>
        </nav>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;