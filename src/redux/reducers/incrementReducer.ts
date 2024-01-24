/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 5,
};

const incrementReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const {
  increment, decrement,
} = incrementReducer.actions;

export default incrementReducer.reducer;
