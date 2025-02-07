import { Copy } from "@/components/Copy";
import { Forge } from "@/components/Forge";
import { Hint } from "@/components/Hint";
import { Mirror } from "@/components/Mirror";
import { SearchParams } from "@/types/app";
import { Metadata, Viewport } from "next";
import { Suspense } from "react";

export const viewport: Viewport = {
  themeColor: "black",
};

export async function generateMetadata(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  const defaultMetadata: Metadata = {
    title: "Generate QR codes quickly.",
    description: "Paste your URL, hit enter and voila - your QR code is ready.",
    metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`),
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: false,
    },
  };

  if (!searchParams) {
    return defaultMetadata;
  }

  const { url } = searchParams;

  if (!url) {
    return defaultMetadata;
  }

  const rawURL = Array.isArray(url) ? url[0] : url;

  if (!rawURL) {
    return defaultMetadata;
  }

  const encodedUrl = encodeURIComponent(rawURL);

  return {
    ...defaultMetadata,
    title: `QR: "${rawURL}""`,
    openGraph: {
      images: [`/${encodedUrl}/opengraph-image`],
    },
    robots: {
      index: false,
      follow: false,
    },
  } as Metadata;
}

export default function Home() {
  return (
    <Suspense>
      <Forge />
      <Mirror />
      <Copy />
      <Hint />
    </Suspense>
  );
}
