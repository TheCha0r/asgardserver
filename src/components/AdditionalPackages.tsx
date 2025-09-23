import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const AdditionalPackages = () => {
  const packages = [
    {
      name: "Iniciante",
      price: "R$ 10,00",
      discount: "50% OFF",
      description: "Kit básico para começar sua jornada",
      features: ["Kit de ferramentas", "Comida x64", "Proteção inicial"],
    },
    {
      name: "Aventureiro", 
      price: "R$ 25,00",
      discount: "30% OFF",
      description: "Para exploradores corajosos",
      features: ["Kit aventura", "Mapa especial", "Bússola mágica", "Poções"],
    },
    {
      name: "PVP Player",
      price: "R$ 35,00", 
      discount: "25% OFF",
      description: "Dominação total em combate",
      features: ["Armadura encantada", "Espadas especiais", "Poções PVP", "Kit médico"],
    },
    {
      name: "Lenda",
      price: "R$ 60,00",
      discount: "40% OFF", 
      description: "Para os verdadeiros heróis",
      features: ["Kit lendário", "Montaria exclusiva", "Casa premium", "Título especial"],
    },
    {
      name: "PVP Pro",
      price: "R$ 100,00",
      discount: "20% OFF",
      description: "O máximo em poder e prestígio",
      features: ["Arsenal completo", "Base fortificada", "Exército pessoal", "Comando especial", "Status VIP"],
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-asgard-orange via-asgard-red to-asgard-yellow mb-4">
            Pacotes Adicionais
          </h2>
          <p className="text-xl text-gray-600">
            Potencialize sua experiência com nossos pacotes especiais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.name} className="bg-white shadow-lg border border-gray-200 hover-scale relative overflow-hidden group hover:border-asgard-orange/50 hover:shadow-xl transition-all duration-300">
              {/* Discount badge */}
              <div className="absolute top-4 right-4 bg-asgard-red text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                {pkg.discount}
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-asgard-orange/5 via-transparent to-asgard-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-asgard-orange">{pkg.name}</CardTitle>
                <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                <div className="text-3xl font-black text-gray-800">
                  {pkg.price}
                </div>
              </CardHeader>

              <CardContent className="space-y-2 relative">
                {pkg.features.map((feature) => (
                  <div key={feature} className="flex items-center text-gray-700 text-sm">
                    <span className="text-asgard-yellow mr-2">🎯</span>
                    {feature}
                  </div>
                ))}
              </CardContent>

              <CardFooter className="relative">
                <Button 
                  variant="asgard" 
                  className="w-full group-hover:shadow-asgard-yellow/30 transition-all duration-300"
                >
                  Adquirir Pacote
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalPackages;