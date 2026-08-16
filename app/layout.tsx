import type { Metadata } from "next";
import "./globals.css";
import "./site.css";
import { SiteShell } from "@/components/SiteShell";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mastery-nexus.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mastery Nexus | Data Analytics & AI Career Training UK",
  description: "Build job-ready Data Analytics and AI skills through live training, practical projects, certification preparation and career support with Mastery Nexus.",
  applicationName: "Mastery Nexus",
  openGraph: {
    title: "Mastery Nexus | Data Analytics & AI Career Training UK",
    description: "Learn. Practise. Build. Prepare for your next move.",
    type: "website",
    siteName: "Mastery Nexus",
    images: [{ url: "/og.png", width: 1792, height: 896, alt: "Build your data career with Mastery Nexus" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
