"use client";

import {
  CSSProperties,
  FormEvent,
  ReactNode,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";

type IconProps = { className?: string };
type EnquiryFormProps = {
  id: string;
  title?: ReactNode;
  compact?: boolean;
};

const clamp = (value: number, minimum = 0, maximum = 1) =>
  Math.min(maximum, Math.max(minimum, value));

function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7.4 3.1 4.9 4.8a2.1 2.1 0 0 0-.8 2.4c1.9 6 6.7 10.8 12.7 12.7.9.3 1.8 0 2.4-.8l1.7-2.5c.5-.8.4-1.9-.4-2.5l-2.7-2.1a2 2 0 0 0-2.2-.1l-1.6 1a14.2 14.2 0 0 1-5-5l1-1.6a2 2 0 0 0-.1-2.2L7.8 3.5c-.1-.2-.3-.3-.4-.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChatIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 4.5h16v10.8H9L4 19.5v-15Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M8 8h8M8 11h5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function UserIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.2" fill="currentColor" />
      <path d="M5.5 20c.4-4.3 2.6-6.4 6.5-6.4s6.1 2.1 6.5 6.4h-13Z" fill="currentColor" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5.4" width="17" height="13.2" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5.4 7.2 6.6 5 6.6-5" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.4" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="m15.6 15.6 4.1 4.1" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function GlobeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M3.4 12h17.2M12 3c2.3 2.4 3.5 5.4 3.5 9S14.3 18.6 12 21c-2.3-2.4-3.5-5.4-3.5-9S9.7 5.4 12 3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function RefreshIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 7V3l-1.8 1.8A8 8 0 1 0 20 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 5 7 7-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="m7.3 12 3 3.1 6.5-6.6" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="rgba(255,255,255,.92)" />
      <path d="m10 8 6 4-6 4V8Z" fill="#333" />
    </svg>
  );
}

function DocumentIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 2.7h8l4 4V21H6V2.7Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M14 3v4h4M9 11h6M9 14h5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
      <path d="m14.5 18.7 3.2-3.2 1.8 1.8-3.2 3.2-2.3.5.5-2.3Z" fill="#f0a64c" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.1" />
    </svg>
  );
}

function BrandLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a className={`brandLogo ${inverted ? "brandLogo--inverted" : ""}`} href="#top" aria-label="Mastery Nexus home">
      <img className="brandLogo__mark" src="/brand/mastery-nexus-mark.png" alt="" aria-hidden="true" />
      <span className="brandLogo__copy">
        <strong>MASTERY</strong>
        <span>NEXUS</span>
      </span>
    </a>
  );
}

function usePageScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [curveProgress, setCurveProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setIsScrolled(y > 52);

      const ribbon = document.getElementById("scroll-ribbon-zone");
      if (!ribbon) return;

      const rect = ribbon.getBoundingClientRect();
      const absoluteTop = rect.top + y;
      const total = Math.max(1, ribbon.offsetHeight - window.innerHeight * 0.35);
      const observed = y + window.innerHeight * 0.62 - absoluteTop;
      setCurveProgress(clamp(observed / total));
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return { isScrolled, curveProgress };
}

function Header({ isScrolled, onEnquire }: { isScrolled: boolean; onEnquire: () => void }) {
  const navItems = [
    { label: "Courses", href: "#top" },
    { label: "Career Support", href: "#why-us" },
    { label: "Student Stories", href: "#student-stories" },
    { label: "Reviews", href: "#trustpilot" },
    { label: "Contact", href: "#lower-enquiry" },
  ];

  return (
    <header className={`siteHeader ${isScrolled ? "siteHeader--scrolled" : ""}`}>
      <BrandLogo />

      <div className="siteHeader__navRow">
        <nav className="primaryNav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={item.href} key={item.label}>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <a className="compactPhoneButton" href="tel:+440000000000" aria-label="Call our team">
          <PhoneIcon />
        </a>

        <button className="headerCta" type="button" onClick={onEnquire}>
          <ChatIcon />
          <span>Enquire Now</span>
        </button>
      </div>
    </header>
  );
}

