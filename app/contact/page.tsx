import type { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { PageHero, SectionHeading } from "@/components/MarketingComponents";
import { organisation } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Contact Mastery Nexus | Enquire About Data Analytics", "Speak with the Mastery Nexus career team about the Data Analytics + AI Career Program, cohort details and programme fit.", "/contact");

export default function ContactPage() {
  return <main id="main-content">
    <PageHero eyebrow="Start a useful conversation" title="Tell us where you want your learning to lead." copy="Share your background, goals and questions. The career team can help you understand whether the programme is a sensible fit." breadcrumbs={[["Contact"]]} />
    <section className="mn-section mn-contact-section"><div className="mn-shell mn-contact-grid">
      <div><SectionHeading eyebrow="Enquire now" title="Talk through the programme before you decide." copy="We can discuss the learning path, time commitment, current cohort details, payment options and career-support model." />
        <div className="mn-contact-points"><span><b>Programme guidance</b>Understand the curriculum and expected workload.</span><span><b>Career fit</b>Connect your starting point with realistic target roles.</span><span><b>Current details</b>Request approved pricing, dates and programme terms.</span></div>
        {(organisation.email || organisation.phone) && <div className="mn-direct-contact">{organisation.email && <a href={`mailto:${organisation.email}`}>{organisation.email}</a>}{organisation.phone && <a href={`tel:${organisation.phone.replace(/\s/g, "")}`}>{organisation.phone}</a>}</div>}
      </div>
      <EnquiryForm heading="Ask about Data Analytics + AI." />
    </div></section>
  </main>;
}

