import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata("Privacy Policy | Mastery Nexus", "How Mastery Nexus plans to collect, use and protect personal information.", "/privacy");
export default function Page() { return <LegalPage title="Privacy Policy" pathLabel="Privacy Policy" description="How we handle information when you browse the site or enquire about a programme." sections={[
  { title: "Information we collect", paragraphs: ["We may collect information you submit through an enquiry, such as your name, email, phone number, country, programme interest, career stage and message."], items: ["Enquiry and contact details", "Marketing preferences", "Website attribution and consent choices", "Technical information needed for security and site operation"] },
  { title: "How we use information", paragraphs: ["Information should be used only for the purposes explained at collection and under an appropriate UK GDPR lawful basis."], items: ["Responding to enquiries", "Providing requested programme information", "Operating and securing the website", "Improving services where consent or another lawful basis applies"] },
  { title: "Sharing and processors", paragraphs: ["Approved service providers such as CRM, email, analytics or hosting platforms may process information under contract. The final policy must name or categorise actual providers and explain international-transfer safeguards where relevant."] },
  { title: "Retention and your rights", paragraphs: ["The final retention schedule and privacy contact must be configured. UK data-protection rights may include access, correction, deletion, restriction, objection and portability, depending on the circumstances."] },
  { title: "Contact and complaints", paragraphs: ["Add the verified privacy contact, legal entity details and Information Commissioner’s Office complaint information before launch."] },
]} />; }

