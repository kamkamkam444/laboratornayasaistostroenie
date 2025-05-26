import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BookingButton from '../components/BookingButton';
import '../styles/NewsDetail.css';

// Import images
import marriedImage from '../assets/married.jpg';
import cullinanBelekImage from '../assets/Cullinan_Belek.jpg';
import parkHotelImage from '../assets/Divnoe.jpg';

const imageMap = {
  'married': marriedImage,
  'cullinanBelek': cullinanBelekImage,
  'parkHotel': parkHotelImage,
};

function NewsDetail() {
  const { newsId } = useParams();
  const { t } = useTranslation();

  // Get the base key for this news
  const baseKey = `news.${newsId}`;

  return (
    <div className="news-detail-container">
      <h2>{t(`${baseKey}.fullContent.heading`)}</h2>
      
      <img 
        src={imageMap[newsId]} 
        alt={t(`${baseKey}.title`)} 
        className="news-detail-image" 
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

export default NewsDetail; 