import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen w-full bg-black text-white flex justify-center items-center">
          <div className="flex flex-col gap-4 max-w-md">{children}</div>
        </div>
      </body>
    </html>
  );
}
