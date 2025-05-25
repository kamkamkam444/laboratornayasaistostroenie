import React from 'react';
import { useTranslation } from 'react-i18next';

function Products() {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('productsTitle')}</h1>
      <table style={{width: '100%', background: '#fff', color: '#000', borderRadius: 8}}>
        <thead>
          <tr>
            <th>Продукт/Услуга</th>
            <th>Описание</th>
            <th>Цена</th>
            <th>{t('download')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Урок математики</td>
            <td>Индивидуальное занятие</td>
            <td>1000 ₽</td>
            <td><a href="/files/math-lesson.pdf" download>PDF</a></td>
          </tr>
          <tr>
            <td>Консультация</td>
            <td>Онлайн консультация</td>
            <td>1500 ₽</td>
            <td><a href="/files/consultation.pdf" download>PDF</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Products;