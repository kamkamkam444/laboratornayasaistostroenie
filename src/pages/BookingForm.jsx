import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextField, MenuItem, Button, Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import '../styles/BookingForm.css';

function BookingForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: '',
    startDate: null,
    endDate: null,
    comment: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const countries = [
    'Mauritius',
    'Turkey',
    'Russia',
    'Izmir',
    'Istanbul',
    'Antalya',
    'Belek',
    'Bodrum',
    'Divnoe'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleStartDateChange = (date) => {
    setFormData(prevState => ({
      ...prevState,
      startDate: date
    }));
  };

  const handleEndDateChange = (date) => {
    setFormData(prevState => ({
      ...prevState,
      endDate: date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccessPopup(true);
  };

  const handleClosePopup = () => {
    setShowSuccessPopup(false);
    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      country: '',
      startDate: null,
      endDate: null,
      comment: ''
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className="booking-form-container">
        <Typography variant="h4" component="h1" className="form-title">
          {t('booking.title')}
        </Typography>
        <form onSubmit={handleSubmit} className="booking-form">
          <TextField
            fullWidth
            label={t('booking.fullName')}
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            margin="normal"
          />

          <TextField
            fullWidth
            label={t('booking.phone')}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            margin="normal"
          />

          <TextField
            fullWidth
            label={t('booking.email')}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            margin="normal"
          />

          <TextField
            fullWidth
            select
            label={t('booking.country')}
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            margin="normal"
          >
            <MenuItem value="">
              <em>{t('booking.selectCountry')}</em>
            </MenuItem>
            {countries.map(country => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </TextField>

          <Box sx={{ display: 'flex', gap: 2, mt: 2, mb: 2, flexWrap: 'wrap' }}>
            <DatePicker
              label={t('booking.startDate')}
              value={formData.startDate}
              onChange={handleStartDateChange}
              minDate={new Date()}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
            <DatePicker
              label={t('booking.endDate')}
              value={formData.endDate}
              onChange={handleEndDateChange}
              minDate={formData.startDate || new Date()}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Box>

          <TextField
            fullWidth
            label={t('booking.comment')}
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            multiline
            rows={4}
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            className="submit-btn"
          >
            {t('booking.submit')}
          </Button>
        </form>

        {showSuccessPopup && (
          <>
            <div className="success-popup-overlay" onClick={handleClosePopup} />
            <div className="success-popup">
              <h3>Заявка отправлена, спасибо, что доверяете нам!</h3>
              <button onClick={handleClosePopup}>Закрыть</button>
            </div>
          </>
        )}
      </Box>
    </LocalizationProvider>
  );
}

export default BookingForm; 