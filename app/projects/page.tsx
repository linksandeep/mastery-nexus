import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, PageHero, ProjectGrid, SectionHeading } from "@/components/MarketingComponents";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Data Analytics Project Portfolio | Mastery Nexus", "Explore industry-inspired Data Analytics and AI projects across Power BI, SQL, Python, Excel and modern analyst workflows.", "/projects");

export default function ProjectsPage() {
  return <main id="main-content">
    <PageHero eyebrow="Portfolio development" title="Don’t just learn the tools. Build evidence." copy="Work through 40+ guided and portfolio-focused activities based on realistic business scenarios—not fabricated client assignments." breadcrumbs={[["Projects"]]} actions={<Link className="mn-button mn-button--accent" href="/courses/data-analytics">Explore the Programme</Link>} />
    <section className="mn-section"><div className="mn-shell"><SectionHeading eyebrow="Example portfolio" title="From guided practice to business-ready case studies" copy="Each project develops technical skill, analytical judgment and the ability to communicate a useful conclusion." /><ProjectGrid /></div></section>
    <section className="mn-section mn-section--mint"><div className="mn-shell"><SectionHeading eyebrow="Project progression" title="A portfolio should show how you think." /><div className="mn-process-grid">{[["01", "Follow", "Learn a repeatable workflow with a guided exercise."], ["02", "Adapt", "Apply the workflow to a different business question."], ["03", "Decide", "Make and explain your own analytical choices."], ["04", "Present", "Package the work for a portfolio and professional conversation."]].map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
    <section className="mn-section"><div className="mn-shell mn-split"><SectionHeading eyebrow="Portfolio review" title="Strong work deserves a clear explanation." copy="Career support helps you select, structure and present the projects that best match your target role." /><div className="mn-portfolio-frame"><div><span>Business question</span><span>Data and assumptions</span><span>Analytical approach</span><span>Decision-ready output</span><span>Limitations and next steps</span></div></div></div></section>
    <FinalCTA title="Build work you can talk about with confidence." copy="Explore the full programme or speak with the career team about the project journey." />
  </main>;
}

