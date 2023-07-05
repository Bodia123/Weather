import React from 'react';
import css from './SingleWeather.module.css';
import { unixToWeekDay } from 'service/time';

function SingleWeather({ weather }) {
  const { day, hour } = weather;
  return (
    <div className={css.weatherContainer}>
      <div className={css.otherInfo}>
        <p className={css.title}>
          Погода на {unixToWeekDay(weather.date_epoch)}
        </p>
        <ul className={css.listWeather}>
          <li className={css.listItem}>
            <p>
              Швидкість вітру: <span>{day.maxwind_kph} км\год</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p>
              Ймовірність дощу: <span>{day.daily_chance_of_rain} %</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p>
              Вологість: <span>{day.avghumidity} %</span>
            </p>
          </li>
          <li className={css.listItem}>
            <p>
              Видимість: <span>{day.avgvis_km} км</span>
            </p>
          </li>
        </ul>
      </div>
      <div className={css.forecastTable}>
        <p className={css.forecastTitle}>Погода погодинно</p>
        <ul className={css.hourList}>
          {hour.map((item, index) => {
            if (
              index === 0 ||
              index === 3 ||
              index === 6 ||
              index === 9 ||
              index === 12 ||
              index === 15 ||
              index === 18 ||
              index === 21
            ) {
              return (
                <li key={index} className={css.hourItem}>
                  <p className={css.timeCount}> {item.time.slice(11, 16)}</p>
                  <p>{item.temp_c}°</p>
                  <img
                    src={item.condition.icon}
                    alt={item.condition.text}
                    className={css.Icon}
                  />

                  {item.will_it_rain === 1 && (
                    <p className={css.willRain}>можливий дощ</p>
                  )}
                  <p>швидкість вітру:{item.wind_kph} км\год</p>
                </li>
              );
            }
            // eslint-disable-next-line array-callback-return
            return;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SingleWeather;
