// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationKO from './locales/ko/translation.json';

// Get language from localStorage or default to 'en'
const savedLanguage = localStorage.getItem('language') || 'en';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  ko: {
    translation: translationKO
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: savedLanguage, // default language
    fallbackLng: 'en',

    keySeparator: '.', // we use keys in the form "navbar.home"

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

// Listen for language changes and save to localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
