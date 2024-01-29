import React from 'react';
import { useTranslation } from 'react-i18next';
import FavCheckBox from './FavCheckBox';
import secondsToFormatedDuration from '../../utils/SecondsToFormatedDuration';
import capitalize from '../../utils/CapitalizeFirstLetter';

interface AlbumCardProps {
  title: string;
  cover: string;
  year: string;
  songs: SongProps[];
  isLogin: boolean;
}

interface SongProps {
  duration: string;
  id: string;
  title: string;
}

function AlbumCard({
  title, cover, year, songs, isLogin,
} : AlbumCardProps) {
  const { t } = useTranslation('common');

  return (
    <div className="card w-full p-2 sm:w-[70%] lg:pl-[240px] lg:p-4 gap-2 bg-base-200 shadow-xl border border-1 border-stone-700">
      <figure className="aspect-[1/1] max-w-[90px] max-h-[90px] lg:max-w-[200px] lg:max-h-[200px] absolute left-4 top-4">
        <img
          src={cover}
          alt={`cover of ${title}`}
          className="object-cover rounded-md w-full h-full group-hover:blur-[1px] group-hover:scale-105 transition-all duration-200 ease-out"
        />
      </figure>
      {/* The Checkbox is not displayed on the SongCard component if the user is not logged in */}
      {isLogin && (
        <div className="absolute top-20 left-20 lg:top-48 lg:left-48">
          <FavCheckBox />
        </div>
      )}
      <div>
        <div className="pl-[120px] pt-2 lg:px-4 lg:py-2 lg:text-xl">
          <p className="font-bold">{capitalize(title)}</p>
          <p className="font-semibold">Artist</p>
          <div className="w-full flex flex-col min-[425px]:flex-row min-[425px]:items-center min-[425px]:justify-between min-[425px]:pr-4 lg:pr-0">
            <p className="font-semibold">{year}</p>
            <p className="text-xs font-semibold pt-0.5 min-[425px]:pt-0">
              {songs.length}
              {' '}
              {t('CARD_ALBUM_TRACK_NUMBER')}
            </p>
          </div>
        </div>
        {/* Songs list */}
        <div className="w-full overflow-x-auto pt-8 lg:pt-2">
          <table className="table table-zebra text-xs lg:text-base">
            <thead>
              <tr>
                <th>{t('CARD_SONG_NUMBER')}</th>
                <th>{t('CARD_SONG_TITLE')}</th>
                <th className="text-center">{t('CARD_SONG_DURATION')}</th>
              </tr>
            </thead>
            <tbody>
              {songs && songs.map((song) => (
                <tr className="hover cursor-pointer" key={song.id}>
                  <th>1</th>
                  <td>{song.title}</td>
                  <td className="text-center">{secondsToFormatedDuration(song.duration)}</td>
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
