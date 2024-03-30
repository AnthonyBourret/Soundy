import React, {
  Suspense, useEffect, useState, useMemo,
} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useQuery } from '@apollo/client';
import Home from './components/homePage/Home';
import Listen from './components/listenPage/Listen';
import Background from './components/Background';
import Favorites from './components/favoritesPage/Favorites';
import Create from './components/createPage/Create';
import Profile from './components/profilePage/Profile';
import {
  setCountry,
  setName,
  setPicture,
  useAppSelector,
  useAppDispatch,
} from './redux';
import ProfileQuery from './requests/queries/ProfileQuery';
import CookiePopup from './components/modals/CookiesPopup';

export default function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const token = useAppSelector((state) => state.user.token);
  const [cookies, setCookies] = useCookies(['acceptCookies']);
  const dispatch = useAppDispatch();
  const { data } = useQuery(ProfileQuery);

  useEffect(() => {
    if (token == null) {
      setIsLogin(false);
    }
    if (token) {
      setIsLogin(true);

      if (data?.profile != null) {
        dispatch(setName(data.profile.name));
        dispatch(setCountry(data.profile.country));
        dispatch(setPicture(data.profile.picture));
      }

      setIsVisible(false);
      setCookies('acceptCookies', true, { path: '/' });
    }
    if (cookies.acceptCookies === true) {
      setIsVisible(false);
    }
  }, [data, dispatch, token, cookies, setCookies]);

  const acceptCookie = useMemo(() => isVisible && (
    <CookiePopup setIsVisible={setIsVisible} />
  ), [isVisible]);

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
      {acceptCookie}
    </Suspense>
  );
}
