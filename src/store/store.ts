import { configureStore } from '@reduxjs/toolkit';
import incrementReducer from './reducers/incrementReducer';

export const store = configureStore({
  reducer: {
    increment: incrementReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
