import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="contact-page">
      <h1 className="contact-title">{t('contact.title')}</h1>
      <div className="contact-info">
        <p className="contact-phone">{t('contact.phone')}</p>
        <p className="contact-email">{t('contact.email')}</p>
        <p className="contact-address">{t('contact.address')}</p>
        <div className="contact-hours">
          <p>{t('contact.weekdays')}</p>
          <p>{t('contact.weekend')}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact; 