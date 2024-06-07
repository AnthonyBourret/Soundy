import React, {
  useMemo, useEffect, useRef, useState,
} from 'react';
import { useLazyQuery } from '@apollo/client';
import { OneSongPlayerQuery } from '../../requests/queries';
import {
  PlayerPrevNextIcon,
  SoundIcon,
  MuteIcon,
  PlayerPauseIcon,
  PlayerPlayIcon,
} from '../../svg';
import {
  setIsPlaying,
  setSongDuration,
  setSongTitle,
  setVolume,
  setAlbumSongPlaying,
  useAppDispatch,
  useAppSelector,
} from '../../redux';

import { secondsToFormatedDuration } from '../../utils';

import AudioSource from './AudioSource';
import PlayerInfos from './PlayerInfos';

const Player = (): JSX.Element => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.audioPlayer.isPlaying);
  const songDuration = useAppSelector((state) => state.audioPlayer.song.songDuration);
  const volume = useAppSelector((state) => state.audioPlayer.volume);
  const songPlayingId = useAppSelector((state) => state.audioPlayer.album.songPlaying);
  const albumSongIds = useAppSelector((state) => state.audioPlayer.album.songIds);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [currentSongId, setCurrentSongId] = useState<number>(songPlayingId!);

  const [getSong] = useLazyQuery(OneSongPlayerQuery);

  useEffect(() => {
    // If a song is playing, we set the currentSongId which will be used
    // to find the previous and the next songs
    if (songPlayingId) {
      setCurrentSongId(songPlayingId);
    }
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement!.currentTime);
    };

    audioElement?.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioElement?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [songPlayingId]);

  const handlePreviousSong = async () => {
    // If the length of the albumSongsId is equal to 0, we reset the time to 0
    if (audioRef.current && albumSongIds?.length === 0) {
      audioRef.current.currentTime = 0;
    }
    // If the lenght of the albumSongIds is greater than 1, then we can go to the previous song
    if (albumSongIds && currentSongId && albumSongIds?.length > 1) {
      //  If the current time of the audio is greater than 1 second
      //  then we want to reset the audio to 0
      //  Else we can play the previous song
      if (audioRef.current && audioRef.current?.currentTime > 1) {
        audioRef.current!.currentTime = 0;
      } else {
        const currentSongIndex = albumSongIds.indexOf(songPlayingId!);
        if (currentSongIndex === 0) return;
        setCurrentSongId(songPlayingId!);
        const previousSongIndex = currentSongIndex - 1;
        const previousSongId = albumSongIds[previousSongIndex];
        const song = await getSong({ variables: { songId: previousSongId } });
        if (song.data?.song) {
          audioRef.current!.currentTime = 0;
          dispatch(setSongTitle(song.data.song.title));
          dispatch(setAlbumSongPlaying(previousSongId));
          dispatch(setSongDuration(secondsToFormatedDuration(song.data.song.duration)));
          setCurrentSongId(previousSongId);
          audioRef.current!.play();
        }
      }
    }
  };

  const handleNextSong = async () => {
    if (albumSongIds?.length === 0) return;
    // Same logic as the previous song minus the check for the current time
    if (albumSongIds && currentSongId && albumSongIds?.length > 1) {
      const currentSongIndex = albumSongIds.indexOf(songPlayingId!);
      if (currentSongIndex === albumSongIds.length - 1) return;
      setCurrentSongId(songPlayingId!);
      const nextSongIndex = currentSongIndex + 1;
      const nextSongId = albumSongIds[nextSongIndex];
      const song = await getSong({ variables: { songId: nextSongId } });
      if (song.data?.song) {
        audioRef.current!.currentTime = 0;
        dispatch(setSongTitle(song.data.song.title));
        dispatch(setAlbumSongPlaying(nextSongId));
        dispatch(setSongDuration(secondsToFormatedDuration(song.data.song.duration)));
        setCurrentSongId(nextSongId);
        audioRef.current!.play();
      }
    }
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current!.pause();
      dispatch(setIsPlaying(false));
    } else {
      audioRef.current!.play();
      dispatch(setIsPlaying(true));
    }
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    if (volume === 0) {
      dispatch(setVolume(50));
      setIsMuted(false);
    } else {
      dispatch(setVolume(0));
      setIsMuted(true);
    }
  };

  const handleSelectedVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setVolume(Number(e.target.value)));
    if (isMuted) {
      setIsMuted(false);
    }
    if (e.target.value === '0') {
      setIsMuted(true);
    }
  };

  const progressStyle = useMemo(() => {
    if (audioRef.current?.duration && currentTime) {
      const progress = (currentTime / audioRef.current.duration) * 100;
      return { backgroundSize: `${progress}% 100%` };
    }
    return { backgroundSize: '0% 100%' };
  }, [currentTime]);

  const playPauseIcon = useMemo(() => {
    if (isPlaying) {
      return (
        <PlayerPauseIcon width="w-fit" height="fit" />
      );
    }
    return (
      <PlayerPlayIcon width="w-fit" height="fit" />
    );
  }, [isPlaying]);

  const songDurationTime = useMemo(() => songDuration, [songDuration]);

  return (
    <footer className="fixed bottom-0 border-t border-stone-700 flex justify-between min-[900px]:gap-0 w-full z-50 backdrop-blur-[15px] bg-base-100 bg-opacity-50 py-3 pt-4 min-[900px]:pt-3 px-5">
      <PlayerInfos />

      <section className="flex gap-3 items-center w-fit">
        <button
          className="h-6 w-6 rotate-180"
          type="button"
          aria-label="player prev icon"
          onClick={() => handlePreviousSong()}
        >
          <PlayerPrevNextIcon width="fit-content" height="fit-content" />
        </button>
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center"
          type="button"
          aria-label="player play icon"
          onClick={() => handlePlayPause()}
        >
          {playPauseIcon}
        </button>
        <button
          className="h-6 w-6 md-5"
          type="button"
          aria-label="player next icon"
          onClick={() => handleNextSong()}
        >
          <PlayerPrevNextIcon width="w-fit" height="fit-content" />
        </button>

        <input
          className="amplitude-song-slider absolute top-0 left-0 w-full self-start min-[900px]:self-center min-[900px]:static min-[900px]:block min-[900px]:w-44"
          max={audioRef.current?.duration}
          min={0}
          type="range"
          step="1"
          id="song-percentage-played"
          style={progressStyle}
          value={currentTime}
          onChange={(e) => { audioRef.current!.currentTime = Number(e.target.value); }}
        />
        <span className="hidden min-[900px]:block">{songDurationTime}</span>
      </section>

      <section className="flex gap-3 items-center justify-center min-[800px]:w-60 w-12">
        <button
          type="button"
          aria-label="sound icon"
          className="w-8 h-8"
          onClick={() => handleMute()}
        >
          {
            isMuted
              ? <MuteIcon width="30px" height="25px" />
              : <SoundIcon width="30px" height="25px" />
          }
        </button>
        <input
          className="range-primary w-40 hidden min-[800px]:block"
          max="100"
          min={0}
          type="range"
          value={volume}
          style={{ backgroundSize: `${volume}% 100%` }}
          onChange={handleSelectedVolume}
        />
      </section>

      <AudioSource
        audioRef={audioRef}
        setCurrentTime={setCurrentTime}
        setCurrentSongId={setCurrentTime}
        getSong={getSong}
      />
    </footer>
  );
};

export default Player;
