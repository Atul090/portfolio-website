/**
 * Site content — single source of truth.
 *
 * Every figure and claim here comes from one of three verified sources:
 *   (R) the résumé PDF in src/imports/Atul_Singh.pdf
 *   (S) the previous version of this site
 *   (B) articles published at blog.atuldeepsingh.com
 *
 * Nothing is invented. Where a project lacks detail, the gap is noted
 * in the comment above it so it can be supplied later.
 */

import resumePdf from "../../imports/Atul_Singh.pdf";
import genifyShot from "../../assets/genify.webp";
import portrait from "../../assets/portrait.webp";

export const profile = {
  name: "Atul Deep Singh",
  firstName: "Atul",
  role: "Software Engineer",
  company: "Heads Up For Tails",
  since: "Nov 2023",
  location: "Gurugram, India",
  timeZone: "Asia/Kolkata",
  timeZoneLabel: "IST",
  availability: "Open to opportunities", // (S)
  email: "999.atulsingh@gmail.com",
  phone: "+91 79050 72450",
  phoneHref: "tel:+917905072450",
  github: "https://github.com/atul090",
  githubHandle: "atul090",
  linkedin: "https://linkedin.com/in/atuldeepsingh",
  linkedinHandle: "in/atuldeepsingh",
  blog: "https://blog.atuldeepsingh.com",
  site: "https://atuldeepsingh.com",
  resume: resumePdf,
  resumeFileName: "Atul_Deep_Singh_Resume.pdf",
  portrait,
  // The previous version of this site, built from backup/ into dist/v1/.
  previousVersion: "/v1/",
};

export const hero = {
  headline: ["Building systems that work", "beyond the happy path."],
  lead:
    "I'm Atul, a software engineer focused on backend systems, APIs, data-intensive applications and the integrations that hold them together.",
  metadata: [
    { key: "Focus", value: "Backend systems · APIs · Integrations" },
    { key: "Stack", value: "Node.js · TypeScript · MongoDB · RabbitMQ" },
    { key: "Now", value: "Software Engineer, Heads Up For Tails" },
  ],
  figureCaption:
    "Fig. 01 — The shape of the systems I work on: webhooks and client requests through an API layer, asynchronous work on RabbitMQ, state in MongoDB and Elasticsearch.",
};

export const identity = {
  statement:
    "Good engineering isn't just about making software work. It's about knowing how it fails, and designing for that.",
  body: [
    "Most of what I build sits between systems that don't agree with each other: a storefront, a queue, a database, a third-party API with its own ideas about retries.",
    "The interesting work is in the trade-offs. What has to be synchronous and what can wait. What must never happen twice. What the next engineer needs to understand six months from now.",
  ],
  // Each principle's detail is drawn from Atul's published writing (B).
  principles: [
    {
      index: "01",
      title: "Failure modes first",
      detail:
        "Webhooks arrive twice. Queues redeliver. Third parties time out. Design so none of that is surprising.",
    },
    {
      index: "02",
      title: "Reliability by default",
      detail:
        "HMAC-verified ingress, idempotent consumers, bounded retries with backoff, dead-letter queues for what still fails.",
    },
    {
      index: "03",
      title: "Trade-offs on purpose",
      detail:
        "REST or GraphQL, sync or async, index or aggregate — decided from what the product needs, not from the trend.",
    },
    {
      index: "04",
      title: "Maintainable over clever",
      detail:
        "Thin controllers, services shared by APIs and workers, centralised error handling, correlation IDs that follow a request end to end.",
    },
  ],
  portraitCaption: "Atul Deep Singh — Gurugram, India",
};

export type Metric = { value: string; label: string };
export type Link = { label: string; href: string; external?: boolean };

export type Project = {
  index: string;
  id: string;
  kicker: string;
  title: string;
  org: string;
  status: string;
  summary: string;
  problem: string;
  contribution: string;
  decisions: string[];
  impact: Metric[];
  stack: string[];
  links: Link[];
  image?: { src: string; alt: string; url: string };
};

