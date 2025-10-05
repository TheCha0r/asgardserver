-- Create table for Mercado Pago payments
CREATE TABLE public.pagamentos_mercadopago (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  payment_id TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL,
  status_detail TEXT,
  transaction_amount DECIMAL(10, 2),
  external_reference TEXT,
  payer_email TEXT,
  payment_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.pagamentos_mercadopago ENABLE ROW LEVEL SECURITY;

-- Admin can view all payments
CREATE POLICY "Admins can view all payments"
ON public.pagamentos_mercadopago
FOR SELECT
USING (true);

-- Service role can insert payments (from webhook)
CREATE POLICY "Service role can insert payments"
ON public.pagamentos_mercadopago
FOR INSERT
WITH CHECK (true);

-- Service role can update payments
CREATE POLICY "Service role can update payments"
ON public.pagamentos_mercadopago
FOR UPDATE
USING (true);

-- Add trigger for updated_at
CREATE TRIGGER update_pagamentos_mercadopago_updated_at
BEFORE UPDATE ON public.pagamentos_mercadopago
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();