import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";
import prizeImage from "@/assets/prize-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-background flex items-center">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="secondary" className="text-primary font-semibold">
                🏆 RIFA ESPECIAL
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                RANGER LIMITED
                <span className="block bg-gradient-primary bg-clip-text text-transparent">
                  PLUS
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                BORA ACABAR ATÉ SÁBADO? ÚLTIMA RIFINHA FOI 12 DIAS HEIN 🔥
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>Termina em 3 dias</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>1.247 participantes</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="w-4 h-4" />
                <span>95% vendidos</span>
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Progresso da rifa</span>
                <span className="text-2xl font-bold text-primary">21.5%</span>
              </div>
              <div className="w-full bg-secondary/50 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-primary rounded-full transition-all duration-500" style={{ width: '21.5%' }}></div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-card/50 backdrop-blur rounded-xl p-6 border border-border/50">
              <div className="text-center space-y-2">
                <p className="text-muted-foreground">Por apenas</p>
                <div className="text-4xl font-bold text-primary">
                  R$ 0,29
                </div>
                <p className="text-sm text-muted-foreground">por número</p>
              </div>
            </div>

            <Button variant="premium" size="lg" className="w-full">
              🎟️ Meus Títulos
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card animate-float">
              <img 
                src={prizeImage} 
                alt="Ford Ranger Limited Plus - Prêmio da Rifa"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground font-bold px-3 py-1">
                  🚗 PRÊMIO PRINCIPAL
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;