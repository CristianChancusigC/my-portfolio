import { motion } from "motion/react";
import { skilsTech } from "../constants";
import TechCard from "./TechCard";

const Tech = () => (
  <section className="sm:py-10 py-6">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.h2
        className="text-center text-4xl font-bold text-slate-700 dark:text-white mt-4 mb-8 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        Skills
      </motion.h2>
    </motion.div>
    <div className=" flex flex-wrap justify-center gap-10 gap-y-6">
      {skilsTech.map((skil, i) => (
        <motion.div
          className="w-28 h-25"
          key={skil.name}
          initial={{ transform: "translateY(100px)" }}
          whileInView={{ transform: "translateY(0px)" }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <TechCard skil={skil} />
        </motion.div>
      ))}
    </div>
  </section>
);

export default Tech;
