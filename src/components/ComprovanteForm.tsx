import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ComprovanteFormProps {
  children: React.ReactNode;
}

const ComprovanteForm = ({ children }: ComprovanteFormProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    usuario: "",
    email: "",
    whatsapp: "",
    comprovante: null as File | null
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData(prev => ({
      ...prev,
      comprovante: file || null
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.usuario || !formData.email || !formData.whatsapp || !formData.comprovante) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos e anexe o comprovante.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Upload do arquivo
      const fileExt = formData.comprovante.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('comprovantes')
        .upload(filePath, formData.comprovante);

      if (uploadError) {
        throw uploadError;
      }

      // Salvar dados no banco
      const { error: insertError } = await supabase
        .from('comprovantes')
        .insert([
          {
            nome: formData.nome,
            usuario: formData.usuario,
            email: formData.email,
            whatsapp: formData.whatsapp,
            comprovante_url: filePath,
            comprovante_nome: formData.comprovante.name
          }
        ]);

      if (insertError) {
        throw insertError;
      }

      toast({
        title: "Comprovante Enviado!",
        description: "Seu comprovante foi enviado com sucesso. Aguarde a confirmação do pagamento."
      });

      // Reset form
      setFormData({
        nome: "",
        usuario: "",
        email: "",
        whatsapp: "",
        comprovante: null
      });
      setOpen(false);

    } catch (error) {
      console.error('Erro ao enviar comprovante:', error);
      toast({
        title: "Erro",
        description: "Erro ao enviar comprovante. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-asgard-orange">Enviar Comprovante de Pagamento</DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo e anexe seu comprovante de pagamento.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              value={formData.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              placeholder="Seu nome completo"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="usuario">Nome de Usuário (Minecraft)</Label>
            <Input
              id="usuario"
              value={formData.usuario}
              onChange={(e) => handleInputChange("usuario", e.target.value)}
              placeholder="Seu nick no Minecraft"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="whatsapp">WhatsApp</Label>
            <Input
              id="whatsapp"
              value={formData.whatsapp}
              onChange={(e) => handleInputChange("whatsapp", e.target.value)}
              placeholder="(xx) xxxxx-xxxx"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="comprovante">Comprovante de Pagamento</Label>
            <Input
              id="comprovante"
              type="file"
              onChange={handleFileChange}
              accept="image/*,.pdf"
              required
              className="cursor-pointer"
            />
            <p className="text-xs text-gray-500">
              Aceita imagens (JPG, PNG) ou PDF
            </p>
          </div>
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" variant="asgard">
              Enviar Comprovante
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ComprovanteForm;