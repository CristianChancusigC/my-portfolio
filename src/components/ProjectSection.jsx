import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { projectsData } from "../constants";
import { motion } from "motion/react";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState("All");
  const { t } = useTranslation("global");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const filterProjects = projectsData.filter((project) =>
    project.tag.includes(selectedTag)
  );

  return (
    <section id="projects" className="scroll-mt-10">
      <motion.h2
        className="text-center text-4xl font-bold text-slate-700 dark:text-white mt-4 mb-8 md:mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        {t("Projects.title")}
      </motion.h2>
      <div className="text-slate-700 dark:text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={handleTagClick}
          isSelected={selectedTag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={handleTagClick}
          isSelected={selectedTag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={handleTagClick}
          isSelected={selectedTag === "Mobile"}
        />
      </div>
      <motion.div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filterProjects.map((project, i) => (
          <motion.div
            initial={{ transform: "translateY(100px)" }}
            whileInView={{ transform: "translateY(0px)" }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.25 }}
            key={project.id}
          >
            <ProjectCard
              key={project.id}
              title={t(project.title)}
              description={t(project.description)}
              imgUrl={project.imgUrl}
              gitUrl={project.gitUrl}
              liveUrl={project.liveUrl}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SectionWrapper(ProjectsSection, "projects");
