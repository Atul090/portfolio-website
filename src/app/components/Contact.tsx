import { ArrowUpRight } from "lucide-react";
import { Container, Reveal } from "./primitives";
import { contact, profile } from "../data/content";
import { useLocalTime } from "../hooks/useLocalTime";

const channels = [
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, external: true },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, external: true },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, external: false },
  { label: "Resume", value: "PDF", href: profile.resume, external: true, download: profile.resumeFileName },
];

export function Contact() {
  const time = useLocalTime(profile.timeZone);

  return (
    <section id="contact" data-section className="relative pt-24 lg:pt-32">
      <Container>
        <Reveal className="border-t border-line pt-5">
          <p className="meta text-ink-muted">
            <span className="text-mint">07</span>
            <span className="mx-2 text-ink-faint" aria-hidden="true">
              —
            </span>
            Contact
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-14 lg:mt-20">
          <Reveal className="col-span-12 lg:col-span-8">
            <h2 className="text-display text-ink">{contact.headline}</h2>
            <p className="mt-8 max-w-[52ch] text-lead text-ink-soft">{contact.body}</p>

            <a
              href={`mailto:${profile.email}`}
              className="group mt-12 inline-flex max-w-full items-center gap-4 border-b border-line-strong pb-3 transition-colors duration-300 hover:border-mint"
            >
              <span className="break-all font-display text-[clamp(1.25rem,0.8rem+2vw,2.5rem)] font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-mint">
                {profile.email}
              </span>
              <ArrowUpRight
                size={28}
                strokeWidth={1.5}
                aria-hidden="true"
                className="shrink-0 text-ink-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mint"
              />
            </a>
          </Reveal>

          <Reveal className="col-span-12 lg:col-span-3 lg:col-start-10" delay={0.1}>
            <dl className="border-t border-line">
              {channels.map((c) => (
                <div key={c.label} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                  <dt className="meta text-ink-faint">{c.label}</dt>
                  <dd>
                    <a
                      href={c.href}
                      target={c.external ? "_blank" : undefined}
                      rel={c.external ? "noopener noreferrer" : undefined}
                      download={c.download}
                      className="link-draw font-mono text-[0.875rem] text-ink"
                    >
                      {c.value}
                      <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
            <p className="meta mt-6 text-ink-faint">
              {profile.location}
              {time && (
                <>
                  <span className="mx-2" aria-hidden="true">
                    ·
                  </span>
                  <time dateTime={time}>
                    {time} {profile.timeZoneLabel}
                  </time>
                </>
              )}
            </p>
          </Reveal>
        </div>

        {/* Footer */}
        <footer className="mt-28 border-t border-line py-8 lg:mt-40">
          <div className="grid grid-cols-12 gap-x-6 gap-y-4 font-mono text-[0.8125rem] text-ink-faint">
            <div className="col-span-12 flex flex-wrap items-center gap-x-3 gap-y-1 self-start md:col-span-4">
              <p>
                © {new Date().getFullYear()} {profile.name}
              </p>
              <span aria-hidden="true">·</span>
              <a
                href={profile.previousVersion}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw text-ink-muted hover:text-mint"
              >
                View portfolio v1
                <ArrowUpRight size={12} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
            <p className="col-span-12 md:col-span-4">Set in Space Grotesk, Inter and JetBrains Mono.</p>
            <p className="col-span-12 md:col-span-4 md:text-right">
              Designed and built with React, Vite, Tailwind and Motion.
            </p>
          </div>
        </footer>
      </Container>
    </section>
  );
}
