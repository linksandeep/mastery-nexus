import type { Metadata } from "next";
import Link from "next/link";
import { curriculum, roles, tools } from "@/lib/site-data";
import EnquiryForm from "@/components/EnquiryForm";
import { CareerStageGrid, CertificationSection, CurriculumAccordion, FAQAccordion, FinalCTA, JobGuaranteePanel, OutcomeStrip, PageHero, PlaceholderStories, ProjectGrid, SectionHeading, ToolStack } from "@/components/MarketingComponents";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Data Analytics + AI Career Program UK | Mastery Nexus", "Become a job-ready Data Analyst in five months through live training, 40+ projects, certification preparation and structured career support.", "/courses/data-analytics");

export default function DataAnalyticsPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "Course", name: "Data Analytics + AI Career Program",
    description: "A five-month live online programme covering Excel, Power BI, SQL, Python, statistics, AI, practical projects and career preparation.",
    provider: { "@type": "Organization", name: "Mastery Nexus" },
    educationalLevel: "Beginner to career-ready", timeRequired: "P5M", inLanguage: "en-GB",
    courseMode: "Online",
  };
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <PageHero eyebrow="Data Analytics + AI Career Program" title="Become a Job-Ready Data Analyst in 5 Months" copy="Build practical capabilities across Excel, Power BI, SQL, Python, Statistics and AI while developing a portfolio designed to help you confidently pursue analytics roles." breadcrumbs={[["Courses", "/courses"], ["Data Analytics + AI"]]} image="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=88" actions={<><Link className="mn-button mn-button--accent" href="/contact">Book a Career Consultation</Link><a className="mn-button mn-button--outline-light" href="#curriculum">View Curriculum</a></>} />
    <OutcomeStrip />
    <section className="mn-section"><div className="mn-shell">
      <SectionHeading eyebrow="A programme for real starting points" title="You do not need a technical background to begin." copy="The learning path starts with fundamentals, then steadily increases the complexity and independence of your work." />
      <div className="mn-audience__grid">{[["Beginners", "Start with clear foundations and guided practice."], ["Fresh graduates", "Build practical evidence beyond your qualification."], ["Career switchers", "Connect transferable experience to analytics work."], ["Working professionals", "Add high-value capability alongside your current role."]].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <section className="mn-section mn-section--mint"><div className="mn-shell mn-split"><SectionHeading eyebrow="Capabilities, not just content" title="Learn to move from a business question to a clear recommendation." copy="The programme connects analytical thinking, practical tools, communication and responsible AI workflows." /><div className="mn-skill-cloud">{["Data cleaning", "Data modelling", "Dashboard design", "Analytical SQL", "Python analysis", "Statistics", "Business storytelling", "AI-assisted workflows", "Portfolio presentation"].map((skill) => <span key={skill}>{skill}</span>)}</div></div></section>
    <section className="mn-section" id="curriculum"><div className="mn-shell"><SectionHeading eyebrow="Five-month roadmap" title="Eight modules. One connected professional journey." copy="Each module combines explanation, demonstration, practice, review and application." /><CurriculumAccordion /></div></section>
    <section className="mn-section mn-tool-section"><div className="mn-shell mn-split"><SectionHeading eyebrow="Technology stack" title="The modern analyst’s toolkit" copy="Use the tools together as part of a practical workflow, not as isolated software lessons." /><ToolStack /></div></section>
    <section className="mn-section"><div className="mn-shell"><SectionHeading eyebrow="40+ project experiences" title="Build a body of work you can discuss with confidence." copy="Projects use industry-inspired scenarios. They are not represented as client work unless explicitly verified." /><ProjectGrid limit={6} /><Link className="mn-button mn-button--outline" href="/projects">Explore Project Portfolio</Link></div></section>
    <CertificationSection />
    <section className="mn-section"><div className="mn-shell"><SectionHeading eyebrow="Career preparation" title="Turn your learning into professional evidence." copy="Build a profile, portfolio and interview story around the capabilities you have actually demonstrated." /><CareerStageGrid /><Link className="mn-button mn-button--dark" href="/career-support">Explore Career Support</Link></div></section>
    <JobGuaranteePanel />
    <section className="mn-section"><div className="mn-shell"><SectionHeading eyebrow="Roles to explore" title="Prepare for opportunities across the analytics profession." copy="Role fit depends on your prior experience, project evidence, location and the requirements of each employer." /><div className="mn-role-list">{roles.map((role) => <span key={role}>{role}</span>)}</div></div></section>
    <section className="mn-section mn-section--soft"><div className="mn-shell"><SectionHeading eyebrow="Learner proof" title="Stories will be published only when verified." copy="The story system is ready for approved video and written case studies without inventing names or outcomes." /><PlaceholderStories count={3} /></div></section>
    <section className="mn-section mn-course-enquiry"><div className="mn-shell mn-split"><SectionHeading eyebrow="Pricing and enrolment" title="Get the current cohort details." copy="Programme fees, payment options, schedules, certification arrangements and eligibility terms can change. The career team will share the current, approved information." /><EnquiryForm variant="inline" heading="Ask about the next Data Analytics + AI cohort." /></div></section>
    <section className="mn-section"><div className="mn-shell mn-split"><SectionHeading eyebrow="Programme FAQ" title="The details that matter before you enrol" /><FAQAccordion limit={10} /></div></section>
    <FinalCTA />
  </main>;
}

