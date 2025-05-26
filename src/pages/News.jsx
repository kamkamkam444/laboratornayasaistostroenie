import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import '../styles/News.css';

// Import images
import marriedImage from '../assets/married.jpg'; // Assuming married.jpg is in src/assets
import cullinanBelekImage from '../assets/Cullinan_Belek.jpg'; // Assuming Cullinan_Belek.jpg is in src/assets
import parkHotelImage from '../assets/Divnoe.jpg'; // Assuming Divnoe.jpg is in src/assets

// Define news data
export const newsItems = [
  {
    id: 'married',
    titleKey: 'news.married.title',
    image: marriedImage,
    previewTextKey: 'news.married.previewText',
    fullContentKey: 'news.married.fullContent'
  },
  {
    id: 'cullinanBelek',
    titleKey: 'news.cullinanBelek.title',
    image: cullinanBelekImage,
    previewTextKey: 'news.cullinanBelek.previewText',
    fullContentKey: 'news.cullinanBelek.fullContent'
  },
  {
    id: 'parkHotel',
    titleKey: 'news.parkHotel.title',
    image: parkHotelImage,
    previewTextKey: 'news.parkHotel.previewText',
    fullContentKey: 'news.parkHotel.fullContent'
  },
];

function News() {
  const { t } = useTranslation(); // Use the hook
  return (
    <div className="news-grid-container">
      <h1 className="news-page-title">{t('news.pageTitle')}</h1>
      <div className="news-grid">
        {newsItems.map(item => (
          <Link to={`/news/${item.id}`} key={item.id} className="news-item-preview">
            <img src={item.image} alt={t(item.titleKey)} className="news-preview-image" />
            <div className="news-preview-content">
              <h3>{t(item.titleKey)}</h3>
              <p>{t(item.previewTextKey)}</p>
              <span className="read-more">{t('news.readMore')}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default News;