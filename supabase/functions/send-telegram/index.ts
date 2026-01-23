import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface TelegramRequest {
  name: string;
  phone: string;
  email?: string;
  company?: string;
  message?: string;
  product?: string;
  formType?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: TelegramRequest = await req.json();
    console.log("Received form data:", data);

    const botToken = Deno.env.get("TELEGRAM_BOT_TOKEN");
    const chatId = Deno.env.get("TELEGRAM_CHAT_ID");

    if (!botToken || !chatId) {
      console.error("Missing Telegram configuration");
      throw new Error("Telegram configuration missing");
    }

    // Format the message
    const formType = data.formType || "Заявка с сайта";
    let text = `📩 <b>${formType}</b>\n\n`;
    text += `👤 <b>Имя:</b> ${data.name}\n`;
    text += `📞 <b>Телефон:</b> ${data.phone}\n`;
    
    if (data.email) {
      text += `📧 <b>Email:</b> ${data.email}\n`;
    }
    if (data.company) {
      text += `🏢 <b>Компания:</b> ${data.company}\n`;
    }
    if (data.product) {
      text += `🛢️ <b>Продукт:</b> ${data.product}\n`;
    }
    if (data.message) {
      text += `\n💬 <b>Сообщение:</b>\n${data.message}\n`;
    }

    text += `\n🕐 <i>${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}</i>`;

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
        parse_mode: "HTML",
      }),
    });

    const telegramResult = await telegramResponse.json();
    console.log("Telegram API response:", telegramResult);

    if (!telegramResult.ok) {
      throw new Error(`Telegram API error: ${telegramResult.description}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-telegram function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
