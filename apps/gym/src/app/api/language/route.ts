import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const cookieStore = await cookies();
    const newCookie = cookieStore.set("lang", data["lang"]);

    const currentLanguages = cookieStore.get("lang")?.value;

    return NextResponse.json({
      body: currentLanguages,
      message: `Selected Language ${newCookie}`,
      status: 200,
    });
  } catch (error) {
    console.error("Error Booking:", error);
    return NextResponse.json(
      { message: "Failed to Proceed with the booking" },
      { status: 500 },
    );
  }
}
