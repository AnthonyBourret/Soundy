import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/homePage/Home';
import Listen from './components/listenPage/Listen';
import Background from './components/Background';
import Favorites from './components/favoritesPage/Favorites';
import Create from './components/createPage/Create';
import Profile from './components/profilePage/Profile';

export default function App() {
  // TODO : State for login status => To adjust with redux
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem('AUTH_TOKEN');
    if (token) {
      setIsLogin(true);
    }
  }, []);

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
