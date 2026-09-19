"use server";

export async function verifyTurnstileToken(token: string) {
  const secretKey = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    return {
      success: false,
      error: "Server misconfiguration: missing secret key",
    };
  }

  try {
    const formData = new FormData();
    formData.append("secret", secretKey);
    formData.append("response", token);

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();
    return { success: data.success };
  } catch (error) {
    console.error("Turnstile error:", error);
    return { success: false, error: "Internal server error" };
  }
}
