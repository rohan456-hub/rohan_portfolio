import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className="mb-10 text-center"
    >
      <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {subtitle ? <p className="mx-auto mt-3 max-w-2xl text-slate-300">{subtitle}</p> : null}
    </motion.div>
  );
}

export default SectionTitle;
