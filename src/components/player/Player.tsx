import React, { useMemo, useRef, useState } from 'react';
import PlayerPlayIcon from '../../svg/PlayerPlayIcon';
import PlayerPrevNextIcon from '../../svg/PlayerPrevNextIcon';
import { SoundIcon } from '../../svg';
import AudioSource from './AudioSource';
import {
  setIsPlaying, setTime, useAppDispatch, useAppSelector,
} from '../../redux';

const Player = () => {
  const [soundValue, setSoundValue] = useState(50);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useAppDispatch();
  const isPlaying = useAppSelector((state) => state.audioPlayer.isPlaying);
  const time = useAppSelector((state) => state.audioPlayer.time);
  const songTitle = useAppSelector((state) => state.audioPlayer.song.songTitle);
  const artistName = useAppSelector((state) => state.audioPlayer.artistName);
  const albumTitle = useAppSelector((state) => state.audioPlayer.album.albumTitle);
  const albumPicture = useAppSelector((state) => state.audioPlayer.album.albumPicture);

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

  const songPlayingInfos = useMemo(() => {
    if (albumTitle !== '') {
      return (
        <section className="flex gap-3 items-center">
          <img
            alt="album cover"
            src={albumPicture}
            className="w-12 h-12 object-cover rounded-lg"
          />
          <div>
            <h2>{albumTitle}</h2>
            <h3>{songTitle}</h3>
          </div>
        </section>
      );
    }

    if (albumTitle === '' && songTitle !== '') {
      return (
        <section className="flex gap-3 items-center">
          <img
            alt="album cover"
            src="https://picsum.photos/id/684/1200/630"
            className="w-12 h-12 object-cover rounded-lg"
          />
          <div>
            <h2>{songTitle}</h2>
            <h3>{artistName}</h3>
          </div>
        </section>
      );
    }
    return <span />;
  }, [albumPicture, albumTitle, artistName, songTitle]);

  return (
    <footer className="fixed bottom-0 border-t border-stone-700 flex w-full z-50 backdrop-blur-[15px] bg-base-100 bg-opacity-50 justify-between px-5 py-3">
      {songPlayingInfos}

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
          <PlayerPlayIcon width="w-fit" height="fit" />
        </button>
        <button
          className="h-6 w-6 md-5"
          type="button"
          aria-label="player prev icon"
        >
          <PlayerPrevNextIcon width="w-fit" height="fit" />
        </button>

        <span>00:00</span>
        <input
          className="w-[500px] amplitude-song-slider"
          max="100"
          min={0}
          type="range"
          step=".1"
          id="song-percentage-played"
          style={{ backgroundSize: `${time}% 100%` }}
          value={time}
          onChange={(e) => dispatch(setTime(Number(e.target.value)))}
        />
        <span>03:00</span>
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
          value={soundValue}
          style={{ backgroundSize: `${soundValue}% 100%` }}
          onChange={(e) => setSoundValue(Number(e.target.value))}
        />
      </section>

      <AudioSource audioRef={audioRef} />
    </footer>
  );
};

export default Player;
