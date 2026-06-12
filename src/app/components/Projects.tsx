import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "HUFT App",
    subtitle: "Pet E-commerce Platform",
    period: "Nov 2023 – Present",
    stack: ["Node.js", "Express.js", "MongoDB", "Flutter", "AWS"],
    color: "#00c8ff",
    description:
      "Scalable e-commerce backend for a pet care brand supporting personalised product recommendations, pet service bookings, and cross-platform mobile experience.",
    highlights: [
      "30% reduction in query latency via optimised MongoDB APIs",
      "25% increase in monthly active users with Flutter mobile app",
      "Personalized product recommendations and pet service bookings",
    ],
  },
  {
    name: "Coin Pulse",
    subtitle: "Crypto Tracker Dashboard",
    period: "Jun 2023 – Aug 2023",
    stack: ["React.js", "JavaScript", "Material UI", "Chart.js", "CoinGecko API"],
    color: "#f59e0b",
    description:
      "Responsive cryptocurrency dashboard visualising real-time market data. Uses React Context API for global state and Chart.js for interactive graphs.",
    highlights: [
      "Real-time data from CoinGecko API",
      "Interactive Chart.js visualisations",
      "Global state with React Context API",
    ],
  },
  {
    name: "Genify",
    subtitle: "AI Content Assistant",
    period: "Jun 2025 – Present",
    stack: ["Next.js", "React", "Clerk", "Google Gemini AI", "Tailwind CSS"],
    color: "#7c3aed",
    link: "https://www.genify.atuldeepsingh.com",
    description:
      "AI-powered content generator enabling users to create SEO-friendly blogs, tweets, and code snippets using Google Gemini AI, with rich text editing and secure auth.",
    highlights: [
      "Google Gemini AI for content generation",
      "Clerk authentication and session management",
      "Rich text editing via Toast UI Editor",
    ],
  },
  {
    name: "Gipher",
    subtitle: "GIF Search & Discovery",
    period: "Feb 2024 – Apr 2024",
    stack: ["React.js", "Vite", "Tailwind CSS", "Giphy API"],
    color: "#ec4899",
    link: "https://gipher.atuldeepsingh.com",
    description:
      "Interactive GIF search engine and sharing application utilizing Giphy API. Features instant trending feeds, search auto-suggestions, and clipboard sharing.",
    highlights: [
      "Giphy API integration for real-time trending categories and GIF searching",
      "Optimized masonry layouts and infinite scroll for fluid user experience",
      "Micro-interactions and clipboard functionality for easy sharing",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
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
          // 04 — Projects
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
          Things I've built
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative p-6 rounded-2xl flex flex-col overflow-hidden transition-all duration-300"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
              style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }}
            />

            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--foreground)",
                    }}
                  >
                    {p.name}
                  </h3>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-muted-foreground transition-colors"
                      title={`Visit ${p.name}`}
                    >
                      <ExternalLink
                        size={15}
                        style={{
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = p.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "";
                        }}
                      />
                    </a>
                  )}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: p.color,
                    marginTop: 2,
                  }}
                >
                  {p.subtitle}
                </div>
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "var(--muted-foreground)",
                }}
              >
                {p.period}
              </span>
            </div>

            <p
              className="mb-5 flex-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "var(--muted-foreground)",
                lineHeight: 1.65,
              }}
            >
              {p.description}
            </p>

            {/* Highlights */}
            <ul className="mb-5 flex flex-col gap-1.5">
              {p.highlights.map((h) => (
                <li
                  key={h}
                  className="flex items-start gap-2"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  <span style={{ color: p.color, flexShrink: 0, marginTop: 2 }}>▸</span>
                  {h}
                </li>
              ))}
            </ul>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-1.5">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-xs"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    background: `${p.color}10`,
                    border: `1px solid ${p.color}25`,
                    color: p.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
