import React, { useEffect, useState } from 'react';
import css from './CityElement.module.css';
import { currentForecast } from 'service/forecastAPI';
import { useParams } from 'react-router-dom';

function CityElement() {
  const { id } = useParams();
  const [city, setCity] = useState();
  useEffect(() => {
    currentForecast(id).then(setCity);
  }, [id]);

  return (
    <>
      {city ? (
        <div className={css.container}>
          <div className={css.titleSection}>
            <div className={css.weatherIcon}>
              <img src={city.current.condition.icon} alt="weatherIcon" />
              <p>
                {city.current.condition.text}, {city.current.temp_c}°
              </p>
            </div>
            <div className={css.nameSection}>
              <h2 className={css.title}>{city.location.name}</h2>
              <p className={css.region}>
                {city.location.region}, {city.location.country}
              </p>
              <p> Відчувається як: {city.current.feelslike_c}°</p>
            </div>
          </div>
          <div className={css.forecast}>
            <div className={css.today}></div>
          </div>
        </div>
      ) : (
        'loading'
      )}
    </>
  );
}

export default CityElement;
