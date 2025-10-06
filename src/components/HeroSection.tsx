import { Button } from "@/components/ui/button";
import logoAsgard from "@/assets/logo-asgard.png";
import heroImage from "@/assets/hero-asgard.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-asgard-yellow/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-asgard-orange/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <img 
              src={logoAsgard} 
              alt="ASGARD Logo" 
              className="h-24 w-24 animate-float"
            />
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-asgard-yellow via-asgard-orange to-asgard-red">
              ASGARD
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-800">
              O Reino dos Guerreiros
            </p>
          </div>
          
          <p className="text-lg text-gray-600 max-w-xl">
            Entre no servidor mais épico de Minecraft! Aventuras infinitas, comunidade ativa e a melhor experiência PVP te aguardam no reino de Asgard.
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            className="animate-float shadow-2xl shadow-asgard-red/30"
            onClick={() => window.open('https://discord.gg/x4HTJEsp', '_blank')}
          >
            🎮 Quero jogar agora!
          </Button>
          
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-700 font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-asgard-yellow">📍</span>
              <span>IP: asgard.magnohost.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-asgard-orange">🎯</span>
              <span>Versão: 1.8/1.21.x</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-asgard-red">⚔️</span>
              <span>Modo: Survival PVP</span>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl hover-scale border-4 border-asgard-yellow/20">
            <img 
              src={heroImage} 
              alt="Reino de Asgard - Servidor Minecraft" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-asgard-orange/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;