import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mastery-nexus.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mastery Nexus | Data Analyst Career Training",
  description: "Mastery Nexus helps learners build practical data skills with guided training, career support, and flexible online learning.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
