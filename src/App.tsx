import React, {
  Suspense, useEffect, useState, useMemo,
} from 'react';
import {
  Routes, Route, Navigate, useLocation,
} from 'react-router-dom';
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
  const [profileAction, { data: profileData }] = useLazyQuery(ProfileQuery);
  const location = useLocation();
  const { t } = useTranslation('common');
  const newToast = useNewToast();

  useEffect(() => {
    if (token == null) {
      setIsLogin(false);
    }
    if (token) {
      setIsLogin(true);
      profileAction();

      if (profileData?.profile != null) {
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
  }, [profileData, dispatch, token, cookies, setCookies, profileAction]);

  useEffect(() => {
    if (!isLogin && location.state && location.state.fromProtected) {
      newToast('warning', t('CONNECT_TOAST_MESSAGE'));
    }
  }, [isLogin, location.state, newToast, t]);

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
              : <Navigate to="/" state={{ fromProtected: true }} />
          }
        />
        <Route
          path="create"
          element={isLogin
            ? <Create isLogin={isLogin} />
            : <Navigate to="/" state={{ fromProtected: true }} />}
        />
        <Route
          path="/profile"
          element={
            isLogin
              ? <Profile isLogin={isLogin} />
              : <Navigate to="/" state={{ fromProtected: true }} />
          }
        />
        {/* // TODO Add the 404 error page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {acceptCookie}
    </Suspense>
  );
}
