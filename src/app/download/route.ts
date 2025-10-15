export const runtime = "edge";
import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET() {
  const headerList = await headers();
  const userAgent = headerList.get("user-agent")?.toLowerCase() || "";

  // Android
  if (userAgent.includes("android")) {
    return NextResponse.redirect(
      "https://play.google.com/store/apps/details?id=com.pitaya.natv"
    );
  }

  // iOS (iPhone, iPad, iPod)
  if (
    userAgent.includes("iphone") ||
    userAgent.includes("ipad") ||
    userAgent.includes("ipod")
  ) {
    return NextResponse.redirect(
      "https://apps.apple.com/app/night-at-the-valley/id6467846624"
    );
  }

  // macOS
  if (userAgent.includes("macintosh") || userAgent.includes("mac os")) {
    return NextResponse.redirect("https://apps.apple.com/app/night-at-the-valley/id6467846624");
  }

  // Windows
  if (userAgent.includes("windows")) {
    return NextResponse.redirect("https://play.google.com/store/apps/details?id=com.pitaya.natv");
  }

  // Fallback
  return NextResponse.redirect("https://nightvalley.gg");
}
