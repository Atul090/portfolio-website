import { motion } from "motion/react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer — Backend Developer",
    company: "Heads Up For Tails",
    location: "Gurugram, Haryana",
    period: "November 2023 – Present",
    tag: "Current",
    tagColor: "#10b981",
    stack: ["Node.js", "MongoDB", "GraphQL", "Next.js", "RabbitMQ", "Elasticsearch", "OpenAI"],
    highlights: [
      { metric: "80%", desc: "reduction in manual order processing via Shopify Order Integration using Node.js, MongoDB, RabbitMQ, and Shopify Admin API." },
      { metric: "10%", desc: "increase in in-store sales within 3 months by building a Distance Calculation API using geolocation." },
      { metric: "25%", desc: "increase in gift card usage via secure, scalable GraphQL APIs integrated with Shopify Admin API." },
      { metric: "70%", desc: "increase in bookings by designing an Appointment Booking Admin Panel (Next.js, Express, MongoDB) handling 1,000–1,500 daily appointments across 100+ stores." },
      { metric: "30%", desc: "reduction in average API response times through MongoDB query and schema optimisation." },
      { metric: "↑", desc: "Search accuracy improved via Semantic Search Pipeline using Elasticsearch and OpenAI Embeddings." },
    ],
  },
  {
    role: "Software Engineer Trainee",
    company: "Round the Clock Technologies",
    location: "Noida, UP",
    period: "April 2023 – July 2023",
    tag: "Internship",
    tagColor: "#7c3aed",
    stack: ["Java", "Selenium WebDriver", "Jenkins", "CI/CD"],
    highlights: [
      { metric: "100%", desc: "test coverage across multiple client websites using Java and Selenium WebDriver with dynamic XPath." },
      { metric: "60%", desc: "reduction in regression testing time by integrating automated test suites into CI/CD pipelines with Jenkins." },
    ],
  },
];

export function Experience() {
  const [expanded, setExpanded] = useState<number[]>([0]);

  const toggle = (i: number) =>
    setExpanded((prev) => (prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]));

  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span
          className="text-xs tracking-widest uppercase mb-3 block"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--primary)" }}
        >
          // 03 — Experience
        </span>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
            fontWeight: 700,
            color: "var(--foreground)",
            letterSpacing: "-0.02em",
            lineHeight: 1.2,
          }}
        >
          Where I've worked
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            {/* Header */}
            <button
              className="w-full text-left p-6 flex items-start justify-between gap-4 transition-colors hover:[background-color:var(--surface-hover)]"
              onClick={() => toggle(i)}
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      color: "var(--foreground)",
                    }}
                  >
                    {exp.role}
                  </h3>
                  <span
                    className="px-2 py-0.5 rounded text-xs"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: `${exp.tagColor}18`,
                      color: exp.tagColor,
                      border: `1px solid ${exp.tagColor}30`,
                    }}
                  >
                    {exp.tag}
                  </span>
                </div>
                <div
                  className="mb-3"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "var(--primary)",
                  }}
                >
                  {exp.company} · {exp.location}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.75rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {exp.period}
                </div>
                {/* Stack pills */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.stack.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: "var(--surface-muted)",
                        border: "1px solid var(--surface-muted-border)",
                        color: "var(--muted-foreground)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ color: "var(--muted-foreground)", flexShrink: 0, marginTop: 2 }}>
                {expanded.includes(i) ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </div>
            </button>

            {/* Expandable highlights */}
            <motion.div
              initial={false}
              animate={{ height: expanded.includes(i) ? "auto" : 0, opacity: expanded.includes(i) ? 1 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div
                className="px-6 pb-6 grid sm:grid-cols-2 gap-3"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                {exp.highlights.map((h, hi) => (
                  <div
                    key={hi}
                    className="flex gap-3 p-3 rounded-xl mt-3"
                    style={{ background: "var(--surface-hover)", border: "1px solid var(--surface-muted-border)" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "var(--primary)",
                        lineHeight: 1,
                        flexShrink: 0,
                        minWidth: "2.5rem",
                      }}
                    >
                      {h.metric}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.8rem",
                        color: "var(--muted-foreground)",
                        lineHeight: 1.5,
                      }}
                    >
                      {h.desc}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
