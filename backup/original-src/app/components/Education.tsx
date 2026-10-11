import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 max-w-6xl mx-auto px-6">
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
          // 05 — Education
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
          Academic background
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Degree */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl flex gap-5"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(0,200,255,0.1)", color: "var(--primary)" }}
          >
            <GraduationCap size={22} />
          </div>
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--foreground)",
              }}
            >
              B.Tech — Computer Science & Engineering
            </h3>
            <div
              className="mt-1"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "var(--primary)" }}
            >
              JSS Academy of Technical Education, Noida
            </div>
            <div
              className="mt-1 flex items-center gap-3"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", color: "var(--muted-foreground)" }}
            >
              <span>CGPA: 7.55 / 10</span>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-2xl flex gap-5"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(124,58,237,0.15)", color: "#7c3aed" }}
          >
            <Award size={22} />
          </div>
          <div>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                color: "var(--foreground)",
                marginBottom: 12,
              }}
            >
              Certifications
            </h3>
            {["Data Structures and Algorithms", "Web Development"].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 mb-2"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "var(--muted-foreground)" }}
              >
                <span style={{ color: "#7c3aed" }}>✓</span>
                {cert}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
