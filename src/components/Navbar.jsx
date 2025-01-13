import { Link } from "react-router";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { useEffect, useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { useTheme } from "../context/ThemeProvider ";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [active, setActive] = useState("");
  // const [isDarkMode, setDarkMode] = useState(true);
  const { isDarkMode, toggleDarkMode } = useTheme();

  // const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [isDarkMode]);
  // const [scrolled, setScrolled] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full border border-[#33353F] felx items-center py-5 fixed top-0 z-20 
      bg-slate-600 dark:bg-[#121212] bg-opacity-100 transition-colors duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          Home
        </Link>
        <div className="sm:flex flex-row items-center gap-4">
          <div className="md:w-auto">
            <button
              className="rounded-full border-2 bg-slate-600 dark:bg-[#121212] border-slate-200 p-2 hover:bg-slate-500 transition-all"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <MoonIcon className="h-6 w-6" />
              ) : (
                <SunIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="md:w-auto" id="navbar">
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((link) => (
                <li key={link.id} onClick={() => setActive(link.title)}>
                  <NavLink to={`${link.id}`} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 y-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 y-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      {navbarOpen ? <MenuOverlay link={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;
