import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Viswavijeth Portfolio" <${process.env.EMAIL_USER}>`,
      to: "viswavijeth35@gmail.com",
      replyTo: email,
      subject: `New Portfolio Contact - ${name}`,
      html: `
  <div style="background:#f5f5f7;padding:40px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Arial,sans-serif;">
    <div style="max-width:680px;margin:auto;background:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.08);">

      <div style="background:#111827;padding:28px 36px;">
        <h2 style="margin:0;color:#ffffff;font-size:24px;font-weight:600;">
          New Portfolio Contact
        </h2>
        <p style="margin:8px 0 0;color:#d1d5db;font-size:14px;">
          A visitor has submitted a message through your portfolio website.
        </p>
      </div>

      <div style="padding:36px;">

        <table style="width:100%;border-collapse:collapse;font-size:15px;">
          <tr>
            <td style="padding:10px 0;width:140px;font-weight:600;color:#374151;">
              Name
            </td>
            <td style="color:#111827;">
              ${name}
            </td>
          </tr>

          <tr>
            <td style="padding:10px 0;font-weight:600;color:#374151;">
              Email
            </td>
            <td>
              <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
                ${email}
              </a>
            </td>
          </tr>

          <tr>
            <td style="padding:10px 0;font-weight:600;color:#374151;">
              Portfolio
            </td>
            <td>
              <a href="https://viswaportfolio-td.vercel.app" style="color:#2563eb;text-decoration:none;">
                https://viswaportfolio-td.vercel.app
              </a>
            </td>
          </tr>
        </table>

        <div style="margin-top:32px;">
          <h3 style="margin:0 0 12px;font-size:17px;color:#111827;">
            Message
          </h3>

          <div style="
            background:#f9fafb;
            border:1px solid #e5e7eb;
            border-radius:10px;
            padding:18px;
            color:#374151;
            line-height:1.8;
            white-space:pre-wrap;
          ">
${message}
          </div>
        </div>

      </div>

      <div style="
        background:#f9fafb;
        border-top:1px solid #e5e7eb;
        padding:18px;
        text-align:center;
        font-size:13px;
        color:#6b7280;
      ">
        This message was sent from your portfolio contact form.
      </div>

    </div>
  </div>
  `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}