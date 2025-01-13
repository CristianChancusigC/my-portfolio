import { motion } from "motion/react";
import { SectionWrapper } from "../hoc";

function AboutSection() {
  const MainIcon = "./images/about-img.jpg";
  return (
    <section className="text-slate-700 dark:text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src={MainIcon} alt="About" className="rounded-lg" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl font-bold text-slate-700 dark:text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            I am a software developer with experience in mobile applications and
            educational games, focused on AI solutions to create innovative
            tools. I stand out commitment, willingness to learn and adapt to new
            challenges. With skills in programming, teamwork and agile
            methodologies such as Scrum, I strive to exceed expectations and
            contribute to the success of the projects in which I participate.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default SectionWrapper(AboutSection, "about");
