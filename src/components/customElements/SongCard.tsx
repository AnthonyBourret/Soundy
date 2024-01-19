import React from 'react';
import PlayIcon from '../../svg/playIcon';

function SongCard() {
  return (
    <div className="card w-[17%] m-4 min-w-[115px] bg-base-200 shadow-xl border border-1 border-stone-700">
      <div className="card-body px-2 pt-2 pb-3 gap-1 group relative">
        <div className="relative mb-2 group">
          <figure className="aspect-[1/1] overflow-hidden rounded-md m-1">
            <img
              src="https://picsum.photos/200/300"
              alt="img"
              className="object-cover w-full h-full group-hover:blur-[1px] group-hover:scale-105 transition-all duration-200 ease-out"
            />
          </figure>
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-50 hover:cursor-pointer">
            <div className="w-16 h-16 rounded-full flex items-center justify-center pl-2 bg-base-200 bg-opacity-30 border border-1 border-primary">
              <PlayIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center text-center text-sm md:text-base">
          <h3 className="font-bold text-sm md:text-base">
            Song Title
          </h3>
          <p className="text-sm md:text-base">
            Artist
          </p>
          <div className="flex justify-between text-sm my-2 md:text-base sm:my-1">
            <p>Année</p>
            <p>Durée</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
