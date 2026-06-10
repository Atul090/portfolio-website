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
            I'm a <span style={{ color: "var(--foreground)" }}>Full Stack Developer</span> with{" "}
            <span style={{ color: "var(--primary)" }}>2+ years</span> of experience building
            production-grade applications for the MERN stack, GraphQL, and cloud services.
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
            At <span style={{ color: "var(--foreground)" }}>Heads Up For Tails</span>, I've led projects
            spanning Shopify integrations, appointment systems handling{" "}
            <span style={{ color: "var(--primary)" }}>1,500 bookings/day</span> across 100+ stores, and
            a semantic search pipeline powered by OpenAI embeddings.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--muted-foreground)",
            }}
          >
            Outside of work I build side projects around{" "}
            <span style={{ color: "var(--foreground)" }}>AI content generation</span> and crypto data
            visualisation, always exploring where intelligent automation meets great developer
            experience.
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
