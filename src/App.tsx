import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/homePage/Home';
import Listen from './components/listenPage/Listen';
import Background from './components/Background';
import Favorites from './components/favoritesPage/Favorites';
import Create from './components/createPage/Create';
import Profile from './components/profilePage/Profile';
// import getUsersFromToken from './helpers/getUserInfosFromToken';
import { useAppSelector } from './redux';

export default function App() {
  // TODO : State for login status => To adjust with redux
  const [isLogin, setIsLogin] = useState<boolean>(false);
  // const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.user.token);

  useEffect(() => {
    if (token == null) {
      setIsLogin(false);
    }

    if (token) {
      setIsLogin(true);
      // const userInfos = getUsersFromToken(token);
      // setName(userInfos);
      // WIP setup other user infos
    }
  }, [token]);

  return (
    <Suspense fallback="...is loading">
      <Background />
      <Routes>
        <Route path="/" element={<Home isLogin={isLogin} />} />
        <Route path="/listen" element={<Listen isLogin={isLogin} />} />
        <Route path="/favorites" element={<Favorites isLogin={isLogin} />} />
        <Route path="/create" element={<Create isLogin={isLogin} />} />
        <Route path="/profile" element={<Profile isLogin={isLogin} />} />
      </Routes>
    </Suspense>
  );
}
