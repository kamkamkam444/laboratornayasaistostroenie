import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import logoPng from '../images/logo.png'; // Assuming logo.png is in src/images
import BookingButton from '../components/BookingButton';
import './About.css';

function About() {
  const { t } = useTranslation(); // Use the hook
  return (
    <div className="about-page-content">
      <div className="about-text-section">
        <h1 className="about-heading">{t('aboutPage.heading')}</h1>
        <p>{t('aboutPage.paragraph1')}</p>
        <p>{t('aboutPage.paragraph2')}</p>
        <div className="booking-button-container">
          <BookingButton />
        </div>
      </div>
      <div className="about-image-section">
        <img src={logoPng} alt="Kaleidoscope Logo" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  );
}

export default About;