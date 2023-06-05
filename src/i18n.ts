import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import global_en from "./assets/translations/en.json";
import global_es from "./assets/translations/es.json";
import global_fr from "./assets/translations/fr.json";
import global_pt from "./assets/translations/pt.json";

import i18next from "i18next";

const userLS = localStorage.getItem("user");
var language = "en";

if (userLS) {
  const user = JSON.parse(userLS);
  if (user.language) {
    language = user.language;
  }
}

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnNull: false,
    interpolation: { escapeValue: false },
    lng: language,
    resources: {
      en: {
        global: global_en,
      },
      es: {
        global: global_es,
      },
      fr: {
        global: global_fr,
      },
      pt: {
        global: global_pt,
      },
    },
  });

export default i18next;
