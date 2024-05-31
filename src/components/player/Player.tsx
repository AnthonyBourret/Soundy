import React, { useMemo, useRef } from 'react';

import {
  PlayerPrevNextIcon,
  SoundIcon,
  PlayerPauseIcon,
  PlayerPlayIcon,
} from '../../svg';
import {
  setIsPlaying,
  setTime,
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
  const time = useAppSelector((state) => state.audioPlayer.time);
  const volume = useAppSelector((state) => state.audioPlayer.volume);

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
    } else {
      dispatch(setVolume(0));
    }
  };

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
    <footer className="fixed bottom-0 border-t border-stone-700 flex w-full z-50 backdrop-blur-[15px] bg-base-100 bg-opacity-50 justify-between px-5 py-3">
      <PlayerInfos />

      <section className="flex gap-3 items-center">
        <button
          className="h-6 w-6 rotate-180"
          type="button"
          aria-label="player prev icon"
          // TODO - go to previous song by a new request with song id
          onClick={() => getPreviousSong()}
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
          className="w-[500px] amplitude-song-slider"
          max="100"
          min={0}
          type="range"
          step="1"
          id="song-percentage-played"
          style={{ backgroundSize: `${time}% 100%` }}
          value={time}
          onChange={(e) => dispatch(setTime(Number(e.target.value)))}
        />
        <span>{songDurationTime}</span>
      </section>

      <section className="flex gap-3 items-center">
        <button
          type="button"
          aria-label="sound icon"
          className="w-6 h-6"
          onClick={() => handleMute()}
        >
          <SoundIcon width="w-6" height="h-6" />
        </button>
        <input
          className="range-primary w-40"
          max="100"
          min={0}
          type="range"
          value={volume}
          style={{ backgroundSize: `${volume}% 100%` }}
          onChange={(e) => dispatch(setVolume(Number(e.target.value)))}
        />
      </section>

      <AudioSource audioRef={audioRef} />
    </footer>
  );
};

export default Player;
