import Link from "next/link";
import EnquiryForm from "@/components/EnquiryForm";
import {
  CareerStageGrid,
  CertificationSection,
  CurriculumAccordion,
  FAQAccordion,
  FinalCTA,
  JobGuaranteePanel,
  JourneyTimeline,
  OutcomeStrip,
  PlaceholderStories,
  ProjectGrid,
  SectionHeading,
  ToolStack,
} from "@/components/MarketingComponents";

export default function HomePageV2() {
  const organisationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Mastery Nexus",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mastery-nexus.com",
    logo: new URL("/brand/mastery-nexus-logo.png", process.env.NEXT_PUBLIC_SITE_URL ?? "https://mastery-nexus.com").toString(),
    description: "Career-focused professional education in Data, Analytics and AI.",
  };
  return (
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema).replace(/</g, "\\u003c") }} />
      <section className="mn-home-hero">
        <div className="mn-home-hero__orb" aria-hidden="true" />
        <div className="mn-shell mn-home-hero__grid">
          <div className="mn-home-hero__copy">
            <p className="mn-kicker">Become a Data Analyst</p>
            <h1>Build your data career <em>with Mastery Nexus</em></h1>
            <p className="mn-home-hero__lead">Learn practical Data, Analytics and AI skills—then build the evidence to use them professionally.</p>
            <ul className="mn-hero-list">
              <li>Structured training for analytics and business intelligence roles</li>
              <li>40+ hands-on projects that build a practical portfolio</li>
              <li>Mentor-led learning for beginners and career switchers</li>
              <li>Career preparation from learning to interviews and applications</li>
            </ul>
            <div className="mn-button-row">
              <Link className="mn-button mn-button--accent" href="/contact">Book a Career Consultation</Link>
              <Link className="mn-text-link" href="/courses/data-analytics">Explore the Programme <span>→</span></Link>
            </div>
          </div>
          <div className="mn-home-hero__form"><EnquiryForm /></div>
        </div>
      </section>

      <OutcomeStrip />

      <section className="mn-section mn-stories-preview">
        <div className="mn-shell">
          <SectionHeading eyebrow="Learner voices" title="Hear what our students have to say about us…" copy="Verified learner stories will appear here as they are approved for publication." />
          <PlaceholderStories count={3} />
          <Link className="mn-text-link" href="/student-stories">Explore student stories <span>→</span></Link>
        </div>
      </section>

      <section className="mn-section mn-core-outcomes">
        <div className="mn-shell">
          <div className="mn-circle-grid">
            {[
              ["Build career-ready earning potential", "Develop capabilities that can support opportunities across the growing analytics profession. Compensation varies by role, location and experience.", "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85"],
              ["Gain globally recognised certifications", "Prepare for relevant Microsoft certification pathways while building practical Power BI evidence.", "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85"],
              ["Career support and job opportunities", "Strengthen your CV, LinkedIn, portfolio, interview skills and job-search approach.", "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=900&q=85"],
            ].map(([title, copy, image]) => (
              <article key={title}><div><img src={image} alt="Professional learning and collaboration" loading="lazy" /></div><h3>{title}</h3><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="mn-section mn-enquiry-band">
        <div className="mn-shell"><EnquiryForm variant="inline" heading="Find out whether the Data Analytics + AI programme fits your goals." /></div>
      </section>

      <section className="mn-review-band">
        <div className="mn-shell mn-review-band__inner">
          <div><p className="mn-kicker">Independent proof</p><h2>Don’t just take our word for it…</h2><p>We will only display ratings and review excerpts once they are connected to a verified source.</p></div>
          <div className="mn-review-placeholder"><strong>Verified reviews integration</strong><span>Ready to connect</span><Link href="/reviews">View review approach →</Link></div>
        </div>
      </section>

      <section className="mn-section mn-why">
        <div className="mn-shell mn-split mn-split--visual">
          <div><p className="mn-kicker">A complete learning ecosystem</p><h2>Why learn with us?</h2><ul className="mn-check-list mn-check-list--two">
            <li>40+ practical projects</li><li>Clear path for beginners</li><li>Mentor guidance</li><li>Flexible live learning</li><li>Modern Data and AI skills</li><li>Portfolio reviews</li><li>Certification preparation</li><li>Interview preparation</li><li>CV and LinkedIn support</li><li>Job-search guidance</li>
          </ul><Link className="mn-button mn-button--accent" href="/courses/data-analytics">Explore the Programme</Link></div>
          <div className="mn-why__image"><img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=88" alt="Professional reviewing work on a laptop" loading="lazy" /></div>
        </div>
      </section>

      <section className="mn-section mn-journey-section">
        <div className="mn-shell"><SectionHeading eyebrow="A structured progression" title="Your journey from beginner to job-ready" copy="Every stage moves you closer to credible professional evidence—not another folder of unwatched lessons." /><JourneyTimeline /></div>
      </section>

      <section className="mn-section mn-tool-section">
        <div className="mn-shell mn-split"><SectionHeading eyebrow="Modern analyst toolkit" title="Learn the tools. Understand the decisions behind them." copy="Develop a connected workflow across spreadsheets, business intelligence, databases, code and responsible AI." /><ToolStack /></div>
      </section>

      <section className="mn-section mn-projects-preview">
        <div className="mn-shell"><SectionHeading eyebrow="Portfolio evidence" title="Don’t just say you know analytics. Show it." copy="Build projects around industry-inspired scenarios, progressing from guided exercises to portfolio-quality business cases." /><ProjectGrid limit={4} /><Link className="mn-button mn-button--outline" href="/projects">View Projects</Link></div>
      </section>

      <CertificationSection />

      <section className="mn-section mn-career-preview">
        <div className="mn-shell"><SectionHeading eyebrow="Career accelerator" title="Training gets you started. Career support helps you move forward." copy="Career preparation is part of the programme—not a footnote after the final module." /><CareerStageGrid /><Link className="mn-button mn-button--dark" href="/career-support">Explore Career Support</Link></div>
      </section>

      <JobGuaranteePanel />

      <section className="mn-section mn-audience">
        <div className="mn-shell"><SectionHeading eyebrow="Designed to meet you where you are" title="Who is this programme for?" /><div className="mn-audience__grid">
          {[["Career Starters", "Build your first professional analytics skill set."], ["Career Switchers", "Translate previous experience into a credible data-career story."], ["Working Professionals", "Add analytics and AI capability without leaving your current job."], ["Non-Technical Learners", "Start from fundamentals with a structured learning path."]].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div></div>
      </section>

      <section className="mn-section mn-curriculum-preview" id="curriculum">
        <div className="mn-shell mn-split"><SectionHeading eyebrow="Eight connected modules" title="A curriculum built around how analysts work" copy="Build from business foundations through Power BI, SQL, Python, statistics, AI and career preparation." /><div><CurriculumAccordion preview /><Link className="mn-text-link" href="/courses/data-analytics#curriculum">View Full Curriculum <span>→</span></Link></div></div>
      </section>

      <section className="mn-section mn-faq-preview">
        <div className="mn-shell mn-split"><SectionHeading eyebrow="Questions, answered" title="What learners ask before they begin" copy="Still unsure? The career team can help you understand the programme, expectations and fit." /><div><FAQAccordion limit={7} /><Link className="mn-text-link" href="/faq">View all FAQs <span>→</span></Link></div></div>
      </section>

      <FinalCTA />
    </main>
  );
}
