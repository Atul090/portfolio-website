import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";

const categories = [
  {
    label: "Languages",
    color: "#00c8ff",
    items: ["JavaScript", "TypeScript", "Java", "Python", "C/C++", "SQL", "HTML/CSS"],
  },
  {
    label: "Frameworks",
    color: "#7c3aed",
    items: ["React", "Next.js", "Node.js", "Express", "GraphQL", "WordPress", "Material-UI", "REST API"],
  },
  {
    label: "Technologies",
    color: "#10b981",
    items: [
      "MongoDB", "AWS DynamoDB", "AWS S3", "AWS EC2", "AWS Lambda",
      "RabbitMQ", "Elasticsearch", "OpenAI API", "Jenkins", "Git",
      "Google Cloud", "Shopify API", "Flutter",
    ],
  },
  {
    label: "Soft Skills",
    color: "#f59e0b",
    items: ["Effective Communication", "Team Collaboration", "Problem Solving", "Adaptability", "Leadership"],
  },
];

function SkillTag({ label, color, delay }: { label: string; color: string; delay: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ scale: 1.05 }}
      className="inline-block px-3 py-1.5 rounded-lg text-xs cursor-default transition-colors duration-200"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        background: `${color}12`,
        border: `1px solid ${color}30`,
        color: color,
      }}
    >
      {label}
    </motion.span>
  );
}

export function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="py-24 max-w-6xl mx-auto px-6">
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
          // 02 — Technical Skills
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
          What I work with
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="p-6 rounded-2xl"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="mb-4 text-xs tracking-widest uppercase"
              style={{ fontFamily: "'JetBrains Mono', monospace", color: cat.color }}
            >
              {cat.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item, ii) => (
                <SkillTag key={item} label={item} color={cat.color} delay={ii * 0.04} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
