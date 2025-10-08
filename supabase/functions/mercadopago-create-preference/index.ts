import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { title, quantity, price, email, nome, usuario } = await req.json();
    
    console.log('Creating Mercado Pago preference:', { title, quantity, price, email });

    const accessToken = Deno.env.get('MERCADOPAGO_ACCESS_TOKEN');
    if (!accessToken) {
      throw new Error('MERCADOPAGO_ACCESS_TOKEN not configured');
    }

    // Criar preferência no Mercado Pago
    const preferenceData = {
      items: [
        {
          title,
          quantity: parseInt(quantity),
          unit_price: parseFloat(price),
          currency_id: "BRL"
        }
      ],
      payer: {
        email,
        name: nome
      },
      back_urls: {
        success: `${req.headers.get('origin')}/`,
        failure: `${req.headers.get('origin')}/`,
        pending: `${req.headers.get('origin')}/`
      },
      auto_return: "approved",
      external_reference: usuario,
      notification_url: `https://woirnkogwwoqizokcmid.supabase.co/functions/v1/mercadopago-webhook`
    };

    console.log('Sending preference data to Mercado Pago:', JSON.stringify(preferenceData));

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(preferenceData),
    });

    const data = await response.json();
    
    if (!response.ok) {
      console.error('Mercado Pago API error:', data);
      throw new Error(`Mercado Pago API error: ${JSON.stringify(data)}`);
    }

    console.log('Mercado Pago preference created:', data.id);

    // Criar cliente Supabase e inserir registro pendente
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Inserir registro pendente com as informações do formulário
    const { error: dbError } = await supabase
      .from('pagamentos_mercadopago')
      .insert({
        payment_id: data.id,
        status: 'pending',
        status_detail: 'waiting_payment',
        transaction_amount: parseFloat(price),
        external_reference: usuario,
        payer_email: email,
        payment_data: {
          preference_id: data.id,
          nome: nome,
          usuario: usuario,
          title: title,
          created_at: new Date().toISOString()
        }
      });

    if (dbError) {
      console.error('Error saving pending payment to database:', dbError);
      // Não falhar a requisição, apenas logar o erro
    } else {
      console.log('Pending payment saved to database');
    }

    return new Response(
      JSON.stringify({ 
        preferenceId: data.id,
        initPoint: data.init_point,
        sandboxInitPoint: data.sandbox_init_point
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in mercadopago-create-preference:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});
