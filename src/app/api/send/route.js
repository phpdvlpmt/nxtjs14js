import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const res = await req.json()
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['phpdvlpmt@gmail.com'],
      subject: 'Výsledky testu',
      react: EmailTemplate({ score: res.score, correctAnswers: res.correctAnswers }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}