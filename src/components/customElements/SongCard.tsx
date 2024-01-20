import React from 'react';
import PlayIcon from '../../svg/playIcon';

function SongCard() {
  return (
    <div className="card flex-row w-[90%] justify-between h-30 min-[425px]:w-[17%] m-2 min-w-[115px] bg-base-200 shadow-xl border border-1 border-stone-700">
      <div className="flex w-full justify-between items-center p-2 min-[425px]:flex-col min-[425px]:card-body min-[425px]:p-1 gap-1 group relative">
        <div className="relative sm:mb-2 group w-[30%] min-[425px]:w-full">
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
        <div className="w-[70%] flex flex-col gap-1 px-2 min-[425px]:w-full min-[425px]:items-center min-[425px]:p-0">
          <h3 className="font-bold">
            Song Title
          </h3>
          <p>
            Artist
          </p>
          <div className="flex w-full justify-between  text-xs min-[425px]:justify-around min-[425px]:p-2">
            <p className="text-left">Année</p>
            <p className="text-right">Durée</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
