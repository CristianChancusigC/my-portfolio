import { TypeAnimation } from "react-type-animation";
import { styles } from "../styles";
import { Link } from "react-router";

const linkCVEn = "./cv/Cristian_Chancusig_CV.pdf";

function HeroSection() {
  const MainIcon = "./images/hero-image.jpg";
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div
          className={`${styles.paddingX} col-span-7 place-self-center text-center sm:text-left mt-10`}
        >
          <h1 className="text-slate-700 mb-4 mt-20 text-4xl sm:text-5xl lg:text-6xl font-extrabold dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary-800 to-secondary-800 dark:bg-gradient-to-br dark:from-primary-400 dark:to-secondary-600">
              Hi, I'm
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Cristian!", 1000, "Developer", 1000, "Cristian!"]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={2}
            />
          </h1>
          <p className="text-slate-600 text-lg mb-6 lg:text-xl dark:text-[#ADB7BE]">
            Software developer with experience in mobile applications and
            educational games, specializing in Unity, C#, and Python. Certified
            Scrum Master (2023) with expertise in agile methodologies and team
            collaboration. Awarded "Best Paper" at MEDES 2022 for contributions
            to computer vision and automation. Fluent in English (B2) and
            Spanish, seeking to grow as a backend or frontend programmer in
            dynamic, innovative projects.
          </p>
          <div>
            <a
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-800 to-secondary-800 hover:bg-slate-200 text-white dark:bg-gradient-to-br 
              dark:from-primary-400 dark:to-secondary-600 dark:hover:bg-slate-200 dark:text-white"
            >
              Hire me
            </a>
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-800 via-primary-800 to-secondary-800 hover:bg-slate-800 text-white mt-3
            dark:bg-gradient-to-br dark:from-blue-500 dark:via-primary-500 dark:to-secondary-500 dark:hover:bg-slate-800 dark:text-white"
            >
              <Link to={linkCVEn} download target="_blank">
                <span className="block bg-slate-300 hover:bg-slate-400 rounded-full px-5 py-2 dark:bg-[#121212] dark:hover:bg-slate-800">
                  Dowloand CV
                </span>
              </Link>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-5 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500] lg:h-[500] relative overflow-hidden">
            <img
              src={MainIcon}
              alt="Cris"
              className="absolute w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
