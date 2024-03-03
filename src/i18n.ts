import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// TODO : The detector generate import error in console
// import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // load translation using http (default public/assets/locales/en/translation.json)
  // use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    debug: false, // set debug to true for development (logs in console)
    fallbackLng: 'en', // default language is english
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
