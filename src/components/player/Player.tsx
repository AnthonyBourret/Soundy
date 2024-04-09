/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PlayerPlayIcon from '../../svg/PlayerPlayIcon';
import PlayerPrevNextIcon from '../../svg/PlayerPrevNextIcon';
import { SoundIcon } from '../../svg';

const Player = () => {
  const [value, setValue] = useState(40);
  const [soundValue, setSoundValue] = useState(50);
  const [isPlaying, setIsPlaying] = useState(false);

  // useEffect(
  //   () => {
  //     if (isPlaying) {
  //       // @ts-ignore
  //       document.getElementById('audio-element').play();
  //     }
  //   },
  //   [isPlaying],
  // );

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <footer className="fixed bottom-0 border-t border-stone-700 flex w-full z-50 backdrop-blur-[15px] bg-base-100 bg-opacity-50 justify-between px-5 py-3">
      <section className="flex gap-3 items-center">
        <img
          alt="album cover"
          src="https://picsum.photos/id/684/1200/630"
          className="w-12 h-12 object-cover rounded-lg"
        />
        <div>
          <h2>Titre album</h2>
          <h3>Titre musique</h3>
        </div>
      </section>

      <section className="flex gap-3 items-center">
        <button
          className="h-6 w-6 rotate-180"
          type="button"
          aria-label="player prev icon"
        >
          <PlayerPrevNextIcon width="w-fit" height="fit" />
        </button>
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center"
          type="button"
          aria-label="player play icon"
          onClick={() => {
            setIsPlaying(!isPlaying);
            // handlePlay();
          }}
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
          style={{ backgroundSize: `${value}% 100%` }}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
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
      <ReactAudioPlayer
        src="./audio-element.ogg"
        autoPlay
        controls
        onPlay={handlePlay}
        onPause={handlePause}
      />
    </footer>
  );
};

export default Player;
