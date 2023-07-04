import React, { useEffect, useState } from 'react';
import { searchInputApi } from 'service/inputService';
import css from 'styles/header/Header.module.css';

import { Link } from 'react-router-dom';

//components
// import logoPicture from 'images/logo.png';
// import ROUTES from 'utils/routes';

function Header({ selectSity }) {
  const [inputValue, setInputValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const handleInputChange = event => {
    setInputValue(event.currentTarget.value);
  };

  useEffect(() => {
    if (!inputValue) return;

    searchInputApi(inputValue).then(res => setSearchResult(res));
  }, [inputValue]);
  return (
    <header className={css.header}>
      <div className={css.wrapper}>
        {/* <Link to={ROUTES.HOME}>
          <img src={logoPicture} alt="logo" className={css.logo} />
        </Link> */}
      </div>
      <form>
        <div>
          <input
            placeholder="Введіть назву міста"
            type="text"
            name="search"
            autoComplete="off"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </form>
      {inputValue.length !== 0 && (
        <div className={css.wrapper}>
          {searchResult.length > 0 ? (
            searchResult.map(({ id, name, region, country }) => (
              <div
                className={css.itemContainer}
                key={id}
                onClick={() => setInputValue('')}
              >
                <Link to={`/city/${id}`} className={css.item}>
                  <p className={css.name}>{name}</p>
                  <p className={css.region}>
                    {region}, {country}
                  </p>
                </Link>
              </div>
            ))
          ) : (
            <div className={css.noResult}>NoResult</div>
          )}
        </div>
      )}
    </header>
  );
}

export default Header;
