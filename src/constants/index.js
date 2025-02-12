const gitIcon = "./images/github-icon-2.svg";
const pythonIcon = "./images/python-icon.svg";
const jsIcon = "./images/javascript-icon.svg";
const reactIcon = "./images/react-icon.svg";
const cSharpIcon = "./images/c-sharp-icon.svg";
const unityIcon = "./images/unity-icon.svg";

// Img Projects
const workImg = "./images/projects/work.webp";
const classifierImg = "./images/projects/classifier.webp";
const portfolioImg = "./images/projects/portfolio-img.png";
const appCellImg = "./images/projects/appCell.webp";
const searchFilmImg = "./images/projects/project3.webp";

const navLinks = [
  {
    id: "about",
    titleKey: "NavBar.aboutBtn",
  },
  {
    id: "projects",
    titleKey: "NavBar.projectBtn",
  },
  {
    id: "contact",
    titleKey: "NavBar.contactBtn",
  },
];

const experiences = [
  {
    title: "Experience.exp1.title",
    company_name: "Pinprexat",
    icon: gitIcon,
    iconBg: "#383E56",
    date: "Experience.exp1.date",
    points: [
      "Experience.exp1.points.p1",
      "Experience.exp1.points.p2",
      "Experience.exp1.points.p3",
    ],
  },
  {
    title: "Experience.exp2.title",
    company_name: "Freelancer",
    icon: gitIcon,
    iconBg: "#E6DEDD",
    date: "Experience.exp2.date",
    points: [
      "Experience.exp2.points.p1",
      "Experience.exp2.points.p2",
      "Experience.exp2.points.p3",
      "Experience.exp2.points.p4",
    ],
  },
  {
    title: "Experience.exp2.title",
    company_name: "NGXSeemon",
    icon: gitIcon,
    iconBg: "#383E56",
    date: "Experience.exp3.date",
    points: [
      "Experience.exp3.points.p1",
      "Experience.exp3.points.p2",
      "Experience.exp3.points.p3",
      "Experience.exp3.points.p4",
      "Experience.exp3.points.p5",
      "Experience.exp3.points.p6",
      "Experience.exp3.points.p7",
    ],
  },
];

const projectsData = [
  {
    id: 1,
    title: "Projects.prj1.title",
    description: "Projects.prj1.description",
    imgUrl: classifierImg,
    gitUrl: "https://medes.sigappfr.org/22/best-papers/",
    liveUrl: "https://dl.acm.org/doi/10.1145/3508397.3564828",
    technologies: ["Python", "Django", "Azure Computer Vison", "Firebase"],
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Projects.prj2.title",
    description: "Projects.prj2.description",
    imgUrl: workImg,
    gitUrl: "",
    liveUrl: "https://play.google.com/store/apps/developer?id=NgxSeemon&hl=en",
    technologies: ["C#", "Unity", "PlayFab", "Firebase"],
    tag: ["All", "Mobile"],
  },
  {
    id: 3,
    title: "Projects.prj3.title",
    description: "Projects.prj3.description",
    imgUrl: searchFilmImg,
    gitUrl: "https://github.com/CristianChancusigC/film-search",
    liveUrl: "https://cristianchancusigc.github.io/film-search/",
    technologies: ["React", "Tailwind CSS"],
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Projects.prj4.title",
    description: "Projects.prj4.description",
    imgUrl: appCellImg,
    gitUrl: "https://github.com/CristianChancusigC/Location.git",
    liveUrl: "",
    technologies: ["Kotlin", "Jetpack Compose"],
    tag: ["All", "Mobile"],
  },
];

const skilsTech = [
  {
    name: "Python",
    icon: pythonIcon,
  },
  {
    name: "JavaScript",
    icon: jsIcon,
  },
  {
    name: "React JS",
    icon: reactIcon,
  },
  {
    name: "git",
    icon: gitIcon,
  },
  {
    name: "c#",
    icon: cSharpIcon,
  },
  {
    name: "Unity",
    icon: unityIcon,
  },
];

export { navLinks, experiences, projectsData, skilsTech };
