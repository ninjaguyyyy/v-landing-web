import { Resend } from 'resend';
import { EmailTemplate } from 'app/components/EmailTemplate';
import { NextRequest } from 'next/server';
import * as process from 'node:process';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'V Landing Web <onboarding@resend.dev>',
      to: ['lienho0304@gmail.com'],
      subject: 'Cung cấp báo giá và tư vấn',
      react: EmailTemplate({ customer: body }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
