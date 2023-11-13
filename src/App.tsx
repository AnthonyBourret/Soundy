import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Listen from './components/Listen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listen" element={<Listen />} />
    </Routes>
  );
}

export default App;
