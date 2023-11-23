import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Listen from './components/Listen';
import Create from './components/Create';

export default function App() {
  return (
    <Suspense fallback="...is loading">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Suspense>
  );
}
