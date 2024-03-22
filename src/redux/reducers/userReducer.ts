/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  country?: string;
  email?: string;
  name?: string;
  pictureUrl?: string;
  token?: string | null;
  favorite: number[];
  acceptCookies: boolean;
}

const initialState: UserState = {
  country: undefined,
  email: undefined,
  name: undefined,
  pictureUrl: undefined,
  token: localStorage.getItem('AUTH_TOKEN') || undefined,
  favorite: [],
  acceptCookies: false,
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCountry: (state, action: { payload: string }) => {
      state.country = action.payload;
    },
    setEmail: (state, action: { payload: string }) => {
      state.email = action.payload;
    },
    setName: (state, action: { payload: string }) => {
      state.name = action.payload;
    },
    setPictureUrl: (state, action: { payload: string }) => {
      state.pictureUrl = action.payload;
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
  setName, setPictureUrl, setCountry, setToken, setAcceptCookies,
} = userReducer.actions;

export default userReducer.reducer;
