import type { ElementType, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

/* ---------------------------------------------------------------- */
/*  Layout                                                           */
/* ---------------------------------------------------------------- */

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[84rem] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} data-section className={`relative py-24 lg:py-32 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
};

/** Architectural header: hairline rule, mono index + label, display title. */
export function SectionHeader({ index, label, title, intro, aside }: SectionHeaderProps) {
  return (
    <Reveal className="mb-14 border-t border-line pt-5 lg:mb-20">
      <div className="grid grid-cols-12 gap-x-6 gap-y-8">
        <div className="col-span-12 flex flex-col gap-2 lg:col-span-4 lg:gap-3">
          <p className="meta text-ink-muted">
            <span className="text-mint">{index}</span>
            <span className="mx-2 text-ink-faint" aria-hidden="true">
              —
            </span>
            {label}
          </p>
          {aside && <div className="meta text-ink-faint">{aside}</div>}
        </div>
        <div className="col-span-12 lg:col-span-8">
          <h2 className="text-h2 text-ink">{title}</h2>
          {intro && <p className="mt-6 max-w-[58ch] text-lead text-ink-muted">{intro}</p>}
        </div>
      </div>
    </Reveal>
  );
}

/* ---------------------------------------------------------------- */
/*  Motion                                                           */
/* ---------------------------------------------------------------- */

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li" | "article" | "p" | "figure" | "header";
  once?: boolean;
};

const EASE = [0.16, 1, 0.3, 1] as const;

/** Entrance on scroll. Disabled entirely when the user prefers reduced motion. */
export function Reveal({ children, className, delay = 0, y = 18, as = "div", once = true }: RevealProps) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  if (reduce) {
    const Static = as as ElementType;
    return <Static className={className}>{children}</Static>;
  }
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}

/* ---------------------------------------------------------------- */
/*  Typography & links                                               */
/* ---------------------------------------------------------------- */

type LabelProps = {
  children: ReactNode;
  as?: "h3" | "h4" | "p";
  className?: string;
};

/** Block heading in the display face. Names the prose that follows it. */
export function Label({ children, as: Comp = "h4", className = "" }: LabelProps) {
  return <Comp className={`label ${className}`}>{children}</Comp>;
}

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  mono?: boolean;
};

export function ArrowLink({ href, children, external, className = "", mono }: ArrowLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`link-draw ${mono ? "meta" : "text-[1rem] font-medium"} ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight size={mono ? 13 : 16} strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}

export function TagList({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-3 gap-y-2 ${className}`} aria-label="Technologies">
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-3 font-mono text-[0.8125rem] text-ink-muted">
          {item}
          {/* Separator trails the item so a wrapped line never starts with one */}
          {i < items.length - 1 && <span className="h-3 w-px bg-line-strong" aria-hidden="true" />}
        </li>
      ))}
    </ul>
  );
}

export function Metric({ value, label, size = "md" }: { value: string; label: string; size?: "md" | "lg" }) {
  return (
    <div>
      <p
        className={`font-display font-medium tracking-tight text-ink ${
          size === "lg" ? "text-[clamp(2.5rem,1.5rem+3vw,4.5rem)] leading-none" : "text-[clamp(1.75rem,1.2rem+1.4vw,2.5rem)] leading-none"
        }`}
      >
        {value}
      </p>
      <p className="meta mt-3 text-ink-muted">{label}</p>
    </div>
  );
}
