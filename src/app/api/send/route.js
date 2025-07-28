
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ["yuvrajm308@gmail.com"], 
      replyTo: email,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>
            <strong>From:</strong> {email}
          </p>
          <p>{message}</p>
        </>
      ),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ status: 200, data });
  } catch (err) {
    console.error(" API handler error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
