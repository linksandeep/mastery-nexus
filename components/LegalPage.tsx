import { PageHero } from "@/components/MarketingComponents";

export type LegalSection = { title: string; paragraphs: string[]; items?: string[] };

export default function LegalPage({
  title,
  description,
  pathLabel,
  sections,
}: {
  title: string;
  description: string;
  pathLabel: string;
  sections: LegalSection[];
}) {
  return <main id="main-content">
    <PageHero eyebrow="Policies" title={title} copy={description} breadcrumbs={[[pathLabel]]} />
    <section className="mn-section"><div className="mn-shell mn-legal-layout">
      <aside><strong>Important</strong><p>This operational template must be reviewed against Mastery Nexus’s final company details, services and legal obligations before public launch.</p></aside>
      <article>{sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.items && <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>}</section>)}</article>
    </div></section>
  </main>;
}

