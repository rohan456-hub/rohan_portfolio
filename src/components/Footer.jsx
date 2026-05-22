import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socials } from "../data/content";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-5 md:flex-row md:px-8">
        <p className="text-center text-xs text-slate-400 sm:text-sm md:text-left">
          Copyright {new Date().getFullYear()} Rohan Modi. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-slate-300">
          <a href={`mailto:${socials.email}`} className="social-icon">
            <FaEnvelope />
          </a>
          <a href={socials.github} target="_blank" rel="noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
