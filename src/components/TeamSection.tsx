import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import avatarMinecabecudo from "@/assets/avatar-minecabecudo.png";
import avatarNarnia from "@/assets/avatar-narnia.png";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Minecabecudo",
      role: "Dono do Servidor", 
      description: "Fundador e dono do servidor Asgard, responsável por toda a visão e direcionamento do projeto.",
      avatar: avatarMinecabecudo,
      color: "from-asgard-yellow to-asgard-orange"
    },
    {
      name: "narnia0987",
      role: "Staff",
      description: "Membro da equipe staff, auxiliando na moderação e suporte aos jogadores do servidor.",
      avatar: avatarNarnia, 
      color: "from-asgard-orange to-asgard-red"
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

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {teamMembers.map((member) => (
            <Card key={member.name} className="bg-white shadow-lg border-2 border-gray-200 hover-scale text-center group overflow-hidden relative hover:bg-asgard-orange hover:border-asgard-orange transition-all duration-300">
              
              <CardHeader className="relative">
                {/* Avatar - Image style */}
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <img 
                    src={member.avatar} 
                    alt={`Avatar de ${member.name}`}
                    className="w-full h-full rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl border-2 border-gray-300 group-hover:border-white pixelated"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  
                  {/* Minecraft-style shadow */}
                  <div className="absolute top-2 left-2 w-full h-full bg-black/20 rounded-lg -z-10 opacity-50"></div>
                </div>
                
                <CardTitle className="text-xl font-bold text-asgard-orange group-hover:text-white transition-colors duration-300">
                  {member.name}
                </CardTitle>
                <CardDescription className="text-asgard-yellow font-semibold group-hover:text-gray-100 transition-colors duration-300">
                  {member.role}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative">
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
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