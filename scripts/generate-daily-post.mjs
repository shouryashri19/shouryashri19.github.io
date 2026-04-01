import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const TZ = process.env.BLOG_TIMEZONE || "America/New_York";
const targetHour = Number.parseInt(process.env.BLOG_PUBLISH_HOUR_LOCAL || "8", 10);
const mode = process.env.PUBLISH_MODE || "published"; // "published" | "draft"
const force = process.env.FORCE_PUBLISH === "true";

// Quality controls for every generated post.
const MIN_PARAGRAPHS = 5;
const MIN_WORDS_PER_PARAGRAPH = 70;
const MIN_TOTAL_WORDS = 500;

const topics = [
  {
    tag: "Finance Careers",
    title: "Building Finance Career Momentum Through Deliberate Weekly Execution",
    excerpt:
      "A practical system for balancing technical preparation, networking, and professional communication in finance recruiting.",
    paragraphs: [
      "Serious finance preparation rarely fails because of a lack of ambition; it usually fails because daily effort is not organized into a repeatable system. I have learned that recruiting progress improves when preparation is run like an operating cadence with fixed weekly outputs. The objective is not to stay busy but to stay directional. Each week should produce clearer technical judgment, stronger market fluency, and better communication quality. Without that structure, even high effort can become scattered and difficult to sustain during demanding academic terms.",
      "My weekly structure starts with outcome planning rather than task accumulation. I commit to one technical milestone, one market-analysis milestone, and one communication milestone. For example, a technical milestone may be improving integration between accounting assumptions and valuation outputs, while a market milestone may involve writing a concise view on a sector repricing event. A communication milestone may focus on sharpening a behavioral narrative or improving a deal discussion response. This structure prevents imbalance and keeps preparation aligned with real interview demands.",
      "Technical readiness is strongest when it is tied to explanation, not memorization. In practice, I test whether I can defend assumptions, interpret sensitivity outputs, and explain the tradeoffs embedded in each scenario. If an answer cannot be articulated clearly under time pressure, preparation is incomplete. This standard has improved my confidence in high-stakes settings because the process emphasizes reasoning over script dependence. It also builds the kind of analytical credibility that finance teams look for in early-career candidates.",
      "Networking and relationship-building become more effective when they are integrated into the same execution rhythm. Instead of sending broad outreach in sporadic bursts, I track targeted conversations, learning goals, and follow-up quality. The aim is to build professional relationships through thoughtful engagement, not transaction-driven messaging. This discipline has helped me ask better questions, extract better insights, and improve my understanding of role expectations across banking, markets, and strategy pathways.",
      "The most useful lesson is that consistency compounds faster than intensity. A well-structured week repeated over months creates real differentiation in preparation quality. The process also lowers anxiety because progress is visible and measurable. In competitive finance recruiting, disciplined execution is often the bridge between potential and performance. When preparation is system-driven, momentum becomes durable, and outcomes improve with much greater reliability.",
    ],
  },
  {
    tag: "Investment Banking Journey",
    title: "Developing Investment Banking Judgment Beyond the Technical Checklist",
    excerpt:
      "Why judgment, context, and communication quality are essential additions to technical interview preparation.",
    paragraphs: [
      "Technical preparation is essential in investment banking recruiting, but technical accuracy alone is not enough. Over time, I have realized that interview performance and on-the-job readiness both depend on judgment quality. That means knowing how to prioritize assumptions, interpret uncertainty, and communicate tradeoffs with clarity. Candidates often focus on reproducing formulas quickly, yet teams evaluate whether analysis can support real decision-making in imperfect conditions. Building that capability requires practice that goes beyond standard question banks.",
      "One practical improvement has been to evaluate every technical concept in a decision context. For valuation, I ask which assumptions are most fragile and which evidence would change my conclusion. For accounting, I ask how a change in one line item propagates through operating and financing consequences. For transaction analysis, I focus on strategic logic rather than isolated arithmetic. This approach keeps preparation tied to business judgment and helps avoid the common trap of technically correct but context-poor answers.",
      "Market awareness is another major differentiator because it reveals whether technical analysis is connected to current conditions. I maintain a concise weekly market memo that tracks rate expectations, financing conditions, and sector narratives. When I discuss valuation outcomes, I anchor them in this macro context so assumptions remain realistic. This habit has improved both interview discussions and networking conversations, where practical relevance often matters as much as analytical depth.",
      "Communication discipline is where analytical quality becomes visible. I practice structuring responses in three layers: core conclusion, supporting rationale, and risk caveat. This format keeps responses concise while still showing critical thinking. It also mirrors how professionals communicate under time constraints. In high-pressure conversations, this structure reduces noise and improves confidence because the logic is explicit and defensible.",
      "The broader lesson is that investment banking preparation should develop both skill and judgment. Technical foundations create credibility, but judgment creates trust. Candidates who can connect models, markets, and communication are better prepared for real deal environments. For me, this integrated approach has made preparation more rigorous and more realistic, while strengthening the professional profile I want to bring into finance roles.",
    ],
  },
  {
    tag: "Valuation and Markets",
    title: "Turning Market Volatility into Better Valuation Decisions",
    excerpt:
      "A disciplined framework for interpreting volatility, updating assumptions, and avoiding narrative-driven overreactions.",
    paragraphs: [
      "Volatility creates pressure to react quickly, but valuation quality depends on disciplined interpretation rather than speed alone. I try to separate signal from noise by starting with one question: which assumptions have genuinely changed? Market moves can be driven by positioning, liquidity, or short-term sentiment, none of which always justify major model revisions. A structured process helps avoid overcorrection and preserves analytical consistency when headlines become noisy.",
      "My first step is to map volatility into valuation drivers: expected growth, margin trajectory, reinvestment intensity, and discount rate assumptions. This translation is critical because broad market language often obscures the underlying economics. If a move cannot be linked to one or more of these drivers, I treat it cautiously. This filter has improved model discipline by reducing impulsive edits that create false precision without improving decision quality.",
      "The second step is scenario design with explicit probability thinking. I avoid single-path forecasting because it understates uncertainty and can hide downside exposure. Instead, I define base, downside, and upside views with clear triggers for each. This structure improves risk communication and makes it easier to explain why a valuation range is wide or narrow. In professional settings, decision-makers usually value transparent uncertainty more than overstated confidence.",
      "Another important practice is monitoring revisions rather than static assumptions. A good valuation process is iterative, especially in sectors where policy, funding costs, or demand cycles shift quickly. I maintain assumption logs that track why inputs changed and what evidence supported each change. This not only improves quality control but also strengthens communication because each revision can be justified with a clear rationale.",
      "Over time, the objective is to make volatility analytically useful rather than psychologically disruptive. When process quality is strong, volatility becomes a source of information instead of distraction. That mindset improves both technical output and professional credibility. For aspiring finance professionals, this discipline is especially important because markets reward consistent reasoning far more than reactive commentary.",
    ],
  },
  {
    tag: "Business School Reflections",
    title: "What Business School Is Teaching Me About Professional Finance Execution",
    excerpt:
      "Lessons from graduate study on analytical standards, collaboration, and communication under pressure.",
    paragraphs: [
      "Graduate finance training has reinforced that professional excellence is built through execution habits, not isolated high-performance moments. Coursework, team projects, and recruiting cycles often overlap, which makes prioritization an essential skill. The challenge is not simply completing tasks, but protecting quality while timelines compress. This environment has pushed me to create structured planning systems that support both technical depth and reliable delivery.",
      "One major lesson has been the value of analytical transparency. In classroom and project settings, assumptions must be explicit and defensible, especially when working on valuation or portfolio decisions. I have found that documenting why an assumption is chosen is as important as the number itself. This practice improves internal consistency and creates stronger collaboration because teammates can critique logic, not just output. In professional finance settings, this habit directly improves trust and decision alignment.",
      "Team-based work has also highlighted the importance of role clarity and communication rhythm. Strong teams are rarely those with the most talent in isolation; they are the teams that define ownership, timelines, and quality standards early. I now structure collaborative work with clear checkpoints so risks are identified before deadlines, not at the end. This approach has reduced rework and improved the quality of final deliverables.",
      "Another insight is that communication quality is a force multiplier for technical work. A model or analysis has limited value if the recommendation is not presented clearly to decision-makers. I have been practicing concise executive summaries that emphasize implications, tradeoffs, and next-step options. This discipline helps transform analysis from an academic exercise into a practical decision tool.",
      "Business school has ultimately strengthened my professional approach to finance by connecting rigor with execution discipline. The most durable progress comes from repeatable systems that remain effective under pressure. As I move toward finance and investment banking opportunities, I see this operating mindset as a core competitive advantage: clear thinking, consistent delivery, and communication that supports decisions.",
    ],
  },
  {
    tag: "Professional Development",
    title: "Building Professional Discipline for Long-Term Finance Performance",
    excerpt:
      "How structured routines, reflection, and communication standards improve long-term performance trajectories.",
    paragraphs: [
      "Professional growth in finance is often discussed in terms of outcomes, but outcomes are downstream of routine quality. I have become increasingly focused on building routines that improve analytical reliability over long periods. This includes structured planning, intentional skill practice, and recurring reflection on execution quality. The goal is to make strong performance repeatable rather than dependent on short-term motivation or external pressure.",
      "A key part of this process is defining standards for work quality before starting the work itself. For technical analysis, that means explicit assumptions, sensitivity coverage, and clear error-checking steps. For writing and communication, it means concise structure and evidence-backed reasoning. Predefined standards reduce ambiguity and improve consistency, especially when deadlines are tight. They also make self-review more objective because quality can be measured against explicit criteria.",
      "I also treat reflection as an operating requirement, not an optional activity. Weekly review sessions help identify where time was invested effectively and where execution drift occurred. This practice reveals recurring bottlenecks, such as over-scoping tasks or underestimating communication time. By diagnosing these patterns early, I can recalibrate quickly and maintain momentum across academics, projects, and recruiting.",
      "Professional discipline also requires managing cognitive load. High-output periods can create decision fatigue, which leads to avoidable mistakes. I reduce this by using recurring templates for planning, analysis, and follow-up communication. Templates do not reduce thinking; they protect thinking by removing repetitive friction. This has helped me preserve analytical depth when workload intensity increases.",
      "The long-term advantage of discipline is compounding trust. Over time, consistent output quality signals reliability to peers, faculty, and professional contacts. In finance environments where judgment and execution both matter, reliability is a core asset. Building that reliability intentionally has become a central part of my professional development strategy and a foundation for future high-responsibility roles.",
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

function countWords(value) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

function ensureQuality(topic) {
  if (topic.paragraphs.length < MIN_PARAGRAPHS) {
    throw new Error(`Quality check failed: expected at least ${MIN_PARAGRAPHS} paragraphs.`);
  }

  topic.paragraphs.forEach((paragraph, index) => {
    const words = countWords(paragraph);
    if (words < MIN_WORDS_PER_PARAGRAPH) {
      throw new Error(
        `Quality check failed: paragraph ${index + 1} has ${words} words; expected at least ${MIN_WORDS_PER_PARAGRAPH}.`,
      );
    }
  });

  const totalWords = countWords(topic.paragraphs.join(" "));
  if (totalWords < MIN_TOTAL_WORDS) {
    throw new Error(`Quality check failed: total words ${totalWords}; expected at least ${MIN_TOTAL_WORDS}.`);
  }

  const normalized = topic.paragraphs.map((p) => p.trim().toLowerCase());
  if (new Set(normalized).size !== normalized.length) {
    throw new Error("Quality check failed: duplicate paragraph content detected.");
  }
}

function buildMarkdown(topic, isoDate) {
  ensureQuality(topic);
  const published = mode !== "draft";

  return `---\ntitle: "${topic.title}"\nexcerpt: "${topic.excerpt}"\ndate: "${isoDate}"\ntags:\n  - ${topic.tag}\n  - Daily Insights\nfeatured: false\npublished: ${published}\n---\n\n${topic.paragraphs.join("\n\n")}`;
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
console.log(
  `Quality gates: paragraphs>=${MIN_PARAGRAPHS}, words/paragraph>=${MIN_WORDS_PER_PARAGRAPH}, total words>=${MIN_TOTAL_WORDS}.`,
);
