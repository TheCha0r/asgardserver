-- Create comprovantes table
CREATE TABLE public.comprovantes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  usuario TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  comprovante_url TEXT,
  comprovante_nome TEXT,
  status TEXT DEFAULT 'pendente',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on comprovantes
ALTER TABLE public.comprovantes ENABLE ROW LEVEL SECURITY;

-- Admins can view all comprovantes
CREATE POLICY "Admins can view all comprovantes"
ON public.comprovantes
FOR SELECT
USING (true);

-- Anyone can insert comprovantes
CREATE POLICY "Anyone can insert comprovantes"
ON public.comprovantes
FOR INSERT
WITH CHECK (true);

-- Admins can update comprovantes
CREATE POLICY "Admins can update comprovantes"
ON public.comprovantes
FOR UPDATE
USING (true);

-- Create whatsapp_contacts table
CREATE TABLE public.whatsapp_contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nome TEXT NOT NULL,
  usuario TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on whatsapp_contacts
ALTER TABLE public.whatsapp_contacts ENABLE ROW LEVEL SECURITY;

-- Admins can view all contacts
CREATE POLICY "Admins can view all contacts"
ON public.whatsapp_contacts
FOR SELECT
USING (true);

-- Anyone can insert contacts
CREATE POLICY "Anyone can insert contacts"
ON public.whatsapp_contacts
FOR INSERT
WITH CHECK (true);

-- Create storage bucket for comprovantes
INSERT INTO storage.buckets (id, name, public) 
VALUES ('comprovantes', 'comprovantes', false)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for comprovantes
CREATE POLICY "Anyone can upload comprovantes"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'comprovantes');

CREATE POLICY "Admins can view comprovantes"
ON storage.objects
FOR SELECT
USING (bucket_id = 'comprovantes');

-- Create update trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add triggers
CREATE TRIGGER update_comprovantes_updated_at
BEFORE UPDATE ON public.comprovantes
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_whatsapp_contacts_updated_at
BEFORE UPDATE ON public.whatsapp_contacts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();