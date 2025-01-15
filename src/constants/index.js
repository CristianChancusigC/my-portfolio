const gitIcon = "./images/github-icon-2.svg";
const MainIcon = "./images/hero-image.jpg";
const pythonIcon = "./images/python-icon.svg";
const jsIcon = "./images/javascript-icon.svg";
const reactIcon = "./images/react-icon.svg";
const cSharpIcon = "./images/c-sharp-icon.svg";
const unityIcon = "./images/unity-icon.svg";

// Img Projects
const sgnImg = "./images/projects/signbreak.png";
const oznImg = "./images/projects/operazone.png";
const portfolioImg = "./images/projects/portfolio-img.png";
const appCellImg = "./images/projects/appCell.png";

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
    imgUrl: portfolioImg,
    gitUrl: "",
    liveUrl: "https://cristianchancusigc.github.io/my-portfolio/",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Projects.prj2.title",
    description: "Projects.prj2.description",
    imgUrl: appCellImg,
    gitUrl: "https://github.com/CristianChancusigC/Location.git",
    liveUrl: "",
    tag: ["All", "Mobile"],
  },
  // {
  //   id: 3,
  //   title: "Signbreak",
  //   description: "Juego para aprender matemáticas",
  //   imgUrl: sgnImg,
  //   gitUrl: "",
  //   liveUrl:
  //     "https://play.google.com/store/apps/details?id=com.ngxseemon.signbreak",
  //   tag: ["All", "Mobile"],
  // },
  // {
  //   id: 2,
  //   title: "Operazone",
  //   description: "Juego para aprender matemáticas",
  //   imgUrl: oznImg,
  //   gitUrl: "",
  //   liveUrl:
  //     "https://play.google.com/store/apps/details?id=com.ngxseemon.Operazone",
  //   tag: ["All", "Mobile"],
  // },
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
