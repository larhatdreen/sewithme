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
      placeholder_name: 'Ваше имя',
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
      on_main_page: 'на главную страницу',
      for_buyers: 'Покупателям',
      delivery: 'Доставка',
      payment: 'Способы оплаты',
      return: 'Возврат',
      email: 'Почта',
      privacy_policy: 'Политика конфиденциальности',
      IE: 'ИП',
      FIO: 'Лебедева Екатерина Герасимовна',
      TIN: 'ИНН',
      MSRNAIE: 'ОГРНИП',
      meta: 'является продуктом компании Meta*, которая является экстремистской организацией, деятельность которой запрещена на территории РФ',
      our_socials: 'Наши соц. сети',
      contact_with_us: 'Свяжитесь с нами',
      reviews_and_suggestions: 'Отзывы и предложения',
      legal_information: 'Юридическая информация',
      saint_petersburg: 'Санкт-Петербург',
      city: 'г',
      about_author: 'ОБ АВТОРЕ',
      about_1: 'Меня зовут Екатерина, и Sewwithme — это отражение моей жизненной истории, где переплелись любовь к шитью, знания психологии и стремление к самовыражению.',
      about_2: 'С детства меня завораживал процесс превращения обычной ткани в уникальные вещи. Швейное техническое образование дало мне крепкую базу знаний, а высшее психологическое помогло понять, насколько глубоко одежда связана с нашей самооценкой и индивидуальностью.',
      about_3: 'Я видела, как многие женщины мечтают о стильном гардеробе, но не решаются шить сами, опасаясь сложностей. Так родилась идея Sewwithme — проекта, который сделает шитье доступным и увлекательным для каждой.',
      where_style: 'ГДЕ СТИЛЬ ОБРЕТАЕТ ФОРМУ',
      professional_lecal: 'Профессиональные лекала',
      professional_text: 'Опыт конструктора одежды и понимание особенностей разных фигур позволяют создавать выкройки с идеальной посадкой.',
      clear_designs: 'Понятные конструкции',
      clear_text: 'Я знаю, как важно чувствовать себя уверенно на каждом этапе пошива, поэтому уделяю особое внимание подробным инструкциям с фотографиями и видеоуроками.',
      current_models: 'Актуальные модели',
      current_text: 'В коллекции Sewwithme вы найдете выкройки современных и стильных моделей, которые помогут вам создать гардероб мечты.',
      way_to_self: 'это ваш путь к самовыражению через творчество, где каждая строчка наполнена любовью к себе.',
      sale: 'СКИДКА',
      on_first_buy: 'НА ПЕРВУЮ ПОКУПКУ',
      first_to_know: 'Узнавайте первыми о новых акциях, скидках и коллекциях',
      get_sale: 'Получить скидку',
      search: 'Поиск',
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
