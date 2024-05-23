import { Reorder } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { secondsToFormatedDuration } from '../../utils';
import { Song } from '../../types/__generated_schemas__/graphql';

interface Props {
  selectedSongs: Song[],
  setSelectedSongs: React.Dispatch<React.SetStateAction<Song[]>>
}

function CreateAlbumSongsOrder({
  selectedSongs, setSelectedSongs,
}: Props) {
  const { t } = useTranslation('translation');
  // Function to handle the change of position of the songs,
  // Every time a song is moved, setSelectedSongs is called to update the order of the songs
  const handlePositionChange = (newOrder: Song[]) => {
    setSelectedSongs(newOrder);
  };

  return (
    <>
      <p className="label-text-alt my-4 text-center">{t('CREATE_ALBUM_ORDER_LABEL')}</p>
      <div className="flex flex-col gap-2 border border-stone-700 rounded-md p-2">
        <Reorder.Group values={selectedSongs} onReorder={handlePositionChange}>
          {selectedSongs.map((song, index) => (
            <Reorder.Item value={song} key={song.title} className="py-1">
              <div key={song.id} className="label border-2 gap-8 border-stone-700 rounded-md bg-base-100 px-4 cursor-grab active:cursor-grabbing hover:border-primary">
                <span className="label-text font-semibold">{index + 1}</span>
                <span className="label-text font-semibold truncate">{song.title}</span>
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
