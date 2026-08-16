import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/lib/site-data";
import { FinalCTA, PageHero, SectionHeading } from "@/components/MarketingComponents";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Career-Focused Data & AI Courses | Mastery Nexus", "Explore mentor-led professional programmes from Mastery Nexus, led by the flagship Data Analytics + AI Career Program.", "/courses");

export default function CoursesPage() {
  return <main id="main-content">
    <PageHero eyebrow="Career transformation programmes" title="Build capabilities that lead somewhere." copy="Master practical skills, create credible evidence and prepare to use both in the professional world." breadcrumbs={[["Courses"]]} actions={<Link className="mn-button mn-button--accent" href="/courses/data-analytics">Explore Data Analytics + AI</Link>} />
    <section className="mn-section"><div className="mn-shell">
      <SectionHeading eyebrow="Flagship programme" title="Start with the role. Build the evidence." copy="Data Analytics + AI is our current live programme. Future programmes are shown only to explain the direction of the catalogue." />
      <div className="mn-course-grid">
        {courses.map((course) => <article key={course.slug} className={course.status === "active" ? "is-active" : "is-coming"}>
          <span>{course.status === "active" ? "Now enrolling" : "Coming soon"}</span><h2>{course.title}</h2><p>{course.summary}</p>
          {course.duration && <strong>{course.duration} · Live online · Mentor led</strong>}
          {course.status === "active" ? <Link className="mn-button mn-button--dark" href={course.href}>Explore the Programme</Link> : <small>Join the enquiry list to hear when verified programme details are available.</small>}
        </article>)}
      </div>
    </div></section>
    <FinalCTA title="Choose a learning path with purpose." copy="Speak with our career team about your background, target role and the evidence you want to build." />
  </main>;
}

