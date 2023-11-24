import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Listen from './components/Listen/Listen';
import Create from './components/Create/Create';
import Profile from './components/Profile/Profile';
import Favorites from './components/Favorites/Favorites';

export default function App() {
  return (
    <Suspense fallback="...is loading">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/create" element={<Create />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Suspense>
  );
}
