import type { Metadata } from "next";
import Link from "next/link";
import { careerStages } from "@/lib/site-data";
import { CareerStageGrid, FinalCTA, PageHero, SectionHeading } from "@/components/MarketingComponents";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Career Support for Data Analytics Learners | Mastery Nexus", "Build a stronger CV, LinkedIn profile, project portfolio, interview approach and job-search strategy with Mastery Nexus career support.", "/career-support");

export default function CareerSupportPage() {
  return <main id="main-content">
    <PageHero eyebrow="Career preparation, built in" title="Career preparation is built into the programme." copy="Learning gives you capability. Career preparation helps you communicate that capability to the professional world." breadcrumbs={[["Career Support"]]} image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=88" actions={<Link className="mn-button mn-button--accent" href="/contact">Book a Career Consultation</Link>} />
    <section className="mn-section"><div className="mn-shell"><SectionHeading eyebrow="A six-stage system" title="From career discovery to a structured job search" copy="The pathway adapts to your starting point, transferable skills and target roles." /><CareerStageGrid /></div></section>
    <section className="mn-section mn-career-detail"><div className="mn-shell">
      {[
        ["Career Discovery", "Map your experience, strengths, gaps and target roles so your learning has a clear professional direction.", ["Background and skills audit", "Role and market exploration", "Transferable skills mapping"]],
        ["CV Optimisation", "Build a focused, ATS-aware CV that connects credible project evidence to the role you want.", ["Professional summary", "Evidence-based bullet points", "Role-specific tailoring"]],
        ["LinkedIn Positioning", "Make your target, capabilities and portfolio easier for recruiters and professional contacts to understand.", ["Headline and About section", "Skills and project evidence", "Networking foundations"]],
        ["Portfolio Building", "Choose your strongest work and present the business question, method, decisions, output and limitations.", ["Project selection", "Case-study structure", "GitHub guidance where appropriate"]],
        ["Interview Training", "Prepare for technical, behavioural and analytical case-study conversations.", ["Power BI, SQL and Excel questions", "Behavioural interview structure", "Business-case communication"]],
        ["Application Strategy", "Create a sustainable system for finding, prioritising, tracking and following up on opportunities.", ["Role discovery", "Application tracking", "Recruiter and networking approach"]],
      ].map(([title, copy, points], index) => <article key={String(title)}><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{String(title)}</h2><p>{String(copy)}</p><ul>{(points as string[]).map((point) => <li key={point}>{point}</li>)}</ul></div><div className="mn-career-detail__mock" aria-label={`${title} example layout`}><i /><i /><i /><b>Example framework</b></div></article>)}
    </div></section>
    <section className="mn-section mn-section--mint"><div className="mn-shell mn-split"><SectionHeading eyebrow="Mock interviews" title="Practise the work and the conversation." copy="Interview preparation can cover technical questions, behavioural examples, business cases and the clear communication of your analytical choices." /><div className="mn-quote-card"><span>Prepare</span><strong>Explain your approach</strong><span>Practise</span><strong>Respond to feedback</strong><span>Improve</span><strong>Build repeatable confidence</strong></div></div></section>
    <FinalCTA title="Build a career story backed by evidence." copy="Explore how learning, projects, certification preparation and career support work together." />
  </main>;
}

