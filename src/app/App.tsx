import { useState, useCallback } from "react";
import "../styles/fonts.css";
import { SplashScreen } from "./components/SplashScreen";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";

const Divider = () => (
  <div className="max-w-6xl mx-auto px-6">
    <div style={{ height: "1px", background: "var(--border)" }} />
  </div>
);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const handleSplashDone = useCallback(() => setLoaded(true), []);
  const toggleTheme = useCallback(
    () => setTheme((t) => (t === "dark" ? "light" : "dark")),
    []
  );

  return (
    <div
      className={theme === "light" ? "light" : ""}
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "'Inter', sans-serif",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {!loaded && <SplashScreen onDone={handleSplashDone} />}

      {loaded && (
        <>
          <Nav theme={theme} onToggleTheme={toggleTheme} />
          <main>
            <Hero />
            <Divider />
            <About />
            <Divider />
            <Skills />
            <Divider />
            <Experience />
            <Divider />
            <Projects />
            <Divider />
            <Education />
            <Divider />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}
