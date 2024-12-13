import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Добавьте ваши переводы
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our application!",
      language: "Language"
    }
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать в наше приложение!",
      language: "Язык"
    }
  },
};

i18n
  .use(LanguageDetector) // Автоопределение языка
  .use(initReactI18next) // Интеграция с React
  .init({
    resources,
    fallbackLng: 'ru', // Язык по умолчанию, если не удается определить язык
    interpolation: {
      escapeValue: false, // React автоматически экранирует строки
    },
    lng: localStorage.getItem('language') || 'en', // Получение языка из localStorage или 'en' по умолчанию
    detection: {
      // Параметры для автоопределения языка
      order: ['localStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'], // Кэшировать выбранный язык в localStorage
    },
  });

// Сохранение выбранного языка в localStorage при его изменении
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
