import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

function Section() {
  const { t } = useTranslation();
  return (
    <section>
      <nav className="menu">
        <NavLink to="/news">{t('menu.news')}</NavLink>
        <NavLink to="/about">{t('menu.about')}</NavLink>
        <NavLink to="/contact">{t('menu.contact')}</NavLink>
        <NavLink to="/services">{t('menu.services')}</NavLink>
        <NavLink to="/tours">{t('menu.tours')}</NavLink>
      </nav>
      <div>
        <div className="banners">{t('banners')}</div>
        <LanguageSwitcher />
      </div>
    </section>
  );
}

export default Section;