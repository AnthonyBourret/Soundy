import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Listen from './components/Listen';

export default function App() {
  return (
    <Suspense fallback="...is loading">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listen" element={<Listen />} />
      </Routes>
    </Suspense>
  );
}
