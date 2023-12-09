import React, { Suspense, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/homePage/Home';
import Listen from './components/listenPage/Listen';
import Background from './components/Background';
import Favorites from './components/favoritesPage/Favorites';
import Create from './components/createPage/Create';
import Profile from './components/profilePage/Profile';

export default function App() {
  // State for login status => To delete
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <Suspense fallback="...is loading">
      <Background />
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path="/listen" element={<Listen isLogin={isLogin} />} />
        <Route path="/favorites" element={<Favorites isLogin={isLogin} />} />
        <Route path="/create" element={<Create isLogin={isLogin} />} />
        <Route path="/profile" element={<Profile isLogin={isLogin} />} />
      </Routes>
    </Suspense>
  );
}
