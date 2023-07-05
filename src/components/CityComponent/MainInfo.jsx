import React from 'react';
import css from './CityElement.module.css';

function MainInfo({ info }) {
  const { location, current } = info;
  return (
    <div className={css.titleSection}>
      <div className={css.weatherIcon}>
        <img src={current.condition.icon} alt="weatherIcon" />
        <p className={css.tempInfo}>
          {current.condition.text}, <span>{current.temp_c}°</span>
        </p>
        <p className={css.tempInfo}>
          Погода на сьогодні за: {current.last_updated.slice(11, 16)}
        </p>
        <p className={css.tempInfo}>{}</p>
      </div>
      <div className={css.nameSection}>
        <h2 className={css.title}>{location.name}</h2>
        <p className={css.region}>
          {location.region}, {location.country}
        </p>
        <p className={css.tempInfo}>
          Відчувається як: <span>{current.feelslike_c}°</span>
        </p>
      </div>
    </div>
  );
}

export default MainInfo;
