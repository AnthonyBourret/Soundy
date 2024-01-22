import React from 'react';
import PlayIcon from '../../svg/playIcon';

interface SongCardProps {
  title: string;
  artist: {
    name: string;
  };
  duration: string;
  cover: string;
}

function SongCard({
  title, artist, duration, cover,
} : SongCardProps) {
  return (
    <div className="card flex-row w-full h-30 p-2 min-[540px]:w-[17%] min-w-[190px] bg-base-200 shadow-xl border border-1 border-stone-700">
      <div className="flex w-full items-center min-[540px]:flex-col min-[540px]:card-body min-[540px]:justify-around min-[540px]:p-1 gap-1 group relative">
        <div className="relative sm:mb-2 group w-[30%] min-[540px]:w-full">
          <figure className="aspect-[1/1] overflow-hidden rounded-md m-1">
            <img
              src={cover}
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
        <div className="w-[70%] flex flex-col h-full justify-between gap-2 px-3 py-1 min-[540px]:w-full">
          <h3 className="font-bold text-center">
            {title}
          </h3>
          <p className="text-center">
            {artist.name}
          </p>
          <div className="flex w-full justify-between text-xs min-[540px]:justify-around min-[540px]:p-2">
            <p className="text-left">
              Année
            </p>
            <p className="text-right">
              {duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SongCard;
