import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="language-switcher">
      <button
        className={i18n.language === 'ru' ? 'active' : ''}
        onClick={() => changeLanguage('ru')}
      >
        RU
      </button>
      <button
        className={i18n.language === 'en' ? 'active' : ''}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;