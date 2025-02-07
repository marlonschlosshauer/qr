import { Code } from "@/components/Code";
import { notFound } from "next/navigation";
import { ImageResponse } from "next/og";

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
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        <Code url={encodedUrl} size={400} />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
