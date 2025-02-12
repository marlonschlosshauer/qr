export const getURL = () =>
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
    : `${process.env.NEXT_PUBLIC_VERCE_ENV === "preview" ? "https://" : "http://"}${process.env.NEXT_PUBLIC_VERCEL_URL}`;
