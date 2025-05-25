import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  return (
    <header>
      {t('header')}
    </header>
  );
}

export default Header;