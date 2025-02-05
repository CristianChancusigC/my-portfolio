import { CodeBracketIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import { motion } from "motion/react";

function ProjectCard({
  imgUrl,
  title,
  description,
  gitUrl,
  liveUrl,
  technologies,
}) {
  return (
    <motion.div
      whileHover={{ scale: [null, 1.05, 1.05] }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-card-bg-light dark:bg-card-bg-dark 
        bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 rounded-t-xl"
        >
          {gitUrl && (
            <Link
              to={gitUrl}
              target="_blank"
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" />
            </Link>
          )}
          {liveUrl && (
            <Link
              to={liveUrl}
              target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <GlobeAltIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-2 bg-card-bg-light dark:bg-card-bg-dark py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
        <div className="mt-8 flex flex-row gap-3">
          {technologies.map((tech, i) => (
            <div key={i} className="border-b">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
