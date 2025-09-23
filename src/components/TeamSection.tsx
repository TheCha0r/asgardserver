import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "ThorMaster",
      role: "Fundador & CEO", 
      description: "Visionário por trás do Asgard, com mais de 5 anos criando experiências únicas no Minecraft.",
      avatar: "👑",
      color: "from-asgard-yellow to-asgard-orange"
    },
    {
      name: "LokiDev",
      role: "Desenvolvedor Principal",
      description: "Responsável por todos os plugins exclusivos e sistemas avançados do servidor.",
      avatar: "⚡", 
      color: "from-asgard-orange to-asgard-red"
    },
    {
      name: "FrimeSupport", 
      role: "Gerente de Comunidade",
      description: "Garantindo que todos os jogadores tenham a melhor experiência possível no Asgard.",
      avatar: "🛡️",
      color: "from-asgard-red to-asgard-yellow"
    },
    {
      name: "OdinAdmin",
      role: "Administrador Senior",
      description: "Moderação e organização de eventos, mantendo a ordem e diversão no reino.",
      avatar: "⚔️",
      color: "from-asgard-yellow to-asgard-red"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-asgard-yellow via-asgard-red to-asgard-orange mb-4">
            Nossa Equipe
          </h2>
          <p className="text-xl text-gray-600">
            Conheça os guardiões do reino de Asgard
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-white shadow-lg border-2 border-gray-200 hover-scale text-center group overflow-hidden relative hover:border-asgard-yellow/50 transition-all duration-300">
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-3 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <CardHeader className="relative">
                {/* Avatar - Cube style */}
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <div className={`w-full h-full bg-gradient-to-br ${member.color} rounded-lg flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl border-2 border-white`}>
                    {member.avatar}
                  </div>
                  
                  {/* Minecraft-style shadow */}
                  <div className={`absolute top-2 left-2 w-full h-full bg-gradient-to-br ${member.color} rounded-lg -z-10 opacity-20`}></div>
                </div>
                
                <CardTitle className="text-xl font-bold text-asgard-orange group-hover:text-asgard-red transition-colors duration-300">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-asgard-yellow font-semibold">
                  {member.role}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team stats */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Equipe dedicada trabalhando para oferecer a melhor experiência
          </p>
          <div className="flex justify-center items-center gap-8 text-asgard-orange flex-wrap">
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md border border-gray-200">
              <span className="text-2xl">🎮</span>
              <span className="font-semibold">Disponível 24/7</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md border border-gray-200">
              <span className="text-2xl">💬</span>
              <span className="font-semibold">Suporte rápido</span>
            </div>
            <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-md border border-gray-200">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold">Experiência comprovada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;