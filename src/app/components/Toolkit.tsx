import { Reveal, Section, SectionHeader } from "./primitives";
import { toolkit } from "../data/content";

export function Toolkit() {
  return (
    <Section id="toolkit">
      <SectionHeader
        index="04"
        label="Technical toolkit"
        aside={`${toolkit.length} groups`}
        title="Grouped by what it's for, not by logo."
        intro="The tools I reach for and the context I use them in. Depth over breadth."
      />

      <Reveal className="border-t border-line">
        <dl>
          {toolkit.map((group, i) => (
            <Reveal key={group.name} as="div" delay={0.04 * i} className="grid grid-cols-12 gap-x-6 gap-y-5 border-b border-line py-8 lg:py-10">
              <div className="col-span-12 lg:col-span-4">
                <dt className="flex items-baseline gap-4">
                  <span className="meta text-mint">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-h3 text-ink">{group.name}</span>
                </dt>
                <p className="mt-3 max-w-[40ch] text-ink-soft lg:pl-[2.75rem]">{group.context}</p>
              </div>
              <dd className="col-span-12 lg:col-span-8 lg:pt-1.5">
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-[2px] border border-line px-3.5 py-2 font-mono text-[0.8125rem] text-ink transition-colors duration-200 hover:border-mint/60 hover:text-mint"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </Reveal>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