export const work: Project[] = [
  // (R) Résumé: "Led the Shopify Order Integration Project for personalized pet
  // products using Node.js, MongoDB, RabbitMQ, Google Sheets API, and Shopify
  // Admin API; reduced manual order processing by 80%".
  // Decisions describe the pipeline pattern documented in (B)
  // "Building a Reliable Shopify Product Sync Pipeline".
  {
    index: "01",
    id: "shopify-order-integration",
    kicker: "Webhooks · Asynchronous processing · Integrations",
    title: "Shopify order integration",
    org: "Heads Up For Tails",
    status: "In production",
    summary:
      "A webhook-driven pipeline that moves orders for personalised pet products out of Shopify and into the systems and teams that fulfil them, without anyone re-keying an order.",
    problem:
      "Orders for personalised products were processed manually, order by order, across teams. Every one of them had to be read from Shopify and carried into internal tooling by hand.",
    contribution:
      "Led the project end to end: webhook ingestion from the Shopify Admin API, RabbitMQ-backed processing, MongoDB as the system of record, and a Google Sheets API integration used across teams.",
    decisions: [
      "Webhook handlers stay thin: verify the HMAC signature, validate the payload, publish to RabbitMQ, respond within milliseconds.",
      "Workers own the business logic and treat every event as idempotent, so a duplicate delivery overwrites state instead of duplicating it.",
      "Failures retry with exponential backoff and land in a dead-letter queue for inspection, rather than disappearing.",
    ],
    impact: [{ value: "80%", label: "reduction in manual order processing" }],
    stack: ["Node.js", "MongoDB", "RabbitMQ", "Shopify Admin API", "Google Sheets API"],
    links: [
      {
        label: "How I design these pipelines",
        href: "https://blog.atuldeepsingh.com/#/writing/shopify-product-sync-pipeline",
        external: true,
      },
    ],
  },
  // (R) "Designed and developed an Appointment Booking Admin Panel for in-store
  // bookings using Next.js, Node.js, Express, and MongoDB, handling 1000–1500
  // appointments daily… 70% increase in total bookings over 100+ retail stores."
  // (S) "Architected booking state machines and schemas handling 1,500+ daily
  // appointments". (R) "reducing query latency by 30%".
  {
    index: "02",
    id: "appointment-booking",
    kicker: "Backend API design · Production engineering",
    title: "Appointment booking platform",
    org: "Heads Up For Tails",
    status: "In production",
    summary:
      "The booking system behind in-store services at more than a hundred retail stores: an admin panel and the services underneath it, handling 1,000 to 1,500 appointments a day.",
    problem:
      "In-store service bookings needed to be scheduled online and managed from a single admin panel, and stay consistent as the retail footprint grew.",
    contribution:
      "Designed and built the admin panel in Next.js and the booking services in Node.js, Express and MongoDB, including the booking state machine and the schemas behind it.",
    decisions: [
      "The booking lifecycle is modelled as an explicit state machine, so every transition is validated rather than implied by a scatter of flags.",
      "Online scheduling opened the booking flow beyond the store counter.",
      "Query and schema optimisation on these APIs cut average response times by 30%.",
    ],
    impact: [
      { value: "1,000–1,500", label: "appointments handled daily" },
      { value: "100+", label: "retail stores" },
      { value: "+70%", label: "total bookings" },
    ],
    stack: ["Next.js", "Node.js", "Express", "MongoDB"],
    links: [],
  },
  // (R) Gift card GraphQL APIs (+25% usage); Distance Calculation API (+10%
  // in-store sales within 3 months); Semantic Search Pipeline (Elasticsearch +
  // OpenAI embeddings, improved accuracy and discoverability — no figure given).
  {
    index: "03",
    id: "storefront-services",
    kicker: "GraphQL · Geolocation · Semantic search",
    title: "Storefront services",
    org: "Heads Up For Tails",
    status: "In production",
    summary:
      "Three smaller services that each changed how customers find and buy things: gift cards, a store locator, and search that understands intent.",
    problem:
      "Gift cards needed balance, expiry and redemption handled reliably on top of Shopify. Customers had no easy way to find a nearby store. Keyword search matched words, not intent.",
    contribution:
      "Built each service from the API down: GraphQL for gift card balance, expiry and redemption on top of the Shopify Admin API; a distance calculation API driven by the customer's geolocation; and a search pipeline on Elasticsearch with OpenAI embeddings.",
    decisions: [
      "Gift cards exposed through GraphQL so clients ask for exactly the balance, expiry or redemption data they need.",
      "Distance calculated server-side from the customer's geolocation, so the API suggests the nearest stores directly.",
      "Keyword queries converted to embeddings and matched in Elasticsearch, turning literal matches into contextual results.",
    ],
    impact: [
      { value: "+25%", label: "gift card usage" },
      { value: "+10%", label: "in-store sales within 3 months" },
    ],
    stack: ["GraphQL", "Node.js", "MongoDB", "Elasticsearch", "OpenAI Embeddings", "Shopify Admin API"],
    links: [
      {
        label: "REST vs GraphQL: choosing for the product",
        href: "https://blog.atuldeepsingh.com/#/writing/rest-vs-graphql",
        external: true,
      },
    ],
  },
  // (R)(S) Genify: Next.js, React, Clerk, Google Gemini AI, Tailwind CSS,
  // Toast UI Editor. Live at genify.atuldeepsingh.com.
  {
    index: "04",
    id: "genify",
    kicker: "Full-stack · AI product",
    title: "Genify",
    org: "Independent",
    status: "Live",
    summary:
      "An AI content assistant for creators: SEO-friendly articles, social posts and code snippets generated with Google Gemini, behind authenticated sessions, edited in real-time markdown.",
    problem:
      "Usable long-form output takes more than a prompt. Creators need SEO-friendly articles, social posts and code snippets they can immediately edit and ship, inside an account that is theirs.",
    contribution:
      "Designed and built the product end to end: the Next.js application, Clerk-backed authentication and session management, the Gemini integration for context-guided generation, and the Toast UI Editor for live markdown editing.",
    decisions: [
      "Generation is context-guided rather than a bare prompt, so output follows the creator's brief.",
      "Authentication and sessions delegated to Clerk instead of a hand-rolled auth layer.",
      "Markdown rendered and edited in real time with Toast UI Editor, so generated drafts are immediately workable.",
    ],
    impact: [],
    stack: ["Next.js", "React", "Clerk", "Google Gemini API", "Tailwind CSS", "Toast UI Editor"],
    links: [
      { label: "Open genify.atuldeepsingh.com", href: "https://www.genify.atuldeepsingh.com", external: true },
      {
        label: "Building practical AI features",
        href: "https://blog.atuldeepsingh.com/#/writing/practical-ai-features",
        external: true,
      },
    ],
    image: {
      src: genifyShot,
      alt: "Genify landing page: Create copy, code and blogs 10x faster",
      url: "genify.atuldeepsingh.com",
    },
  },
];

