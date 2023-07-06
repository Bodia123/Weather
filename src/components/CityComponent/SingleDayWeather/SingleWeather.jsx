import React from 'react';
import css from './SingleWeather.module.css';
import { unixToWeekDay } from 'service/time';

function SingleWeather({ weather }) {
  const { day, hour, astro } = weather;
  return (
    <div className={css.weatherContainer}>
      <p className={css.forecastTitle}>Погода погодинно</p>
      <div className={css.forecastTable}>
        <div className={css.startInfo}>
          <div className={css.lilBlock}>
            <p>
              Світанок:
              <br /> {astro.sunrise}
            </p>
            <p>
              Захід:
              <br /> {astro.sunset}
            </p>
          </div>
          <p className={css.willTemp}>Температура</p>
          <p className={css.willRain}>Ймовірність дощу</p>
          <p className={css.willWind}>Вітер</p>
          <p className={css.willHumidity}>Вологість</p>
          <p className={css.willPressure}>Тиск</p>
        </div>
        <div className={css.hourListContainer}>
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
                index === 21 ||
                index === 23
              ) {
                return (
                  <li key={index} className={css.hourItem}>
                    <p className={css.timeCount}> {item.time.slice(11, 16)}</p>
                    <img
                      src={item.condition.icon}
                      alt={item.condition.text}
                      className={css.Icon}
                    />
                    <p className={css.infoTemp}>{item.temp_c}°</p>
                    <p className={css.infoRain}> {item.chance_of_rain}%</p>
                    <p className={css.infoWind}> {item.wind_kph}км\год</p>
                    <p className={css.infoHumidity}> {item.humidity}%</p>
                    <p className={css.infoPressure}> {item.pressure_mb} мм</p>
                  </li>
                );
              }
              // eslint-disable-next-line array-callback-return
              return;
            })}
          </ul>
        </div>
      </div>
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
          <li className={css.listItem}>
            <p>
              Схід місяця:{' '}
              <span>
                {astro.moonrise.length !== 11
                  ? astro.moonrise
                  : 'інформація відсутня'}
              </span>
            </p>
          </li>
          <li className={css.listItem}>
            <p>
              Захід місяця: <span>{astro.moonset} </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SingleWeather;
