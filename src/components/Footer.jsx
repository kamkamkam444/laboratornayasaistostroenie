import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      {t('footer')}
    </footer>
  );
}

export default Footer;