// (R) "Delivered a seamless cross-platform mobile experience using Flutter,
// increasing monthly active users by 25%." (S) "Co-developed cross-platform
// APIs for a Flutter mobile app".
export const alsoAtWork = {
  title: "HUFT mobile app APIs",
  description:
    "Cross-platform APIs co-developed for the Flutter app, alongside the data-driven endpoints behind it.",
  metric: { value: "+25%", label: "monthly active users" },
  stack: ["Node.js", "Express", "MongoDB", "Flutter", "AWS"],
};

export type Story = {
  index: string;
  topic: string;
  title: string;
  problem: string;
  reasoning: string;
  result: string;
  snippet?: { label: string; code: string };
  source?: Link;
};

// Each story's reasoning is taken from Atul's published articles (B);
// results quote figures from the résumé (R) or are explicitly qualitative.
export const stories: Story[] = [
  {
    index: "01",
    topic: "Webhooks & external APIs",
    title: "Keep the webhook handler boring",
    problem:
      "Shopify can send a few hundred product or order events within a minute. Processing them inline makes responses slow, Shopify retries, and duplicates multiply.",
    reasoning:
      "The endpoint does three things only: verify the HMAC signature, validate the payload, publish to RabbitMQ. Transforming payloads, writing to MongoDB and logging all move to workers that scale independently of the API.",
    result:
      "Webhook responses return in milliseconds regardless of downstream load, and API availability is decoupled from third-party bursts.",
    snippet: {
      label: "ingress — pattern",
      code: "verifyHmac(req)\nvalidate(payload)\nawait channel.publish(\n  'shopify.events', payload\n)\nres.status(200).end()",
    },
    source: {
      label: "Shopify sync pipeline write-up",
      href: "https://blog.atuldeepsingh.com/#/writing/shopify-product-sync-pipeline",
      external: true,
    },
  },
  {
    index: "02",
    topic: "Idempotency & retries",
    title: "Assume every message arrives twice",
    problem:
      "Neither webhooks nor queues guarantee exactly-once delivery. A retried message that inserts a record creates a duplicate; an infinite retry hides a real outage.",
    reasoning:
      "Workers treat updates as idempotent: upsert keyed on the external ID so a replay overwrites the latest state. Deletes become soft deletes. Failures retry with exponential backoff, and after a bounded number of attempts they move to a dead-letter queue for inspection.",
    result:
      "Replays and retries are harmless, and failures become visible and recoverable instead of silent. This is the principle I lean on most whenever queues and webhooks are involved.",
    snippet: {
      label: "worker — pattern",
      code: "await Product.updateOne(\n  { shopifyId: event.id },\n  { $set: toDocument(event) },\n  { upsert: true }\n)",
    },
    source: {
      label: "From REST to event-driven systems",
      href: "https://blog.atuldeepsingh.com/#/writing/event-driven-backend-nodejs",
      external: true,
    },
  },
  {
    index: "03",
    topic: "Database optimisation",
    title: "Query time is index time",
    problem:
      "Complex MongoDB queries and schemas that had grown organically were slowing API responses as collections grew.",
    reasoning:
      "Index the fields queries actually filter and sort on. Paginate instead of loading thousands of records. Push transformation into aggregation pipelines so the computation happens next to the data rather than in Node.js.",
    result: "30% reduction in average API response times, and headroom to scale the backend.",
    snippet: {
      label: "schema — pattern",
      code: "schema.index({ productId: 1, createdAt: -1 })\n// paginate — never load the whole collection",
    },
    source: {
      label: "Scalable Node.js APIs: lessons from production",
      href: "https://blog.atuldeepsingh.com/#/writing/scalable-backend-apis-nodejs",
      external: true,
    },
  },
  {
    index: "04",
    topic: "Maintainable services",
    title: "Thin controllers, shared services",
    problem:
      "Business logic inside route handlers is hard to test and impossible to reuse from a worker or a scheduled job, so the same rules end up implemented twice.",
    reasoning:
      "Controllers read the request, validate, call a service, and respond. Services hold the rules, so APIs, workers and jobs share one implementation. Centralised error handling and a correlation ID on every request make production debugging possible across process boundaries.",
    result:
      "Consistent responses, logic that is tested once, and a single request traceable from the API through the queue to the worker.",
    source: {
      label: "Lessons from building MERN applications",
      href: "https://blog.atuldeepsingh.com/#/writing/mern-stack-lessons",
      external: true,
    },
  },
  {
    index: "05",
    topic: "API design",
    title: "REST or GraphQL is a product decision",
    problem:
      "Gift card features — balance, expiry, redemption — had to be exposed on top of the Shopify Admin API to clients with different data needs.",
    reasoning:
      "Neither wins by default. REST when resources are straightforward, CRUD dominates and HTTP caching helps. GraphQL when clients need different shapes of the same data and overfetching matters. Whichever is chosen, the contract, errors, validation, pagination and versioning are what make the API good.",
    result: "Gift card GraphQL APIs on Shopify Admin API and MongoDB; a 25% increase in gift card usage.",
    source: {
      label: "REST vs GraphQL",
      href: "https://blog.atuldeepsingh.com/#/writing/rest-vs-graphql",
      external: true,
    },
  },
];

