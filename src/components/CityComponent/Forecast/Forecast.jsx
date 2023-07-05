import React, { useState } from 'react';
import css from './Forecast.module.css';
import DaySection from './DaySection';

function Forecast({ day, onClick }) {
  const [active, setActive] = useState('');
  const classToggle = function (index) {
    if (index === active) {
      return css.activeCityItem;
    }
    return css.cityItem;
  };
  const { forecastday } = day;

  return (
    <div className={css.forecast}>
      <ul className={css.daysList}>
        {forecastday.map((item, index) => (
          <li
            key={index}
            className={classToggle(index)}
            onClick={() => {
              onClick(item);
              setActive(index);
              if (!active) return;
            }}
          >
            <DaySection item={item} />
          </li>
        ))}
      </ul>
      <div className={css.today}></div>
    </div>
  );
}

export default Forecast;
