import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/homePage/Home';
import Listen from './components/Listen';
import Background from './components/Background';

export default function App() {
  return (
    <Suspense fallback="...is loading">
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listen" element={<Listen />} />
      </Routes>
    </Suspense>
  );
}
