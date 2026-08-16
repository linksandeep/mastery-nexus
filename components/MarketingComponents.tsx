import Link from "next/link";
import { careerStages, curriculum, faqItems, journey, projects, roles, tools } from "@/lib/site-data";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="mn-kicker">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mn-section-heading mn-section-heading--${align}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: Array<[string, string?]> }) {
  return (
    <nav className="mn-breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map(([label, href], index) => (
        <span key={`${label}-${index}`}>
          <i aria-hidden="true">/</i>
          {href ? <Link href={href}>{label}</Link> : <span aria-current="page">{label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function OutcomeStrip() {
  const outcomes = [
    ["5 months", "Structured programme"],
    ["40+", "Practical projects"],
    ["Microsoft", "Certification pathway"],
    ["Live", "Mentor-led classes"],
    ["Career", "Support included"],
  ];
  return (
    <section className="mn-outcomes" aria-label="Programme highlights">
      <div className="mn-shell mn-outcomes__grid">
        {outcomes.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div>
    </section>
  );
}

export function JourneyTimeline() {
  return (
    <div className="mn-journey">
      {journey.map(([number, title, detail]) => (
        <article key={number}>
          <span>{number}</span>
          <div><strong>{title}</strong><p>{detail}</p></div>
        </article>
      ))}
    </div>
  );
}

export function ToolStack() {
  return <div className="mn-tools">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>;
}

export function ProjectGrid({ limit }: { limit?: number }) {
  return (
    <div className="mn-project-grid">
      {projects.slice(0, limit).map((project, index) => (
        <article className="mn-project-card" key={project.title}>
          <div className="mn-project-card__top"><span>Project {String(index + 1).padStart(2, "0")}</span><b>{project.deliverable}</b></div>
          <h3>{project.title}</h3>
          <p>{project.challenge}</p>
          <div className="mn-tags">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
          <small>{project.skills}</small>
        </article>
      ))}
    </div>
  );
}

export function CareerStageGrid() {
  return (
    <div className="mn-career-grid">
      {careerStages.map(([number, title, text]) => (
        <article key={number}>
          <span>{number}</span><h3>{title}</h3><p>{text}</p>
        </article>
      ))}
    </div>
  );
}

export function CurriculumAccordion({ preview = false }: { preview?: boolean }) {
  const modules = preview ? curriculum.slice(0, 5) : curriculum;
  return (
    <div className="mn-accordion mn-curriculum">
      {modules.map((module, index) => (
        <details key={module.number} open={index === 0}>
          <summary><span>{module.number}</span><strong>{module.title}</strong><i aria-hidden="true">+</i></summary>
          <div><p>{module.summary}</p><ul>{module.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul></div>
        </details>
      ))}
    </div>
  );
}

export function FAQAccordion({ limit }: { limit?: number }) {
  return (
    <div className="mn-accordion mn-faq-list">
      {faqItems.slice(0, limit).map(([question, answer]) => (
        <details key={question}>
          <summary><strong>{question}</strong><i aria-hidden="true">+</i></summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}

export function RolesMarquee() {
  return <div className="mn-role-list">{roles.map((role) => <span key={role}>{role}</span>)}</div>;
}

export function CertificationSection() {
  return (
    <section className="mn-section mn-certification" id="certification">
      <div className="mn-shell mn-split mn-split--visual">
        <div className="mn-certification__visual" aria-hidden="true">
          <div className="mn-certification__seal"><span>Certification</span><strong>PATHWAY</strong><small>Preparation + practice</small></div>
          <div className="mn-certification__tiles"><span>Learn</span><span>Practise</span><span>Prepare</span></div>
        </div>
        <div>
          <Eyebrow>Microsoft certification pathway</Eyebrow>
          <h2>Build skills. Earn recognised credentials.</h2>
          <p>Prepare for relevant Microsoft certification pathways alongside practical Power BI training. Certification targets, exam fees and booking arrangements are confirmed with the admissions team.</p>
          <ul className="mn-check-list">
            <li>Structured preparation</li><li>Exam-focused support</li><li>Practical Power BI experience</li><li>Revision resources</li><li>Mentor guidance</li>
          </ul>
          <p className="mn-disclaimer">Mastery Nexus does not claim to be Microsoft. Microsoft trademarks belong to their respective owner.</p>
        </div>
      </div>
    </section>
  );
}

export function JobGuaranteePanel() {
  return (
    <section className="mn-section mn-job-panel">
      <div className="mn-shell mn-job-panel__inner">
        <div>
          <Eyebrow>Enhanced career pathway</Eyebrow>
          <h2>Serious about your next career move?</h2>
          <p>Eligible learners can join our Job Guarantee Program and receive structured support from training through job preparation.</p>
        </div>
        <div><Link className="mn-button mn-button--light" href="/job-guarantee">Explore Job Guarantee</Link><small>Eligibility criteria, participation requirements and programme terms apply.</small></div>
      </div>
    </section>
  );
}

export function PlaceholderStories({ count = 3 }: { count?: number }) {
  return (
    <div className="mn-story-grid">
      {Array.from({ length: count }, (_, index) => (
        <article className="mn-story-card" key={index}>
          <div className={`mn-story-card__visual mn-story-card__visual--${index + 1}`}>
            <span aria-hidden="true">{index % 2 ? "Written story" : "Video story"}</span>
          </div>
          <p className="mn-kicker">Verified story placeholder</p>
          <h3>Learner story coming soon</h3>
          <p>This space is ready for a verified learner background, project journey and career outcome.</p>
        </article>
      ))}
    </div>
  );
}

export function FinalCTA({
  title = "Your next career chapter can start here.",
  copy = "Speak with our career team and understand whether Data Analytics is the right path for you.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="mn-final-cta">
      <div className="mn-shell mn-final-cta__inner">
        <div><Eyebrow>Take the next step</Eyebrow><h2>{title}</h2><p>{copy}</p></div>
        <div className="mn-button-row"><Link className="mn-button mn-button--accent" href="/contact">Enquire Now</Link><Link className="mn-button mn-button--outline-light" href="/courses/data-analytics">Explore the Programme</Link></div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  breadcrumbs,
  actions,
  image,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  breadcrumbs: Array<[string, string?]>;
  actions?: React.ReactNode;
  image?: string;
}) {
  return (
    <section className={`mn-page-hero ${image ? "mn-page-hero--image" : ""}`}>
      <div className="mn-shell">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mn-page-hero__grid">
          <div><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{copy}</p>{actions && <div className="mn-button-row">{actions}</div>}</div>
          {image && <div className="mn-page-hero__image"><img src={image} alt="Professionals collaborating around a laptop" /></div>}
        </div>
      </div>
    </section>
  );
}

