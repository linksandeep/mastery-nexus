import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata: Metadata = pageMetadata("Cookie Policy | Mastery Nexus", "How cookies and consent choices work on the Mastery Nexus website.", "/cookie-policy");
export default function Page() { return <LegalPage title="Cookie Policy" pathLabel="Cookie Policy" description="How necessary, analytics and marketing technologies are separated and controlled." sections={[
  { title: "Necessary cookies", paragraphs: ["Necessary storage supports security, core site operation and your cookie choices. It does not require optional consent where the law permits."] },
  { title: "Analytics cookies", paragraphs: ["Analytics tools are not initialised until consent is recorded. Configure the live provider IDs and add their names, purposes and retention periods to the final cookie table."] },
  { title: "Marketing cookies", paragraphs: ["Marketing technologies must remain disabled until consent is recorded. Configure only approved platforms and explain any cross-site profiling clearly."] },
  { title: "Changing your choice", paragraphs: ["A persistent cookie-settings control should be made available once the final consent platform and policy are approved. Until then, users can clear site storage in their browser to reset the banner."] },
]} />; }

