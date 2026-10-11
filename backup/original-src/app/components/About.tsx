import { motion } from "motion/react";
import { Code2, Zap, Brain } from "lucide-react";

const pillars = [
  {
    icon: <Code2 size={20} />,
    title: "Clean Architecture",
    desc: "Structured, maintainable code that scales without accruing technical debt.",
    color: "#00c8ff",
  },
  {
    icon: <Brain size={20} />,
    title: "AI Integration",
    desc: "Embedding LLMs and semantic search into production pipelines with OpenAI and Elasticsearch.",
    color: "#7c3aed",
  },
  {
    icon: <Zap size={20} />,
    title: "Ship Fast",
    desc: "High-impact delivery through lean iteration, automation, and data-driven optimisation.",
    color: "#10b981",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
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
          // 01 — About
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
          Who I am
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="mb-5"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--muted-foreground)",
            }}
          >
            I am a <span style={{ color: "var(--foreground)" }}>Software Engineer</span> with over{" "}
            <span style={{ color: "var(--primary)" }}>2 years</span> of experience building and scaling
            production-grade applications across backend, frontend, and cloud architectures.
          </p>
          <p
            className="mb-5"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--muted-foreground)",
            }}
          >
            At <span style={{ color: "var(--foreground)" }}>Heads Up For Tails</span>, I drive the development of
            core services including high-performance Shopify sync pipelines, e-commerce integrations, booking systems
            managing <span style={{ color: "var(--primary)" }}>1,500+ daily appointments</span> across 100+ stores, and
            semantic search indexing powered by OpenAI embeddings and Elasticsearch.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--muted-foreground)",
            }}
          >
            I write deep-dive technical articles and build open-source tools around{" "}
            <span style={{ color: "var(--foreground)" }}>AI content generation</span> and data visualizations—striving
            to simplify software engineering concepts and share practical architectural insights.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
              className="flex gap-4 p-4 rounded-xl"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${p.color}15`, color: p.color }}
              >
                {p.icon}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: "var(--foreground)",
                    marginBottom: 4,
                  }}
                >
                  {p.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.55,
                  }}
                >
                  {p.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
