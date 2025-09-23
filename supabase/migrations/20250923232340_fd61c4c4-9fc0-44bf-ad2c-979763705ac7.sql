-- Criar tabela para comprovantes de pagamento
CREATE TABLE public.comprovantes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  usuario TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  comprovante_url TEXT,
  comprovante_nome TEXT,
  status TEXT DEFAULT 'pendente' CHECK (status IN ('pendente', 'aprovado', 'rejeitado')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.comprovantes ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública (qualquer pessoa pode enviar comprovante)
CREATE POLICY "Qualquer pessoa pode enviar comprovante" 
ON public.comprovantes 
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Política para admins verem todos os comprovantes
CREATE POLICY "Admins podem ver todos os comprovantes" 
ON public.comprovantes 
FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email = 'admin@asgard.com'
  )
);

-- Política para admins atualizarem status
CREATE POLICY "Admins podem atualizar comprovantes" 
ON public.comprovantes 
FOR UPDATE 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email = 'admin@asgard.com'
  )
);

-- Criar bucket para comprovantes
INSERT INTO storage.buckets (id, name, public) VALUES ('comprovantes', 'comprovantes', false);

-- Política para upload de comprovantes (qualquer pessoa)
CREATE POLICY "Qualquer pessoa pode fazer upload de comprovante"
ON storage.objects
FOR INSERT 
TO anon, authenticated
WITH CHECK (bucket_id = 'comprovantes');

-- Política para admins verem comprovantes
CREATE POLICY "Admins podem ver comprovantes"
ON storage.objects
FOR SELECT
TO authenticated
USING (
  bucket_id = 'comprovantes' AND
  EXISTS (
    SELECT 1 FROM auth.users 
    WHERE auth.users.id = auth.uid() 
    AND auth.users.email = 'admin@asgard.com'
  )
);

-- Função para atualizar updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger para atualizar timestamps
CREATE TRIGGER update_comprovantes_updated_at
  BEFORE UPDATE ON public.comprovantes
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();