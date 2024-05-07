import React from 'react';
import { secondsToFormatedDuration } from '../../utils';
import { AllSongs } from '../../types';

interface Props {
  songs: AllSongs['songs'],
  selectedSongs: AllSongs['songs'],
  setSelectedSongs: React.Dispatch<React.SetStateAction<AllSongs['songs']>>
  handleInputChange: (field: string, value: string | number | number[]) => void;
}

function CreateAlbumSongsSelection({
  songs, selectedSongs, setSelectedSongs, handleInputChange,
}: Props) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, song: AllSongs['songs'][0]) {
    if (e.target.checked) {
      setSelectedSongs((prev) => [...prev, song]);
      handleInputChange('songIds', selectedSongs.map((selectedSong) => selectedSong.id).concat(song.id));
    } else {
      setSelectedSongs(
        (prev) => prev.filter((prevSong) => prevSong.title !== song.title),
      );
      handleInputChange('songIds', selectedSongs.map((selectedSong) => selectedSong.id).filter((id) => id !== song.id));
    }
  }
  return (
    <div>
      <div className="form-control border border-stone-700 rounded-md p-2 gap-2 h-[335px] overflow-y-scroll">
        {songs.map((song) => (
          <label key={song.id} htmlFor="songCheckbox" className="cursor-pointer label border-2 border-stone-700 rounded-md bg-base-100 px-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm border-2 border-red-500 [--chkbg:theme(colors.red.500)]"
              onChange={(e) => handleChange(e, song)}
            />
            <span className="label-text font-semibold">{song.title}</span>
            <span className="label-text font-semibold">{secondsToFormatedDuration(song.duration)}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default CreateAlbumSongsSelection;
