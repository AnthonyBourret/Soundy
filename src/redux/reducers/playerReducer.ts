import { createSlice } from '@reduxjs/toolkit';

interface PlayerState {
  /** If we listen to song outside of an album */
  albumId?: number;
  isMuted: boolean;
  isPlaying: boolean;
  /** Song is null if user enter to our app or refresh */
  songId: number | null;
  volume: number;
}

const initialState: PlayerState = {
  albumId: undefined,
  isMuted: false,
  isPlaying: false,
  songId: null,
  volume: 50,
};

const playerReducer = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setAlbumId: (state, action: { payload: number }) => ({ ...state, albumId: action.payload }),
    setMuted: (state, action: { payload: boolean }) => ({ ...state, isMuted: action.payload }),
    setPlaying: (state, action: { payload: boolean }) => ({ ...state, isPlaying: action.payload }),
    setSongId: (state, action: { payload: number }) => ({ ...state, songId: action.payload }),
    setVolume: (state, action: { payload: number }) => ({ ...state, volume: action.payload }),
  },
});

export const {
  setAlbumId,
  setMuted,
  setPlaying,
  setSongId,
  setVolume,
} = playerReducer.actions;

export default playerReducer.reducer;