const countryData =
  "Afghanistan|AF|+93;Albania|AL|+355;Algeria|DZ|+213;American Samoa|AS|+1684;Andorra|AD|+376;Angola|AO|+244;Anguilla|AI|+1264;Antarctica|AQ|+672;Antigua and Barbuda|AG|+1268;Argentina|AR|+54;Armenia|AM|+374;Aruba|AW|+297;Australia|AU|+61;Austria|AT|+43;Azerbaijan|AZ|+994;Bahamas|BS|+1242;Bahrain|BH|+973;Bangladesh|BD|+880;Barbados|BB|+1246;Belarus|BY|+375;Belgium|BE|+32;Belize|BZ|+501;Benin|BJ|+229;Bermuda|BM|+1441;Bhutan|BT|+975;Bolivia|BO|+591;Bosnia and Herzegovina|BA|+387;Botswana|BW|+267;Brazil|BR|+55;British Indian Ocean Territory|IO|+246;British Virgin Islands|VG|+1284;Brunei|BN|+673;Bulgaria|BG|+359;Burkina Faso|BF|+226;Burundi|BI|+257;Cambodia|KH|+855;Cameroon|CM|+237;Canada|CA|+1;Cape Verde|CV|+238;Cayman Islands|KY|+1345;Central African Republic|CF|+236;Chad|TD|+235;Chile|CL|+56;China|CN|+86;Christmas Island|CX|+61;Cocos Islands|CC|+61;Colombia|CO|+57;Comoros|KM|+269;Cook Islands|CK|+682;Costa Rica|CR|+506;Croatia|HR|+385;Cuba|CU|+53;Curacao|CW|+599;Cyprus|CY|+357;Czech Republic|CZ|+420;Democratic Republic of the Congo|CD|+243;Denmark|DK|+45;Djibouti|DJ|+253;Dominica|DM|+1767;Dominican Republic|DO|+1;East Timor|TL|+670;Ecuador|EC|+593;Egypt|EG|+20;El Salvador|SV|+503;Equatorial Guinea|GQ|+240;Eritrea|ER|+291;Estonia|EE|+372;Ethiopia|ET|+251;Falkland Islands|FK|+500;Faroe Islands|FO|+298;Fiji|FJ|+679;Finland|FI|+358;France|FR|+33;French Polynesia|PF|+689;Gabon|GA|+241;Gambia|GM|+220;Georgia|GE|+995;Germany|DE|+49;Ghana|GH|+233;Gibraltar|GI|+350;Greece|GR|+30;Greenland|GL|+299;Grenada|GD|+1473;Guam|GU|+1671;Guatemala|GT|+502;Guernsey|GG|+441481;Guinea|GN|+224;Guinea-Bissau|GW|+245;Guyana|GY|+592;Haiti|HT|+509;Honduras|HN|+504;Hong Kong|HK|+852;Hungary|HU|+36;Iceland|IS|+354;India|IN|+91;Indonesia|ID|+62;Iran|IR|+98;Iraq|IQ|+964;Ireland|IE|+353;Isle of Man|IM|+441624;Israel|IL|+972;Italy|IT|+39;Ivory Coast|CI|+225;Jamaica|JM|+1876;Japan|JP|+81;Jersey|JE|+441534;Jordan|JO|+962;Kazakhstan|KZ|+7;Kenya|KE|+254;Kiribati|KI|+686;Kosovo|XK|+383;Kuwait|KW|+965;Kyrgyzstan|KG|+996;Laos|LA|+856;Latvia|LV|+371;Lebanon|LB|+961;Lesotho|LS|+266;Liberia|LR|+231;Libya|LY|+218;Liechtenstein|LI|+423;Lithuania|LT|+370;Luxembourg|LU|+352;Macao|MO|+853;Macedonia|MK|+389;Madagascar|MG|+261;Malawi|MW|+265;Malaysia|MY|+60;Maldives|MV|+960;Mali|ML|+223;Malta|MT|+356;Marshall Islands|MH|+692;Mauritania|MR|+222;Mauritius|MU|+230;Mayotte|YT|+262;Mexico|MX|+52;Micronesia|FM|+691;Moldova|MD|+373;Monaco|MC|+377;Mongolia|MN|+976;Montenegro|ME|+382;Montserrat|MS|+1664;Morocco|MA|+212;Mozambique|MZ|+258;Myanmar|MM|+95;Namibia|NA|+264;Nauru|NR|+674;Nepal|NP|+977;Netherlands|NL|+31;New Caledonia|NC|+687;New Zealand|NZ|+64;Nicaragua|NI|+505;Niger|NE|+227;Nigeria|NG|+234;Niue|NU|+683;North Korea|KP|+850;Northern Mariana Islands|MP|+1670;Norway|NO|+47;Oman|OM|+968;Pakistan|PK|+92;Palau|PW|+680;Palestine|PS|+970;Panama|PA|+507;Papua New Guinea|PG|+675;Paraguay|PY|+595;Peru|PE|+51;Philippines|PH|+63;Pitcairn|PN|+64;Poland|PL|+48;Portugal|PT|+351;Puerto Rico|PR|+1787;Qatar|QA|+974;Republic of the Congo|CG|+242;Reunion|RE|+262;Romania|RO|+40;Russia|RU|+7;Rwanda|RW|+250;Saint Barthelemy|BL|+590;Saint Helena|SH|+290;Saint Kitts and Nevis|KN|+1869;Saint Lucia|LC|+1758;Saint Martin|MF|+590;Saint Pierre and Miquelon|PM|+508;Saint Vincent and the Grenadines|VC|+1784;Samoa|WS|+685;San Marino|SM|+378;Sao Tome and Principe|ST|+239;Saudi Arabia|SA|+966;Senegal|SN|+221;Serbia|RS|+381;Seychelles|SC|+248;Sierra Leone|SL|+232;Singapore|SG|+65;Sint Maarten|SX|+1721;Slovakia|SK|+421;Slovenia|SI|+386;Solomon Islands|SB|+677;Somalia|SO|+252;South Africa|ZA|+27;South Korea|KR|+82;South Sudan|SS|+211;Spain|ES|+34;Sri Lanka|LK|+94;Sudan|SD|+249;Suriname|SR|+597;Svalbard and Jan Mayen|SJ|+47;Swaziland|SZ|+268;Sweden|SE|+46;Switzerland|CH|+41;Syria|SY|+963;Taiwan|TW|+886;Tajikistan|TJ|+992;Tanzania|TZ|+255;Thailand|TH|+66;Togo|TG|+228;Tokelau|TK|+690;Tonga|TO|+676;Trinidad and Tobago|TT|+1868;Tunisia|TN|+216;Turkey|TR|+90;Turkmenistan|TM|+993;Turks and Caicos Islands|TC|+1649;Tuvalu|TV|+688;U.S. Virgin Islands|VI|+1340;Uganda|UG|+256;Ukraine|UA|+380;United Arab Emirates|AE|+971;United Kingdom|GB|+44;United States|US|+1;Uruguay|UY|+598;Uzbekistan|UZ|+998;Vanuatu|VU|+678;Vatican|VA|+379;Venezuela|VE|+58;Vietnam|VN|+84;Wallis and Futuna|WF|+681;Western Sahara|EH|+212;Yemen|YE|+967;Zambia|ZM|+260;Zimbabwe|ZW|+263";

