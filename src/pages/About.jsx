import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('aboutTitle')}</h1>
      {/* Здесь можно добавить описание достижений автора */}
    </div>
  );
}

export default About;