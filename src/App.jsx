import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { About, Skills, Projects, Education, Certificates, Contact } from "./components/Sections";
import { navLinks } from "./data/content";

function App() {
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState("home");
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onMove = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((x) => document.getElementById(x.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  if (loading) {
    return (
      <div className="loader-wrap">
        <motion.div
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.8 }}
          className="h-14 w-14 rounded-2xl border border-cyan-300/40 bg-cyan-300/15 shadow-glow"
        />
      </div>
    );
  }

  return (
    <div className="app-root">
      <div className="cursor-glow" style={{ left: `${cursor.x}px`, top: `${cursor.y}px` }} />
      <Navbar activeId={activeId} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
