import React, { useEffect, useState } from 'react';
import css from './CityElement.module.css';
import { currentForecast } from 'service/forecastAPI';
import { useParams } from 'react-router-dom';
import Forecast from './Forecast/Forecast';
import MainInfo from './MainInfo';
import SingleWeather from './SingleDayWeather/SingleWeather';
import Loader from 'components/loading/Loader';

function CityElement() {
  const { id } = useParams();
  const [city, setCity] = useState();
  const [selected, setSelected] = useState();
  useEffect(() => {
    currentForecast(id).then(setCity);
  }, [id]);
  return (
    <>
      {city ? (
        <div className={css.container}>
          <MainInfo info={city} />
          <Forecast day={city.forecast} onClick={setSelected} />
          {selected && <SingleWeather weather={selected} />}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default CityElement;
