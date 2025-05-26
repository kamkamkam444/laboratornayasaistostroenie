import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/services.css';

function Services() {
  const { t } = useTranslation();

  const services = [
    {
      id: 'tours',
      titleKey: 'services.tours.title',
      descriptionKey: 'services.tours.description'
    },
    {
      id: 'visa',
      titleKey: 'services.visa.title',
      descriptionKey: 'services.visa.description'
    },
    {
      id: 'insurance',
      titleKey: 'services.insurance.title',
      descriptionKey: 'services.insurance.description'
    },
    {
      id: 'transfers',
      titleKey: 'services.transfers.title',
      descriptionKey: 'services.transfers.description'
    },
    {
      id: 'excursions',
      titleKey: 'services.excursions.title',
      descriptionKey: 'services.excursions.description'
    },
    {
      id: 'hotels',
      titleKey: 'services.hotels.title',
      descriptionKey: 'services.hotels.description'
    }
  ];

  return (
    <div className="services-container">
      <h1>{t('services.title')}</h1>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <h2>{t(service.titleKey)}</h2>
            <p>{t(service.descriptionKey)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services; 