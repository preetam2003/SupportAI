import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`;

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  if (!code) {
    return NextResponse.json({ error: "No code provided" }, { status: 400 });
  }

  try {
    const { user, accessToken } = await scalekit.authenticateWithCode(
      code,
      redirectUri
    );

    // In a real application, you would create a session for the user here
    // For now, we'll just redirect to the home page or a dashboard
    // You might want to set a cookie with the access token or a session ID

    const response = NextResponse.redirect(new URL("/", req.url));
    
    // Set a cookie (example)
    // response.cookies.set("token", accessToken, { httpOnly: true, secure: true });

    return response;
  } catch (err: any) {
    console.error("Authentication error:", err);
    return NextResponse.json(
      { error: "Authentication failed", details: err.message },
      { status: 500 }
    );
  }
}
