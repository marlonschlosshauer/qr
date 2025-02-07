import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";
import { QRCodeSVG } from "qrcode.react";

export default async function Image({ params }: { params: { url: string } }) {
  const { url } = params;

  if (!url) {
    notFound();
  }

  const encodedUrl = decodeURIComponent(url);

  if (!encodedUrl) {
    notFound();
  }

  return new ImageResponse(
    <QRCodeSVG fgColor="white" bgColor="black" value={encodedUrl} size={400} />,
    {
      width: 1200,
      height: 630,
    },
  );
}
