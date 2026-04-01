export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type ProjectItem = {
  name: string;
  subtitle: string;
  summary: string;
  skills: string[];
  highlights: string[];
};

export const profile = {
  name: "Shourya Shrivastava",
  headline: "Master of Financial Analysis Candidate focused on investment banking, valuation, and strategic finance.",
  shortIntro:
    "I am a data-driven finance graduate student at Rutgers Business School with hands-on experience in pricing analysis, financial reporting, and cross-functional business support. My work combines rigorous quantitative analysis with practical decision support for business stakeholders.",
  summary:
    "Data-driven analyst with a Master of Financial Analysis and experience in pricing analysis, business operations support, CRM and ERP data workflows, and stakeholder reporting. Proficient in Excel, SQL, R, Tableau, and Oracle NetSuite, with active development in Salesforce ecosystem capabilities.",
  values: [
    "Analytical discipline",
    "Structured communication",
    "Execution under deadlines",
    "Leadership through accountability",
    "Continuous professional growth",
  ],
  currentlyExploring: [
    "Advanced valuation and corporate finance case execution",
    "Capital markets narratives and macro-to-micro business analysis",
    "Workflow automation for recurring financial reporting",
  ],
};

export const education = [
  {
    school: "Rutgers Business School, Rutgers University",
    degree: "Master of Financial Analysis",
    location: "New Jersey, USA",
    period: "Jul 2025 - May 2026",
    score: "GPA: 3.5/4.0",
    highlights: [
      "Best Presentation Award - LeadBest Program",
      "Teaching Assistant - Investment Analysis and Management, Financial Management (MBA), Corporate Finance (BSc Finance)",
      "Relevant Coursework: Asset Management, Portfolio Management, Investment Analysis and Management, Financial Modeling, Valuation, Fixed Income Securities, Derivatives, Capital Markets, Financial Statement Analysis",
    ],
  },
  {
    school: "University of Delhi",
    degree: "Bachelor of Commerce (Honours)",
    location: "Delhi, India",
    period: "Jul 2022 - Jun 2025",
    score: "CGPA: 7.5/10",
    highlights: ["President, The Placement Cell - Kamala Nehru College"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Teaching Assistant",
    organization: "Rutgers Business School",
    location: "New Jersey, USA",
    start: "Aug 2025",
    end: "May 2026",
    bullets: [
      "Managed data integrity and performance tracking for 106 students across undergraduate and MBA finance courses.",
      "Built structured evaluation workflows for case-based and quantitative assignments to improve reporting consistency.",
      "Collaborated with faculty across course sections to resolve data discrepancies and meet academic reporting deadlines.",
    ],
  },
  {
    role: "Financial Research and Analysis Intern",
    organization: "Yes Bank Pvt Ltd.",
    location: "Delhi, India",
    start: "May 2025",
    end: "Jul 2025",
    bullets: [
      "Managed and analyzed 5,000+ data points across 10+ business segments using Excel and R.",
      "Developed pricing analytics dashboards and budget-versus-actual tools for cross-functional reporting.",
      "Supported product and pricing setup through requirement gathering, data validation, and reporting compliance workflows.",
    ],
  },
  {
    role: "Research Intern",
    organization: "UFlex Ltd.",
    location: "Delhi, India",
    start: "Aug 2024",
    end: "Oct 2024",
    bullets: [
      "Used Oracle NetSuite (ERP/CRM) for workflow management, data entry, and financial performance reporting.",
      "Performed budget-versus-actual and pricing performance analysis, identifying INR 2M in cost optimization opportunities.",
      "Supported UAT for financial reporting templates to align system outputs with policy and operational standards.",
    ],
  },
  {
    role: "Data Analytics Trainee",
    organization: "MedTourEasy",
    location: "Delhi, India",
    start: "Aug 2023",
    end: "Sep 2023",
    bullets: [
      "Analyzed large operational datasets with SQL, R, and Tableau for pricing and revenue insights.",
      "Built dashboard outputs in Power BI and Tableau for stakeholder decision support.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Procter & Gamble Health and Hygiene India",
    subtitle: "Financial Modeling and Valuation Report",
    summary:
      "Developed an end-to-end financial planning and valuation model focused on pricing, revenue implications, and scenario evaluation.",
    skills: ["Financial Modeling", "DCF", "WACC", "Sensitivity Analysis", "Excel"],
    highlights: [
      "Built a three-statement model with a 25+ KPI dashboard and scenario planning modules.",
      "Applied DCF valuation, WACC assumptions, and sensitivity analysis for decision support.",
      "Produced product-level commercial recommendations designed for business stakeholders.",
    ],
  },
];

export const publications = [
  {
    title:
      "Financial Literacy and Decision-Making: Applications of the Hypergeometric Distribution in Financial Modelling",
    citation:
      "S. Shrivastava and R. Shrivastava, IJARESM, Vol. 12, No. 11, Nov 2024, Paper ID: IJ-0411240947",
  },
];

export const conferences = [
  "Harvard Project for Asia and International Relations (HCONF) 2025 - Delegate and Impact Challenge Winner",
  "National Conference on Applied and Industrial Mathematics - Research Paper Presentation (Nov 2024)",
];

export const leadership = [
  {
    title: "President, The Placement Cell",
    org: "Kamala Nehru College",
    period: "Nov 2022 - May 2025",
    points: [
      "Led a 30+ member team and supported a 35% improvement in placements.",
      "Increased recruiter engagement by 50% through structured outreach and relationship management.",
      "Secured INR 75K in sponsorship support while managing deadlines and execution plans.",
    ],
  },
];

export const skills = {
  technical: [
    "MS Excel (Advanced)",
    "SQL",
    "R",
    "Python",
    "Tableau",
    "Power BI",
    "Bloomberg Terminal",
    "Oracle NetSuite (ERP/CRM)",
    "MS Office Suite",
  ],
  finance: [
    "Financial Modeling",
    "Valuation",
    "Investment Analysis",
    "Portfolio Analysis",
    "Variance Analysis",
    "Capital Markets",
  ],
  professional: [
    "Pricing Operations",
    "Data Management and Reporting",
    "Requirement Gathering",
    "Cross-Functional Collaboration",
    "UAT Support",
    "Stakeholder Communication",
    "Process Improvement",
  ],
};

export const certifications = [
  "Bloomberg Market Concepts (2026)",
  "Bloomberg Spreadsheet Analysis (2026)",
  "J.P. Morgan Investment Banking Simulation (Forage, 2025)",
  "Introduction to Strategy Consulting Job Simulation (BCG Forage, 2024)",
  "Management Consulting Virtual Experience Program (PwC Forage, 2023)",
  "Google Data Analytics Specialization (Coursera, 2023)",
  "Google Data Analytics Capstone: Case Study (Coursera, 2023)",
  "Data Analysis with R Programming (Coursera, 2023)",
];

export const additionalHighlights = [
  "Selected from 50,000+ global applicants and won the Impact Challenge at Harvard Project for Asia and International Relations 2025.",
  "City Head, Project Green and Garbage (2023-2024).",
  "Represented Delhi at Miss Teen Diva 2024; placed Top 8 nationally in India with Miss Congeniality and Miss Vivacious subtitles.",
];

export const editablePlaceholders = {
  linkedin: "Replace site-config linkedIn with your exact profile URL.",
  github: "Replace site-config github if you want a public code profile displayed.",
  bioPersonal:
    "Add a 2-3 sentence personal narrative on why you chose finance and your long-term goal in investment banking/private equity.",
  testimonials: "Add quotes from supervisors, professors, or team leads.",
};
