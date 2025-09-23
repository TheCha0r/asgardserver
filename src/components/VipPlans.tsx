import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const VipPlans = () => {
  const plans = [
    {
      name: "VIP Ferro",
      price: "R$ 17,90",
      color: "from-gray-400 to-gray-600",
      emoji: "⚒️",
      benefits: [
        "XP extra em Agricultura 🌱",
        "Maior chance de Crítico ⚔️",
        "Enxada encantada especial",
        "5 Asgard Points (R$5,00)"
      ],
      link: "https://mpago.la/2PntTya",
      description: "Ideal para iniciantes que querem dar os primeiros passos com vantagens no servidor."
    },
    {
      name: "VIP Redstone", 
      price: "R$ 27,90",
      color: "from-asgard-red to-asgard-red-dark",
      emoji: "🔴",
      benefits: [
        "XP extra em Mineração ⛏️",
        "Maior velocidade ⚡",
        "Picareta 3x3 (mina em área)",
        "12 Asgard Points (R$12,00)"
      ],
      link: "https://mpago.la/1JHxyR1",
      description: "Perfeito para mineradores que querem evoluir rápido e lucrar mais."
    },
    {
      name: "VIP Diamante",
      price: "R$ 44,90",
      color: "from-blue-400 to-blue-600", 
      emoji: "💎",
      benefits: [
        "XP extra em Mineração ⛏️",
        "Maior sorte 🍀 (mais drops raros)",
        "Picareta 3x3 + VeinMiner",
        "18 Asgard Points (R$18,00)"
      ],
      link: "https://mpago.la/31rqjTW",
      description: "Para jogadores lendários que querem mineração turbo e muitas recompensas."
    },
    {
      name: "VIP Netherita",
      price: "R$ 67,90",
      color: "from-asgard-orange to-asgard-yellow",
      emoji: "🛡️",
      benefits: [
        "XP extra em Defesa 🛡️",
        "Dano crítico aumentado ⚔️🔥",
        "Mais chance de Crítico 🎯",
        "Kit completo + Espada Afiação VIII 🗡️",
        "30 Asgard Points (R$30,00)"
      ],
      link: "https://mpago.la/2XytSrb",
      description: "A escolha suprema para quem quer dominar o servidor com poder total."
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-asgard-yellow via-asgard-orange to-asgard-red mb-4">
            🌟 Pacotes VIP Asgard
          </h2>
          <p className="text-xl text-gray-600">
            Escolha seu plano e domine o reino de Asgard
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={plan.name} className="bg-white shadow-xl border-2 border-gray-200 hover-scale relative overflow-hidden group hover:border-asgard-yellow/50 transition-all duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <CardHeader className="text-center relative">
                <div className="text-4xl mb-2">{plan.emoji}</div>
                <CardTitle className="text-2xl font-bold text-asgard-orange">{plan.name}</CardTitle>
                <CardDescription className="text-3xl font-black text-gray-800">
                  {plan.price}
                  <span className="text-sm text-gray-500">/mês</span>
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3 relative">
                <p className="text-sm text-gray-600 italic mb-4 border-l-4 border-asgard-yellow pl-3">
                  💡 {plan.description}
                </p>
                {plan.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start text-gray-700 text-sm">
                    <span className="text-asgard-yellow mr-2 text-lg">✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter className="relative">
                <Button 
                  variant="vip" 
                  className="w-full group-hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <a href={plan.link} target="_blank" rel="noopener noreferrer">
                    🛒 Comprar Agora
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipPlans;