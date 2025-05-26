import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/tours.css';

// Import images
import izmirImage from '../images/Izmir.jpeg';
import stambulImage from '../images/Stambul.png';
import antaliaImage from '../images/Antalia.jpg';
import belekImage from '../images/Belek.jpg';
import bodrumImage from '../images/Bodrum.jpg';
import divnoeImage from '../images/Divnoe.jpg';

function Tours() {
  const { t } = useTranslation();

  const tours = [
    {
      id: 'izmir',
      titleKey: 'tours.izmir.title',
      image: izmirImage,
      previewTextKey: 'tours.izmir.previewText'
    },
    {
      id: 'stambul',
      titleKey: 'tours.stambul.title',
      image: stambulImage,
      previewTextKey: 'tours.stambul.previewText'
    },
    {
      id: 'antalia',
      titleKey: 'tours.antalia.title',
      image: antaliaImage,
      previewTextKey: 'tours.antalia.previewText'
    },
    {
      id: 'belek',
      titleKey: 'tours.belek.title',
      image: belekImage,
      previewTextKey: 'tours.belek.previewText'
    },
    {
      id: 'bodrum',
      titleKey: 'tours.bodrum.title',
      image: bodrumImage,
      previewTextKey: 'tours.bodrum.previewText'
    },
    {
      id: 'divnoe',
      titleKey: 'tours.divnoe.title',
      image: divnoeImage,
      previewTextKey: 'tours.divnoe.previewText'
    }
  ];

  return (
    <div className="tours-container">
      <h1>{t('tours.title')}</h1>
      <div className="tours-grid">
        {tours.map(tour => (
          <Link to={`/tours/${tour.id}`} key={tour.id} className="tour-card">
            <img src={tour.image} alt={t(tour.titleKey)} className="tour-image" />
            <div className="tour-content">
              <h2>{t(tour.titleKey)}</h2>
              <p>{t(tour.previewTextKey)}</p>
              <span className="read-more">{t('tours.readMore')}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tours; 