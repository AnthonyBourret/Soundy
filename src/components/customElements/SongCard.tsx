import React from 'react';
import PlayIcon from '../../svg/playIcon';

function SongCard() {
  return (
    <div className="card w-[17%] p-2 m-4 min-w-[115px] bg-base-200 shadow-xl border border-1 border-stone-700">
      <div className="card-body px-2 pt-2 pb-3 gap-1 group relative">
        <div className="relative mb-2 group">
          <figure className="aspect-[1/1] overflow-hidden rounded-md">
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
        <h3 className="self-center text-cente font-bold my-1">
          Album title
        </h3>
        <p className="self-center text-center my-1">
          Song Title
        </p>
        <div className="flex w-full justify-between my-1 px-2">
          <p className="text-left">Année</p>
          <p className="text-right">Durée</p>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
