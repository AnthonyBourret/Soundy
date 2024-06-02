import React, {
  useMemo, useEffect, useRef, useState,
} from 'react';

import {
  PlayerPrevNextIcon,
  SoundIcon,
  MuteIcon,
  PlayerPauseIcon,
  PlayerPlayIcon,
} from '../../svg';
import {
  setIsPlaying,
  setVolume,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { getPreviousSong } from '../../utils';

import AudioSource from './AudioSource';
import PlayerInfos from './PlayerInfos';

const Player = (): JSX.Element => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.audioPlayer.isPlaying);
  const songDuration = useAppSelector((state) => state.audioPlayer.song.songDuration);
  const volume = useAppSelector((state) => state.audioPlayer.volume);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement!.currentTime);
    };

    audioElement?.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioElement?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handlePreviousSong = () => {
    if (audioRef.current && audioRef.current?.currentTime > 1) {
      audioRef.current!.currentTime = 0;
    }
    if (audioRef.current && audioRef.current?.currentTime < 1) {
      const previousSong = getPreviousSong();
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

  const progressStyle = useMemo(() => {
    if (audioRef.current?.duration) {
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
          // TODO - go to previous song by a new request with song id
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
          aria-label="player prev icon"
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
          onChange={(e) => dispatch(setVolume(Number(e.target.value)))}
        />
      </section>

      <AudioSource audioRef={audioRef} setCurrentTime={setCurrentTime} />
    </footer>
  );
};

export default Player;
