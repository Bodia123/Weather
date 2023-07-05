import React from 'react';
import css from './Forecast.module.css';
import DaySection from './DaySection';

function Forecast({ day, onClick }) {
  const { forecastday } = day;
  return (
    <div className={css.forecast}>
      <ul className={css.daysList}>
        {forecastday.map(item => (
          <DaySection item={item} key={item.date_epoch} onClick={onClick} />
        ))}
      </ul>
      <div className={css.today}></div>
    </div>
  );
}

export default Forecast;
