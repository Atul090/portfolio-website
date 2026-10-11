import { useId, useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLink, Label, Reveal, Section, SectionHeader } from "./primitives";
import { stories, type Story } from "../data/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Practice() {
  return (
    <Section id="practice">
      <SectionHeader
        index="03"
        label="Engineering in practice"
        aside={`${stories.length} case files`}
        title="How I approach a problem when the easy version won't hold."
        intro="Short engineering stories: the original problem, the reasoning, and what it changed. Each one links to the longer write-up."
      />

      {/* Desktop: index + panel. Mobile: accordion. */}
      <div className="hidden lg:block">
        <CaseFiles />
      </div>
      <div className="lg:hidden">
        <Accordion />
      </div>
    </Section>
  );
}

/* ---------------------------------------------------------------- */
/*  Desktop case files                                               */
/* ---------------------------------------------------------------- */

function CaseFiles() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const baseId = useId();
  const story = stories[active];

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const next = e.key === "ArrowDown" ? (active + 1) % stories.length : (active - 1 + stories.length) % stories.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <Reveal className="grid grid-cols-12 gap-x-6">
      <div role="tablist" aria-orientation="vertical" aria-label="Engineering stories" className="col-span-5 border-t border-line" onKeyDown={onKeyDown}>
        {stories.map((s, i) => {
          const selected = i === active;
          return (
            <button
              key={s.index}
              id={`${baseId}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className="group relative grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-x-4 border-b border-line py-6 text-left transition-colors duration-200"
            >
              {selected && (
                <motion.span
                  layoutId="case-indicator"
                  aria-hidden="true"
                  className="absolute -left-4 top-6 bottom-6 w-0.5 bg-mint"
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 380, damping: 36 }}
                />
              )}
              <span className={`meta transition-colors ${selected ? "text-mint" : "text-ink-faint group-hover:text-ink-muted"}`}>{s.index}</span>
              <span>
                <span
                  className={`block font-display text-[clamp(1.375rem,1.1rem+0.9vw,1.75rem)] font-medium leading-tight tracking-tight transition-colors ${
                    selected ? "text-ink" : "text-ink-muted group-hover:text-ink"
                  }`}
                >
                  {s.title}
                </span>
                <span className="meta mt-2 block text-ink-faint">{s.topic}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="col-span-7 col-start-6 border-t border-line pt-8"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={story.index}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <StoryBody story={story} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

/* ---------------------------------------------------------------- */
/*  Mobile accordion                                                 */
/* ---------------------------------------------------------------- */

function Accordion() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <div className="border-t border-line">
      {stories.map((s, i) => {
        const expanded = open === i;
        return (
          <Reveal key={s.index} as="div" className="border-b border-line" delay={0.03 * i}>
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={`${baseId}-acc-${i}`}
                onClick={() => setOpen(expanded ? null : i)}
                className="grid w-full grid-cols-[2.25rem_1fr_auto] items-baseline gap-x-3 py-5 text-left"
              >
                <span className={`meta ${expanded ? "text-mint" : "text-ink-faint"}`}>{s.index}</span>
                <span>
                  <span className="block font-display text-h3 font-medium text-ink">{s.title}</span>
                  <span className="meta mt-2 block text-ink-faint">{s.topic}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={`relative mt-1 h-4 w-4 text-ink-muted transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}
                >
                  <span className="absolute left-1/2 top-0 h-4 w-px -translate-x-1/2 bg-current" />
                  <span className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-current" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  id={`${baseId}-acc-${i}`}
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 sm:pl-[3rem]">
                    <StoryBody story={s} compact />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/*  Story body                                                       */
/* ---------------------------------------------------------------- */

function StoryBody({ story, compact }: { story: Story; compact?: boolean }) {
  return (
    <div className={compact ? "" : "grid grid-cols-12 gap-x-6"}>
      <div className={compact ? "space-y-8" : "col-span-12 space-y-9 xl:col-span-8"}>
        <Block label="Problem">{story.problem}</Block>
        <Block label="Reasoning">{story.reasoning}</Block>
        <Block label="Result" emphasis>
          {story.result}
        </Block>
        {story.source && (
          <ArrowLink href={story.source.href} external mono className="text-ink-muted">
            {story.source.label}
          </ArrowLink>
        )}
      </div>

      {story.snippet && (
        <div className={compact ? "mt-9" : "col-span-12 mt-10 xl:col-span-4 xl:mt-0"}>
          <Snippet label={story.snippet.label} code={story.snippet.code} />
        </div>
      )}
    </div>
  );
}

function Block({ label, children, emphasis }: { label: string; children: ReactNode; emphasis?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-y-2 sm:grid-cols-[7.5rem_1fr] sm:gap-x-6">
      <Label>{label}</Label>
      <p className={emphasis ? "text-ink" : "text-ink-soft"}>{children}</p>
    </div>
  );
}

function Snippet({ label, code }: { label: string; code: string }) {
  return (
    <figure className="rounded-[3px] border border-line bg-surface">
      <figcaption className="meta border-b border-line px-4 py-2.5 text-ink-muted">{label}</figcaption>
      <pre className="whitespace-pre-wrap break-words px-4 py-4 font-mono text-[0.8125rem] leading-relaxed text-ink-soft">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
