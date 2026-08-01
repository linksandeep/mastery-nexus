import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
