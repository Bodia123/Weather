import React from 'react';
import css from './Forecast.module.css';
import { unixToWeekDay } from 'service/time';

function DaySection({ item }) {
  return (
    <div className={css.dayContainer}>
      <p className={css.title}>{unixToWeekDay(item.date_epoch)}</p>

      <div className={css.weatherIconContainer}>
        <img src={item.day.condition.icon} alt="weatherIcon" />
        <div>
          <p className={css.weatherName}>{item.day.condition.text}</p>
        </div>
      </div>
      <p className={css.weatherName}>
        Мінамальна: <span>{item.day.mintemp_c}°</span>
      </p>
      <p className={css.weatherName}>
        Середня: <span>{item.day.avgtemp_c}°</span>
      </p>
      <p className={css.weatherName}>
        Максимальна: <span>{item.day.maxtemp_c}°</span>
      </p>
    </div>
  );
}

export default DaySection;
