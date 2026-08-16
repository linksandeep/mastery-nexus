import type { Metadata } from "next";
import Link from "next/link";
import { FinalCTA, PageHero, PlaceholderStories, SectionHeading } from "@/components/MarketingComponents";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata("Student Stories | Mastery Nexus", "Watch and read verified Mastery Nexus learner stories about their background, learning experience, project journey and career outcomes.", "/student-stories");

export default function StudentStoriesPage() {
  return <main id="main-content">
    <PageHero eyebrow="Learner journeys" title="Real stories. Published with evidence." copy="This page is ready for approved video and written stories. We will not publish invented names, roles or outcomes." breadcrumbs={[["Student Stories"]]} />
    <section className="mn-section"><div className="mn-shell"><SectionHeading eyebrow="Video stories" title="Hear learners describe the journey in their own words." copy="Approved videos can be added with captions, transcripts and accessible controls." /><PlaceholderStories count={3} /></div></section>
    <section className="mn-section mn-section--soft"><div className="mn-shell"><SectionHeading eyebrow="Written stories" title="The starting point, the work and the outcome." copy="Each verified case study can explain the learner’s motivation, programme experience, strongest projects and confirmed career result." /><PlaceholderStories count={3} /></div></section>
    <section className="mn-section"><div className="mn-shell mn-story-framework"><SectionHeading eyebrow="Editorial standard" title="What every story should make clear" /><div>{["Initial background", "Reason for learning", "Project journey", "Mentor experience", "Career preparation", "Verified outcome"].map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></div></section>
    <FinalCTA title="Your story begins with the first practical step." copy="Explore the Data Analytics + AI programme or discuss your goals with the career team." />
  </main>;
}

