import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageCircle, Clock, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-asgard-orange via-asgard-yellow to-asgard-red mb-4">
            Contato
          </h2>
          <p className="text-xl text-gray-600">
            Entre em contato conosco e faça parte da família Asgard
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Email Contact */}
          <Card className="bg-white shadow-lg border-2 border-gray-200 hover-scale group hover:border-asgard-yellow/50 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-asgard-yellow to-asgard-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-asgard-orange">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600">
                Envie suas dúvidas, sugestões ou reportes por email
              </p>
              <div className="space-y-2">
                <p className="text-gray-800 font-semibold">
                  📧 contato@asgard.minecraft.com
                </p>
                <p className="text-gray-800 font-semibold">
                  🐛 asgardbrsuporte@gmail.com
                </p>
              </div>
              <Button 
                variant="asgard" 
                className="group-hover:shadow-asgard-yellow/30 transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar Email
              </Button>
            </CardContent>
          </Card>

          {/* WhatsApp Contact */}
          <Card className="bg-white shadow-lg border-2 border-gray-200 hover-scale group hover:border-asgard-orange/50 transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-asgard-orange to-asgard-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-asgard-orange">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-gray-600">
                Suporte imediato via WhatsApp para resolver qualquer problema
              </p>
              <div className="space-y-2">
                <p className="text-gray-800 font-semibold">
                  📱 (55) 82 99958-6249 (Felipe)
                </p>
                <p className="text-green-600 text-sm flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Online agora
                </p>
              </div>
              <Button 
                variant="vip" 
                className="group-hover:shadow-asgard-orange/30 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chamar no WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center space-y-3 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-asgard-yellow/10 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-asgard-yellow" />
            </div>
            <h3 className="text-lg font-semibold text-asgard-orange">Horário de Atendimento</h3>
            <p className="text-gray-600 text-sm">
              Segunda à Domingo<br />
              24 horas por dia
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-asgard-orange/10 rounded-full flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-asgard-orange" />
            </div>
            <h3 className="text-lg font-semibold text-asgard-orange">Tempo de Resposta</h3>
            <p className="text-gray-600 text-sm">
              WhatsApp: Imediato<br />
              Email: Até 2 horas
            </p>
          </div>

          <div className="flex flex-col items-center space-y-3 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-asgard-red/10 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-asgard-red" />
            </div>
            <h3 className="text-lg font-semibold text-asgard-red">Servidor</h3>
            <p className="text-gray-600 text-sm">
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