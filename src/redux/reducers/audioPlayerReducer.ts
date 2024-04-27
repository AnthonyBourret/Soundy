import { createSlice } from '@reduxjs/toolkit';

import { type AudioPlayerState } from '../../types';

const initialState: AudioPlayerState = {
  album: {
    albumId: undefined,
    albumTitle: null,
    albumPicture: null,
    songIds: null,
    songPlaying: null,
  },
  isMuted: false,
  isPlaying: false,
  song: {
    songId: null,
    songTitle: '',
    songPicture: '',
    songDuration: null,
  },
  volume: 20,
  time: 0,
  artistName: null,
};

const audioPlayerReducer = createSlice({
  name: 'player',
  initialState,
  reducers: {
    // --- Album --- //
    setAlbumId: (state, action: { payload: number }) => (
      { ...state, album: { ...state.album, albumId: action.payload } }
    ),
    setAlbumTitle: (state, action: { payload: string }) => (
      { ...state, album: { ...state.album, albumTitle: action.payload } }
    ),
    setAlbumPicture: (state, action: { payload: string | null }) => (
      { ...state, album: { ...state.album, albumPicture: action.payload } }
    ),
    setAlbumSongIds: (state, action: { payload: number[] }) => (
      { ...state, album: { ...state.album, songIds: action.payload } }
    ),
    setAlbumSongPlaying: (state, action: { payload: number }) => (
      { ...state, album: { ...state.album, songPlaying: action.payload } }
    ),
    // --- Mute --- //
    setMuted: (state, action: { payload: boolean }) => (
      { ...state, isMuted: action.payload }
    ),
    // --- Play & pause --- //
    setIsPlaying: (state, action: { payload: boolean }) => (
      { ...state, isPlaying: action.payload }
    ),
    // --- Song --- //
    setSongId: (state, action: { payload: number }) => (
      { ...state, song: { ...state.song, songId: action.payload } }
    ),
    setSongTitle: (state, action: { payload: string }) => (
      { ...state, song: { ...state.song, songTitle: action.payload } }
    ),
    setSongPicture: (state, action: { payload: string }) => (
      { ...state, song: { ...state.song, songPicture: action.payload } }
    ),
    setSongDuration: (state, action: { payload: string }) => (
      { ...state, song: { ...state.song, songDuration: action.payload } }
    ),
    // --- Volume --- //
    setVolume: (state, action: { payload: number }) => (
      { ...state, volume: action.payload }
    ),
    // --- Position of the cursor in the song timeline --- //
    setTime: (state, action: { payload: number }) => (
      { ...state, time: action.payload }
    ),
    setArtistName: (state, action: { payload: string | null }) => (
      { ...state, artistName: action.payload }
    ),
  },
});

export const {
  setAlbumId,
  setAlbumPicture,
  setAlbumSongIds,
  setAlbumSongPlaying,
  setAlbumTitle,
  setArtistName,
  setIsPlaying,
  setMuted,
  setSongDuration,
  setSongId,
  setSongPicture,
  setSongTitle,
  setTime,
  setVolume,
} = audioPlayerReducer.actions;

export default audioPlayerReducer.reducer;
