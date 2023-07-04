import React, { useState } from 'react';
import css from './Header.module.css';
//components
import Logo from './Logo/Logo';
import Input from './Search/Input';
import Result from './Result/Result';

function Header() {
  const [value, setValue] = useState('');

  return (
    <div className={css.header}>
      <div className={css.searchBar}>
        <Logo />
        <Input onChange={setValue} value={value} />
      </div>
      {value && (
        <Result
          value={value}
          reset={() => {
            setValue('');
          }}
        />
      )}
    </div>
  );
}

export default Header;
