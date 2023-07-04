import React from 'react';
import css from './App.module.css';
import Header from 'components/header/Header';
import AppRoutes from 'Routes/Routes';

function App() {
  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <Header />
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;
