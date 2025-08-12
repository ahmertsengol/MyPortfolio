import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundControllerClient from "../components/BackgroundControllerClient";
import { siteConfig } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmet Mert Sengöl | Portfolio",
  description: "software engineer portfolio",
  metadataBase: new URL(siteConfig.siteUrl ?? "https://ahmertsengol.com"),
  openGraph: {
    type: "website",
    url: "/",
    title: "Ahmertsengol | Portfolio",
    description: "software engineer portfolio",
    siteName: "Ahmertsengol Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmertsengol | Portfolio",
    description: "software engineer portfolio",
    creator: "@ahmertsengol",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.name,
              jobTitle: siteConfig.role,
              url: siteConfig.siteUrl,
              sameAs: siteConfig.socials.map((s) => s.href),
              worksFor: { "@type": "Organization", name: "Independent" },
            }),
          }}
        />
        <BackgroundControllerClient>{children}</BackgroundControllerClient>
      </body>
    </html>
  );
}
