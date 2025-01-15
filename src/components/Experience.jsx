import { motion } from "motion/react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { experiences } from "../constants";
import ExperienceCard from "./ExperienceCard";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { useTheme } from "../context/ThemeProvider ";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { isDarkMode } = useTheme();
  const bordersColor = !isDarkMode ? "#456789" : "#fff";
  const { t } = useTranslation("global");

  return (
    <div className={`${styles.paddingX}`}>
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
          {t("Experience.title")}
        </motion.h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor={bordersColor}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