export type ToolGroup = { name: string; context: string; items: string[] };

// (R)(S) skills lists, regrouped by purpose.
export const toolkit: ToolGroup[] = [
  {
    name: "Backend engineering",
    context: "Service-oriented Node.js APIs: thin controllers, validation at the boundary, centralised error handling.",
    items: ["Node.js", "Express", "TypeScript", "JavaScript (ES6+)", "GraphQL", "REST API design", "Java", "Python"],
  },
  {
    name: "Databases & data modelling",
    context: "Schema and index design driven by query patterns; aggregation pipelines; embeddings-based search.",
    items: ["MongoDB", "Elasticsearch", "AWS DynamoDB", "SQL", "Mongo aggregation pipelines"],
  },
  {
    name: "Frontend development",
    context: "Admin tooling and product interfaces, including this site.",
    items: ["React", "Next.js", "Tailwind CSS", "Material UI", "Flutter"],
  },
  {
    name: "Messaging & integrations",
    context: "Event-driven workflows with idempotent consumers; third-party platforms treated as unreliable by default.",
    items: ["RabbitMQ", "Webhooks (HMAC-verified)", "Shopify Admin API", "Google Sheets API", "OpenAI API", "Google Gemini API", "Clerk"],
  },
  {
    name: "Tools & infrastructure",
    context: "Automated test suites in CI pipelines; cloud services on AWS and Google Cloud.",
    items: ["AWS (EC2, S3, Lambda)", "Google Cloud Platform", "Jenkins", "Git", "Selenium WebDriver", "Vite"],
  },
];

