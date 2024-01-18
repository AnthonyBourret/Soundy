import React from 'react';
import { useTranslation } from 'react-i18next';

function AlbumCard() {
  const { t } = useTranslation();
  return (
    <div className="card flex-row p-4 m-4 w-[70%] min-w-[115px] bg-base-200 shadow-xl border border-1 border-stone-700">
      <div className="flex gap-8 items-center w-[45%]">
        <figure className="aspect-[1/1] overflow-hidden rounded-md">
          <img
            src="https://picsum.photos/200/300"
            alt="img"
            className="object-cover w-full h-full group-hover:blur-[1px] group-hover:scale-105 transition-all duration-200 ease-out"
          />
        </figure>
        <div className="text-left">
          <p className="font-bold">Album Title</p>
          <p>Artist</p>
          <p>Track number</p>
          <p>Duration</p>
        </div>
      </div>
      <div />
      <div className="overflow-x-auto w-[50%]">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>{t('CARD_SONG_NUMBER', { ns: 'common' })}</th>
              <th>{t('CARD_SONG_TITLE', { ns: 'common' })}</th>
              <th className="text-center">{t('CARD_SONG_DURATION', { ns: 'common' })}</th>
              <th className="text-center">{t('CARD_RELEASE_DATE', { ns: 'common' })}</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover cursor-pointer">
              <th>1</th>
              <td>Le petit bonhomme en mousse</td>
              <td className="text-center">3:33</td>
              <td className="text-center">2012</td>
            </tr>
            {/* row 2 */}
            <tr className="hover cursor-pointer">
              <th>2</th>
              <td>Blabla</td>
              <td className="text-center">1:40</td>
              <td className="text-center">2020</td>
            </tr>
            {/* row 3 */}
            <tr className="hover cursor-pointer">
              <th>3</th>
              <td>Il me faut un titre un peu long pour tester</td>
              <td className="text-center">15:50</td>
              <td className="text-center">1970</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AlbumCard;
