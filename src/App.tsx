import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/homePage/Home';
import Listen from './components/listenPage/Listen';
import Background from './components/Background';
import Favorites from './components/favoritesPage/Favorites';
import Create from './components/createPage/Create';
import Profile from './components/profilePage/Profile';
// import getUsersFromToken from './helpers/getUserInfosFromToken';
import { useAppSelector } from './redux';
import CookiePopup from './components/modals/CookiesPopup';

export default function App() {
  // TODO : State for login status => To adjust with redux
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
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
        <Route
          path="/favorites"
          element={
            isLogin
              ? <Favorites isLogin={isLogin} />
              : <Home isLogin={isLogin} isRedirected />
          }
        />
        <Route
          path="create"
          element={
            isLogin
              ? <Create isLogin={isLogin} />
              : <Home isLogin={isLogin} isRedirected />
          }
        />
        <Route
          path="/profile"
          element={
            isLogin
              ? <Profile isLogin={isLogin} />
              : <Home isLogin={isLogin} isRedirected />
          }
        />
        {/* // TODO Add the 404 error page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {isVisible
        && (
        <CookiePopup setIsVisible={setIsVisible} />
        )}
    </Suspense>
  );
}
