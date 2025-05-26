import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BookingButton from '../components/BookingButton';
import '../styles/tours.css';

// Import images
import izmirImage from '../assets/Izmir.jpeg';
import stambulImage from '../assets/Stambul.png';
import antaliaImage from '../assets/Antalia.jpg';
import belekImage from '../assets/Belek.jpg';
import bodrumImage from '../assets/Bodrum.jpg';
import divnoeImage from '../assets/Divnoe.jpg';

const imageMap = {
  'izmir': izmirImage,
  'stambul': stambulImage,
  'antalia': antaliaImage,
  'belek': belekImage,
  'bodrum': bodrumImage,
  'divnoe': divnoeImage,
};

function TourDetail() {
  const { tourId } = useParams();
  const { t } = useTranslation();

  // Get the base key for this tour
  const baseKey = `tours.${tourId}`;

  return (
    <div className="tour-detail-container">
      <h2>{t(`${baseKey}.fullContent.heading`)}</h2>
      
      <img 
        src={imageMap[tourId]} 
        alt={t(`${baseKey}.title`)} 
        className="tour-detail-image" 
      />
      
      <p>{t(`${baseKey}.fullContent.paragraph1`)}</p>
      {t(`${baseKey}.fullContent.paragraph2`) && <p>{t(`${baseKey}.fullContent.paragraph2`)}</p>}

      <h3>{t(`${baseKey}.fullContent.conditionsHeading`)}</h3>
      <p dangerouslySetInnerHTML={{ __html: t(`${baseKey}.fullContent.conditions`) }}></p>

      {t(`${baseKey}.fullContent.dates`) && (
        <p dangerouslySetInnerHTML={{ __html: t(`${baseKey}.fullContent.dates`) }}></p>
      )}

      {t(`${baseKey}.fullContent.notesHeading`) && (
        <>
          <h3>{t(`${baseKey}.fullContent.notesHeading`)}</h3>
          <p dangerouslySetInnerHTML={{ __html: t(`${baseKey}.fullContent.notes`) }}></p>
        </>
      )}

      <div className="booking-button-container">
        <BookingButton />
      </div>
    </div>
  );
}

export default TourDetail; 