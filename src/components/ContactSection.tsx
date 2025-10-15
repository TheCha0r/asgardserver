import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import WhatsAppContactModal from "./WhatsAppContactModal";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-asgard-orange via-asgard-yellow to-asgard-red mb-4">
            Contato
          </h2>
          <p className="text-xl text-muted-foreground">
            Entre em contato conosco e faça parte da família Asgard
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Email Contact */}
          <Card className="bg-card shadow-lg border-2 hover-scale group hover:border-asgard-yellow/50 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-asgard-yellow to-asgard-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-asgard-orange">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Envie suas dúvidas, sugestões ou reportes por email
              </p>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">
                  🐛 asgardbrsuporte@gmail.com
                </p>
              </div>
              <Button 
                variant="asgard" 
                className="group-hover:shadow-asgard-yellow/30 transition-all duration-300"
                onClick={() => window.open('mailto:asgardbrsuporte@gmail.com', '_blank')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar Email
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp Contact */}
          <Card className="bg-card shadow-lg border-2 hover-scale group hover:border-asgard-orange/50 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-asgard-orange to-asgard-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-asgard-orange">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Suporte imediato via WhatsApp para resolver qualquer problema
              </p>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">
                  📱 (55) 82 99958-6249 (Felipe)
                </p>
                <p className="text-green-600 text-sm flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Online agora
                </p>
              </div>
              <WhatsAppContactModal>
                <Button 
                  variant="vip" 
                  className="group-hover:shadow-asgard-orange/30 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </WhatsAppContactModal>
            </CardContent>
          </Card>

          {/* Discord Contact */}
          <Card className="bg-card shadow-lg border-2 hover-scale group hover:border-purple-500/50 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </div>
              <CardTitle className="text-2xl text-purple-600">Discord</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-muted-foreground">
                Participe da nossa comunidade Discord oficial
              </p>
              <div className="space-y-2">
                <p className="text-foreground font-semibold">
                  🎮 Comunidade ASGARD
                </p>
                <p className="text-green-600 text-sm flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Servidor ativo
                </p>
              </div>
              <Button 
                variant="outline" 
                className="group-hover:shadow-purple-500/30 transition-all duration-300 border-purple-500 text-purple-600 hover:bg-purple-50"
                onClick={() => window.open('https://discord.gg/x4HTJEsp', '_blank')}
              >
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Entrar no Discord
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-3 bg-card p-6 rounded-xl shadow-lg border">
            <div className="w-12 h-12 bg-asgard-yellow/10 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-asgard-yellow" />
            </div>
            <h3 className="text-lg font-semibold text-asgard-orange">Horário de Atendimento</h3>
            <p className="text-muted-foreground text-sm">
              Segunda à Domingo<br />
              24 horas por dia
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 bg-card p-6 rounded-xl shadow-lg border">
            <div className="w-12 h-12 bg-asgard-orange/10 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-asgard-orange" />
            </div>
            <h3 className="text-lg font-semibold text-asgard-orange">Tempo de Resposta</h3>
            <p className="text-muted-foreground text-sm">
              WhatsApp: Imediato<br />
              Email: Até 2 horas
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 bg-card p-6 rounded-xl shadow-lg border">
            <div className="w-12 h-12 bg-asgard-red/10 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-asgard-red" />
            </div>
            <h3 className="text-lg font-semibold text-asgard-red">Servidor</h3>
            <p className="text-muted-foreground text-sm">
              Hospedado no Brasil<br />
              Baixa latência
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;