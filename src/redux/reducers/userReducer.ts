/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  country?: string;
  email?: string;
  name?: string;
  pictureUrl?: string;
  token?: string | null;
}

const initialState: UserState = {
  country: undefined,
  email: undefined,
  name: undefined,
  pictureUrl: undefined,
  token: localStorage.getItem('AUTH_TOKEN') || undefined,
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
  },
});

export const {
  setName, setPictureUrl, setCountry, setToken,
} = userReducer.actions;

export default userReducer.reducer;
