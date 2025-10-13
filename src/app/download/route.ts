import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function GET() {
  const headerList = await headers();
  const userAgent = headerList.get("user-agent") || "";

  if (/android/i.test(userAgent)) {
    return NextResponse.redirect(
      "https://play.google.com/store/apps/details?id=com.pitaya.natv"
    );
  } else if (/iphone|ipad|ipod/i.test(userAgent)) {
    return NextResponse.redirect(
      "https://apps.apple.com/app/night-at-the-valley/id6467846624"
    );
  } else {
    return NextResponse.redirect("https://nightvalley.gg");
  }
}