const countries = countryData.split(";").map((entry) => {
  const [name, iso2, dialCode] = entry.split("|");
  return {
    name,
    iso2,
    dialCode,
    flagUrl: `https://res.leadoo.com/country-flags/${iso2.toLocaleLowerCase()}.svg`,
  };
});

function CountryPhoneInput({ formId }: { formId: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(
    countries.find((country) => country.iso2 === "GB") ?? countries[0],
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const generatedId = useId();
  const listId = `${formId}-country-list-${generatedId.replace(/:/g, "")}`;
  const phoneId = `${formId}-phone`;

  const filteredCountries = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return countries;
    return countries.filter(
      (country) =>
        country.name.toLocaleLowerCase().includes(normalizedQuery) ||
        country.iso2.toLocaleLowerCase().includes(normalizedQuery) ||
        (country.iso2 === "GB" && "great britain uk".includes(normalizedQuery)) ||
        country.dialCode.includes(normalizedQuery),
    );
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const chooseCountry = (country: (typeof countries)[number]) => {
    setSelectedCountry(country);
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="countryPhoneInput" ref={rootRef}>
      {isOpen && (
        <div className="countryDropdown">
          <div className="countrySearch">
            <SearchIcon />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search country"
              aria-label="Search country"
              autoFocus
            />
          </div>
          <div className="countryList" id={listId} role="listbox" aria-label="Countries">
            {filteredCountries.length ? (
              filteredCountries.map((country) => (
                <button
                  className="countryOption"
                  type="button"
                  role="option"
                  aria-selected={country.name === selectedCountry.name}
                  key={country.name}
                  onClick={() => chooseCountry(country)}
                >
                  <img className="countryOption__flag" src={country.flagUrl} alt="" />
                  <span>{country.name} {country.dialCode}</span>
                </button>
              ))
            ) : (
              <p className="countryEmpty">No countries found</p>
            )}
          </div>
        </div>
      )}

      <div className={`phoneShell ${isOpen ? "phoneShell--open" : ""}`}>
        <button
          className="countryTrigger"
          type="button"
          aria-label={`Country code: ${selectedCountry.name} ${selectedCountry.dialCode}`}
          aria-expanded={isOpen}
          aria-controls={listId}
          onClick={() => {
            setQuery("");
            setIsOpen((open) => !open);
          }}
        >
          <img className="countryFlag" src={selectedCountry.flagUrl} alt="" />
          <span>{selectedCountry.dialCode}</span>
          <span className="countryChevron" aria-hidden="true" />
        </button>
        <input type="hidden" name="countryCode" value={selectedCountry.dialCode} />
        <input id={phoneId} name="phone" type="tel" placeholder="e.g., 07523123123" autoComplete="tel" required />
      </div>
    </div>
  );
}

function EnquiryForm({ id, title, compact = false }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = {
      ...Object.fromEntries(new FormData(form)),
      submittedAt: new Date().toISOString(),
      formId: id,
    };

    if (typeof window !== "undefined") {
      try {
        const existing = window.localStorage.getItem("mastery-nexus-enquiries");
        const parsed = existing ? JSON.parse(existing) : [];
        const enquiries = Array.isArray(parsed) ? parsed : [];
        window.localStorage.setItem("mastery-nexus-enquiries", JSON.stringify([...enquiries, payload].slice(-50)));
      } catch {
        try {
          window.sessionStorage.setItem("mastery-nexus-last-enquiry", JSON.stringify(payload));
        } catch {
          // Keep the form usable even when browser storage is unavailable.
        }
      }
    }

    form.reset();
    setSubmitted(true);
  };

  return (
    <form id={id} className={`enquiryCard ${compact ? "enquiryCard--compact" : ""}`} onSubmit={handleSubmit}>
      <button className="resetButton" type="reset" aria-label="Clear form" onClick={() => setSubmitted(false)}>
        <RefreshIcon />
      </button>

      <div className="enquiryCard__intro">
        <h2>{title ?? <>Become a certified Data Analyst with Mastery Nexus.</>}</h2>
        <p>Flexible online learning with guided career support.</p>
      </div>

      <div className="formGrid">
        <label className="field">
          <span>Name *</span>
          <span className="inputShell">
            <UserIcon />
            <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </span>
        </label>

        <label className="field">
          <span>Email *</span>
          <span className="inputShell">
            <MailIcon />
            <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </span>
        </label>

        <label className="field">
          <span>Course Interest *</span>
          <span className="inputShell">
            <DocumentIcon />
            <select name="courseInterest" defaultValue="" required>
              <option value="" disabled>Select course</option>
              <option value="data-analytics">Data Analytics</option>
              <option value="business-analytics">Business Analytics</option>
              <option value="project-management">Project Management</option>
              <option value="career-guidance">Not sure yet</option>
            </select>
          </span>
        </label>

        <div className="field phoneField">
          <label htmlFor={`${id}-phone`}>Phone*</label>
          <CountryPhoneInput formId={id} />
        </div>
      </div>

      <label className="consentCheck">
        <input name="privacyConsent" type="checkbox" required />
        <span>I agree to be contacted by Mastery Nexus about my enquiry.</span>
      </label>

      <button className="submitButton" type="submit">Submit Enquiry</button>

      {submitted && (
        <p className="successMessage" role="status">
          Thank you. Your enquiry has been saved and our team can follow up.
        </p>
      )}
    </form>
  );
}

const heroBenefits: ReactNode[] = [
  <strong key="one">Structured training for data, analytics, and business intelligence roles</strong>,
  <strong key="two">Hands-on projects that help you build a practical portfolio</strong>,
  <span key="three">Mentor-led learning designed for beginners and career switchers</span>,
  <span key="four">Enquire today and get guidance on the right learning path for you</span>,
];

const testimonials = [
  {
    name: "Louis Doughty",
    category: "Data",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85",
    accent: "peach",
    title: "Student Testimonial",
    text: "Previously working as a vehicle mechanic, Louis wanted to break into the world of tech. He completed a learning programme and secured his first data role.",
  },
  {
    name: "Jamil Ahmed",
    category: "Cyber Security",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=85",
    accent: "mint",
    title: "From Graphic Design to Cybersecurity",
    text: "After studying Graphic and Digital Design, Jamil chose a new route into cybersecurity and moved into a service desk analyst position.",
  },
  {
    name: "Guilherme Fiad",
    category: "Project Management",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
    accent: "teal",
    title: "Student Testimonial",
    text: "After relocating to the UK, Guilherme completed project-management training and used the practical skills to validate his career direction.",
  },
  {
    name: "Jose Alvarez",
    category: "Code",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=800&q=85",
    accent: "dark",
    title: "Where a new career starts",
    text: "Jose built a structured development portfolio, improved his interview confidence and created a clear route into software roles.",
  },
  {
    name: "Maya Singh",
    category: "Data",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    accent: "peach",
    title: "A practical route into analytics",
    text: "Maya used live projects and mentor feedback to convert her existing business knowledge into an analytics-focused portfolio.",
  },
];

const featureCards = [
  {
    title: <>Earn an average salary of<br />£47,000+</>,
    text: "Data analysis opens routes into remote, contract, and full-time roles across modern businesses.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: <>Gain globally recognised<br />industry certifications</>,
    text: "Learn through career-ready online training with expert support, practice tasks, and feedback.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: <>Career support and job<br />opportunities</>,
    text: "Mastery Nexus helps learners prepare for interviews, sharpen their CV, and move toward new roles.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=700&q=85",
  },
];

const whyItems = [
  "Practical projects for your portfolio",
  "Clear paths for career starters and switchers",
  "Mentor guidance throughout your learning",
  "Flexible online study",
  "Data and project-management focused training",
  "Learn online 24/7",
  "Career support to boost your employability",
  "Personal guidance from enquiry to completion",
  "Industry-aligned skills and tools",
  "Support that keeps your progress moving",
];

function ScrollRibbon({ progress }: { progress: number }) {
  const style = {
    "--curve-progress": progress.toFixed(4),
    "--curve-float": `${(progress - 0.5) * 36}px`,
  } as CSSProperties;

  return (
    <div className="scrollRibbon" aria-hidden="true" style={style}>
      <svg viewBox="0 0 900 1900" preserveAspectRatio="none">
        <path
          className="scrollRibbon__shadow"
          pathLength="1"
          d="M120 0 C 80 310, 720 310, 675 690 C 635 1025, 205 910, 255 1290 C 295 1575, 785 1485, 720 1900"
        />
        <path
          className="scrollRibbon__line"
          pathLength="1"
          d="M120 0 C 80 310, 720 310, 675 690 C 635 1025, 205 910, 255 1290 C 295 1575, 785 1485, 720 1900"
        />
      </svg>
    </div>
  );
}

function TestimonialCarousel() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const setResponsiveCount = () => {
      const width = window.innerWidth;
      setCardsPerView(width < 700 ? 1 : width < 1050 ? 2 : 3);
    };
    setResponsiveCount();
    window.addEventListener("resize", setResponsiveCount);
    return () => window.removeEventListener("resize", setResponsiveCount);
  }, []);

  const maxActive = Math.max(0, testimonials.length - cardsPerView);
  const goTo = (index: number) => setActive(clamp(index, 0, maxActive));

  const transform = useMemo(() => {
    const step = 100 / cardsPerView;
    return `translate3d(-${active * step}%,0,0)`;
  }, [active, cardsPerView]);

  return (
    <div className="testimonialCarousel">
      <div className="testimonialCarousel__viewport" ref={viewportRef}>
        <div
          className="testimonialCarousel__track"
          style={{
            transform,
            "--cards-per-view": cardsPerView,
          } as CSSProperties}
        >
          {testimonials.map((item) => (
            <article className="testimonialCard" key={item.name}>
              <div className={`testimonialMedia testimonialMedia--${item.accent}`}>
                <div className="testimonialMedia__copy">
                  <small>{item.title}</small>
                  <strong>{item.name}</strong>
                </div>
                <img src={item.image} alt="" />
                <button type="button" aria-label={`Play ${item.name}'s testimonial`}>
                  <PlayIcon />
                </button>
              </div>
              <p className="testimonialCard__category">{item.category}</p>
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="carouselControls">
        <div className="carouselDots" aria-label="Choose testimonial slide">
          {Array.from({ length: maxActive + 1 }, (_, index) => (
            <button
              type="button"
              key={index}
              className={index === active ? "is-active" : ""}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carouselArrows">
          <button type="button" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label="Previous testimonials">
            <ArrowIcon />
          </button>
          <button type="button" onClick={() => goTo(active + 1)} disabled={active === maxActive} aria-label="Next testimonials">
            <ArrowIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ label }: { label: string }) {
  return <a href="#footer" aria-label={label}>{label.slice(0, 1)}</a>;
}

function Footer() {
  return (
    <footer id="footer" className="siteFooter">
      <div className="siteFooter__card">
        <div className="footerBrand">
          <BrandLogo />
          <p>Connect with us.</p>
          <div className="socialRow">
            {['YouTube', 'Instagram', 'X', 'Facebook', 'LinkedIn'].map((item) => <SocialIcon key={item} label={item} />)}
          </div>
        </div>

        <nav className="footerLinks" aria-label="Useful links">
          <strong>Useful Links</strong>
          <a href="#top">Data Analytics courses</a>
          <a href="#why-us">Career support</a>
          <a href="#why-us">Online learning</a>
          <a href="#why-us">Project-based training</a>
          <a href="#why-us">Why Mastery Nexus</a>
          <a href="#student-stories">Student support</a>
          <a href="#footer">Contact information</a>
          <a href="#footer">Work with us</a>
        </nav>

        <div className="footerContact">
          <p>Get in touch and begin your future, today.</p>
          <a className="footerEnquire" href="#lower-enquiry"><ChatIcon />Enquire Now</a>
          <a className="footerTrust" href="#trustpilot">★ Trustpilot</a>
        </div>

        <a className="backToTop" href="#top" aria-label="Back to top"><ArrowIcon /></a>

        <div className="footerLegal">
          <div className="footerLegal__links">
            <a href="#footer">Cookies policy</a><span>•</span>
            <a href="#footer">Terms and Conditions</a><span>•</span>
            <a href="#footer">Privacy Promise</a><span>•</span>
            <a href="#footer">Terms of website use</a><span>•</span>
            <a href="#footer">Policies</a>
          </div>
          <p>This is a frontend demonstration. Replace the legal and regulatory copy with your organisation&apos;s approved wording before publishing.</p>
          <p>Registered office and company registration details can be added here.</p>
          <button type="button" className="countryPicker">🌐 UK⌄</button>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  const { isScrolled, curveProgress } = usePageScroll();

  useEffect(() => {
    const getAnchorOffset = () => {
      const rawOffset = getComputedStyle(document.documentElement).getPropertyValue("--anchor-offset");
      return Number.parseFloat(rawOffset) || 110;
    };

    const scrollToHash = (hash: string, behavior: ScrollBehavior = "smooth") => {
      const target = document.getElementById(hash.replace("#", ""));
      if (!target) return;

      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - getAnchorOffset());
      window.scrollTo({ top, behavior });
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
      const hash = link?.getAttribute("href");
      if (!hash || hash === "#" || !document.getElementById(hash.slice(1))) return;

      event.preventDefault();
      window.history.pushState(null, "", hash);
      scrollToHash(hash);
    };

    const handleHashChange = () => scrollToHash(window.location.hash);

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("hashchange", handleHashChange);

    if (window.location.hash) {
      window.setTimeout(() => scrollToHash(window.location.hash, "auto"), 0);
    }

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const scrollToForm = () => {
    document.getElementById("hero-enquiry")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <main id="top">
      <Header isScrolled={isScrolled} onEnquire={scrollToForm} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__background" />
        <div className="hero__shape hero__shape--one" />
        <div className="hero__shape hero__shape--two" />

        <div className="hero__grid pageShell">
          <div className="heroCopy">
            <p className="heroCopy__eyebrow">Become a Data Analyst</p>
            <h1 id="hero-title">Build your data career <span>with Mastery Nexus</span></h1>
            <ul className="heroBenefits">
              {heroBenefits.map((benefit, index) => (
                <li key={index}><i aria-hidden="true" /><span>{benefit}</span></li>
              ))}
            </ul>
          </div>

          <div className="heroFormStage">
            <EnquiryForm id="hero-enquiry" />
          </div>
        </div>
      </section>

      <div id="scroll-ribbon-zone" className="lightStory">
        <ScrollRibbon progress={curveProgress} />

        <section id="student-stories" className="storiesSection pageShell" aria-labelledby="stories-title">
          <h2 id="stories-title">Hear what our students have to say about us...</h2>
          <TestimonialCarousel />
        </section>

        <section className="featuresSection pageShell" aria-label="Programme outcomes">
          <div className="featureGrid">
            {featureCards.map((card) => (
              <article className="featureCard" key={card.text}>
                <div className="featureCard__image"><img src={card.image} alt="" /></div>
                <h2>{card.title}</h2>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="midFormSection pageShell" aria-label="Enquire about the programme">
          <div className="midFormSection__card">
            <EnquiryForm id="mid-enquiry" compact />
          </div>
        </section>
      </div>

      <section id="trustpilot" className="trustStrip">
        <div className="pageShell trustStrip__grid">
          <div>
            <h2>Don&apos;t just take our<br />word for it...</h2>
            <a href="#student-stories">View all Trustpilot reviews</a>
          </div>
          <div className="trustStrip__pill"><span>★</span> Trustpilot</div>
        </div>
      </section>

      <section id="why-us" className="whySection" aria-labelledby="why-title">
        <div className="pageShell whySection__content">
          <div className="whySection__copy">
            <h2 id="why-title">Why learn with us?</h2>
            <ul>
              {whyItems.map((item) => <li key={item}><CheckIcon /><span>{item}</span></li>)}
            </ul>
            <small>*Illustrative success statement. Replace with your approved evidence and wording.</small>
          </div>
          <div className="whySection__portrait" aria-hidden="true">
            <div className="whySection__portraitGlow" />
            <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1100&q=90" alt="" />
          </div>
        </div>

        <div className="pageShell lowerFormStage">
          <div className="lowerFormStage__frame">
            <EnquiryForm
              id="lower-enquiry"
              compact
              title={<>Become a certified professional in data, tech, or project management with Mastery Nexus.</>}
            />
          </div>
        </div>
      </section>

      <section className="darkTestimonial">
        <div className="pageShell darkTestimonial__grid">
          <div>
            <h2>Don&apos;t just take our word for it...</h2>
            <a href="#student-stories">Hear from our students</a>
          </div>
          <button className="videoCard" type="button" aria-label="Play student testimonial montage">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85" alt="" />
            <div className="videoCard__overlay">
              <small>Student testimonials</small>
              <strong>Shape your next career move with Mastery Nexus</strong>
            </div>
            <PlayIcon />
          </button>
        </div>
        <Footer />
      </section>

      <button className="floatingEnquiry" type="button" onClick={scrollToForm} aria-label="Open enquiry form">
        <span>Enquire now</span><i><DocumentIcon /></i>
      </button>
    </main>
  );
}
