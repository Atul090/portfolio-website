import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Identity } from "./components/Identity";
import { Work } from "./components/Work";
import { Practice } from "./components/Practice";
import { Toolkit } from "./components/Toolkit";
import { Experience } from "./components/Experience";
import { Beyond } from "./components/Beyond";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-mint focus:px-4 focus:py-2 focus:font-medium focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Identity />
        <Work />
        <Practice />
        <Toolkit />
        <Experience />
        <Beyond />
        <Contact />
      </main>
    </>
  );
}
