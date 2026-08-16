import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata("Terms & Conditions | Mastery Nexus", "Website and programme terms for Mastery Nexus.", "/terms");
export default function Page() { return <LegalPage title="Terms & Conditions" pathLabel="Terms & Conditions" description="The framework governing use of this website and, once approved, enrolment in Mastery Nexus programmes." sections={[
  { title: "About these terms", paragraphs: ["These terms are a publication-ready structure, not final legal advice. Verified company information, effective dates and governing terms must be inserted before launch."] },
  { title: "Website use", paragraphs: ["Users should access the website lawfully and must not interfere with its security, availability or intellectual property."] },
  { title: "Programme information", paragraphs: ["Programme descriptions are provided in good faith but cohort dates, schedules, fees, certification arrangements and delivery details may change. Approved enrolment documents should control where there is a conflict."] },
  { title: "Career outcomes", paragraphs: ["Mastery Nexus does not promise a particular role, employer, salary or career outcome. Results depend on participation, prior experience, location, market conditions and employer decisions."] },
  { title: "Job Guarantee Program", paragraphs: ["Any guarantee is subject to separate approved eligibility criteria, participation requirements and programme terms. Those documents must define the precise meaning and remedy of the guarantee."] },
  { title: "Liability and governing law", paragraphs: ["Final limitations, consumer-rights wording, governing law, dispute process and legal-entity details require professional review before publication."] },
]} />; }

