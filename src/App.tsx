import React, {
  Suspense, useEffect, useState, useMemo,
} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useLazyQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

import Home from './components/homePage/Home';
import Listen from './components/listenPage/Listen';
import Background from './components/Background';
import Favorites from './components/favoritesPage/Favorites';
import Create from './components/createPage/Create';
import Profile from './components/profilePage/Profile';
import Player from './components/player/Player';
import { Spinner } from './components/customElements';
import {
  setCountry,
  setEmail,
  setName,
  setPicture,
  useAppDispatch,
  useAppSelector,
} from './redux';
import { ProfileQuery } from './requests/queries';
import CookiePopup from './components/modals/CookiesPopup';
import { useNewToast } from './components';

export default function App() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [cookieVisibility, setCookieVisibility] = useState<boolean>(true);
  const token = useAppSelector((state) => state.user.token);
  const [cookies, setCookies] = useCookies(['acceptCookies']);
  const dispatch = useAppDispatch();
  const [profileAction, { data: profileData, error: profileError }] = useLazyQuery(ProfileQuery);
  const newToast = useNewToast();
  const { t } = useTranslation('translation');

  useEffect(() => {
    if (profileError) {
      newToast(
        'warning',
        t('TROUBLE_TO_CONNECT_TO_SERVER'),
      );
    }
  }, [profileError, profileAction, newToast, t]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (token == null) {
      setIsLogin(false);
    }
    if (token) {
      setIsLogin(true);
      profileAction();

      timeoutId = setTimeout(() => {
        newToast('info', t('SERVER_AWAKEN'));
      }, 5000);

      if (profileData?.profile != null) {
        clearTimeout(timeoutId);
        dispatch(setCountry(profileData.profile.country));
        dispatch(setEmail(profileData.profile.email));
        dispatch(setName(profileData.profile.name));
        dispatch(setPicture(profileData.profile.picture));
      }

      setCookieVisibility(false);
      setCookies('acceptCookies', true, { path: '/' });
    }
    if (cookies.acceptCookies === true) {
      setCookieVisibility(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [profileData, dispatch, token, cookies, setCookies, profileAction, newToast, t]);

  const acceptCookie = useMemo(() => cookieVisibility && (
    <CookiePopup setCookieVisibility={setCookieVisibility} />
  ), [cookieVisibility]);

  return (
    <Suspense fallback={<Spinner />}>
      <Background />
      <Player />
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
          element={isLogin
            ? <Create isLogin={isLogin} />
            : <Home isLogin={isLogin} isRedirected />}
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
