import shieldIcon from "@/assets/shield-icon.png";
import speedIcon from "@/assets/speed-icon.png"; 
import communityIcon from "@/assets/community-icon.png";

const Differentials = () => {
  const features = [
    {
      icon: shieldIcon,
      title: "Servidor Protegido", 
      description: "Sistema anti-hack avançado e moderação 24/7 garantem um ambiente seguro para todos os jogadores."
    },
    {
      icon: speedIcon,
      title: "Performance Extrema",
      description: "Hardware de última geração e otimizações exclusivas proporcionam zero lag e experiência fluida."
    },
    {
      icon: communityIcon,
      title: "Comunidade Ativa", 
      description: "Mais de 5.000 jogadores conectados diariamente em eventos, competições e aventuras épicas."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-asgard-red via-asgard-orange to-asgard-yellow mb-4">
            Por que escolher Asgard?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra os diferenciais que fazem do Asgard o melhor servidor de Minecraft
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={feature.title} className="text-center group hover-scale">
              {/* Icon Container */}
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-asgard-yellow/10 to-asgard-red/10 rounded-2xl flex items-center justify-center group-hover:shadow-2xl group-hover:shadow-asgard-orange/30 transition-all duration-300 border-2 border-gray-200 group-hover:border-asgard-yellow/50">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-asgard-yellow rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-asgard-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse delay-150"></div>
              </div>

              <h3 className="text-2xl font-bold text-asgard-orange mb-4 group-hover:text-asgard-red transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="text-4xl font-black text-asgard-yellow group-hover:text-asgard-orange transition-colors duration-300">5K+</div>
            <div className="text-gray-500">Jogadores Ativos</div>
          </div>
          <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="text-4xl font-black text-asgard-orange group-hover:text-asgard-red transition-colors duration-300">99.9%</div>
            <div className="text-gray-500">Uptime</div>
          </div>
          <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="text-4xl font-black text-asgard-red group-hover:text-asgard-yellow transition-colors duration-300">24/7</div>
            <div className="text-gray-500">Suporte</div>
          </div>
          <div className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
            <div className="text-4xl font-black text-asgard-yellow group-hover:text-asgard-orange transition-colors duration-300">3+</div>
            <div className="text-gray-500">Anos Online</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;