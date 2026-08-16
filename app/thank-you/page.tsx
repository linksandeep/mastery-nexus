import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = { ...pageMetadata("Thank You | Mastery Nexus", "Your Mastery Nexus enquiry has been received.", "/thank-you"), robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return <main id="main-content" className="mn-status-page"><section><span className="mn-status-page__mark">✓</span><p className="mn-kicker">Enquiry received</p><h1>Thank you. Your next step is now in motion.</h1><p>Our career team has received your enquiry and can follow up using the details you provided.</p><div className="mn-button-row"><Link className="mn-button mn-button--accent" href="/courses/data-analytics">Explore the Programme</Link><Link className="mn-button mn-button--outline" href="/">Return Home</Link></div></section></main>;
}

