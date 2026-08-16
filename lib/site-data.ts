export type Course = {
  slug: string;
  title: string;
  shortTitle: string;
  status: "active" | "coming-soon";
  summary: string;
  duration?: string;
  href: string;
};

export const courses: Course[] = [
  {
    slug: "data-analytics",
    title: "Data Analytics + AI Career Program",
    shortTitle: "Data Analytics + AI",
    status: "active",
    summary: "Build practical analytics capability, a credible project portfolio and the confidence to pursue data roles.",
    duration: "5 months",
    href: "/courses/data-analytics",
  },
  {
    slug: "data-science",
    title: "Data Science & Machine Learning",
    shortTitle: "Data Science & ML",
    status: "coming-soon",
    summary: "Programme details are being developed.",
    href: "/courses#future-programmes",
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    shortTitle: "Generative AI",
    status: "coming-soon",
    summary: "Programme details are being developed.",
    href: "/courses#future-programmes",
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    shortTitle: "Agentic AI",
    status: "coming-soon",
    summary: "Programme details are being developed.",
    href: "/courses#future-programmes",
  },
  {
    slug: "business-analytics",
    title: "Business Analytics",
    shortTitle: "Business Analytics",
    status: "coming-soon",
    summary: "Programme details are being developed.",
    href: "/courses#future-programmes",
  },
  {
    slug: "project-management",
    title: "Project Management",
    shortTitle: "Project Management",
    status: "coming-soon",
    summary: "Programme details are being developed.",
    href: "/courses#future-programmes",
  },
];

export const curriculum = [
  {
    number: "01",
    title: "Excel for Business & Data Analytics",
    summary: "Clean, analyse and communicate business data with formulas, lookups, PivotTables and dashboards.",
    topics: ["Excel foundations", "Data cleaning", "Formulas and lookups", "PivotTables", "Business reporting", "Dashboards"],
  },
  {
    number: "02",
    title: "Power BI",
    summary: "Turn raw data into decision-ready models, measures and executive dashboards.",
    topics: ["Power Query", "Data modelling", "DAX", "KPI design", "Visualisation", "Business storytelling"],
  },
  {
    number: "03",
    title: "SQL",
    summary: "Query relational databases and answer practical business questions with confidence.",
    topics: ["SELECT and filtering", "Aggregation", "Joins", "Subqueries", "CTEs", "Analytical SQL"],
  },
  {
    number: "04",
    title: "Python for Analytics",
    summary: "Use Python to clean, explore, visualise and automate analytical work.",
    topics: ["Python foundations", "pandas", "NumPy", "Data cleaning", "Exploratory analysis", "Automation"],
  },
  {
    number: "05",
    title: "Statistics & Probability",
    summary: "Apply the statistical reasoning analysts use to interpret evidence and uncertainty.",
    topics: ["Descriptive statistics", "Probability", "Distributions", "Sampling", "Hypothesis testing", "Correlation"],
  },
  {
    number: "06",
    title: "Machine Learning Foundations",
    summary: "Understand practical introductory models, evaluation and responsible use without overclaiming ML-engineering depth.",
    topics: ["Problem framing", "Regression", "Classification", "Model evaluation", "Feature basics", "Responsible use"],
  },
  {
    number: "07",
    title: "Generative AI for Data Analysts",
    summary: "Use analyst copilots and structured prompting to accelerate responsible analytical workflows.",
    topics: ["Prompt engineering", "AI-assisted analysis", "Structured outputs", "Document analysis", "Productivity workflows", "Business use cases"],
  },
  {
    number: "08",
    title: "Portfolio + Career Accelerator",
    summary: "Present your evidence clearly and prepare for applications, technical interviews and business cases.",
    topics: ["ATS CV", "LinkedIn", "GitHub and portfolio", "Mock interviews", "Interview preparation", "Job-search strategy"],
  },
];

export const journey = [
  ["01", "Learn", "Build the foundations"],
  ["02", "Practise", "Complete guided exercises"],
  ["03", "Build", "Solve business scenarios"],
  ["04", "Show", "Develop your portfolio"],
  ["05", "Certify", "Prepare for credentials"],
  ["06", "Position", "Build CV and LinkedIn"],
  ["07", "Prepare", "Practise interviews"],
  ["08", "Apply", "Start your job search"],
] as const;

export const tools = ["Excel", "Power BI", "SQL", "Python", "pandas", "NumPy", "GitHub", "AI tools"];

