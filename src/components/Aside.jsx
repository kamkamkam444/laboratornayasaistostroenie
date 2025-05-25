import React from 'react';
import { useTranslation } from 'react-i18next';

function Aside() {
  const { t } = useTranslation();
  return (
    <aside>
      <div className="tag-cloud">{t('tagCloud')}</div>
      <div className="banners">{t('banners')}</div>
    </aside>
  );
}

export default Aside;