import React from 'react';
import css from './Logo.module.css';
import logoPicture from 'images/logo.png';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className={css.logoContainer}>
      <Link to={`/`} className={css.link}>
        <img src={logoPicture} alt="logo" className={css.logo} />
        <p>Weather</p>
      </Link>
    </div>
  );
}

export default Logo;
