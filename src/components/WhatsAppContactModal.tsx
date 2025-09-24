import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().trim().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }).max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  usuario: z.string().trim().min(3, { message: "Usuário deve ter pelo menos 3 caracteres" }).max(50, { message: "Usuário deve ter no máximo 50 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Email deve ter no máximo 255 caracteres" })
});

interface WhatsAppContactModalProps {
  children: React.ReactNode;
}

const WhatsAppContactModal = ({ children }: WhatsAppContactModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    usuario: "",
    email: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateWhatsAppMessage = (nome: string, usuario: string, email: string) => {
    const message = `Olá! Sou ${nome} (usuário: ${usuario})
Email: ${email}

Gostaria de solicitar suporte para o servidor ASGARD.`;
    return encodeURIComponent(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validar dados do formulário
      const validatedData = contactSchema.parse(formData);

      // Salvar contato no banco de dados
      const { error } = await supabase
        .from('whatsapp_contacts')
        .insert({
          nome: validatedData.nome,
          usuario: validatedData.usuario,
          email: validatedData.email
        });

      if (error) {
        console.error('Erro ao salvar contato:', error);
        toast.error("Erro ao processar solicitação. Tente novamente.");
        return;
      }

      // Gerar mensagem WhatsApp e redirecionar
      const message = generateWhatsAppMessage(validatedData.nome, validatedData.usuario, validatedData.email);
      const whatsappUrl = `https://wa.me/5582999586249?text=${message}`;
      
      // Abrir WhatsApp em nova aba
      window.open(whatsappUrl, '_blank');

      // Resetar formulário e fechar modal
      setFormData({ nome: "", usuario: "", email: "" });
      setIsOpen(false);
      
      toast.success("Redirecionando para WhatsApp...");

    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast.error(firstError.message);
      } else {
        console.error('Erro inesperado:', error);
        toast.error("Erro inesperado. Tente novamente.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-asgard-orange">
            <MessageCircle className="w-5 h-5" />
            Contato WhatsApp
          </DialogTitle>
          <DialogDescription>
            Preencha seus dados para entrar em contato via WhatsApp
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome *</Label>
            <Input
              id="nome"
              type="text"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="usuario">Usuário *</Label>
            <Input
              id="usuario"
              type="text"
              placeholder="Seu usuário no Minecraft"
              value={formData.usuario}
              onChange={(e) => handleInputChange("usuario", e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
          </div>

          <DialogFooter className="gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="vip"
              disabled={isLoading}
            >
              {isLoading ? (
                "Processando..."
              ) : (
                <>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Abrir WhatsApp
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppContactModal;