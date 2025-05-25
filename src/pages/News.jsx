import React from 'react';
import { useTranslation } from 'react-i18next';

function News() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('newsTitle')}</h1>
      <p>{t('newsText')}</p>
    </div>
  );
}

export default News;