export type Role = {
  period: string;
  company: string;
  role: string;
  location: string;
  kind: string;
  stack: string[];
  points: { lead: string; text: string }[];
};

// (R) Résumé experience, verbatim figures.
export const experience: Role[] = [
  {
    period: "Nov 2023 — Present",
    company: "Heads Up For Tails",
    role: "Software Engineer, Backend",
    location: "Gurugram, Haryana",
    kind: "Full-time",
    stack: ["Node.js", "MongoDB", "GraphQL", "Next.js", "RabbitMQ", "Elasticsearch", "OpenAI"],
    points: [
      {
        lead: "Shopify order integration",
        text: "Led the integration for personalised pet products on Node.js, MongoDB, RabbitMQ, the Google Sheets API and the Shopify Admin API. Manual order processing down 80%, with better cross-team collaboration.",
      },
      {
        lead: "Appointment booking",
        text: "Designed and built the admin panel and services (Next.js, Node.js, Express, MongoDB) handling 1,000–1,500 appointments a day. Online scheduling drove a 70% increase in total bookings across 100+ retail stores.",
      },
      {
        lead: "Gift card APIs",
        text: "Secure, scalable GraphQL APIs on the Shopify Admin API and MongoDB for balance, expiry and redemption. Gift card usage up 25%.",
      },
      {
        lead: "Store locator",
        text: "A distance calculation API using customer geolocation to suggest nearby stores, contributing to a 10% increase in in-store sales within three months.",
      },
      {
        lead: "Semantic search",
        text: "A search pipeline on Elasticsearch and OpenAI embeddings, turning keyword queries into contextual results and improving product discoverability.",
      },
      {
        lead: "Query optimisation",
        text: "Refactored complex MongoDB queries and schemas for a 30% reduction in average API response times.",
      },
    ],
  },
  {
    period: "Apr 2023 — Jul 2023",
    company: "Round the Clock Technologies",
    role: "Software Engineer Trainee",
    location: "Noida, Uttar Pradesh",
    kind: "Traineeship",
    stack: ["Java", "Selenium WebDriver", "Jenkins"],
    points: [
      {
        lead: "Test automation",
        text: "Automated end-to-end test flows for multiple client websites in Java and Selenium WebDriver, using advanced locators and dynamic XPath for 100% test coverage.",
      },
      {
        lead: "CI/CD",
        text: "Integrated the automated suites into Jenkins pipelines, reducing regression testing time by 60% and shortening feedback on every change.",
      },
    ],
  },
];

