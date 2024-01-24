import React from 'react';
import { useTranslation } from 'react-i18next';

interface AlbumCardProps {
  title: string;
  cover: string;
  year: string;
  songs: SongProps[];
}

interface SongProps {
  id: string;
  title: string;
  duration: string;
}

function AlbumCard({
  title, cover, year, songs,
} : AlbumCardProps) {
  const { t } = useTranslation();
  return (
    <div className="card w-[90%] p-2 sm:w-[70%] lg:pl-[240px] lg:p-4 gap-2 bg-base-200 shadow-xl border border-1 border-stone-700">
      <figure className="aspect-[1/1] max-w-[90px] max-h-[90px] lg:max-w-[200px] lg:max-h-[200px] absolute left-4 top-4">
        <img
          src={cover}
          alt="img"
          className="object-cover rounded-md w-full h-full group-hover:blur-[1px] group-hover:scale-105 transition-all duration-200 ease-out"
        />
      </figure>
      <div>
        <div className="pl-[120px] pt-2 lg:px-4 lg:py-2 lg:text-xl">
          <p className="font-bold">{title}</p>
          <p>Artist</p>
          <div className="w-full flex flex-col min-[425px]:flex-row min-[425px]:items-center min-[425px]:justify-between min-[425px]:pr-4 lg:pr-0">
            <p>{year}</p>
            <p className="text-xs pt-0.5 min-[425px]:pt-0">
              Tracks Number
            </p>
          </div>
        </div>
        <div className="w-full overflow-x-auto pt-8 lg:pt-2">
          <table className="table table-zebra text-xs lg:text-base">
            {/* head */}
            <thead>
              <tr>
                <th>{t('CARD_SONG_NUMBER', { ns: 'common' })}</th>
                <th>{t('CARD_SONG_TITLE', { ns: 'common' })}</th>
                <th className="text-center">{t('CARD_SONG_DURATION', { ns: 'common' })}</th>
              </tr>
            </thead>
            <tbody>
              {songs && songs.map((song) => (
                <tr className="hover cursor-pointer" key={song.id}>
                  <th>1</th>
                  <td>{song.title}</td>
                  <td className="text-center">{song.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
