import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata("Refund Policy | Mastery Nexus", "Refund and cancellation policy framework for Mastery Nexus programmes.", "/refund-policy");
export default function Page() { return <LegalPage title="Refund Policy" pathLabel="Refund Policy" description="A clear framework for cancellations, cooling-off rights, cohort transfers and refund requests." sections={[
  { title: "Before you enrol", paragraphs: ["The final policy must state the programme fee, payment schedule, cooling-off rights, service start date and any effect of requesting early access to digital or live learning."] },
  { title: "Cancellation requests", paragraphs: ["Add the verified method for submitting a cancellation, the information required and the time at which a request is treated as received."] },
  { title: "Refund calculation", paragraphs: ["Define when a full, partial or no refund applies, including any deductions permitted by law for services already supplied. Do not publish this policy until those terms have been legally reviewed."] },
  { title: "Transfers and deferrals", paragraphs: ["State whether learners can transfer cohort, defer, pause or nominate another participant, and any deadlines or fees that apply."] },
  { title: "Job Guarantee Program", paragraphs: ["Any remedy under the Job Guarantee Program should be explained in the separate approved programme terms and cross-referenced here."] },
]} />; }

