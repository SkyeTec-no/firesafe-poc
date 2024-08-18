import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Font files can be colocated inside of `app`
const swis = localFont({
  src: [
    {
      path: "../public/fonts/Swis721 BT Roman.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-swis",
});

const APP_NAME = "Firesafe dok";
const APP_DEFAULT_TITLE = "Firesafe montørdokumentasjon";
const APP_TITLE_TEMPLATE = "%s - Firesafe";
const APP_DESCRIPTION = "Firesafe montørdokumentasjon";

export const metadata: Metadata = {
  manifest: "/manifest.json",
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF", // TODO change this
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head />
      <body className={swis.variable}>
        <Navbar />
        <div className="mx-8">{children}</div>
      </body>
    </html>
  );
}
