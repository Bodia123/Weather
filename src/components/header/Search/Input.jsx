import React from 'react';

function Input({ onChange, value }) {
  const handleChange = e => {
    onChange(e.currentTarget.value);
  };
  return (
    <div>
      <form action="">
        <input
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
