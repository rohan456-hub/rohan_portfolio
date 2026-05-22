import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaCertificate, FaGoogle } from "react-icons/fa";
import { projects, skills, socials } from "../data/content";
import SectionTitle from "./SectionTitle";

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export function About() {
  return (
    <section id="about" className="section-wrap">
      <SectionTitle title="About Me" subtitle="Developer mindset with product-focused execution." />
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="glass-card mx-auto max-w-3xl p-7 text-slate-200 md:p-10"
      >
        I am Rohan Modi, a passionate MERN Stack Developer and MCA student who enjoys creating modern web
        experiences and scalable applications. I focus on clean architecture, responsive UI, and practical
        problem-solving that makes products faster and easier to use.
      </motion.div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <SectionTitle title="Skills" subtitle="Core technologies I use to build production-ready products." />
      <div className="mx-auto grid max-w-5xl gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="glass-card p-4 text-center font-semibold text-slate-100 sm:p-5"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-wrap">
      <SectionTitle title="Projects" subtitle="Selected builds showcasing full-stack implementation and UI craft." />
      <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="glass-card group p-5 sm:p-6 transition-transform duration-300"
          >
            <h3 className="font-heading text-lg font-bold text-white sm:text-xl">{project.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-3 sm:flex">
              <a href={project.github} className="btn-secondary justify-center text-sm" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href={project.live} className="btn-primary justify-center text-sm" target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section-wrap">
      <SectionTitle title="Education" subtitle="Academic foundation with a modern development focus." />
      <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-wide text-cyan-300">Completed</p>
          <h3 className="mt-2 font-heading text-xl font-semibold text-white">BCA</h3>
          <p className="mt-2 text-slate-300">Completed in 2025.</p>
        </div>
        <div className="glass-card p-6">
          <p className="text-sm uppercase tracking-wide text-cyan-300">Current</p>
          <h3 className="mt-2 font-heading text-xl font-semibold text-white">MCA</h3>
          <p className="mt-2 text-slate-300">Currently pursuing Master of Computer Applications.</p>
        </div>
      </div>
    </section>
  );
}

export function Certificates() {
  const certs = [
    {
      title: "NPTEL Certificate",
      issuer: "NPTEL",
      year: "2025",
      url: "#",
      icon: FaCertificate
    },
    {
      title: "Google Certificate",
      issuer: "Google",
      year: "2026",
      url: "#",
      icon: FaGoogle
    }
  ];

  return (
    <section id="certificates" className="section-wrap">
      <SectionTitle title="Certificates" subtitle="Continuous learning and practical upskilling." />
      <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 md:grid-cols-2">
        {certs.map((cert, i) => {
          const Icon = cert.icon;
          return (
            <motion.article
              key={cert.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="glass-card group p-5 sm:p-6 transition-transform duration-300"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/12 text-cyan-200">
                <Icon size={20} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white sm:text-xl">{cert.title}</h3>
              <p className="mt-2 text-sm text-slate-300">Issuer: {cert.issuer}</p>
              <p className="mt-1 text-sm text-slate-300">Issue Year: {cert.year}</p>
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mt-5 w-full justify-center sm:w-fit"
              >
                View Certificate
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-wrap pb-20">
      <SectionTitle title="Contact" subtitle="Open to internships, collaborations, and full-stack opportunities." />
      <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 lg:grid-cols-2">
        <div className="glass-card space-y-4 p-5 sm:p-6">
          <a href={`mailto:${socials.email}`} className="contact-link">
            <FaEnvelope /> {socials.email}
          </a>
          <a href={socials.github} className="contact-link" target="_blank" rel="noreferrer">
            <FaGithub /> GitHub Profile
          </a>
          <a href={socials.linkedin} className="contact-link" target="_blank" rel="noreferrer">
            <FaLinkedin /> LinkedIn Profile
          </a>
        </div>
        <form className="glass-card grid gap-4 p-5 sm:p-6">
          <input className="input-field" type="text" placeholder="Your Name" />
          <input className="input-field" type="email" placeholder="Your Email" />
          <textarea className="input-field min-h-28" placeholder="Your Message" />
          <button type="button" className="btn-primary w-full justify-center sm:w-fit sm:justify-start">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
