-- Corrigir políticas RLS problemáticas
DROP POLICY IF EXISTS "Admins podem ver todos os comprovantes" ON public.comprovantes;
DROP POLICY IF EXISTS "Admins podem atualizar comprovantes" ON public.comprovantes;

-- Criar novas políticas RLS mais simples que funcionam
CREATE POLICY "Admin can view all comprovantes" 
ON public.comprovantes 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE users.id = auth.uid() 
    AND users.email = 'admin@asgard.com'
  )
);

CREATE POLICY "Admin can update comprovantes" 
ON public.comprovantes 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE users.id = auth.uid() 
    AND users.email = 'admin@asgard.com'
  )
);

-- Criar tabela para contatos WhatsApp
CREATE TABLE public.whatsapp_contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  usuario VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS na nova tabela
ALTER TABLE public.whatsapp_contacts ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública
CREATE POLICY "Anyone can insert whatsapp contacts" 
ON public.whatsapp_contacts 
FOR INSERT 
WITH CHECK (true);

-- Política para admin visualizar contatos
CREATE POLICY "Admin can view whatsapp contacts" 
ON public.whatsapp_contacts 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE users.id = auth.uid() 
    AND users.email = 'admin@asgard.com'
  )
);

-- Trigger para updated_at automático
CREATE TRIGGER update_whatsapp_contacts_updated_at
BEFORE UPDATE ON public.whatsapp_contacts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();