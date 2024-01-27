/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  country?: string;
  email?: string;
  name?: string;
  pictureUrl?: string;
  token?: string;
}

const initialState: UserState = {
  country: undefined,
  email: undefined,
  name: undefined,
  pictureUrl: undefined,
  token: undefined,
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
    setToken: (state, action: { payload: string }) => {
      state.token = action.payload;
    },
  },
});

export const {
  setToken, setName, setPictureUrl, setCountry,
} = userReducer.actions;

export default userReducer.reducer;
