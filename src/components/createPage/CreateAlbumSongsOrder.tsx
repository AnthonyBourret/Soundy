import { Reorder } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { secondsToFormatedDuration } from '../../utils';
import { AllSongs } from '../../types';

interface Props {
  selectedSongs: AllSongs['songs'],
  setSelectedSongs: React.Dispatch<React.SetStateAction<AllSongs['songs']>>
}

function CreateAlbumSongsOrder({
  selectedSongs, setSelectedSongs,
}: Props) {
  const { t } = useTranslation('translation');
  const handlePositionChange = (newOrder: AllSongs['songs']) => {
    setSelectedSongs(newOrder);
  };

  return (
    <>
      <p className="label-text-alt my-4 text-center">{t('CREATE_ALBUM_ORDER_LABEL')}</p>
      <div className="flex flex-col gap-2 border border-stone-700 rounded-md p-2">
        <Reorder.Group values={selectedSongs} onReorder={handlePositionChange}>
          {selectedSongs.map((song, index) => (
            <Reorder.Item value={song} key={song.title} className="py-1">
              <div key={song.id} className="label border-2 border-stone-700 rounded-md bg-base-100 px-4 cursor-grab active:cursor-grabbing hover:border-primary">
                <span className="label-text font-semibold">{index + 1}</span>
                <span className="label-text font-semibold">{song.title}</span>
                <span className="label-text font-semibold">{secondsToFormatedDuration(song.duration)}</span>
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </>
  );
}

export default CreateAlbumSongsOrder;
