import { motion } from "motion/react";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const MainIcon = "./images/about-img.webp";
  const { t } = useTranslation("global");

  return (
    <section className="text-text-description-light dark:text-text-description-dark">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src={MainIcon} alt="About" className="rounded-lg" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl font-bold text-text-title-light dark:text-text-title-dark mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {t("About.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-4"
          >
            {t("About.description")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-4"
          >
            {t("About.description2")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-4"
          >
            {t("About.description3")}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-4"
          >
            {t("About.description4")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default SectionWrapper(AboutSection, "about");
