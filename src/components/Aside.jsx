import React from 'react';
import { useTranslation } from 'react-i18next';
import vkIcon from '../assets/VK.png';
import telegramIcon from '../assets/Telegram.png';
import dzenIcon from '../assets/Dzen.png';
import odnoklassnikiIcon from '../assets/Odnoklassniki.png';

function Aside() {
  const { t } = useTranslation();
  return (
    <aside>
      <div className="tag-cloud">
        <h3>{t('aside.authorsHeading')}</h3>
        <p>{t('aside.author1')}</p>
        <p>{t('aside.author2')}</p>
        <p>{t('aside.author3')}</p>
        <p>{t('aside.author4')}</p>
        <p>{t('aside.author5')}</p>
        <p>{t('aside.group')}</p>
      </div>
      <div className="banners">
        <h3>{t('aside.socialMediaHeading')}</h3>
        <div className="social-icons-container">
          {/* Social media icons - REPLACE WITH ACTUAL LINKS */}
          <a href="https://vk.com/your_page"><img src={vkIcon} alt="VK" style={{ width: '30px', height: '30px' }} /></a>
          <a href="https://t.me/your_page"><img src={telegramIcon} alt="Telegram" style={{ width: '30px', height: '30px' }} /></a>
          <a href="https://dzen.ru/your_channel"><img src={dzenIcon} alt="Dzen" style={{ width: '30px', height: '30px' }} /></a>
          <a href="https://ok.ru/your_page"><img src={odnoklassnikiIcon} alt="Odnoklassniki" style={{ width: '30px', height: '30px' }} /></a>
        </div>
      </div>
    </aside>
  );
}

export default Aside;