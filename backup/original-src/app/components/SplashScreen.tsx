import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"loading" | "exit">("loading");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 500;
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const p = Math.min((elapsed / duration) * 100, 100);
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setPhase("exit");
          setTimeout(onDone, 200);
        }, 100);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase === "loading" && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
          style={{ background: "#080c14" }}
        >
          {/* Grid background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,200,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.04) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="relative flex flex-col items-center gap-8"
          >
            {/* Initials circle */}
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #00c8ff, transparent, transparent)",
                  padding: 2,
                  borderRadius: "50%",
                  width: "calc(100% + 4px)",
                  height: "calc(100% + 4px)",
                  top: "-2px",
                  left: "-2px",
                }}
              />
              <div
                className="w-24 h-24 rounded-full relative z-10"
                style={{ background: "#0d1220", border: "2px solid rgba(0,200,255,0.2)" }}
              />
            </div>

            <div className="flex flex-col items-center gap-1">
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#f0f4ff",
                  letterSpacing: "-0.02em",
                }}
              >
                Atul Deep Singh
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.75rem",
                  color: "#6b7a99",
                  letterSpacing: "0.15em",
                }}
              >
                FULL STACK DEVELOPER
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-48 flex flex-col items-center gap-2">
              <div
                className="w-full h-px overflow-hidden rounded-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #00c8ff, #7c3aed)",
                    width: `${progress}%`,
                  }}
                  transition={{ ease: "linear" }}
                />
              </div>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "0.65rem",
                  color: "#6b7a99",
                  letterSpacing: "0.1em",
                }}
              >
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
