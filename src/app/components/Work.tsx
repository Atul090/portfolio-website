import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { ArrowLink, Label, Metric, Reveal, Section, SectionHeader, TagList } from "./primitives";
import { alsoAtWork, work, type Project } from "../data/content";

export function Work() {
  const [shopify, booking, storefront, genify] = work;

  return (
    <Section id="work">
      <SectionHeader
        index="02"
        label="Selected work"
        aside={`${work.length} projects`}
        title="Work that had to survive production."
        intro="Production systems at Heads Up For Tails, plus an independent full-stack product. Each one is shown the way I think about it: the problem, the decisions, and what changed."
      />

      <div className="flex flex-col gap-24 lg:gap-32">
        <ShopifyFeature project={shopify} />
        <BookingFeature project={booking} />
        <StorefrontFeature project={storefront} />
        <GenifyFeature project={genify} />
        <AlsoRow />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/*  Shared pieces                                                    */
/* ---------------------------------------------------------------- */

function ProjectHeader({ project, titleId }: { project: Project; titleId: string }) {
  return (
    <Reveal as="header" className="grid grid-cols-12 items-end gap-x-6 gap-y-6 border-t border-line pt-6">
      <div className="col-span-12 lg:col-span-4">
        <p className="meta text-ink-muted">
          <span className="text-mint">{project.index}</span>
          <span className="mx-2 text-ink-faint" aria-hidden="true">
            —
          </span>
          {project.kicker}
        </p>
        <p className="meta mt-2 text-ink-faint">
          {project.org} · {project.status}
        </p>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <h3 id={titleId} className="text-h2 text-ink">
          {project.title}
        </h3>
        <p className="mt-5 max-w-[58ch] text-lead text-ink-muted">{project.summary}</p>
      </div>
    </Reveal>
  );
}

function Detail({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <div className="mt-3 text-ink-soft">{children}</div>
    </div>
  );
}

function Stack({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={className}>
      <p className="meta text-ink-muted">Stack</p>
      <TagList items={items} className="mt-3" />
    </div>
  );
}

function Decisions({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((d) => (
        <li key={d} className="grid grid-cols-[0.875rem_1fr] gap-x-3">
          <span className="mt-[12px] h-0.5 w-3.5 bg-mint" aria-hidden="true" />
          <span className="text-ink">{d}</span>
        </li>
      ))}
    </ul>
  );
}

function Links({ project }: { project: Project }) {
  if (project.links.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      {project.links.map((l) => (
        <ArrowLink key={l.href} href={l.href} external={l.external}>
          {l.label}
        </ArrowLink>
      ))}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  01 — Shopify order integration: full-width, pipeline diagram     */
/* ---------------------------------------------------------------- */

const pipeline = [
  { label: "Shopify", sub: "order webhook" },
  { label: "API", sub: "HMAC · validate · publish", accent: true },
  { label: "RabbitMQ", sub: "buffer · retry · DLQ" },
  { label: "Workers", sub: "idempotent" },
  { label: "MongoDB · Sheets", sub: "record · cross-team" },
];

function ShopifyFeature({ project }: { project: Project }) {
  const titleId = `work-${project.id}`;
  return (
    <article aria-labelledby={titleId}>
      <ProjectHeader project={project} titleId={titleId} />

      <Reveal as="figure" className="mt-14" delay={0.05}>
        <div className="flex flex-col items-stretch gap-2 md:flex-row md:gap-0">
          {pipeline.map((stage, i) => (
            <div key={stage.label} className="contents">
              {i > 0 && (
                <div className="flex items-center justify-center text-ink-faint md:w-10 md:shrink-0" aria-hidden="true">
                  <ArrowDown size={14} strokeWidth={1.5} className="md:hidden" />
                  <ArrowRight size={14} strokeWidth={1.5} className="hidden md:block" />
                </div>
              )}
              <div
                className={`relative flex-1 rounded-[3px] border bg-surface px-4 py-3.5 ${
                  stage.accent ? "border-line-strong" : "border-line"
                }`}
              >
                {stage.accent && <span aria-hidden="true" className="absolute left-0 top-2.5 bottom-2.5 w-0.5 bg-mint" />}
                <p className="text-[0.9375rem] font-medium text-ink">{stage.label}</p>
                <p className="mt-1 font-mono text-[0.75rem] text-ink-muted">{stage.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <figcaption className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.8125rem] text-ink-muted">
          <span>
            <span className="text-mint">failure path</span> — retry with exponential backoff, then dead-letter queue for inspection
          </span>
          <span>
            <span className="text-mint">response</span> — returned to Shopify within milliseconds; business logic never runs in the handler
          </span>
        </figcaption>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10">
        <Reveal className="col-span-12 md:col-span-6 lg:col-span-4" delay={0.05}>
          <Detail label="Problem">{project.problem}</Detail>
          <Detail label="My contribution" className="mt-9">
            {project.contribution}
          </Detail>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-6 lg:col-span-5" delay={0.1}>
          <Detail label="Engineering decisions">
            <Decisions items={project.decisions} />
          </Detail>
        </Reveal>
        <Reveal className="col-span-12 flex flex-col gap-10 lg:col-span-3" delay={0.15}>
          {project.impact.map((m) => (
            <Metric key={m.label} {...m} size="lg" />
          ))}
          <Stack items={project.stack} />
          <Links project={project} />
        </Reveal>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------- */
/*  02 — Appointment booking: ledger numbers + store matrix          */
/* ---------------------------------------------------------------- */

function StoreMatrix() {
  const reduce = useReducedMotion();
  const cells = Array.from({ length: 100 }, (_, i) => i);
  return (
    <motion.div
      role="img"
      aria-label="A ten by ten grid representing more than one hundred retail stores served by the booking platform"
      className="grid grid-cols-10 gap-1.5"
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.012, delayChildren: 0.2 } } }}
    >
      {cells.map((i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="aspect-square rounded-[1px] bg-mint"
          variants={{ hidden: { opacity: 0.06, scale: 0.6 }, show: { opacity: i % 9 === 4 ? 0.14 : 0.42, scale: 1 } }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </motion.div>
  );
}

function BookingFeature({ project }: { project: Project }) {
  const titleId = `work-${project.id}`;
  const [daily, stores, growth] = project.impact;
  return (
    <article aria-labelledby={titleId}>
      <ProjectHeader project={project} titleId={titleId} />

      <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-14">
        {/* Ledger */}
        <Reveal className="col-span-12 lg:col-span-7" delay={0.05}>
          <div className="grid grid-cols-12 gap-x-6 gap-y-10 border-b border-line pb-10">
            <div className="col-span-12 sm:col-span-7">
              <Metric {...daily} size="lg" />
            </div>
            <div className="col-span-6 sm:col-span-5">
              <Metric {...growth} size="lg" />
            </div>
          </div>
          <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8 items-end">
            <div className="col-span-12 sm:col-span-5">
              <Metric {...stores} size="lg" />
              <p className="mt-6 max-w-[30ch] text-ink-soft">
                One cell per store. Every one of them schedules through the same services and the same state machine.
              </p>
            </div>
            <div className="col-span-12 sm:col-span-7 lg:pl-6">
              <StoreMatrix />
            </div>
          </div>
        </Reveal>

        {/* Narrative */}
        <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={0.1}>
          <Detail label="Problem">{project.problem}</Detail>
          <Detail label="My contribution" className="mt-9">
            {project.contribution}
          </Detail>
          <Detail label="Engineering decisions" className="mt-9">
            <Decisions items={project.decisions} />
          </Detail>
          <Stack items={project.stack} className="mt-9" />
        </Reveal>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------- */
/*  03 — Storefront services: three services, one editorial row      */
/* ---------------------------------------------------------------- */

const services = [
  {
    name: "Gift cards",
    api: "GraphQL",
    text: "Balance, expiry and redemption on top of the Shopify Admin API and MongoDB.",
    metricIndex: 0,
    stack: ["GraphQL", "Node.js", "MongoDB", "Shopify Admin API"],
  },
  {
    name: "Store locator",
    api: "REST · geolocation",
    text: "A distance calculation API that turns the customer's location into the nearest stores.",
    metricIndex: 1,
    stack: ["Node.js", "Express", "MongoDB"],
  },
  {
    name: "Semantic search",
    api: "Elasticsearch · embeddings",
    text: "Keyword queries converted to OpenAI embeddings and matched in Elasticsearch, so results follow intent.",
    metricIndex: -1,
    qualitative: "Improved search accuracy and product discoverability",
    stack: ["Elasticsearch", "OpenAI Embeddings", "Node.js"],
  },
];

function StorefrontFeature({ project }: { project: Project }) {
  const titleId = `work-${project.id}`;
  return (
    <article aria-labelledby={titleId}>
      <ProjectHeader project={project} titleId={titleId} />

      <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10">
        <Reveal className="col-span-12 lg:col-span-4" delay={0.05}>
          <Detail label="Problem">{project.problem}</Detail>
          <Detail label="My contribution" className="mt-9">
            {project.contribution}
          </Detail>
          <div className="mt-9">
            <Links project={project} />
          </div>
        </Reveal>

        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-1 divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0">
            {services.map((s, i) => {
              const metric = s.metricIndex >= 0 ? project.impact[s.metricIndex] : null;
              return (
                <Reveal key={s.name} className="flex flex-col py-8 md:px-7 md:py-2 md:first:pl-0 md:last:pr-0" delay={0.08 * i}>
                  <p className="meta text-ink-muted">{s.api}</p>
                  <h4 className="mt-3 text-h3 text-ink">{s.name}</h4>
                  <p className="mt-4 flex-1 text-ink-soft">{s.text}</p>
                  <div className="mt-8">
                    {metric ? (
                      <Metric value={metric.value} label={metric.label} />
                    ) : (
                      <p className="max-w-[24ch] font-display text-[1.375rem] font-medium leading-snug tracking-tight text-ink">
                        {s.qualitative}
                      </p>
                    )}
                  </div>
                  <TagList items={s.stack} className="mt-6" />
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-9" delay={0.1}>
            <Detail label="Engineering decisions">
              <Decisions items={project.decisions} />
            </Detail>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------- */
/*  04 — Genify: interface screenshot + narrative                    */
/* ---------------------------------------------------------------- */

function GenifyFeature({ project }: { project: Project }) {
  const titleId = `work-${project.id}`;
  return (
    <article aria-labelledby={titleId}>
      <ProjectHeader project={project} titleId={titleId} />

      <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-12">
        <Reveal as="figure" className="col-span-12 lg:col-span-7" delay={0.05}>
          {project.image && (
            <a
              href={project.links[0]?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[4px] border border-line bg-surface transition-colors duration-300 hover:border-line-strong"
            >
              <div className="flex items-center gap-3 border-b border-line px-4 py-2.5">
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                  <span className="h-2 w-2 rounded-full bg-line-strong" />
                </span>
                <span className="font-mono text-[0.75rem] text-ink-muted">{project.image.url}</span>
              </div>
              <img
                src={project.image.src}
                alt={project.image.alt}
                width={1280}
                height={800}
                loading="lazy"
                decoding="async"
                className="block w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.015]"
              />
            </a>
          )}
          <figcaption className="meta mt-4 text-ink-muted">Genify — landing page, live</figcaption>
        </Reveal>

        <Reveal className="col-span-12 lg:col-span-4 lg:col-start-9" delay={0.1}>
          <Detail label="Problem">{project.problem}</Detail>
          <Detail label="My contribution" className="mt-9">
            {project.contribution}
          </Detail>
          <Detail label="Engineering decisions" className="mt-9">
            <Decisions items={project.decisions} />
          </Detail>
          <Stack items={project.stack} className="mt-9" />
          <div className="mt-9">
            <Links project={project} />
          </div>
        </Reveal>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------------- */
/*  Also at HUFT — compact index row                                 */
/* ---------------------------------------------------------------- */

function AlsoRow() {
  return (
    <Reveal as="article" className="grid grid-cols-12 items-start gap-x-6 gap-y-6 border-y border-line py-8">
      <div className="col-span-12 lg:col-span-4">
        <p className="meta text-ink-muted">
          <span className="text-mint">+</span>
          <span className="mx-2 text-ink-faint" aria-hidden="true">
            —
          </span>
          Also at Heads Up For Tails
        </p>
        <h3 className="mt-3 text-h3 text-ink">{alsoAtWork.title}</h3>
      </div>
      <p className="col-span-12 text-ink-soft md:col-span-7 lg:col-span-4">{alsoAtWork.description}</p>
      <div className="col-span-12 flex items-start justify-between gap-6 md:col-span-5 lg:col-span-4 lg:justify-end lg:gap-12">
        <Metric {...alsoAtWork.metric} />
        <TagList items={alsoAtWork.stack} className="max-w-[16rem] justify-end" />
      </div>
    </Reveal>
  );
}
