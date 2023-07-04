import Header from 'components/header/Header';
import css from 'styles/App.module.css';
import { useState } from 'react';
import AppRoutes from 'Routes/Routes';

export const App = () => {
  const [city, setCity] = useState({});
  console.log(city);
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Header selectSity={setCity} />
        <AppRoutes />
      </div>
    </div>
  );
};
