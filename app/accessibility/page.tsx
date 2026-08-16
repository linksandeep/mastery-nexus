import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata("Accessibility Statement | Mastery Nexus", "The Mastery Nexus commitment to accessible digital learning and website experiences.", "/accessibility");
export default function Page() { return <LegalPage title="Accessibility Statement" pathLabel="Accessibility" description="Our commitment to making the Mastery Nexus website and learning journey usable by as many people as possible." sections={[
  { title: "Our approach", paragraphs: ["The website is designed with semantic structure, keyboard access, visible focus states, responsive layouts, readable contrast and reduced-motion preferences."] },
  { title: "Known limitations", paragraphs: ["Third-party video, review, CRM and scheduling integrations may introduce limitations once connected. Each should be tested before launch and documented here."] },
  { title: "Requesting support", paragraphs: ["Add the verified accessibility contact and response process. Alternative formats and reasonable adjustments should be handled through an approved operational policy."] },
  { title: "Standards and review", paragraphs: ["The final statement should record the WCAG target, audit method, last review date and any remediation plan."] },
]} />; }

