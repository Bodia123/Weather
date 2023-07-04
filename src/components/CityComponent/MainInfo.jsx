import React from 'react';
import css from './CityElement.module.css';

function MainInfo({ info }) {
  const { location, current } = info;
  return (
    <div className={css.titleSection}>
      <div className={css.weatherIcon}>
        <img src={current.condition.icon} alt="weatherIcon" />
        <p>
          {current.condition.text}, {current.temp_c}°
        </p>
      </div>
      <div className={css.nameSection}>
        <h2 className={css.title}>{location.name}</h2>
        <p className={css.region}>
          {location.region}, {location.country}
        </p>
        <p> Відчувається як: {current.feelslike_c}°</p>
      </div>
    </div>
  );
}

export default MainInfo;
