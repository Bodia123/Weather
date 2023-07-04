import CityElement from 'components/CityComponent/CItyElement';
import Home from 'components/home/Home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from 'utils/routes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.CITY} element={<CityElement />} />
    </Routes>
  );
};
export default AppRoutes;
