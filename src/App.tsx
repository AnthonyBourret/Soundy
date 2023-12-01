import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/homePage/Home';
import Listen from './components/listenPage/Listen';
import Favorites from './components/favoritesPage/Favorites';
import Create from './components/createPage/Create';
import Profile from './components/profilePage/Profile';

export default function App() {
  return (
    <Suspense fallback="...is loading">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Suspense>
  );
}
