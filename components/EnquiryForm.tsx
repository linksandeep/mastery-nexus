"use client";

import { FormEvent, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { courses } from "@/lib/site-data";

type FormStatus = "idle" | "submitting" | "error";

export default function EnquiryForm({
  variant = "card",
  heading = "Become a job-ready Data Analyst with Mastery Nexus.",
}: {
  variant?: "card" | "inline";
  heading?: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);
  const [landingPage, setLandingPage] = useState(pathname);
  const [utm, setUtm] = useState({ source: "", medium: "", campaign: "" });

  useEffect(() => {
    const stored = window.sessionStorage.getItem("mn_landing_page");
    if (stored) setLandingPage(stored);
    else window.sessionStorage.setItem("mn_landing_page", window.location.pathname + window.location.search);
    const parameters = new URLSearchParams(window.location.search);
    setUtm({
      source: parameters.get("utm_source") ?? "",
      medium: parameters.get("utm_medium") ?? "",
      campaign: parameters.get("utm_campaign") ?? "",
    });
  }, []);

  const attribution = {
    sourcePage: pathname,
    landingPage,
    utmSource: utm.source,
    utmMedium: utm.medium,
    utmCampaign: utm.campaign,
  };

  const markStarted = () => {
    if (started) return;
    setStarted(true);
    window.dispatchEvent(new CustomEvent("mn-analytics", { detail: { event: "enquiry_started", page: pathname } }));
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, ...attribution }),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) throw new Error(result.error || "We could not send your enquiry.");

      window.dispatchEvent(new CustomEvent("mn-analytics", { detail: { event: "enquiry_submitted", page: pathname } }));
      router.push("/thank-you");
    } catch (submissionError) {
      setStatus("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not send your enquiry. Please try again.",
      );
    }
  }

  return (
    <form className={`mn-form mn-form--${variant}`} onSubmit={submit} onFocusCapture={markStarted}>
      <div className="mn-form__intro">
        <p className="mn-kicker">Speak with our career team</p>
        <h2>{heading}</h2>
        <p>Flexible live online learning with guided career support.</p>
      </div>

      <div className="mn-form__grid">
        <label>
          <span>Full name</span>
          <input name="fullName" type="text" autoComplete="name" placeholder="Your name" minLength={2} required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
        <label>
          <span>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Include country code" minLength={7} required />
        </label>
        <label>
          <span>Country</span>
          <input name="country" type="text" autoComplete="country-name" placeholder="United Kingdom" required />
        </label>
        <label>
          <span>Course interested in</span>
          <select name="course" defaultValue="data-analytics" required>
            {courses.map((course) => (
              <option key={course.slug} value={course.slug}>
                {course.shortTitle}{course.status === "coming-soon" ? " — Coming soon" : ""}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Current career stage</span>
          <select name="careerStage" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option value="student-or-graduate">Student or recent graduate</option>
            <option value="career-starter">Career starter</option>
            <option value="career-switcher">Career switcher</option>
            <option value="working-professional">Working professional</option>
            <option value="exploring">Exploring my options</option>
          </select>
        </label>
        <label className="mn-form__wide">
          <span>What would you like help with? <small>Optional</small></span>
          <textarea name="message" rows={3} placeholder="Tell us a little about your goals" />
        </label>
      </div>

      <label className="mn-form__consent">
        <input name="privacyConsent" type="checkbox" value="accepted" required />
        <span>I agree that Mastery Nexus may use my details to respond to this enquiry, as explained in the <a href="/privacy">privacy policy</a>.</span>
      </label>

      <button className="mn-button mn-button--dark mn-form__submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending enquiry…" : "Submit Enquiry"}
      </button>

      {status === "error" && <p className="mn-form__error" role="alert">{error}</p>}
    </form>
  );
}
