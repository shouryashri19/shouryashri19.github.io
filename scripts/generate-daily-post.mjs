import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const TZ = process.env.BLOG_TIMEZONE || "America/New_York";
const targetHour = Number.parseInt(process.env.BLOG_PUBLISH_HOUR_LOCAL || "8", 10);
const mode = process.env.PUBLISH_MODE || "published"; // "published" | "draft"
const force = process.env.FORCE_PUBLISH === "true";

const topics = [
  {
    tag: "Finance Careers",
    title: "Building a Weekly Finance Recruiting System That Actually Scales",
    excerpt:
      "A repeatable weekly structure for technical prep, networking, and interview communication.",
    sections: [
      "Most candidates prepare hard, but not always in a system. A weekly operating rhythm makes progress measurable and durable.",
      "I divide each week into technical depth, market context, outreach, and communication drills. This prevents over-indexing on one area while neglecting another.",
      "The most important outcome is consistency. In competitive recruiting, consistency compounds faster than occasional intensity.",
    ],
  },
  {
    tag: "Markets",
    title: "From Macro Headlines to Company-Level Questions",
    excerpt:
      "How to translate macro news into practical questions for equity and valuation analysis.",
    sections: [
      "Macro headlines are useful only when converted into assumptions. I track how rates, inflation, and growth outlook may change revenue, margin, and discount rate expectations.",
      "For each major update, I write three follow-up questions at the company level. This helps connect top-down information to bottom-up modeling.",
      "This method improves both clarity and speed when discussing markets in interviews or investment conversations.",
    ],
  },
  {
    tag: "Professional Development",
    title: "Execution Discipline During High-Pressure Academic Terms",
    excerpt:
      "Simple systems for staying organized when coursework and recruiting peak at the same time.",
    sections: [
      "I use fixed daily planning windows to protect deep work time. Without scheduled planning, urgent tasks quickly overwhelm important tasks.",
      "A strong weekly review closes loops: what moved, what stalled, and what should change next week.",
      "Discipline is less about motivation and more about maintaining reliable systems under pressure.",
    ],
  },
  {
    tag: "Valuation",
    title: "Using Sensitivity Analysis to Improve Decision Quality",
    excerpt:
      "A practical view of sensitivity analysis as a decision framework, not just a spreadsheet output.",
    sections: [
      "Sensitivity analysis is most useful when paired with explicit decision thresholds. I define the assumptions that materially change the conclusion before running scenarios.",
      "This approach clarifies which inputs deserve research attention and which are less impactful.",
      "The goal is not to predict a single number. The goal is to understand the range of credible outcomes and their implications.",
    ],
  },
];

function getLocalHour(date = new Date()) {
  const hour = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    hour12: false,
    hour: "2-digit",
  }).format(date);

  return Number.parseInt(hour, 10);
}

function getLocalDateParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const get = (type) => parts.find((part) => part.type === type)?.value ?? "00";
  return { year: get("year"), month: get("month"), day: get("day") };
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function chooseTopic(todayIndex) {
  return topics[todayIndex % topics.length];
}

function shouldRun() {
  if (force) return true;
  const hour = getLocalHour();
  return hour === targetHour;
}

function buildMarkdown(topic, isoDate) {
  const published = mode !== "draft";

  return `---\ntitle: "${topic.title}"\nexcerpt: "${topic.excerpt}"\ndate: "${isoDate}"\ntags:\n  - ${topic.tag}\n  - Daily Insights\nfeatured: false\npublished: ${published}\n---\n\n## Daily Brief\n\n${topic.sections[0]}\n\n## Practical Takeaway\n\n${topic.sections[1]}\n\n## Closing Reflection\n\n${topic.sections[2]}\n`;
}

if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

if (!shouldRun()) {
  console.log(`Skip publish. Current ${TZ} hour does not match configured hour ${targetHour}.`);
  process.exit(0);
}

const now = new Date();
const local = getLocalDateParts(now);
const isoDate = `${local.year}-${local.month}-${local.day}`;
const daySeed = Number.parseInt(local.day, 10);
const topic = chooseTopic(daySeed);
const slug = `${isoDate}-${slugify(topic.title)}`;
const filename = `${slug}.md`;
const fullPath = path.join(BLOG_DIR, filename);

if (fs.existsSync(fullPath)) {
  console.log(`Post already exists: ${filename}`);
  process.exit(0);
}

const markdown = buildMarkdown(topic, isoDate);
fs.writeFileSync(fullPath, markdown, "utf8");

console.log(`Generated blog post: ${filename}`);
console.log(`Mode: ${mode}. Timezone: ${TZ}. Target hour: ${targetHour}.`);
