import { Link } from "react-router";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { useEffect, useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { useTheme } from "../context/ThemeProvider ";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const { t } = useTranslation("global");

  const handleChangeLanguage = (lng) => {
    setSelectedLanguage(lng.target.value);
    i18n.changeLanguage(lng.target.value);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <nav
      className={`${styles.paddingX} w-full border border-[#33353F] felx items-center py-5 fixed top-0 z-20 
      bg-background-light dark:bg-background-dark bg-opacity-100 transition-colors duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          // to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            window.scroll(0, 0);
          }}
        >
          <HomeIcon className="h-10 w-10 text-icon-bg-light dark:text-icon-bg-dark" />
        </Link>
        <div className="flex flex-row items-center gap-4">
          <div className="md:w-auto">
            <select
              name="lngSelect"
              id="lngSelect"
              value={selectedLanguage}
              onChange={handleChangeLanguage}
              className="w-full bg-transparent placeholder:text-slate-300 text-text-title-light dark:text-text-title-dark text-sm border border-slate-400 
              rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-200 hover:border-slate-200 shadow-sm focus:shadow-md appearance-none cursor-pointer"
            >
              <option className="text-slate-500" value="en">
                En
              </option>
              <option className="text-slate-500" value="es">
                Es
              </option>
            </select>
          </div>
          <div className="md:w-auto">
            <button
              className="rounded-full border-2 bg-transparent border-icon-bg-light dark:border-bgIcon-dark p-2 
              hover:bg-icon-hover-light dark:hover:bg-icon-hover-dark transition-all"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <MoonIcon className="h-6 w-6" />
              ) : (
                <SunIcon className="h-6 w-6 text-icon-bg-light dark:text-icon-bg-dark" />
              )}
            </button>
          </div>
          <div className="md:w-auto" id="navbar">
            <ul className="list-none hidden sm:flex flex-row gap-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink to={`${link.id}`} title={t(link.titleKey)} />
                </li>
              ))}
            </ul>
          </div>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 y-2 border rounded bg-slate-600 dark:bg-[#121212] border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 y-2 border rounded bg-slate-600 dark:bg-[#121212] border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay link={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;
