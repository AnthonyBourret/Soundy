import React from 'react';
import { secondsToFormatedDuration } from '../../utils';
import type { Song } from '../../types/__generated_schemas__/graphql';

interface Props {
  songs: Song[],
  selectedSongs: Song[],
  setSelectedSongs: React.Dispatch<React.SetStateAction<Song[]>>
  handleInputChange: (field: string, value: string | number | number[] | Object) => void;
}

function CreateAlbumSongsSelection({
  songs, selectedSongs, setSelectedSongs, handleInputChange,
}: Props) {
  /**
   * When the checkbox is checked :
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The event of the checkbox
   * @param {Song} song - The song that is checked
   *
   * setSelectedSongs is called with the previous selectedSongs array, adding the chosen song.
   *
   * handleInputChange is called with the new array of song ids.
   *
   * When the checkbox is unchecked :
   *
   * The song is removed from the selectedSongs array.
   *
   * handleInputChange is called with a new filtered array of song ids, removing the unchecked song.
  */
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, song: Song[][0]) {
    if (e.target.checked) {
      setSelectedSongs([...selectedSongs, song]);
      handleInputChange('songIds', [...selectedSongs, song].map((selectedSong) => selectedSong.id));
    } else {
      setSelectedSongs(selectedSongs.filter((selectedSong) => selectedSong.id !== song.id));
      handleInputChange('songIds', selectedSongs.filter((selectedSong) => selectedSong.id !== song.id).map((selectedSong) => selectedSong.id));
    }
  }

  return (
    <form>
      <div className="form-control border border-stone-700 rounded-md p-2 gap-2 h-[335px] overflow-y-scroll">
        {songs.map((song) => (
          <label key={song.id} htmlFor="songCheckbox" className="cursor-pointer gap-4 label border-2 border-stone-700 rounded-md bg-base-100 px-2">
            <input
              type="checkbox"
              checked={selectedSongs.some((selectedSong) => selectedSong.id === song.id)}
              className="checkbox checkbox-sm border-2 border-red-500 [--chkbg:theme(colors.red.500)]"
              onChange={(e) => handleChange(e, song)}
            />
            <span className="label-text font-semibold truncate">{song.title}</span>
            <span className="label-text font-semibold">{secondsToFormatedDuration(song.duration)}</span>
          </label>
        ))}
      </div>
    </form>
  );
}

export default CreateAlbumSongsSelection;
