"use client";

import { FormEvent, useState } from "react";

const faqs = [
  {
    question: "How do I start?",
    answer:
      "Complete the short form above, choose the career area that interests you most and select Start Now. We’ll then guide you into the five-minute personality assessment.",
  },
  {
    question: "How does it work?",
    answer:
      "The tool uses psychometric testing to understand your personality and working style through specially designed multiple choice questions. The scientifically-developed algorithm matches your talents, skills, and personality with personalised career suggestions. Once completed, you’ll get your own personality map with career recommendations and other tips to help you get started on your new, future proofed career path.",
  },
  {
    question: "Where do I get career advice to discuss my results?",
    answer:
      "Our expert Career Consultants are here to answer all your questions, discuss your results and the opportunities available to you. Whether you're curious about changing careers, or need advice on how to start out in the tech or project management industry with no experience, our team can give you guidance and expert advice.",
  },
];

function LearningPeopleLogo({ light = false }: { light?: boolean }) {
  return (
    <a className={`matchLogo ${light ? "matchLogo--light" : ""}`} href="/" aria-label="LearnifyOps home">
      <span className="matchLogo__symbol" aria-hidden="true">
        <i />
        <b />
      </span>
      <span className="matchLogo__words">
        <span>learning</span>
        <span>people</span>
      </span>
    </a>
  );
}

function PersonalityWheel() {
  const labels = [
    ["ACTION", "wheelAction"],
    ["PROMOTER", "wheelPromoter"],
    ["SUPPORTER", "wheelSupporter"],
    ["ANALYSER", "wheelAnalyser"],
    ["DRIVER", "wheelDriver"],
  ];

  return (
    <div className="personalityGraphic" aria-label="Five personality types: Action, Promoter, Supporter, Analyser and Driver">
      <div className="personalityWheel">
        <div className="personalityWheel__inner" />
        {labels.map(([label, className]) => (
          <span className={className} key={label}>{label}</span>
        ))}
      </div>
      <div className="matchMascots" aria-hidden="true">
        <i className="matchMascot matchMascot--triangle">✓</i>
        <i className="matchMascot matchMascot--round">●</i>
        <i className="matchMascot matchMascot--square">⌁</i>
        <i className="matchMascot matchMascot--tall">★</i>
      </div>
    </div>
  );
}

export default function CareerMatchPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(1);

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="careerMatchPage">
      <section className="matchHero" aria-labelledby="match-title">
        <div className="matchHero__top">
          <div className="matchHero__content">
            <LearningPeopleLogo />
            <h1 id="match-title">Match your personality to a career<br />in tech in less than 5 minutes</h1>
            <p>
              Our career match tool uses more than 4,500 algorithms to analyse your personality and
              determine the most suitable careers for you in the tech and project management fields.
            </p>
          </div>

          <div className="matchHero__portrait" aria-hidden="true">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=90"
              alt=""
            />
          </div>

          <form id="match-form" className="matchForm" onSubmit={submitForm}>
            <label>
              <span>First name *</span>
              <input name="firstName" autoComplete="given-name" required />
            </label>
            <label>
              <span>Last name *</span>
              <input name="lastName" autoComplete="family-name" required />
            </label>
            <label>
              <span>Email *</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              <span>Phone *</span>
              <span className="matchPhone">
                <span className="matchPhone__code" aria-hidden="true">🇮🇳&nbsp; +91⌄</span>
                <input name="phone" type="tel" autoComplete="tel" aria-label="Phone number" required />
              </span>
            </label>
            <label className="matchForm__career">
              <span>Career Choice *</span>
              <select name="careerChoice" defaultValue="" required>
                <option value="" disabled>-Select-</option>
                <option>Data &amp; Analytics</option>
                <option>Cyber Security</option>
                <option>Project Management</option>
                <option>Software Development</option>
                <option>IT Support &amp; Cloud</option>
              </select>
            </label>

            <label className="matchCheck">
              <input name="privacyConsent" type="checkbox" required />
              <span>
                By ticking this box I acknowledge that Learning People will collect and process
                information relating to me in accordance with the company <a href="#match-footer">Privacy Policy</a> and
                agree to be contacted in relation to my enquiry (required). *
              </span>
            </label>
            <label className="matchCheck">
              <input name="marketingConsent" type="checkbox" />
              <span>
                By ticking this box I agree to receive promotional updates via digital and offline
                marketing channels. For further information about how your data is used and stored
                please see our <a href="#match-footer">Privacy Policy</a>.
              </span>
            </label>

            <button type="submit">Start Now</button>
            {submitted && <p className="matchForm__success" role="status">You’re all set — your career match journey starts here.</p>}
          </form>
        </div>
        <div className="matchHero__band" />
      </section>

      <section className="matchAbout">
        <div className="matchAbout__copy">
          <h2>About the career match tool</h2>
          <p>
            Employment studies show that personality is a significant contributing factor for career
            success, and the closer the behavioural match between you and your job, the happier and
            more successful you’ll be.
          </p>
          <p>
            That&apos;s why we struck up an exclusive partnership with personality assessment specialists
            MyCareerMatch to develop a comprehensive, scientifically backed career match tool, which
            links you to one of 16 personality types and gives you personalised career recommendations.
          </p>
          <p>
            Demystify the world of tech and project management and launch yourself on a journey of
            self-discovery and career exploration with your career path results and detailed personality report.
          </p>

          <h2>Who are MyCareerMatch?</h2>
          <p>
            MyCareerMatch Career Profile is a scientific, government backed, powerful assessment that
            matches your personality style to a career you would love. It&apos;s super fast, precise and it
            delivers custom reports in under 5 minutes. It&apos;s helped millions of students and career
            changers determine the best match and outcome for their studies and career.
          </p>
        </div>
        <PersonalityWheel />
      </section>

      <section id="match-faq" className="matchFaq" aria-label="Career match frequently asked questions">
        {faqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return (
            <article className={`matchFaq__item ${isOpen ? "is-open" : ""}`} key={faq.question}>
              <h2>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`career-faq-${index}`}
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <i aria-hidden="true">{isOpen ? "−" : "+"}</i>
                </button>
              </h2>
              <div id={`career-faq-${index}`} className="matchFaq__answer" hidden={!isOpen}>
                <p>{faq.answer}</p>
                {index === 2 && <a href="#match-form">Contact Learning People today</a>}
              </div>
            </article>
          );
        })}
      </section>

      <footer id="match-footer" className="matchFooter">
        <nav aria-label="Footer">
          <span>© The Learning People 2026</span>
          <a href="#match-faq">FAQ</a>
          <a href="#match-footer">Terms &amp; Conditions</a>
          <a href="#match-footer">Privacy Policy</a>
          <a href="#match-footer">Terms of website use</a>
        </nav>
        <div>
          <p>The Learning People Ltd is authorised and regulated by the Financial Conduct Authority.</p>
          <p>Finance is provided through approved retail finance partners.</p>
          <p>Company and regulatory information is available on request.</p>
        </div>
      </footer>
    </main>
  );
}
