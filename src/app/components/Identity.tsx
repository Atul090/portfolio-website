import { Reveal, Section, SectionHeader } from "./primitives";
import { identity, profile } from "../data/content";

export function Identity() {
  return (
    <Section id="approach">
      <SectionHeader index="01" label="Approach" title={identity.statement} />

      <div className="grid grid-cols-12 gap-x-6 gap-y-16">
        {/* Editorial body */}
        <div className="col-span-12 lg:col-span-4">
          <Reveal className="space-y-5 text-lead text-ink-soft lg:sticky lg:top-28">
            {identity.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>

        {/* Portrait + principles */}
        <div className="col-span-12 lg:col-span-7 lg:col-start-6">
          <div className="grid grid-cols-12 gap-x-6 gap-y-12">
            <Reveal as="figure" className="col-span-7 sm:col-span-5 lg:col-span-4" delay={0.05}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] border border-line bg-surface">
                <img
                  src={profile.portrait}
                  alt={`Portrait of ${profile.name}`}
                  width={640}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover saturate-[0.85] contrast-[1.02]"
                />
                <span aria-hidden="true" className="absolute left-3 top-3 h-2 w-2 border-l border-t border-mint" />
                <span aria-hidden="true" className="absolute bottom-3 right-3 h-2 w-2 border-b border-r border-mint" />
              </div>
              <figcaption className="meta mt-4 text-ink-faint">{identity.portraitCaption}</figcaption>
            </Reveal>

            <ol className="col-span-12 sm:col-span-7 lg:col-span-8" aria-label="Engineering principles">
              {identity.principles.map((p, i) => (
                <Reveal as="li" key={p.index} delay={0.06 * i} className="group border-t border-line py-6 first:border-t-0 first:pt-0 lg:py-7">
                  <div className="grid grid-cols-[2.5rem_1fr] gap-x-4">
                    <span className="meta pt-1.5 text-mint">{p.index}</span>
                    <div>
                      <h3 className="text-h3 text-ink">{p.title}</h3>
                      <p className="mt-3 max-w-[48ch] text-ink-soft">{p.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
