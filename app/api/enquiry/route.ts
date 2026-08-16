import { NextRequest, NextResponse } from "next/server";

type EnquiryPayload = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  country?: unknown;
  course?: unknown;
  careerStage?: unknown;
  message?: unknown;
  privacyConsent?: unknown;
  sourcePage?: unknown;
  landingPage?: unknown;
  utmSource?: unknown;
  utmMedium?: unknown;
  utmCampaign?: unknown;
};

const text = (value: unknown, max = 500) => typeof value === "string" ? value.trim().slice(0, max) : "";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: EnquiryPayload;
  try {
    body = await request.json() as EnquiryPayload;
  } catch {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const lead = {
    fullName: text(body.fullName, 120),
    email: text(body.email, 180).toLowerCase(),
    phone: text(body.phone, 60),
    country: text(body.country, 100),
    course: text(body.course, 100),
    careerStage: text(body.careerStage, 100),
    message: text(body.message, 2000),
    privacyConsent: body.privacyConsent === "accepted",
    sourcePage: text(body.sourcePage, 500),
    landingPage: text(body.landingPage, 500),
    utm: {
      source: text(body.utmSource, 200),
      medium: text(body.utmMedium, 200),
      campaign: text(body.utmCampaign, 200),
    },
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent")?.slice(0, 500) ?? "",
  };

  if (!lead.fullName || !emailPattern.test(lead.email) || lead.phone.length < 7 || !lead.country || !lead.course || !lead.careerStage || !lead.privacyConsent) {
    return NextResponse.json({ error: "Please complete all required fields and accept the privacy notice." }, { status: 422 });
  }

  const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Online enquiries are being configured. Your details were not submitted—please try again later." },
      { status: 503 },
    );
  }

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.ENQUIRY_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.ENQUIRY_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(10000),
    });

    if (!webhookResponse.ok) throw new Error(`Lead endpoint returned ${webhookResponse.status}`);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "We could not send your enquiry. Your details were not stored. Please try again shortly." },
      { status: 502 },
    );
  }
}

