import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, PageHero, SectionHeading } from "@/components/MarketingComponents";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("About Mastery Nexus | Practical Data & AI Education", "Mastery Nexus exists to close the gap between learning technical skills and applying them professionally.", "/about");

export default function AboutPage() {
  return <main id="main-content">
    <PageHero eyebrow="Our philosophy" title="Learning should lead somewhere." copy="Mastery Nexus exists to reduce the gap between learning a technical skill and becoming capable of applying that skill professionally." breadcrumbs={[["About"]]} image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=88" />
    <section className="mn-section"><div className="mn-shell mn-manifesto"><p className="mn-kicker">Our mission</p><h2>Make practical Data and AI education accessible to professionals and career starters.</h2><p>We combine structured learning with repeated practice, portfolio evidence, certification preparation and career support so that progress is visible—not merely promised.</p></div></section>
    <section className="mn-section mn-section--mint"><div className="mn-shell"><SectionHeading eyebrow="Our approach" title="Theory matters. Application matters more." /><div className="mn-values-grid">{[["Practical learning", "Use tools to solve realistic business questions."], ["Portfolio proof", "Leave with work that demonstrates capability."], ["Mentorship", "Use feedback to improve decisions and communication."], ["Certification", "Prepare for relevant recognised credential pathways."], ["Career preparation", "Translate capability into a strong professional story."], ["Structured journey", "Know what to learn, build and practise next."]].map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="mn-section"><div className="mn-shell mn-teaching"><SectionHeading eyebrow="Teaching philosophy" title="Explain → Demonstrate → Practise → Build → Review → Apply" copy="A simple cycle keeps learning connected to the work analysts are expected to do." /><div>{["Explain", "Demonstrate", "Practise", "Build", "Review", "Apply"].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></div></section>
    <section className="mn-section mn-section--soft" id="careers"><div className="mn-shell mn-split"><SectionHeading eyebrow="Careers at Mastery Nexus" title="Help make professional learning more useful." copy="No open roles are currently published. Verified vacancies and application details can be added here when available." /><Link className="mn-button mn-button--outline" href="/contact">Contact the Team</Link></div></section>
    <FinalCTA title="Build the evidence for what comes next." copy="Explore the flagship programme and see how the complete learning journey works." />
  </main>;
}

