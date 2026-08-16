"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { courses, navItems, organisation } from "@/lib/site-data";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

type Consent = { necessary: true; analytics: boolean; marketing: boolean };
const consentKey = "mn_cookie_consent_v1";

function Brand() {
  return (
    <Link className="mn-brand" href="/" aria-label="Mastery Nexus home">
      <img src="/brand/mastery-nexus-mark.png" alt="" aria-hidden="true" />
      <span><strong>MASTERY</strong><small>NEXUS</small></span>
    </Link>
  );
}

function track(event: string, detail: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event, ...detail });
}

function AnalyticsConsent() {
  useEffect(() => {
    const initialise = () => {
      let consent: Consent | null = null;
      try { consent = JSON.parse(localStorage.getItem(consentKey) ?? "null") as Consent | null; } catch { consent = null; }
      if (!consent || (!consent.analytics && !consent.marketing)) return;

      const gtm = process.env.NEXT_PUBLIC_GTM_ID;
      const ga = process.env.NEXT_PUBLIC_GA_ID;
      const metaPixel = process.env.NEXT_PUBLIC_META_PIXEL_ID;

      if (consent.analytics && gtm && !document.querySelector(`[data-mn-tracker="${gtm}"]`)) {
        const script = document.createElement("script");
        script.async = true;
        script.dataset.mnTracker = gtm;
        script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtm)}`;
        document.head.appendChild(script);
        track("gtm_consent_granted");
      } else if (consent.analytics && ga && !document.querySelector(`[data-mn-tracker="${ga}"]`)) {
        const script = document.createElement("script");
        script.async = true;
        script.dataset.mnTracker = ga;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga)}`;
        document.head.appendChild(script);
        window.dataLayer = window.dataLayer ?? [];
        window.dataLayer.push({ "gtm.start": Date.now(), event: "gtag.js" });
        window.dataLayer.push({ event: "config", measurement_id: ga });
      }

      if (consent.marketing && metaPixel && !document.querySelector(`[data-mn-tracker="${metaPixel}"]`)) {
        const pixelScript = document.createElement("script");
        pixelScript.async = true;
        pixelScript.dataset.mnTracker = metaPixel;
        pixelScript.src = "https://connect.facebook.net/en_US/fbevents.js";
        document.head.appendChild(pixelScript);
        window.fbq = window.fbq ?? function (...args: unknown[]) {
          (window.fbq as unknown as { queue?: unknown[] }).queue = (window.fbq as unknown as { queue?: unknown[] }).queue ?? [];
          (window.fbq as unknown as { queue: unknown[] }).queue.push(args);
        };
        window._fbq = window.fbq;
        window.fbq("init", metaPixel);
        window.fbq("track", "PageView");
      }
    };

    const relay = (event: Event) => {
      const detail = (event as CustomEvent<Record<string, unknown>>).detail;
      let consent: Consent | null = null;
      try { consent = JSON.parse(localStorage.getItem(consentKey) ?? "null") as Consent | null; } catch { consent = null; }
      if (consent?.analytics && detail?.event) track(String(detail.event), detail);
    };

    initialise();
    window.addEventListener("mn-consent-updated", initialise);
    window.addEventListener("mn-analytics", relay);
    return () => {
      window.removeEventListener("mn-consent-updated", initialise);
      window.removeEventListener("mn-analytics", relay);
    };
  }, []);
  return null;
}

function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customising, setCustomising] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => setVisible(!localStorage.getItem(consentKey)), []);

  const save = (value: Consent) => {
    localStorage.setItem(consentKey, JSON.stringify(value));
    setVisible(false);
    window.dispatchEvent(new Event("mn-consent-updated"));
  };

  if (!visible) return null;
  return (
    <aside className="mn-cookie" aria-label="Cookie preferences">
      <div>
        <strong>Your privacy choices</strong>
        <p>We use necessary cookies to make this site work. With your permission, analytics and marketing cookies can help us improve it.</p>
        {customising && (
          <div className="mn-cookie__options">
            <label><input type="checkbox" checked disabled /> Necessary</label>
            <label><input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} /> Analytics</label>
            <label><input type="checkbox" checked={marketing} onChange={(event) => setMarketing(event.target.checked)} /> Marketing</label>
          </div>
        )}
      </div>
      <div className="mn-cookie__actions">
        <button type="button" onClick={() => save({ necessary: true, analytics: false, marketing: false })}>Necessary only</button>
        {customising ? (
          <button type="button" className="is-primary" onClick={() => save({ necessary: true, analytics, marketing })}>Save choices</button>
        ) : (
          <>
            <button type="button" onClick={() => setCustomising(true)}>Customise</button>
            <button type="button" className="is-primary" onClick={() => save({ necessary: true, analytics: true, marketing: true })}>Accept all</button>
          </>
        )}
      </div>
    </aside>
  );
}

