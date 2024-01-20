import React from 'react';
import { useTranslation } from 'react-i18next';

function AlbumCard() {
  const { t } = useTranslation();
  return (
    <div className="card w-[90%] m-4 p-2 sm:w-[70%] lg:pl-[240px] gap-2 bg-base-200 shadow-xl border border-1 border-stone-700">
      <figure className="aspect-[1/1] max-w-[90px] max-h-[90px] lg:max-w-[200px] lg:max-h-[200px] absolute left-4 top-4">
        <img
          src="https://picsum.photos/200/300"
          alt="img"
          className="object-cover rounded-md w-full h-full group-hover:blur-[1px] group-hover:scale-105 transition-all duration-200 ease-out"
        />
      </figure>
      <div>
        <div className="pl-[120px] pt-2 lg:px-4 lg:py-2 lg:text-xl">
          <p className="font-bold">Album Title</p>
          <p>Artist</p>
          <div className="w-full flex flex-col min-[425px]:flex-row min-[425px]:items-center min-[425px]:justify-between pr-4 lg:pr-0">
            <p>Year</p>
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
              {/* row 1 */}
              <tr className="hover cursor-pointer">
                <th>1</th>
                <td>Le petit bonhomme en mousse</td>
                <td className="text-center">3:33</td>
              </tr>
              {/* row 2 */}
              <tr className="hover cursor-pointer">
                <th>2</th>
                <td>Blabla</td>
                <td className="text-center">1:40</td>
              </tr>
              {/* row 3 */}
              <tr className="hover cursor-pointer">
                <th>3</th>
                <td>Il me faut un titre un peu long pour tester</td>
                <td className="text-center">15:50</td>
              </tr>
              {/* row 1 */}
              <tr className="hover cursor-pointer">
                <th>1</th>
                <td>Le petit bonhomme en mousse</td>
                <td className="text-center">3:33</td>
              </tr>
              {/* row 2 */}
              <tr className="hover cursor-pointer">
                <th>2</th>
                <td>Blabla</td>
                <td className="text-center">1:40</td>
              </tr>
              {/* row 3 */}
              <tr className="hover cursor-pointer">
                <th>3</th>
                <td>Il me faut un titre un peu long pour tester</td>
                <td className="text-center">15:50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AlbumCard;
