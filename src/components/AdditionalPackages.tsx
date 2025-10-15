import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import MercadoPagoPayment from "./MercadoPagoPayment";

const AdditionalPackages = () => {
  const packages = [
    {
      name: "PACOTE INICIANTE",
      price: "R$ 10,00",
      priceValue: 10.00,
      coins: "10 moedas",
      description: "Perfeito para começar no servidor",
      features: ["10 Moedas ASGARD"],
      icon: "⚜︎"
    },
    {
      name: "PACOTE AVENTUREIRO", 
      price: "R$ 20,00",
      priceValue: 20.00,
      coins: "20 moedas",
      description: "Para aventureiros experientes",
      features: ["20 Moedas ASGARD"],
      icon: "☸︎"
    },
    {
      name: "PACOTE LENDA",
      price: "R$ 35,00",
      priceValue: 35.00,
      coins: "35 moedas",
      description: "Pacote com melhor custo-benefício",
      features: ["35 Moedas ASGARD"],
      icon: "⚕︎"
    },
    {
      name: "PACOTE DIVINO",
      price: "R$ 50,00",
      priceValue: 50.00,
      coins: "50 moedas",
      description: "Para os verdadeiros guerreiros",
      features: ["50 Moedas ASGARD"],
      icon: "✴︎"
    },
    {
      name: "+5 HOMES",
      price: "R$ 5,00",
      priceValue: 5.00,
      coins: "5 Homes extras",
      description: "Aumente seu limite de casas",
      features: ["+5 Pontos de HOME"],
      icon: "🏠"
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-asgard-orange via-asgard-red to-asgard-yellow mb-4">
            PACOTES DE MOEDAS
          </h2>
          <p className="text-xl text-gray-600">
            Adquira moedas para comprar itens especiais no servidor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.name} className="bg-white shadow-lg border border-gray-200 hover-scale relative overflow-hidden group hover:border-asgard-orange/50 hover:shadow-xl transition-all duration-300">
              {/* Icon */}
              <div className="absolute top-4 right-4 text-3xl">
                {pkg.icon}
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-asgard-orange/5 via-transparent to-asgard-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <CardHeader className="relative">
                <CardTitle className="text-xl font-bold text-asgard-orange">{pkg.name}</CardTitle>
                <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                <div className="space-y-1">
                  <div className="text-2xl font-black text-gray-800">
                    {pkg.price}
                  </div>
                  <div className="text-lg font-semibold text-asgard-yellow">
                    {pkg.coins}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-2 relative">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-center text-gray-700 text-sm">
                    <span className="text-asgard-yellow mr-2">✓</span>
                    {feature}
                  </div>
                ))}
              </CardContent>

              <CardFooter className="relative">
                <MercadoPagoPayment title={pkg.name} price={pkg.priceValue}>
                  <Button 
                    variant="asgard" 
                    className="w-full group-hover:shadow-asgard-yellow/30 transition-all duration-300"
                  >
                    Comprar Agora
                  </Button>
                </MercadoPagoPayment>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalPackages;
