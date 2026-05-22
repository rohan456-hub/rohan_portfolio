import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const phrases = ["MERN Stack Developer", "MCA Student", "Building Scalable Web Apps"];

function Hero() {
  const fullText = useMemo(() => phrases.join(" | "), []);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, index + 1));
      index += 1;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 sm:px-5 md:px-8">
      <div className="particle-layer" />
      <div className="hero-glow" />
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2 md:items-center md:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300 sm:text-sm">
            Portfolio 2026
          </p>
          <h1 className="font-heading text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Rohan Modi
          </h1>
          <p
            className="mt-4 min-h-12 text-sm !text-white sm:text-base md:min-h-8 md:text-lg"
            style={{ color: "#ffffff" }}
          >
            {typed}
            <span className="ml-1 animate-pulse !text-white" style={{ color: "#ffffff" }}>
              |
            </span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="#projects" className="btn-primary justify-center sm:justify-start">
              View Projects
            </a>
            <a href="#contact" className="btn-secondary justify-center sm:justify-start">
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="glass-card relative mx-auto w-full max-w-md p-6"
        >
          <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-cyan-300/25 blur-xl" />
          <h3 className="font-heading text-xl font-bold text-white">MERN Specialist</h3>
          <p className="mt-3 text-slate-300">
            Passionate about modern interfaces, efficient APIs, and robust full-stack products.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200">React</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200">Node</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200">MongoDB</div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200">Express</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
