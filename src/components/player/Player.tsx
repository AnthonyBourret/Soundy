import React, { useMemo, useRef } from 'react';

import PlayerPlayIcon from '../../svg/PlayerPlayIcon';
import PlayerPrevNextIcon from '../../svg/PlayerPrevNextIcon';
import { PlayerPauseIcon, SoundIcon } from '../../svg';
import {
  setIsPlaying,
  setTime,
  setVolume,
  useAppDispatch,
  useAppSelector,
} from '../../redux';

import AudioSource from './AudioSource';
import PlayerInfos from './PlayerInfos';
// import { secondsToFormatedDuration } from '../../utils';

const Player = (): JSX.Element => {
  // const [soundValue, setSoundValue] = useState(50);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.audioPlayer.isPlaying);
  const time = useAppSelector((state) => state.audioPlayer.time);
  const songDuration = useAppSelector((state) => state.audioPlayer.song.songDuration);
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

  // const actualTime = useMemo(() => secondsToFormatedDuration(time), [time]);
  const songDurationTime = useMemo(() => songDuration, [songDuration]);

  return (
    <footer className="fixed bottom-0 border-t border-stone-700 flex w-full z-50 backdrop-blur-[15px] bg-base-100 bg-opacity-50 justify-between px-5 py-3">
      <PlayerInfos />

      <section className="flex gap-3 items-center">
        <button
          className="h-6 w-6 rotate-180"
          type="button"
          aria-label="player prev icon"
        >
          <PlayerPrevNextIcon width="fit-content" height="fit" />
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
          <PlayerPrevNextIcon width="w-fit" height="fit" />
        </button>

        {/* <span>{actualTime}</span> */}
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
        <button type="button" aria-label="sound icon" className="w-6 h-6">
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
