import type { Metadata } from "next";
import { FAQAccordion, FinalCTA, PageHero } from "@/components/MarketingComponents";
import { faqItems } from "@/lib/site-data";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Frequently Asked Questions | Mastery Nexus", "Answers about the Mastery Nexus Data Analytics + AI programme, projects, live classes, certification, career support and Job Guarantee Program.", "/faq");

export default function FAQPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <PageHero eyebrow="Clear answers" title="Everything you need to ask before you begin." copy="Explore the programme, projects, learning format, certification pathway and career support. Confirm cohort-specific details with admissions." breadcrumbs={[["FAQ"]]} />
    <section className="mn-section"><div className="mn-shell mn-faq-page"><FAQAccordion /></div></section>
    <FinalCTA title="Still have a question? Let’s talk it through." copy="The career team can help you understand the current programme details and whether the learning path fits your goals." />
  </main>;
}

