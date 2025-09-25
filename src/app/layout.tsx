import type { Metadata } from "next";
import "@src/styles/globals.css";
import "@src/styles/fonts.css";
import { Toaster } from "@src/components/ui/sonner";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s - Truth Hub",
    default: "Truth Hub – Technology That Protects, Intelligence That Empowers",
  },
  description:
    "Whether you're home alone, traveling abroad, or managing loved ones remotely our app ensures safety, transparency, and real-time support.",
  metadataBase: new URL("https://truthhub.com"),
  icons: [{ rel: "icon", url: "/truthhub_icon.png" }],
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
      "en-GB": "/",
    },
  },
  openGraph: {
    title: "Truth Hub – Technology That Protects, Intelligence That Empowers",
    description:
      "Whether you're home alone, traveling abroad, or managing loved ones remotely our app ensures safety, transparency, and real-time support.",
    siteName: "ATH APP",
    images: [
      {
        url: "https://truthhub.vercel.app/assets/truthhub_icon.png",
        width: 600,
        height: 400,
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="font-sans antialiased">
      <body className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
        {children}
        <Toaster richColors position="bottom-left" />
      </body>
    </html>
  );
}
