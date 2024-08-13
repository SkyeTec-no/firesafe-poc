import type { Metadata } from "next";
import "./globals.css";
import "@digdir/designsystemet-theme";

export const metadata: Metadata = {
  title: "Firesafe POC",
  description: "A POC developed for Firesafe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
