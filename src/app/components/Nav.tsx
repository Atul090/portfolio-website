import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Container } from "./primitives";
import { navigation, profile } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const ids = useMemo(() => navigation.map((n) => n.href.slice(1)), []);
  const active = useActiveSection(ids);
  const current = navigation.find((n) => n.href === `#${active}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll while the mobile menu is open; close on Escape.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <Container className="flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          {/* Wordmark */}
          <a href="#top" className="group flex items-center gap-3" aria-label={`${profile.name}, back to top`}>
            <span className="h-2 w-2 bg-mint transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
            <span className="font-display text-[0.9375rem] font-medium tracking-tight text-ink">{profile.name}</span>
            <span className="meta hidden text-ink-faint md:inline" aria-hidden="true">
              / {profile.role}
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            <span className="meta w-6 text-mint" aria-live="polite">
              {current ? current.index : "00"}
            </span>
            {navigation.map((item) => {
              const isActive = item.href === `#${active}`;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-[0.875rem] font-medium transition-colors duration-200 hover:text-ink ${
                    isActive ? "text-ink" : "text-ink-muted"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-mint"
                      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38 }}
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw meta hidden text-ink-muted md:inline-flex"
            >
              Resume
              <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" />
            </a>
            <a
              href={profile.previousVersion}
              target="_blank"
              rel="noopener noreferrer"
              title="Previous version of this site"
              className="link-draw meta hidden text-ink-muted md:inline-flex"
            >
              v1
              <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" />
              <span className="sr-only">Previous version of this site</span>
            </a>
            <a href="#contact" className="btn btn-secondary !h-9 !px-4 !text-[0.875rem]">
              Get in touch
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="-mr-2 inline-flex h-10 w-10 items-center justify-center text-ink lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-bg lg:hidden"
          >
            <Container className="flex min-h-full flex-col justify-between py-10">
              <nav aria-label="Primary mobile">
                <ul className="flex flex-col">
                  {navigation.map((item, i) => (
                    <motion.li
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.04 * i, ease: [0.16, 1, 0.3, 1] }}
                      className="border-b border-line"
                    >
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="flex items-baseline justify-between py-5"
                      >
                        <span className="font-display text-[1.75rem] font-medium tracking-tight text-ink">
                          {item.label}
                        </span>
                        <span className="meta text-ink-faint">{item.index}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 font-mono text-[0.8125rem] text-ink-muted">
                <a href={`mailto:${profile.email}`} className="col-span-2 hover:text-ink">
                  {profile.email}
                </a>
                <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                  Resume ↗
                </a>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                  GitHub ↗
                </a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                  LinkedIn ↗
                </a>
                <a href={profile.previousVersion} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                  Portfolio v1 ↗
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