function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("mn-menu-open", open);
    return () => document.body.classList.remove("mn-menu-open");
  }, [open]);

  return (
    <header className="mn-header">
      <div className="mn-header__inner">
        <Brand />
        <button className="mn-menu-toggle" type="button" aria-expanded={open} aria-controls="mn-mobile-nav" onClick={() => setOpen((value) => !value)}>
          <span /> <span /> <span /><b>{open ? "Close menu" : "Open menu"}</b>
        </button>
        <nav className={`mn-nav ${open ? "is-open" : ""}`} id="mn-mobile-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <Link className={pathname === href ? "is-active" : ""} href={href} key={href}>{label}</Link>
          ))}
          <Link className="mn-button mn-button--accent mn-nav__cta" href="/contact" onClick={() => track("cta_clicked", { label: "Enquire Now", page: pathname })}>Enquire Now</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const resetCookies = () => {
    localStorage.removeItem(consentKey);
    window.location.reload();
  };
  return (
    <footer className="mn-footer">
      <div className="mn-shell mn-footer__panel">
        <div className="mn-footer__brand">
          <Brand />
          <p>Practical Data, Analytics and AI education built around professional evidence.</p>
          <div className="mn-social" aria-label="Social links pending configuration">
            <span>in</span><span>▶</span><span>◎</span><small>Social profiles coming soon</small>
          </div>
        </div>
        <nav aria-label="Useful links">
          <strong>Useful Links</strong>
          <Link href="/courses/data-analytics">Data Analytics</Link>
          <Link href="/career-support">Career Support</Link>
          <Link href="/student-stories">Student Stories</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about#careers">Careers</Link>
        </nav>
        <nav aria-label="Learning links">
          <strong>Learning</strong>
          <Link href="/courses">Online Learning</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/courses/data-analytics#certification">Microsoft Certification</Link>
          <Link href="/courses/data-analytics#curriculum">Data & AI</Link>
          <Link href="/career-support">Career Preparation</Link>
        </nav>
        <div className="mn-footer__cta">
          <strong>Ready to explore your next step?</strong>
          <p>Speak with the career team about the programme and your goals.</p>
          <Link className="mn-button mn-button--accent" href="/contact">Enquire Now</Link>
          {organisation.email && <a href={`mailto:${organisation.email}`}>{organisation.email}</a>}
          {organisation.phone && <a href={`tel:${organisation.phone.replace(/\s/g, "")}`}>{organisation.phone}</a>}
        </div>
        <div className="mn-footer__legal">
          <nav aria-label="Legal links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
            <button type="button" className="mn-cookie-reset" onClick={resetCookies}>Cookie settings</button>
          </nav>
          <p>© {new Date().getFullYear()} Mastery Nexus. Organisation details are configurable and must be verified before launch.</p>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/my-career-match") return <>{children}</>;
  return (
    <>
      <a className="mn-skip" href="#main-content">Skip to content</a>
      <Header />
      {children}
      <Footer />
      <CookieConsent />
      <AnalyticsConsent />
    </>
  );
}

export function CoursesMenu() {
  return (
    <div className="mn-course-mini-grid">
      {courses.map((course) => (
        <Link href={course.href} key={course.slug} className={course.status === "coming-soon" ? "is-coming" : ""}>
          <span>{course.status === "active" ? course.duration : "Coming soon"}</span>
          <strong>{course.shortTitle}</strong>
        </Link>
      ))}
    </div>
  );
}
