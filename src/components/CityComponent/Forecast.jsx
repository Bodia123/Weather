import React from 'react';
import css from './CityElement.module.css';

function Forecast({ day }) {
  const { forecastday } = day;
  return (
    <div className={css.forecast}>
      <ul className={css.daysList}>
        {forecastday.map(day => (
          <li key={day.date}>{day.date}</li>
        ))}
      </ul>
      <div className={css.today}></div>
    </div>
  );
}

export default Forecast;
