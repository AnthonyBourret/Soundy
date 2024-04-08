import React from 'react';
import PlayerPlayIcon from '../../svg/PlayerPlayIcon';

function Player() {
  return (
    <div className="fixed bottom-0 border-t border-stone-700 flex w-full z-50 backdrop-blur-[10px] bg-base-100 bg-opacity-50 justify-between px-5 py-3">
      <div className="h-[50px] flex gap-3">
        <img
          alt="album cover"
          src="https://picsum.photos/id/684/1200/630"
          className="w-12 h-12 object-cover rounded-lg"
        />
        <div>
          <h2>Titre album</h2>
          <h3>Titre musique</h3>
        </div>
      </div>

      <div>
        <button type="button">prec</button>
        <button type="button" aria-label="player play icon">
          <PlayerPlayIcon />
        </button>
        <button type="button">next</button>
      </div>

      <div>
        <button type="button">sound ic</button>
        slider
      </div>
    </div>
  );
}

export default Player;
