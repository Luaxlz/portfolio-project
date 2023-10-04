import axios from "axios";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export async function POST(request: Request) {
  try {
    const body = await request.json(); //Recupera os dados da requisição
    const { name, email, message } = bodySchema.parse(body); //Verificação dos dados junto ao zod

    const messageData = {
      embeds: [
        {
          type: "rich",
          title: `Mensagem de contato`,
          description: "",
          color: 0x00ffff,
          fields: [
            {
              name: `Nome`,
              value: name,
              inline: true,
            },
            {
              name: `Email`,
              value: email,
              inline: true,
            },
            {
              name: `Mensagem`,
              value: message,
            },
          ],
        },
      ],
    };

    axios.post(WEBHOOK_URL, messageData); //Utilizando axios para fazer a requisição no webhook do discord via post

    return NextResponse.json({
      message: "Mensagem enviada com sucesso!",
    });
  } catch (error) {
    console.error(error);
    NextResponse.error();
  }
}
