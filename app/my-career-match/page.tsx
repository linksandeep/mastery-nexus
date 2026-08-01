import type { Metadata } from "next";
import CareerMatchPage from "@/components/CareerMatchPage";

export const metadata: Metadata = {
  title: "My Career Match | Mastery Nexus",
  description:
    "Match your personality to a career in tech and project management in less than five minutes.",
  openGraph: {
    title: "Find your career match | Mastery Nexus",
    description: "Match your personality to a career in tech in less than five minutes.",
    images: [{ url: "/career-match-og.png", width: 1664, height: 960, alt: "Find your career match in less than five minutes" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find your career match | Mastery Nexus",
    description: "Match your personality to a career in tech in less than five minutes.",
    images: ["/career-match-og.png"],
  },
};

export default function MyCareerMatch() {
  return <CareerMatchPage />;
}
