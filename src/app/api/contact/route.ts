import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "../../../../site.config";

// Lazy-init so build succeeds without RESEND_API_KEY
let _resend: Resend | null = null;
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

// Simple rate-limit: track IPs in memory (resets on deploy/restart)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5; // max submissions
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // per hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true;
  }

  entry.count++;
  return false;
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitize = (str: string) =>
      str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safePhone = sanitize(phone || "");
    const safeService = sanitize(service || "");
    const safeMessage = sanitize(message);

    await getResend().emails.send({
      from: siteConfig.email_from,
      to: siteConfig.email_to,
      replyTo: email,
      subject: `New enquiry from ${safeName}${safeService ? ` — ${safeService}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 32px; border-radius: 8px;">
          <h2 style="color: #0A0A0A; border-bottom: 3px solid ${siteConfig.colors.primary}; padding-bottom: 12px; margin-bottom: 24px;">
            New Enquiry — ${siteConfig.businessName}
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; width: 140px;">Name</td>
              <td style="padding: 10px 0; color: #0A0A0A; font-weight: bold;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; color: #0A0A0A;"><a href="mailto:${safeEmail}" style="color: ${siteConfig.colors.primary};">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px;">Phone</td>
              <td style="padding: 10px 0; color: #0A0A0A;">${safePhone || "Not provided"}</td>
            </tr>
            ${
              safeService
                ? `<tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px;">Service</td>
              <td style="padding: 10px 0; color: #0A0A0A;">${safeService}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 10px 0; color: #666; font-size: 13px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #0A0A0A; line-height: 1.6;">${safeMessage.replace(/\n/g, "<br/>")}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #999;">
            Sent from ${siteConfig.businessName} website contact form
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
