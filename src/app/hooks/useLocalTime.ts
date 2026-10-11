import { useEffect, useState } from "react";

/** Returns the current time in a given IANA time zone, formatted HH:MM, refreshed every 30s. */
export function useLocalTime(timeZone: string) {
  const [time, setTime] = useState<string>(() => format(timeZone));

  useEffect(() => {
    const tick = () => setTime(format(timeZone));
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
}

function format(timeZone: string) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone,
    }).format(new Date());
  } catch {
    return "";
  }
}
