-- Adicionar política para admins poderem deletar pagamentos
CREATE POLICY "Admins can delete payments"
ON pagamentos_mercadopago
FOR DELETE
USING (has_role(auth.uid(), 'admin'));