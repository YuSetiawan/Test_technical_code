import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Home from '../../pages/Home';

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
