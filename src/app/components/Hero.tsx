import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown, FileText, Download } from "lucide-react";
import profilePhoto from "../../assets/profile.png";
import resumePDF from "../../imports/Atul_Singh.pdf";

const titles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "Backend Architect",
  "AI Integration Specialist",
];

export function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = titles[titleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        setTitleIdx((i) => (i + 1) % titles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, titleIdx]);

  const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "100+", label: "Stores Scaled" },
    { value: "80%", label: "Process Automation" },
    { value: "70%", label: "Booking Uplift" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,200,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span
                className="inline-block mb-4 px-3 py-1 rounded-full text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--primary)",
                  background: "rgba(0,200,255,0.08)",
                  border: "1px solid rgba(0,200,255,0.2)",
                }}
              >
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                fontWeight: 700,
                lineHeight: 1.05,
                color: "var(--foreground)",
                letterSpacing: "-0.02em",
              }}
            >
              Atul Deep<br />
              <span style={{ color: "var(--primary)" }}>Singh</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mb-8 h-8 flex items-center"
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
                  color: "var(--muted-foreground)",
                }}
              >
                &gt; {displayed}
                <span
                  className="inline-block w-0.5 h-4 ml-0.5 align-middle animate-pulse"
                  style={{ background: "var(--primary)" }}
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mb-8 max-w-md"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "var(--muted-foreground)",
              }}
            >
              Building scalable MERN applications, GraphQL APIs, and AI-powered pipelines.
              Passionate about clean architecture and shipping reliable solutions fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="mailto:999.atulsingh@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Mail size={15} /> Get in Touch
              </a>
              <a
                href="https://github.com/atul090"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Github size={15} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/atuldeepsingh"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  border: "1px solid var(--border)",
                  color: "var(--foreground)",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <div className="flex rounded-full overflow-hidden" style={{ border: "1px solid var(--border)" }}>
                <a
                  href={resumePDF}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:[background-color:var(--surface-hover)]"
                  style={{
                    color: "var(--foreground)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  <FileText size={15} /> Resume
                </a>
                <a
                  href={resumePDF}
                  download="Atul_Singh_Resume.pdf"
                  className="flex items-center px-3 py-2.5 transition-all duration-200 hover:[background-color:var(--surface-hover)]"
                  style={{
                    color: "var(--muted-foreground)",
                    borderLeft: "1px solid var(--border)",
                  }}
                  aria-label="Download resume"
                  title="Download resume"
                >
                  <Download size={15} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-3 rounded-full opacity-30 blur-xl"
                style={{ background: "radial-gradient(circle, #00c8ff, #7c3aed)" }}
              />
              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full"
                style={{
                  border: "1px dashed rgba(0,200,255,0.3)",
                }}
              />
              {/* Photo frame */}
              <div
                className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden"
                style={{ border: "3px solid rgba(0,200,255,0.25)" }}
              >
                <img
                  src={profilePhoto}
                  alt="Atul Deep Singh"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 px-3 py-1.5 rounded-full"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "#10b981",
                  }}
                >
                  ● Open to work
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-4 rounded-xl"
              style={{
                background: "var(--surface-hover)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--primary)",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                className="mt-1"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "var(--muted-foreground)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--muted-foreground)" }}
      >
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em" }}>
          SCROLL
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
