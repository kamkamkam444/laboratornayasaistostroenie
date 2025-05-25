import React from 'react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t('contactPhone')}</p>
      <p>
        WhatsApp: <a href="https://wa.me/79085175043" target="_blank" rel="noopener noreferrer">+7 908 517 50 43</a><br />
        Telegram: <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">@yourtelegram</a>
      </p>
      <form>
        <label>
          Ваш вопрос:<br />
          <textarea rows="3" style={{width: '100%'}} />
        </label>
        <br />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}

export default Contact;