import React from 'react';
import css from './Input.module.css';
function Input({ onChange, value }) {
  const handleChange = e => {
    onChange(e.currentTarget.value);
  };
  return (
    <div className={css.searchContainer}>
      <form className={css.form}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          name="search"
          onChange={handleChange}
          value={value}
        />
      </form>
    </div>
  );
}

export default Input;
