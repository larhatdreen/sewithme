import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Добавьте ваши переводы
const resources = {
  en: {
    translation: {
      login: "Login",
      registration: "Registration",
      loginText: '',
      regitrationText: '',
    }
  },
  ru: {
    translation: {
      login: "Вход",
      registration: "Регистрация",
      login_text: 'в личный кабинет',
      regitration_text: 'Заполните форму для регистрации',
      placeholder_email: 'Ваш e-mail',
      placeholder_password: 'Ваш пароль',
      offert: 'Отправляя форму, Вы даете согласие на обработку персональных данных согласно',
      PC: 'политике конфиденциальности',
      forgot_password: 'Забыли пароль?',
      patterns: 'Выкройки',
      video_tutorials: 'Видеоуроки',
      articles: 'Статьи',
      size_chart: 'Таблица размеров',
      bonuses: 'Бонусы',
      certificates: 'Сертификаты',
      contacts: 'Контакты',
      language: 'Язык',
      oops: 'УПС! ЧТО-ТО ПОШЛО НЕ ТАК',
      not_found: 'ЭТОЙ СТРАНИЦЫ НЕ СУЩЕСТВУЕТ',
      back: 'Вернуться',
      on_main_page: 'на главную страницу'
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
    lng: localStorage.getItem('language') || 'ru', // Получение языка из localStorage или 'en' по умолчанию
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
