import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, PageHero, SectionHeading } from "@/components/MarketingComponents";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Verified Learner Reviews | Mastery Nexus", "Explore the Mastery Nexus approach to verified learner reviews, video testimonials and written case studies.", "/reviews");

export default function ReviewsPage() {
  return <main id="main-content">
    <PageHero eyebrow="Trust through transparency" title="Proof should be verifiable." copy="Ratings, quotations and review counts will only appear after they are connected to a verified source or approved learner record." breadcrumbs={[["Reviews"]]} />
    <section className="mn-section"><div className="mn-shell"><SectionHeading eyebrow="Review sources" title="One place for independent and first-party learner proof" copy="The design supports multiple evidence types without manufacturing a rating." /><div className="mn-review-source-grid">
      {[["Independent reviews", "A live Trustpilot or equivalent integration can display verified rating information once the real account is supplied."], ["Video testimonials", "Approved learner videos can be published with captions, transcripts and clear consent records."], ["Written case studies", "Longer stories can document the learner’s starting point, project work and verified outcome."], ["Programme feedback", "Approved, attributable feedback can be grouped by teaching, projects, mentorship and career support."]].map(([title, copy]) => <article key={title}><span>Verification ready</span><h2>{title}</h2><p>{copy}</p></article>)}
    </div></div></section>
    <section className="mn-section mn-section--mint"><div className="mn-shell mn-split"><SectionHeading eyebrow="Current status" title="No ratings have been fabricated for this launch." copy="Connect the verified review account and approved learner content before publishing star ratings, totals or excerpts." /><div className="mn-review-placeholder mn-review-placeholder--large"><strong>Reviews integration</strong><span>Awaiting verified account details</span><Link href="/contact">Contact Mastery Nexus →</Link></div></div></section>
    <FinalCTA title="Make your decision with the full picture." copy="Ask the career team about the programme, learning expectations and the evidence available for your cohort." />
  </main>;
}

