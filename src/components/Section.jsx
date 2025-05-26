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
        <NavLink to="/services">{t('menu.services')}</NavLink>
        <NavLink to="/tours">{t('menu.tours')}</NavLink>
        <NavLink to="/about">{t('menu.about')}</NavLink>
        <NavLink to="/contact">{t('menu.contact')}</NavLink>
        <LanguageSwitcher />
      </nav>
    </section>
  );
}

export default Section;