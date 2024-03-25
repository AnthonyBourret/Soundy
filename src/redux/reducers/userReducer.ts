/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  acceptCookies: boolean;
  country?: string | null;
  email?: string | null;
  favorite: number[];
  name?: string | null;
  picture?: string | null;
  token?: string | null;
}

const initialState: UserState = {
  acceptCookies: false,
  country: null,
  email: null,
  favorite: [],
  name: null,
  picture: null,
  token: localStorage.getItem('AUTH_TOKEN') || null,
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCountry: (state, action: { payload: UserState['country'] }) => {
      state.country = action.payload;
    },
    setEmail: (state, action: { payload: UserState['email'] }) => {
      state.email = action.payload;
    },
    setName: (state, action: { payload: UserState['name'] }) => {
      state.name = action.payload;
    },
    setPicture: (state, action: { payload: UserState['picture'] }) => {
      state.picture = action.payload;
    },
    setToken: (state, action: { payload: string | null }) => {
      state.token = action.payload;
      if (action.payload === null) {
        localStorage.removeItem('AUTH_TOKEN');
      }
    },
    setFavorite: (state, action: { payload: number }) => {
      state.favorite.push(action.payload);
    },
    setAcceptCookies: (state, action: { payload: boolean }) => {
      state.acceptCookies = action.payload;
    },
  },
});

export const {
  setAcceptCookies,
  setCountry,
  setEmail,
  setFavorite,
  setName,
  setPicture,
  setToken,
} = userReducer.actions;

export default userReducer.reducer;
