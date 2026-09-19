if (!process.env.NEXT_PUBLIC_API_BUCKET) {
  throw new Error(
    "EXPO_PUBLIC_API_URL is not defined in environment variables",
  );
}

export const ROOT: string = `${process.env.NEXT_PUBLIC_API_BUCKET}`;
export const HOME: string = `${ROOT}/home`;
export const LOGO = `${HOME}/maroko-ekspert-background.png`;

export const CONTACT = "/api/contact";
