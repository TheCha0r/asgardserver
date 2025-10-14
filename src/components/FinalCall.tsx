import { Button } from "@/components/ui/button";
import finalCallImage from "@/assets/final-call-asgard.jpg";

const FinalCall = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-asgard-yellow/10 via-asgard-orange/10 to-asgard-red/10">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${finalCallImage})` }}
      >
      </div>

      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-asgard-yellow/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-asgard-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto text-center relative z-10">
        {/* Main content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-asgard-yellow via-asgard-orange to-asgard-red">
            Pronto para a batalha?
          </h2>
          
          <p className="text-2xl md:text-3xl text-foreground font-bold">
            Junte-se aos milhares de guerreiros no reino de Asgard
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Aventuras épicas, batalhas legendárias e uma comunidade incrível te esperam. 
            Não perca mais tempo - sua jornada heroica começa agora!
          </p>

          {/* Server Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-8">
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border-2 border-asgard-yellow/50 hover-scale shadow-lg">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-asgard-orange font-bold text-lg">IP do Servidor</div>
              <div className="text-foreground text-xl font-mono">asgard.magnohost.com</div>
            </div>
            
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border-2 border-asgard-orange/50 hover-scale shadow-lg">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-asgard-orange font-bold text-lg">Versão</div>
              <div className="text-foreground text-xl font-mono">1.8/1.21.x</div>
            </div>
            
            <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6 border-2 border-asgard-red/50 hover-scale shadow-lg">
              <div className="text-3xl mb-2">⚔️</div>
              <div className="text-asgard-red font-bold text-lg">Modo</div>
              <div className="text-foreground text-xl font-mono">Survival PVP</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="space-y-6">
            <Button 
              variant="hero" 
              size="xl"
              className="text-xl px-12 py-4 animate-float shadow-2xl shadow-asgard-red/40"
              onClick={() => window.open('https://discord.gg/x4HTJEsp', '_blank')}
            >
              ⚔️ ENTRAR NO ASGARD AGORA!
            </Button>
            
            <p className="text-sm text-muted-foreground">
              ✨ Mais de 100 jogadores online • 🏆 Eventos diários • 🛡️ Servidor protegido
            </p>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-asgard-orange">
            <div className="flex items-center gap-2 bg-card/90 p-3 rounded-lg shadow-md border border-asgard-yellow/30">
              <span className="text-2xl">👥</span>
              <span className="font-semibold text-foreground">+100 Jogadores</span>
            </div>
            <div className="flex items-center gap-2 bg-card/90 p-3 rounded-lg shadow-md border border-asgard-orange/30">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold text-foreground">4.9/5 Avaliação</span>
            </div>
            <div className="flex items-center gap-2 bg-card/90 p-3 rounded-lg shadow-md border border-asgard-red/30">
              <span className="text-2xl">🏆</span>
              <span className="font-semibold text-foreground">Melhor Servidor BR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCall;