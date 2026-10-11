import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "./primitives";
import { SystemDiagram } from "./SystemDiagram";
import { hero, profile } from "../data/content";
import { useLocalTime } from "../hooks/useLocalTime";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const time = useLocalTime(profile.timeZone);

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, ease: EASE, delay },
        };

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden pt-28 pb-14 lg:pt-36 lg:pb-16">
      {/* Architectural grid, fading toward the bottom */}
      <div
        aria-hidden="true"
        className="grid-dots pointer-events-none absolute inset-x-0 top-0 h-[70%] opacity-60 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.9),transparent)]"
      />

      <Container className="relative flex flex-1 flex-col">
        {/* Meta row */}
        <motion.div
          {...enter(0.05)}
          className="meta flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-line pb-5 text-ink-muted"
        >
          <p className="flex items-center gap-3">
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-mint">
              <span className="pulse-dot motion-only absolute inset-0 rounded-full" aria-hidden="true" />
            </span>
            {profile.availability}
          </p>
          <p className="hidden sm:block">
            {profile.location}
            {time && (
              <>
                <span className="mx-2 text-ink-faint" aria-hidden="true">
                  ·
                </span>
                <time dateTime={time}>
                  {time} {profile.timeZoneLabel}
                </time>
              </>
            )}
          </p>
          <p className="hidden lg:block">
            {profile.role}
            <span className="mx-2 text-ink-faint" aria-hidden="true">
              ·
            </span>
            {profile.company}
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...enter(0.15)} className="mt-12 max-w-[20ch] text-display font-medium text-ink lg:mt-16">
          {hero.headline[0]}
          <br />
          <span className="text-ink-muted">{hero.headline[1]}</span>
        </motion.h1>

        {/* Lead, CTAs, metadata + diagram */}
        <div className="mt-12 grid grid-cols-12 gap-x-6 gap-y-14 lg:mt-20 lg:items-start">
          <div className="col-span-12 flex flex-col lg:col-span-5">
            <motion.p {...enter(0.3)} className="max-w-[40ch] text-lead text-ink-muted">
              {hero.lead}
            </motion.p>

            <motion.div {...enter(0.4)} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn btn-primary">
                Explore my work
                <ArrowDown size={15} strokeWidth={2} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get in touch
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw ml-1 h-12 px-2 text-[1rem] font-medium text-ink-muted"
              >
                Resume
                <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </motion.div>

            <motion.dl {...enter(0.5)} className="mt-14 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-t border-line pt-6 font-mono text-[0.8125rem] lg:mt-auto lg:pt-7">
              {hero.metadata.map((m) => (
                <div key={m.key} className="contents">
                  <dt className="meta text-ink-faint">{m.key}</dt>
                  <dd className="text-ink-muted">{m.value}</dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.figure
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 1.1, ease: EASE, delay: 0.45 },
                })}
            className="col-span-12 lg:col-span-7 lg:pl-6"
          >
            <SystemDiagram variant="wide" className="hidden sm:block" />
            <SystemDiagram variant="compact" className="mx-auto max-w-[22rem] sm:hidden" />
            <figcaption className="mt-5 max-w-[60ch] font-mono text-[0.8125rem] leading-relaxed text-ink-muted">
              {hero.figureCaption}
            </figcaption>
          </motion.figure>
        </div>
      </Container>
    </section>
  );
}
