import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./translations-en.json";

i18n.use(initReactI18next).init({
  resources: { en: translationEN },
  supportedLngs: ["es", "en"],
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;