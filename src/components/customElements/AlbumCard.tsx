import React from 'react';
import { useTranslation } from 'react-i18next';

function AlbumCard() {
  const { t } = useTranslation();
  return (
    <div className="card gap-2 p-1 m-4 w-[90%] min-w-[115px] bg-base-200 shadow-xl border border-1 border-stone-700 xl:flex-row sm:w-[60%] sm:p-4">
      <div className="flex p-4 justify-center w-full xl:w-[45%]">
        <figure className="aspect-[1/1] w-[45%] m-auto overflow-hidden rounded-md">
          <img
            src="https://picsum.photos/200/300"
            alt="img"
            className="object-cover w-full h-full group-hover:blur-[1px] group-hover:scale-105 transition-all duration-200 ease-out"
          />
        </figure>
        <div className="w-[45%] m-auto text-center xl:text-left xl:pl-4">
          <p className="text-sm font-bold sm:text-base">Album Title</p>
          <p className="text-sm sm:text-base">Artist</p>
          <p className="text-sm sm:text-base">Track number</p>
          <p className="text-sm sm:text-base">Duration</p>
        </div>
      </div>
      <div />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>{t('CARD_SONG_NUMBER', { ns: 'common' })}</th>
              <th>{t('CARD_SONG_TITLE', { ns: 'common' })}</th>
              <th className="text-center">{t('CARD_SONG_DURATION', { ns: 'common' })}</th>
              <th className="text-center hidden sm:block ">{t('CARD_RELEASE_DATE', { ns: 'common' })}</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover cursor-pointer">
              <th>1</th>
              <td>Le petit bonhomme en mousse</td>
              <td className="text-center">3:33</td>
              <td className="text-center hidden sm:block">2012</td>
            </tr>
            {/* row 2 */}
            <tr className="hover cursor-pointer">
              <th>2</th>
              <td>Blabla</td>
              <td className="text-center">1:40</td>
              <td className="text-center hidden sm:block">2020</td>
            </tr>
            {/* row 3 */}
            <tr className="hover cursor-pointer">
              <th>3</th>
              <td>Il me faut un titre un peu long pour tester</td>
              <td className="text-center">15:50</td>
              <td className="text-center hidden sm:block">1970</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AlbumCard;
