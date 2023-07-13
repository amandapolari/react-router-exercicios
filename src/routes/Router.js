import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import ErrorPage from '../pages/ErrorPage';
import BiscoitoPage from '../pages/BiscoitoPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile/:name" element={<ProfilePage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="/biscoito" element={<BiscoitoPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
