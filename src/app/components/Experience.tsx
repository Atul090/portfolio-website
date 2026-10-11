import { Label, Reveal, Section, SectionHeader, TagList } from "./primitives";
import { education, experience } from "../data/content";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        index="05"
        label="Experience"
        aside={`${experience.length} roles`}
        title="Where the systems were built."
        intro="Problems worked on, systems shipped, and what changed as a result."
      />

      <ol className="border-t border-line">
        {experience.map((role, i) => (
          <Reveal as="li" key={role.company} delay={0.05 * i} className="grid grid-cols-12 gap-x-6 gap-y-8 border-b border-line py-10 lg:py-14">
            {/* Meta column */}
            <div className="col-span-12 lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className={`h-1.5 w-1.5 ${i === 0 ? "bg-mint" : "bg-ink-faint"}`} aria-hidden="true" />
                <p className="meta text-ink-muted">{role.period}</p>
              </div>
              <h3 className="mt-4 text-h3 text-ink">{role.company}</h3>
              <p className="mt-1.5 text-lead text-ink-soft">{role.role}</p>
              <p className="meta mt-4 text-ink-faint">
                {role.location} · {role.kind}
              </p>
              <TagList items={role.stack} className="mt-6 lg:max-w-[20rem]" />
            </div>

            {/* Points */}
            <ul className="col-span-12 lg:col-span-8 lg:col-start-5">
              {role.points.map((p, j) => (
                <li
                  key={p.lead}
                  className={`grid grid-cols-12 gap-x-6 gap-y-2 py-5 ${j > 0 ? "border-t border-line/70" : "lg:pt-0"}`}
                >
                  <Label className="col-span-12 sm:col-span-4 xl:col-span-3">{p.lead}</Label>
                  <p className="col-span-12 text-ink-soft sm:col-span-8 xl:col-span-9">{p.text}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}

        {/* Education */}
        <Reveal as="li" delay={0.1} className="grid grid-cols-12 gap-x-6 gap-y-6 border-b border-line py-10 lg:py-14">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-ink-faint" aria-hidden="true" />
              <p className="meta text-ink-muted">Education</p>
            </div>
            <h3 className="mt-4 text-h3 text-ink">{education.institution}</h3>
            <p className="mt-1.5 text-lead text-ink-soft">{education.degree}</p>
            <p className="meta mt-4 text-ink-faint">{education.detail}</p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            <Label>Certifications</Label>
            <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-ink-soft">
              {education.certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </ol>
    </Section>
  );
}
