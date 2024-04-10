import { createSlice } from '@reduxjs/toolkit';

interface AudioPlayerState {
  album: {
    /** If we listen to song outside of an album */
    albumId?: number;
    albumTitle: string;
    albumPicture: string;
  }
  isMuted: boolean;
  isPlaying: boolean;
  song: {
    /** Song is null if user enter to our app or refresh */
    songId: number | null;
    songTitle: string;
    songPicture: string;
  }
  artistName: string;
  volume: number;
  time: number;
}

const initialState: AudioPlayerState = {
  album: {
    albumId: undefined,
    albumTitle: '',
    albumPicture: '',
  },
  isMuted: false,
  isPlaying: false,
  song: {
    songId: null,
    songTitle: '',
    songPicture: '',
  },
  volume: 50,
  time: 0,
  artistName: '',
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
    setAlbumPicture: (state, action: { payload: string }) => (
      { ...state, album: { ...state.album, albumPicture: action.payload } }
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
    // --- Volume --- //
    setVolume: (state, action: { payload: number }) => (
      { ...state, volume: action.payload }
    ),
    // --- Position of the cursor in the song timeline --- //
    setTime: (state, action: { payload: number }) => (
      { ...state, time: action.payload }
    ),
    setArtistName: (state, action: { payload: string }) => (
      { ...state, artistTitle: action.payload }
    ),
  },
});

export const {
  setAlbumId,
  setAlbumPicture,
  setAlbumTitle,
  setArtistName,
  setIsPlaying,
  setMuted,
  setSongId,
  setSongPicture,
  setSongTitle,
  setTime,
  setVolume,
} = audioPlayerReducer.actions;

export default audioPlayerReducer.reducer;
