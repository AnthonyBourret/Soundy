import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const incrementReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increaseBy1: (state) => {
      if (state.value > 0 && state.value <= 100) {
        return { ...state, value: state.value - 0.5 };
      }
      return state;
    },
    increaseBy5: (state) => {
      if (state.value >= 0 && state.value < 95) {
        return { ...state, value: state.value + 5 };
      } if (state.value >= 95 && state.value <= 100) {
        return { ...state, value: 100 };
      }
      return state;
    },
  },
});

export const {
  increaseBy1, increaseBy5,
} = incrementReducer.actions;

export default incrementReducer.reducer;
