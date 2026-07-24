"use client";

import Image from "next/image";
import { FormEvent, useId, useState } from "react";
import styles from "./CareerMatchPage.module.css";

type Faq = {
  question: string;
  answer: string;
};

const faqs: Faq[] = [
  {
    question: "How do I start?",
    answer:
      "Complete the short form above and select Start Now. You will then be taken to the personality assessment.",
  },
  {
    question: "How does it work?",
    answer:
      "The assessment compares your answers with established personality and career-match profiles, then produces a personalised report.",
  },
  {
    question: "Where do I get career advice to discuss my results?",
    answer:
      "After receiving your report, speak with a LearnifyOps career adviser to discuss the recommended pathways and your next steps.",
  },
];

const steps = [
  "Fill out the form and submit your details so we can send your results",
  "You’ll be directed to our career matching tool which takes 5 minutes",
  "You’ll receive a personalised career report — matched to your personality",
];

export default function CareerMatchPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const formId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <Image
              src="/career-match/logo.png"
              alt="Learning People"
              width={210}
              height={100}
              className={styles.logo}
              priority
            />

            <h1>
              Match your personality to a career
              <br />
              in tech in less than 5 minutes
            </h1>

            <p>
              Our career match tool uses more than 4,500 algorithms to analyse
              your personality and determine the most suitable careers for you
              in the tech and project management fields.
            </p>
          </div>

          <div className={styles.heroPersonFrame}>
            <Image
              src="/career-match/hero-person.png"
              alt="Smiling technology professional"
              width={310}
              height={426}
              className={styles.heroPerson}
              priority
            />
          </div>

          <form className={styles.formCard} onSubmit={handleSubmit}>
            <div className={styles.fieldGroup}>
              <label htmlFor={`${formId}-first-name`}>First name *</label>
              <input
                id={`${formId}-first-name`}
                name="firstName"
                autoComplete="given-name"
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor={`${formId}-last-name`}>Last name *</label>
              <input
                id={`${formId}-last-name`}
                name="lastName"
                autoComplete="family-name"
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor={`${formId}-email`}>Email *</label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor={`${formId}-phone`}>Phone *</label>
              <div className={styles.phoneField}>
                <button type="button" aria-label="Choose country code">
                  <span aria-hidden="true">🇮🇳</span>
                  <span>+91</span>
                  <span className={styles.chevron}>⌄</span>
                </button>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  aria-label="Phone number"
                  required
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor={`${formId}-career`}>Career Choice *</label>
              <select
                id={`${formId}-career`}
                name="career"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  -Select-
                </option>
                <option value="data-analytics">Data Analytics</option>
                <option value="project-management">Project Management</option>
                <option value="software-development">Software Development</option>
                <option value="cyber-security">Cyber Security</option>
              </select>
            </div>

            <label className={styles.consentRow}>
              <input type="checkbox" required />
              <span>
                By ticking this box I acknowledge that Learning People will
                collect and process information relating to me in accordance
                with the company <a href="#privacy">Privacy Policy</a> and agree
                to be contacted in relation to my enquiry (required). *
              </span>
            </label>

            <label className={styles.consentRow}>
              <input type="checkbox" />
              <span>
                By ticking this box I agree to receive promotional updates via
                digital and offline marketing channels. For further information
                about how your data is used and stored please see our{" "}
                <a href="#privacy">Privacy Policy</a>.
              </span>
            </label>

            <button type="submit" className={styles.startButton}>
              Start Now
            </button>
          </form>

          <div className={styles.heroSteps} aria-label="How the career match works">
            <ol>
              {steps.map((step, index) => (
                <li key={step}>
                  <span aria-hidden="true">{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutCopy}>
            <section>
              <h2>About the career match tool</h2>
              <p>
                Employment studies show that personality is a significant
                contributing factor for career success, and the closer the
                behavioural match between you and your job, the happier and
                more successful you&apos;ll be.
              </p>
              <p>
                That&apos;s why we struck up an exclusive partnership with
                personality assessment specialists MyCareerMatch to develop a
                comprehensive, scientifically backed career match tool, which
                links you to one of 16 personality types and gives you
                personalised career recommendations.
              </p>
              <p>
                Demystify the world of tech and project management and launch
                yourself on a journey of self-discovery and career exploration
                with your career path results and detailed personality report.
              </p>
            </section>

            <section className={styles.myCareerSection}>
              <h2>Who are MyCareerMatch?</h2>
              <p>
                MyCareerMatch Career Profile is a scientific, government
                backed, powerful assessment that matches your personality style
                to a career you would love. It&apos;s super fast, precise and it
                delivers custom reports in under 5 minutes. It&apos;s helped
                millions of students and career changers determine the best
                match and outcome for their studies and career.
              </p>
            </section>
          </div>

          <Image
            src="/career-match/career-wheel.png"
            alt="Career personality wheel and personality characters"
            width={430}
            height={480}
            className={styles.careerWheel}
          />
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <article className={styles.faqItem} key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  {faq.question}
                </button>
                <div
                  className={`${styles.faqAnswer} ${
                    isOpen ? styles.faqAnswerOpen : ""
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>

        <Image
          src="/career-match/footer-swoosh.png"
          alt=""
          aria-hidden="true"
          width={260}
          height={410}
          className={styles.swoosh}
        />
      </section>

      <footer className={styles.footer}>
        <nav className={styles.footerNav} aria-label="Footer links">
          <span>© The Learning People 2023</span>
          <a href="#faq">FAQ</a>
          <a href="#terms">Terms &amp; Conditions</a>
          <a id="privacy" href="#privacy">
            Privacy Policy
          </a>
          <a href="#website-terms">Terms of website use</a>
        </nav>

        <div className={styles.footerLegal}>
          <p>
            The Learning People Ltd is authorised and regulated by the Financial
            Conduct Authority, register number 689955, and act as a credit broker
            and not a lender.
          </p>
          <p>
            Finance is provided through the Deco platform by Omni Capital Retail
            Finance Limited.
          </p>
          <p>
            Omni Capital Retail Finance Limited is authorised and regulated by
            the Financial Conduct Authority (register number 720279). Learning
            People company number: 07182042.
          </p>
        </div>
      </footer>
    </main>
  );
}
