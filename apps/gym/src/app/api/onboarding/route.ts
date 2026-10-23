import { Onboarding } from "@/features/onboarding-form/model/type";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const onboarding: Onboarding = await req.json();
    return NextResponse.json({ message: "Thank You! Please check your inbox.", status: 200 });
  } catch (error) {
    console.error("Error Booking:", error);
    return NextResponse.json(
      { message: "Failed to Proceed with the booking" },
      { status: 500 },
    );
  }
}
