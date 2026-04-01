export type ExperienceItem = {
  role: string;
  organization: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type ProjectCategory =
  | "Finance Modeling"
  | "Valuation"
  | "Business Analytics"
  | "Research"
  | "Markets";

export type ProjectItem = {
  title: string;
  subtitle: string;
  category: ProjectCategory;
  summary: string;
  whyItMatters: string;
  tools: string[];
  highlights: string[];
  projectUrl?: string;
  projectLinkLabel?: string;
  projectLinkNote?: string;
  source: "resume" | "linkedin" | "resume+linkedin";
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  relevance: "high" | "core" | "supporting";
  source: "resume" | "linkedin" | "resume+linkedin";
};

export type ExternalArticle = {
  title: string;
  platform: "Medium";
  date?: string;
  readTime?: string;
  summary: string;
  url: string;
  tags: string[];
};

export const profile = {
  name: "Shourya Shrivastava",
  headline:
    "Master of Financial Analysis candidate focused on investment banking, valuation, and business-driven financial analysis.",
  shortIntro:
    "I am a finance graduate student at Rutgers Business School with hands-on experience in pricing analysis, reporting workflows, and data-backed decision support. I combine quantitative rigor with structured communication to support stakeholder decisions in fast-paced environments.",
  summary:
    "Data-driven analyst with a Master of Financial Analysis and experience in pricing analytics, business operations support, CRM and ERP data workflows, and cross-functional reporting. Proficient in Excel, SQL, R, Tableau, and Oracle NetSuite, with a strong focus on valuation discipline and market-aware financial reasoning.",
  values: [
    "Analytical discipline",
    "Structured communication",
    "Execution under deadlines",
    "Leadership through accountability",
    "Continuous professional growth",
  ],
  currentlyExploring: [
    "Advanced valuation case execution for investment banking interviews",
    "Macro-to-micro market analysis for equity and credit narratives",
    "Workflow automation for recurring reporting and operational finance tasks",
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
    title: "Procter and Gamble Health and Hygiene India",
    subtitle: "Financial Modeling and Valuation Report",
    category: "Finance Modeling",
    summary:
      "Developed an end-to-end financial planning and valuation model focused on pricing scenarios and revenue implications across product lines.",
    whyItMatters:
      "Demonstrates investment banking-relevant modeling discipline, assumption testing, and strategy-ready recommendation framing.",
    tools: ["Excel", "Three-Statement Modeling", "DCF", "WACC", "Sensitivity Analysis"],
    highlights: [
      "Built a three-statement model with a 25+ KPI dashboard and scenario planning modules.",
      "Applied DCF valuation and sensitivity analysis to stress test assumptions.",
      "Converted model outputs into product-level commercial recommendations for stakeholders.",
    ],
    source: "resume+linkedin",
  },
  {
    title: "Hypergeometric Distribution Application in Financial Modelling",
    subtitle: "Research and Publication Project",
    category: "Valuation",
    summary:
      "Co-authored a published quantitative finance paper linking probability modeling with financial literacy and decision behavior analysis.",
    whyItMatters:
      "Demonstrates publication-grade research rigor, quantitative reasoning, and technical writing strength relevant to finance and investment analysis roles.",
    tools: ["Research Design", "Quantitative Analysis", "Academic Writing"],
    highlights: [
      "Published in IJARESM (Vol. 12, No. 11).",
      "Connected mathematical modeling concepts to applied finance decision contexts.",
      "Presented research findings in conference settings.",
    ],
    projectUrl:
      "https://www.ijaresm.com/uploaded_files/document_file/Shourya_Shrivastava7zCX.pdf",
    projectLinkLabel: "Read Full Paper",
    projectLinkNote: "Full Research Publication",
    source: "resume+linkedin",
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

export const linkedInHighlights = {
  profileUrl: "https://www.linkedin.com/in/shourya-shrivastava-394035257/",
  note:
    "LinkedIn is integrated as a primary profile hub. Direct automated extraction can be rate-limited by LinkedIn, so this section is intentionally structured for quick manual sync.",
  verifiedFromResumeAndVisibleProfile: [
    "Master of Financial Analysis candidate at Rutgers Business School.",
    "Experience in pricing analysis, reporting workflows, and stakeholder communication.",
    "Active focus on finance, economics, and business-oriented research writing.",
  ],
  manualSyncPlaceholders: [
    "Add LinkedIn headline exactly as displayed.",
    "Add featured links (project decks, certificates, publications) from your LinkedIn Featured section.",
    "Add volunteer or organization entries visible on LinkedIn if you want them shown publicly.",
  ],
};

export const mediumProfile = {
  profileUrl: "https://medium.com/@shouryashri19",
  bio:
    "Finance grad student at Rutgers Business School. Research in finance, economics, and sustainable business. Writing to share insights and maintain a disciplined writing practice.",
  followersText: "4 followers (publicly visible at time of integration)",
};

export const mediumArticles: ExternalArticle[] = [
  {
    title:
      "When Wall Street Sneezes, the World Catches a Cold: Spillovers of U.S. Employment Situation Report",
    platform: "Medium",
    date: "Sep 30, 2025",
    readTime: "4 min read",
    summary:
      "A macro-finance essay examining how U.S. labor data reshapes monetary expectations, global capital flows, and cross-border asset pricing.",
    url: "https://medium.com/@shouryashri19/when-wall-street-sneezes-the-world-catches-a-cold-spillovers-of-u-s-employment-situation-report-175cf0e57260",
    tags: ["Finance", "Employment", "Business", "Markets"],
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

export const certifications: CertificationItem[] = [
  {
    name: "Bloomberg Market Concepts",
    issuer: "Bloomberg for Education",
    date: "2026",
    relevance: "high",
    source: "resume+linkedin",
  },
  {
    name: "Bloomberg Spreadsheet Analysis",
    issuer: "Bloomberg for Education",
    date: "2026",
    relevance: "high",
    source: "resume+linkedin",
  },
  {
    name: "J.P. Morgan Investment Banking Simulation",
    issuer: "Forage",
    date: "2025",
    relevance: "high",
    source: "resume+linkedin",
  },
  {
    name: "Introduction to Strategy Consulting Job Simulation",
    issuer: "BCG Forage",
    date: "2024",
    relevance: "core",
    source: "resume+linkedin",
  },
  {
    name: "Management Consulting Virtual Experience Program",
    issuer: "PwC Forage",
    date: "2023",
    relevance: "core",
    source: "resume+linkedin",
  },
  {
    name: "Google Data Analytics Specialization",
    issuer: "Coursera",
    date: "2023",
    relevance: "core",
    source: "resume+linkedin",
  },
  {
    name: "Google Data Analytics Capstone: Case Study",
    issuer: "Coursera",
    date: "2023",
    relevance: "supporting",
    source: "resume+linkedin",
  },
  {
    name: "Data Analysis with R Programming",
    issuer: "Coursera",
    date: "2023",
    relevance: "supporting",
    source: "resume+linkedin",
  },
];

export const topCertifications = certifications.filter(
  (item) => item.relevance === "high" || item.relevance === "core",
);

export const additionalHighlights = [
  "Selected from 50,000+ global applicants and won the Impact Challenge at Harvard Project for Asia and International Relations 2025.",
  "City Head, Project Green and Garbage (2023-2024).",
  "Represented Delhi at Miss Teen Diva 2024; placed Top 8 nationally in India with Miss Congeniality and Miss Vivacious subtitles.",
];

export const editablePlaceholders = {
  linkedinHeadline: "Add exact LinkedIn headline here after each profile update.",
  linkedinFeaturedLinks:
    "Add verified LinkedIn Featured URLs (project decks, case studies, credentials) once available publicly.",
  mediumAdditionalArticles:
    "Add additional Medium article URLs and summaries as you publish more writing.",
  certificationCredentials:
    "Add credential URLs for each certificate when you want clickable verification.",
  bioPersonal:
    "Add a 2-3 sentence personal narrative on why you chose finance and your long-term goal in investment banking/private equity.",
  testimonials: "Add quotes from supervisors, professors, or team leads.",
};
