import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const paymentSchema = z.object({
  nome: z.string().trim().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  usuario: z.string().trim().min(3, { message: "Usuário deve ter pelo menos 3 caracteres" }),
  email: z.string().trim().email({ message: "Email inválido" })
});

interface MercadoPagoPaymentProps {
  children: React.ReactNode;
  title: string;
  price: number;
}

const MercadoPagoPayment = ({ children, title, price }: MercadoPagoPaymentProps) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const validatedData = paymentSchema.parse(formData);

      console.log('Creating Mercado Pago preference...');

      const { data, error } = await supabase.functions.invoke('mercadopago-create-preference', {
        body: {
          title,
          quantity: 1,
          price,
          email: validatedData.email,
          nome: validatedData.nome,
          usuario: validatedData.usuario
        }
      });

      if (error) {
        console.error('Error creating preference:', error);
        throw error;
      }

      console.log('Preference created:', data);

      // Redirecionar para o Mercado Pago
      if (data.initPoint) {
        window.open(data.initPoint, '_blank');
        setIsOpen(false);
        setFormData({ nome: "", usuario: "", email: "" });
        toast.success("Redirecionando para pagamento...");
      } else {
        throw new Error('Link de pagamento não foi gerado');
      }

    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        toast.error(firstError.message);
      } else {
        console.error('Erro inesperado:', error);
        toast.error("Erro ao processar pagamento. Tente novamente.");
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
            <CreditCard className="w-5 h-5" />
            Pagamento via Mercado Pago
          </DialogTitle>
          <DialogDescription>
            Preencha seus dados para continuar com o pagamento
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-asgard-dark/50 p-4 rounded-lg border border-asgard-orange/20">
            <p className="text-sm text-gray-400">Produto:</p>
            <p className="text-lg font-bold text-white">{title}</p>
            <p className="text-2xl font-bold text-asgard-orange mt-2">
              R$ {price.toFixed(2)}
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo *</Label>
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
            <Label htmlFor="usuario">Usuário do Minecraft *</Label>
            <Input
              id="usuario"
              type="text"
              placeholder="Seu usuário no servidor"
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
                  <CreditCard className="w-4 h-4 mr-2" />
                  Pagar com Mercado Pago
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MercadoPagoPayment;
