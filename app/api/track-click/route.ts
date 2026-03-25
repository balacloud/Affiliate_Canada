import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId, merchantId, campaignId, pageSlug, affiliateLink } = body;

    // Validate required fields
    if (!productId || !merchantId || !campaignId || !pageSlug) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Log the click event
    // In production: Vercel Edge Logs capture this automatically
    // For development: console log
    console.log("Click tracked:", {
      timestamp: new Date().toISOString(),
      productId,
      merchantId,
      campaignId,
      pageSlug,
      affiliateLink,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
