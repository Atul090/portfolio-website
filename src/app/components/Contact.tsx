import { motion } from "motion/react";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "999.atulsingh@gmail.com",
    href: "mailto:999.atulsingh@gmail.com",
    color: "#00c8ff",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+91-7905072450",
    href: "tel:+917905072450",
    color: "#10b981",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/atuldeepsingh",
    href: "https://linkedin.com/in/atuldeepsingh",
    color: "#7c3aed",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/atul090",
    href: "https://github.com/atul090",
    color: "#f59e0b",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
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
          // 06 — Contact
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
          Let's connect
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              lineHeight: 1.8,
              color: "var(--muted-foreground)",
            }}
          >
            I'm open to full-time roles, freelance projects, and interesting collaborations.
            Whether you want to discuss a backend challenge, an AI integration, or just say hello —
            my inbox is always open.
          </p>

          <a
            href="mailto:999.atulsingh@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 600,
            }}
          >
            Say Hello <ArrowUpRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-3"
        >
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              whileHover={{ y: -3 }}
              className="flex flex-col gap-2 p-4 rounded-xl transition-all duration-200"
              style={{ background: "var(--card)", border: "1px solid var(--border)", textDecoration: "none" }}
            >
              <div style={{ color: l.color }}>{l.icon}</div>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "var(--muted-foreground)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {l.label}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  color: "var(--foreground)",
                  lineHeight: 1.4,
                  wordBreak: "break-all",
                }}
              >
                {l.value}
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 pt-8 flex items-center justify-between flex-wrap gap-4"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--muted-foreground)",
          }}
        >
          © 2026 Atul Deep Singh
        </span>
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.75rem",
            color: "var(--muted-foreground)",
          }}
        >
          Built with React + Tailwind
        </span>
      </motion.div>
    </section>
  );
}
