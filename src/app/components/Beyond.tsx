import { ArrowUpRight } from "lucide-react";
import { ArrowLink, Label, Reveal, Section, SectionHeader, TagList } from "./primitives";
import { articleUrl, articles, beyond, experiments, profile } from "../data/content";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", { month: "short", year: "numeric" });
}

export function Beyond() {
  return (
    <Section id="writing">
      <SectionHeader
        index="06"
        label="Beyond the code"
        aside={`${articles.length} articles · ${experiments.length} experiments`}
        title="Notes from building things."
        intro={beyond.intro}
      />

      <div className="grid grid-cols-12 gap-x-6 gap-y-20">
        {/* Writing */}
        <div className="col-span-12 lg:col-span-8">
          <Reveal className="flex items-baseline justify-between border-t border-line pt-5">
            <Label as="h3">Writing</Label>
            <ArrowLink href={profile.blog} external mono className="text-ink-muted">
              blog.atuldeepsingh.com
            </ArrowLink>
          </Reveal>
          <ol className="mt-4">
            {articles.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={0.04 * i} className="border-b border-line">
                <a
                  href={articleUrl(a.slug)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-12 gap-x-6 gap-y-2 py-7 transition-colors"
                >
                  <div className="col-span-12 flex items-center justify-between sm:col-span-3 sm:block">
                    <p className="meta text-ink-muted">
                      <time dateTime={a.date}>{formatDate(a.date)}</time>
                    </p>
                    <p className="meta text-ink-faint sm:mt-2">{a.readTime}</p>
                  </div>
                  <div className="col-span-12 sm:col-span-9">
                    <h4 className="flex items-start justify-between gap-6 text-h3 text-ink transition-colors duration-200 group-hover:text-mint">
                      <span>{a.title}</span>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        aria-hidden="true"
                        className="mt-1.5 shrink-0 text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mint"
                      />
                    </h4>
                    <p className="mt-3 max-w-[60ch] text-ink-soft">{a.description}</p>
                    <TagList items={a.tags} className="mt-4" />
                  </div>
                </a>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Experiments */}
        <div className="col-span-12 lg:col-span-3 lg:col-start-10">
          <Reveal className="border-t border-line pt-5">
            <Label as="h3">Experiments</Label>
            <p className="mt-3 text-ink-muted">Smaller things built to learn an API or a layout technique properly.</p>
          </Reveal>
          <ul className="mt-4">
            {experiments.map((e, i) => (
              <Reveal as="li" key={e.title} delay={0.05 * i} className="border-b border-line py-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="text-h3 text-ink">
                    {e.href ? (
                      <a href={e.href} target="_blank" rel="noopener noreferrer" className="link-draw">
                        {e.title}
                        <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
                      </a>
                    ) : (
                      e.title
                    )}
                  </h4>
                  <span className="meta text-ink-faint">{e.period}</span>
                </div>
                <p className="mt-3 text-ink-soft">{e.description}</p>
                <TagList items={e.stack} className="mt-4" />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
