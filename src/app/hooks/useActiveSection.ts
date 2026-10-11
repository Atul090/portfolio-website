import { useEffect, useState } from "react";

/**
 * Tracks which `[data-section]` element currently occupies the reading line
 * (roughly 40% down the viewport). Returns its id, or "" above the first section.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.4;
      let current = "";
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= line) current = el.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}
