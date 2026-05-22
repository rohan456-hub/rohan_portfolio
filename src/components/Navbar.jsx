import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../data/content";

function Navbar({ activeId }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-5 md:px-8">
        <a href="#home" className="font-heading text-lg font-bold tracking-wide text-white">
          Rohan Modi
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative text-sm font-semibold transition ${
                  activeId === link.id ? "text-cyan-300" : "text-slate-200 hover:text-white"
                }`}
              >
                {activeId === link.id ? (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-cyan-300"
                  />
                ) : null}
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="rounded-lg border border-white/20 bg-white/5 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {open ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className="mx-4 mb-4 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-sm font-semibold transition ${
                      activeId === link.id
                        ? "bg-cyan-300/15 text-cyan-200"
                        : "text-slate-200 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
