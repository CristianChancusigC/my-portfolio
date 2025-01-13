import { BrowserRouter } from "react-router";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectSection";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import { ThemeProvider } from "./context/ThemeProvider ";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="relative z- bg-slate-300 dark:bg-[#121212] transition-colors duration-300">
          <div className="bg-cover bg-no-repeat bg-center">
            <Navbar />
          </div>
          <HeroSection />
          <AboutSection />
          <Experience />
          <Tech />
          <ProjectsSection />
          <div className="relative z-0">
            <EmailSection />
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
