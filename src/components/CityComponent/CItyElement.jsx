import React, { useEffect, useState } from 'react';
import css from './CityElement.module.css';
import { currentForecast } from 'service/forecastAPI';
import { useParams } from 'react-router-dom';
import Forecast from './Forecast';
import MainInfo from './MainInfo';

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
          <MainInfo info={city} />
          <Forecast day={city.forecast} />
        </div>
      ) : (
        'loading'
      )}
    </>
  );
}

export default CityElement;