export const projects = [
  {
    title: "Executive Sales Dashboard",
    challenge: "Turn fragmented sales data into a clear view of revenue, targets and regional performance.",
    tools: ["Power BI", "DAX", "Excel"],
    skills: "Data modelling · KPI design · Executive storytelling",
    deliverable: "Interactive decision-ready dashboard",
  },
  {
    title: "Healthcare Analytics",
    challenge: "Explore operational patterns in a realistic, anonymised healthcare scenario.",
    tools: ["SQL", "Power BI"],
    skills: "Data quality · Trend analysis · Clear communication",
    deliverable: "Operational insight report",
  },
  {
    title: "Customer Segmentation",
    challenge: "Identify meaningful customer groups and translate analysis into commercial recommendations.",
    tools: ["Python", "pandas"],
    skills: "Exploration · Segmentation · Recommendation design",
    deliverable: "Notebook and stakeholder presentation",
  },
  {
    title: "SQL Business Case",
    challenge: "Answer a set of commercial questions from a relational dataset under interview-style constraints.",
    tools: ["SQL"],
    skills: "Joins · CTEs · Analytical reasoning",
    deliverable: "Query pack with written findings",
  },
  {
    title: "Operations KPI Dashboard",
    challenge: "Define, calculate and monitor the measures that matter to an operations team.",
    tools: ["Power BI", "Excel"],
    skills: "KPI development · Automation · Visual hierarchy",
    deliverable: "Operations performance dashboard",
  },
  {
    title: "Financial Analysis",
    challenge: "Analyse budget variance and communicate what is changing, where and why.",
    tools: ["Excel", "Power BI"],
    skills: "Variance analysis · Forecasting · Reporting",
    deliverable: "Management reporting pack",
  },
  {
    title: "Python Analytics Workflow",
    challenge: "Clean a messy dataset and automate a repeatable analytical workflow.",
    tools: ["Python", "pandas", "NumPy"],
    skills: "Cleaning · Validation · Automation",
    deliverable: "Reproducible analysis notebook",
  },
  {
    title: "AI Analyst Copilot",
    challenge: "Design a responsible assistant that helps structure analysis and explain outputs.",
    tools: ["AI tools", "Python"],
    skills: "Prompting · Structured outputs · Evaluation",
    deliverable: "Documented prototype workflow",
  },
];

export const careerStages = [
  ["01", "Career Assessment", "Clarify your background, transferable skills, target role and development priorities."],
  ["02", "Professional Profile", "Shape an ATS-friendly CV, a focused LinkedIn profile and a coherent professional story."],
  ["03", "Portfolio Development", "Select your strongest work and learn to explain the question, method, decision and result."],
  ["04", "Interview Preparation", "Practise technical, behavioural and case-study interviews with structured feedback."],
  ["05", "Job Search", "Build a repeatable approach to role discovery, networking, applications and follow-up."],
  ["06", "Job Guarantee Programme", "Eligible learners can access an enhanced support pathway. Criteria and programme terms apply."],
] as const;

export const roles = [
  "Data Analyst",
  "Business Analyst",
  "BI Analyst",
  "Reporting Analyst",
  "Operations Analyst",
  "Junior Data Consultant",
  "Commercial Analyst",
  "Financial Analyst",
  "Healthcare Data Analyst",
  "Junior Analytics Consultant",
];

export const faqItems = [
  ["Can a beginner join?", "Yes. The programme starts with foundations and is designed for beginners, career starters and career switchers. Consistent practice is still essential."],
  ["Do I need coding experience?", "No prior coding experience is required. SQL and Python are introduced progressively with guided practice."],
  ["Are classes live?", "Yes. The programme is designed around live, mentor-led online sessions supported by guided practice and independent project work."],
  ["What happens if I miss a class?", "Catch-up arrangements and access policies depend on the current cohort schedule. Ask the admissions team for the policy that applies to your intake."],
  ["How long is the programme?", "The flagship Data Analytics + AI Career Program runs for five months."],
  ["What projects will I build?", "You will work through 40+ guided and portfolio-focused activities using real-world business scenarios across Excel, Power BI, SQL, Python and AI-assisted analytics."],
  ["Is career support included?", "Yes. Career preparation is built into the learning journey and covers profile positioning, portfolio presentation, interviews and job-search strategy."],
  ["How does Microsoft certification work?", "The programme supports preparation for relevant Microsoft certification pathways. Exam bookings, fees and precise certification targets should be confirmed with admissions."],
  ["What does the Job Guarantee Program mean?", "It is an enhanced support pathway for eligible learners. It is not an unconditional promise of employment. Eligibility criteria, participation requirements and programme terms apply."],
  ["What attendance is required?", "Participation expectations are set out for each cohort and may be part of Job Guarantee Programme eligibility. Confirm the current requirements before enrolling."],
  ["Will Mastery Nexus help with my CV?", "Yes. The career accelerator includes guidance on creating a focused, ATS-friendly CV supported by credible project evidence."],
  ["Is LinkedIn optimisation included?", "Yes. You will learn how to position your target role, capabilities, projects and transferable experience clearly."],
  ["Are mock interviews included?", "Interview preparation includes technical, behavioural and business-case practice. The exact format and number of sessions may vary by cohort."],
  ["What job roles can I apply for?", "The skills can support applications for roles such as Data Analyst, BI Analyst, Reporting Analyst, Business Analyst and related junior analytics positions. Outcomes vary by prior experience, location and market conditions."],
  ["Are payment plans available?", "Payment options may be available. Ask the admissions team for current pricing, eligibility and terms."],
] as const;

export const navItems = [
  ["Courses", "/courses"],
  ["Career Support", "/career-support"],
  ["Student Stories", "/student-stories"],
  ["Reviews", "/reviews"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export const organisation = {
  name: "Mastery Nexus",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mastery-nexus.com",
  email: process.env.NEXT_PUBLIC_ENQUIRY_EMAIL ?? "",
  phone: process.env.NEXT_PUBLIC_ENQUIRY_PHONE ?? "",
};

