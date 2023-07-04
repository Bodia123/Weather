import City from 'components/City/City';
import { App } from 'components/app/App';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from 'utils/routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route path={ROUTES.CITY} element={<City />} />
    </Routes>
  );
};
export default AppRoutes;
