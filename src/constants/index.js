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
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Embedded Systems Developer",
    company_name: "Pinprexat",
    icon: gitIcon,
    iconBg: "#383E56",
    date: "November 2021 - January 2022",
    points: [
      "Design and develop a human-machine interface (HMI) to display weight values from scales.",
      "Create a program capable of reading data from scales, managing variations in data order through dynamic identification and extraction of relevant information.",
      "Collect and organize data for comprehensive analysis of weight measurements across scales.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Freelancer",
    icon: gitIcon,
    iconBg: "#E6DEDD",
    date: "December 2023 - February 2024",
    points: [
      "Develop a network monitoring application using Kotlin, enabling real-time signal supervision.",
      "Collect and process real-time signal data for enhanced analysis and decision-making.",
      "Store collected data in flat files, ensuring efficient retrieval for subsequent analysis.",
      "Design an intuitive and user-friendly interface to improve usability and enhance user experience.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "NGXSeemon",
    icon: gitIcon,
    iconBg: "#383E56",
    date: " September 2022 - November 2024",
    points: [
      "Design and program mechanics for mobile games using Unity and C#, including optimizing development times with Scriptable Objects, reducing level creation time from 4 hours to less than 2 hours per level.",
      "Develop responsive UI and language-switching systems for mobile applications, while implementing key functionalities such as login systems with Google and PlayFab.",
      "Configure and use the PlayFab SDK to integrate cloud storage, account management, and in-app purchases with Unity IAP, achieving an effective monetization strategy.",
      "Implement local save systems with serialized JSON files, ensuring sub-1-second save times and enhancing user experience.",
      "Resolve compatibility issues during the compilation and distribution of applications on the Google Play Store, ensuring functionality on Android devices.",
      "Use Git for version control and set up organized workflows on GitHub with dedicated branches for development, testing, and production, ensuring code stability.",
      "Work under the Scrum methodology to promote team collaboration and optimize project development.",
    ],
  },
];

const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    description: "This is my portfolio",
    imgUrl: portfolioImg,
    gitUrl: "",
    liveUrl: "https://cristianchancusigc.github.io/my-portfolio/",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Get Data",
    description: "App for to get a information of signal",
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