// (R) Education and certifications. The résumé lists no issuer for the
// certifications; add one here if you want it displayed.
export const education = {
  institution: "JSS Academy of Technical Education, Noida",
  degree: "B.Tech, Computer Science and Engineering",
  detail: "CGPA 7.55 · Class of 2023",
  certifications: ["Data Structures and Algorithms", "Web Development"],
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
};

// (B) Published articles, with their real deep links.
export const articles: Article[] = [
  {
    slug: "mern-stack-lessons",
    title: "What I learned building full-stack applications with the MERN stack",
    description:
      "How the layers fit together, from request flow and aggregation pipelines to auth and production concerns.",
    date: "2026-08-07",
    readTime: "10 min",
    tags: ["MERN", "MongoDB"],
  },
  {
    slug: "rest-vs-graphql",
    title: "REST vs GraphQL: choosing the right API for a product",
    description: "Neither wins by default. The right choice depends on what your clients actually need from the API.",
    date: "2026-08-05",
    readTime: "7 min",
    tags: ["API design"],
  },
  {
    slug: "practical-ai-features",
    title: "Building practical AI features instead of just calling an LLM",
    description:
      "Context retrieval, structured outputs and model abstraction make AI features actually useful in production.",
    date: "2026-08-03",
    readTime: "9 min",
    tags: ["LLM", "Backend"],
  },
  {
    slug: "shopify-product-sync-pipeline",
    title: "A reliable Shopify product sync pipeline with webhooks, RabbitMQ and Node.js",
    description:
      "Keeping Shopify and MongoDB consistent in near real time, with HMAC verification, queues and idempotent workers.",
    date: "2026-08-01",
    readTime: "9 min",
    tags: ["RabbitMQ", "Shopify"],
  },
  {
    slug: "event-driven-backend-nodejs",
    title: "From REST APIs to event-driven backend systems with Node.js",
    description:
      "Separating synchronous API work from asynchronous processing: thin controllers, workers, idempotent consumers, correlation IDs.",
    date: "2026-07-28",
    readTime: "8 min",
    tags: ["Architecture", "RabbitMQ"],
  },
  {
    slug: "scalable-backend-apis-nodejs",
    title: "Designing scalable backend APIs in Node.js: lessons from production",
    description: "Patterns for APIs that stay fast and maintainable under load: queues, pagination, indexes and more.",
    date: "2026-07-18",
    readTime: "8 min",
    tags: ["Node.js", "Architecture"],
  },
];

export const articleUrl = (slug: string) => `${profile.blog}/#/writing/${slug}`;

export type Experiment = {
  title: string;
  description: string;
  stack: string[];
  period: string;
  href?: string;
};

// (R)(S) Side projects.
export const experiments: Experiment[] = [
  {
    title: "Gipher",
    description:
      "GIF search and discovery on the Giphy API: autocomplete suggestions, trending feeds, a masonry grid with infinite scroll, one-click copy.",
    stack: ["React", "Vite", "Tailwind CSS", "Giphy API"],
    period: "2024",
    href: "https://gipher.atuldeepsingh.com",
  },
  {
    title: "Coin Pulse",
    description:
      "A crypto dashboard with live pricing and historical charts from the CoinGecko API, watchlists and shared state in React Context.",
    stack: ["React", "Material UI", "Chart.js", "CoinGecko API"],
    period: "2023",
  },
];

export const beyond = {
  intro:
    "Long-form notes on backend engineering, MERN patterns, webhook pipelines and the practical side of generative AI. Mostly things I wanted to understand properly.",
};

export const contact = {
  headline: "Have an interesting engineering problem?",
  body:
    "I'm open to full-time roles, freelance projects and interesting collaborations. Whether you want to talk through a backend challenge, an AI integration, or just say hello, my inbox is open.",
};

export const navigation = [
  { index: "01", label: "Approach", href: "#approach" },
  { index: "02", label: "Work", href: "#work" },
  { index: "03", label: "Practice", href: "#practice" },
  { index: "04", label: "Toolkit", href: "#toolkit" },
  { index: "05", label: "Experience", href: "#experience" },
  { index: "06", label: "Writing", href: "#writing" },
  { index: "07", label: "Contact", href: "#contact" },
];
