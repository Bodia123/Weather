import React from 'react';
import css from './Logo.module.css';
import logoPicture from 'images/logo.png';
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to={`/`}>
      <img src={logoPicture} alt="logo" className={css.logo} />
    </Link>
  );
}

export default Logo;
