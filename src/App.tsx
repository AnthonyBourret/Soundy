import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Listen from './components/Listen/Listen';
import Create from './components/Create/Create';
import Profile from './components/Profile/Profile';
import Favorites from './components/Favorites/Favorites';

export default function App() {
  // State pour simuler la connexion et l'affcihage du menu en fonction
  const [isConnected, setIsConnected] = useState(false);
  // useEffect vide pour que le re-render des composants se fasse à chaque changement de isConnected
  useEffect(() => {}, [isConnected]);

  return (
    <Suspense fallback="...is loading">
      <Routes>
        <Route path="/" element={<Home isConnected={isConnected} setIsConnected={setIsConnected} />} />
        <Route path="/listen" element={<Listen isConnected={isConnected} />} />
        <Route path="/create" element={<Create isConnected={isConnected} />} />
        <Route path="/profile" element={<Profile isConnected={isConnected} />} />
        <Route path="/favorites" element={<Favorites isConnected={isConnected} />} />
      </Routes>
    </Suspense>
  );
}
