import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit): [React.RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, options);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}
