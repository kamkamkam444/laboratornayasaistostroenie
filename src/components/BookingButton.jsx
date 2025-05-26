import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/BookingButton.css';

function BookingButton() {
  const { t } = useTranslation();

  return (
    <Link to="/booking" className="booking-button">
      {t('common.bookNow')}
    </Link>
  );
}

export default BookingButton; 