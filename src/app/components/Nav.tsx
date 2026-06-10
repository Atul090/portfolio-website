import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

interface NavProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    links.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const bgClass = scrolled
    ? theme === "dark"
      ? "bg-[#080c14]/90 backdrop-blur-md border-b border-white/5"
      : "bg-white/90 backdrop-blur-md border-b border-black/5"
    : "";

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-end gap-6">
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="relative text-sm transition-colors duration-200"
              style={{
                color: active === l.href.slice(1) ? "var(--primary)" : "var(--muted-foreground)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {l.label}
              {active === l.href.slice(1) && (
                <motion.div
                  layoutId="nav-dot"
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ background: "var(--primary)" }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Theme toggle */}
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-full transition-all duration-200 hover:scale-110"
          style={{
            background: "rgba(128,128,128,0.1)",
            color: "var(--muted-foreground)",
            border: "1px solid var(--border)",
          }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          style={{ color: "var(--muted-foreground)" }}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden backdrop-blur-md border-b"
            style={{
              background: theme === "dark" ? "rgba(8,12,20,0.95)" : "rgba(255,255,255,0.95)",
              borderColor: "var(--border)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-sm py-1 transition-colors"
                  style={{
                    color: active === l.href.slice(1) ? "var(--primary)" : "var(--muted-foreground)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
