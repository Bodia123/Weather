import React, { useEffect, useState } from 'react';
import css from './Result.module.css';
import { searchInputApi } from 'service/inputService';
import { Link } from 'react-router-dom';

function Result({ value, reset }) {
  const [result, setResult] = useState([]);
  useEffect(() => {
    searchInputApi(value).then(res => setResult(res));
  }, [value]);
  return (
    <div className={css.resultContainer}>
      {result.length > 0 ? (
        <div className={css.results}>
          {result.map(({ id, name, country, region }) => (
            <div key={id} className={css.resultItem}>
              <Link
                to={`/city/${name}`}
                className={css.link}
                onClick={() => {
                  reset();
                }}
              >
                <p className={css.name}>{name}</p>
                <p className={css.region}>
                  {country}, {region}
                </p>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>Не знайдено!</div>
      )}
    </div>
  );
}

export default Result;
