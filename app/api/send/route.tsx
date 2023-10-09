import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { NextApiResponse } from "next";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request, res: NextApiResponse) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: `Web Portfolio ${fromEmail}`,
      to: ["refaldybanggana@gmail.com"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}