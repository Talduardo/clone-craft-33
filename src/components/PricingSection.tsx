import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      id: 1,
      numbers: 100,
      price: 19.00,
      originalPrice: 29.00,
      discount: 34,
      popular: false,
    },
    {
      id: 2,
      numbers: 1000,
      price: 190.00,
      originalPrice: 290.00,
      discount: 34,
      popular: true,
    },
    {
      id: 3,
      numbers: 2000,
      price: 380.00,
      originalPrice: 580.00,
      discount: 34,
      popular: false,
    },
  ];

  const quickNumbers = [50, 100, 250, 500];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <Badge variant="secondary" className="text-primary font-semibold">
            🎯 Promoção
          </Badge>
          <h2 className="text-3xl font-bold">Compre mais barato!</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quanto mais títulos, mais chances de ganhar!
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-card hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-primary-foreground text-center py-2 text-sm font-bold">
                  🔥 MAIS POPULAR
                </div>
              )}
              
              <CardContent className={`p-6 text-center ${pkg.popular ? 'pt-12' : ''}`}>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      {pkg.numbers}
                    </div>
                    <div className="text-sm text-muted-foreground">números</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl font-bold">
                        R$ {pkg.price.toFixed(2).replace('.', ',')}
                      </span>
                      <Badge variant="destructive" className="text-xs">
                        -{pkg.discount}%
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground line-through">
                      De R$ {pkg.originalPrice.toFixed(2).replace('.', ',')}
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-success" />
                      <span>Pagamento instantâneo</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="w-4 h-4 text-success" />
                      <span>Sorteio transparente</span>
                    </div>
                  </div>

                  <Button 
                    variant={pkg.popular ? "premium" : "default"} 
                    className="w-full"
                  >
                    {pkg.popular && <Zap className="w-4 h-4 mr-2" />}
                    Escolher {pkg.numbers} números
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Numbers */}
        <div className="text-center space-y-6">
          <h3 className="text-xl font-bold">Ou escolha rapidamente:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {quickNumbers.map((num) => (
              <Button
                key={num}
                variant="outline"
                size="lg"
                className="min-w-24 text-lg font-bold hover:bg-primary hover:text-primary-foreground"
              >
                +{num}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;