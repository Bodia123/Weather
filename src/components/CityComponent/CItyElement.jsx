import React, { useEffect, useState } from 'react';
import css from './CityElement.module.css';
import { currentForecast } from 'service/forecastAPI';
import { useParams } from 'react-router-dom';
import Forecast from './Forecast/Forecast';
import MainInfo from './MainInfo';
import SingleWeather from './SingleDayWeather/SingleWeather';

function CityElement() {
  const { id } = useParams();
  const [city, setCity] = useState();
  const [selected, setSelected] = useState();
  useEffect(() => {
    currentForecast(id).then(setCity);
  }, [id]);
  console.log(selected);
  return (
    <>
      {city ? (
        <div className={css.container}>
          <MainInfo info={city} />
          {selected && <SingleWeather weather={selected} />}

          <Forecast day={city.forecast} onClick={setSelected} />
        </div>
      ) : (
        'loading'
      )}
    </>
  );
}

export default CityElement;
