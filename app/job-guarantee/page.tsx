import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion, FinalCTA, PageHero, SectionHeading } from "@/components/MarketingComponents";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Job Guarantee Program | Mastery Nexus", "Understand the eligibility-led Mastery Nexus Job Guarantee Program, participation expectations and enhanced career support pathway.", "/job-guarantee");

export default function JobGuaranteePage() {
  return <main id="main-content">
    <PageHero eyebrow="Eligibility-led support" title="A serious programme for a serious career move." copy="The Job Guarantee Program is an enhanced support pathway for eligible learners—not an unconditional promise of employment." breadcrumbs={[["Job Guarantee"]]} actions={<Link className="mn-button mn-button--accent" href="/contact">Discuss Eligibility</Link>} />
    <section className="mn-section"><div className="mn-shell mn-split"><SectionHeading eyebrow="What it means" title="Structured support from learning through job preparation." copy="Eligible participants receive a defined framework designed to encourage consistent progress, strong project evidence and disciplined career activity." /><div className="mn-check-panel"><h3>Potential programme elements</h3><ul className="mn-check-list"><li>Attendance and progress milestones</li><li>Project and portfolio completion</li><li>Career profile reviews</li><li>Interview preparation</li><li>Structured application activity</li><li>Ongoing check-ins</li></ul></div></div></section>
    <section className="mn-section mn-section--soft"><div className="mn-shell"><SectionHeading eyebrow="Participation pathway" title="The guarantee depends on shared commitments." /><div className="mn-process-grid">{[["01", "Confirm eligibility", "Review background, location, availability and programme fit."], ["02", "Meet learning requirements", "Maintain attendance, progress and project standards."], ["03", "Complete career preparation", "Build approved application materials and interview readiness."], ["04", "Run a structured search", "Follow the agreed application, networking and follow-up process."]].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="mn-section"><div className="mn-shell mn-terms-notice"><div><p className="mn-kicker">Terms placeholder</p><h2>Detailed programme terms must be supplied and approved before enrolment.</h2><p>The final terms should define eligibility, geographic limits, attendance, assessment, project completion, application activity, exclusions, time periods and what remedy is available if all requirements are met.</p></div><details><summary>What should the final terms cover?<span>+</span></summary><ul><li>Eligibility and admissions criteria</li><li>Participant obligations and evidence</li><li>Career-support scope and duration</li><li>Qualifying roles and locations</li><li>Exclusions, withdrawal and appeals</li><li>The precise meaning and remedy of the guarantee</li></ul></details></div></section>
    <section className="mn-section mn-faq-preview"><div className="mn-shell mn-split"><SectionHeading eyebrow="Important questions" title="Understand the commitment before you join." /><FAQAccordion limit={10} /></div></section>
    <FinalCTA title="Find out whether you may be eligible." copy="Speak with the career team and request the current approved programme terms before making a decision." />
  </main>;
}

