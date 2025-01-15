import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "en",
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
    },
  });

export default i18n;
