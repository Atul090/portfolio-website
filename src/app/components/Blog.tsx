import { motion } from "motion/react";
import { ArrowUpRight, BookOpen } from "lucide-react";

const posts = [
  {
    slug: "mern-stack-lessons",
    title: "What I Learned Building Full-Stack Applications with the MERN Stack",
    description: "Deep dive into building real MERN applications—covering request flows, service-oriented Node layers, MongoDB aggregation pipelines, authentication vs. authorization, and production-grade monitoring.",
    tags: ["MERN", "Full Stack", "MongoDB"],
    date: "Aug 7, 2026",
    readTime: "10 min read",
    color: "#00c8ff",
  },
  {
    slug: "practical-ai-features",
    title: "Building Practical AI Features Instead of Just Calling an LLM",
    description: "The model is only one piece of the puzzle. Explore how to build reliable production AI features using context retrieval, structured outputs, prompt engineering, and model providers abstraction.",
    tags: ["Generative AI", "LLM", "Backend"],
    date: "Aug 3, 2026",
    readTime: "9 min read",
    color: "#7c3aed",
  },
  {
    slug: "shopify-product-sync-pipeline",
    title: "Building a Reliable Shopify Product Sync Pipeline with Webhooks, RabbitMQ, and Node.js",
    description: "A webhook-driven synchronization pipeline keeping Shopify and MongoDB databases consistent in near real-time, featuring HMAC signature validation, robust queues, and idempotent worker processes.",
    tags: ["Node.js", "Shopify", "RabbitMQ"],
    date: "Aug 1, 2026",
    readTime: "9 min read",
    color: "#10b981",
  },
  {
    slug: "rest-vs-graphql",
    title: "REST vs GraphQL: Choosing the Right API for a Product",
    description: "Neither REST nor GraphQL wins by default — the right choice depends on what your clients actually need from the API, factoring in performance, caching, and schema flexibility.",
    tags: ["GraphQL", "REST API", "API Design"],
    date: "Aug 5, 2026",
    readTime: "7 min read",
    color: "#f59e0b",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-24 max-w-6xl mx-auto px-6">
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
          // 05 — Writing
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
          Technical Writing
        </h2>
        <p
          className="mt-4 max-w-xl text-sm"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--muted-foreground)",
            lineHeight: 1.6,
          }}
        >
          I write deep-dive articles on backend engineering, scalable MERN patterns, webhook integration pipelines, and practical implementation of generative AI systems.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, i) => (
          <motion.a
            key={post.slug}
            href={`https://blog.atuldeepsingh.com/writing/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative p-6 rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              textDecoration: "none",
            }}
          >
            {/* Hover accent gradient */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-transform duration-300"
              style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }}
            />

            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: `${post.color}10`,
                        border: `1px solid ${post.color}20`,
                        color: post.color,
                      }}
                    >
                      #{tag.toLowerCase().replace(" ", "-")}
                    </span>
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "0.65rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {post.date}
                </span>
              </div>

              <h3
                className="group-hover:text-primary transition-colors duration-200 mb-3"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  lineHeight: 1.4,
                }}
              >
                {post.title}
              </h3>

              <p
                className="mb-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.85rem",
                  color: "var(--muted-foreground)",
                  lineHeight: 1.6,
                }}
              >
                {post.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-auto pt-2">
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.7rem",
                  color: "var(--muted-foreground)",
                }}
              >
                {post.readTime}
              </span>
              <span
                className="flex items-center gap-1 text-xs font-semibold"
                style={{
                  color: post.color,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Read Article{" "}
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="https://blog.atuldeepsingh.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, rgba(0, 200, 255, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%)",
            border: "1px solid var(--primary)",
            color: "var(--foreground)",
            boxShadow: "0 0 15px rgba(0, 200, 255, 0.1)",
          }}
        >
          <BookOpen size={16} style={{ color: "var(--primary)" }} />
          Visit Developer Blog
          <ArrowUpRight size={14} style={{ color: "var(--primary)" }} />
        </a>
      </motion.div>
    </section>
  );
}
