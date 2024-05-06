import React from 'react';
import { secondsToFormatedDuration } from '../../utils';

interface Props {
  songs:
  {
    title: string;
    duration: number
  }[],
  setSelectedSongs: React.Dispatch<React.SetStateAction<{ title: string; duration: number }[]>>
}

function CreateAlbumSongsSelection({ songs, setSelectedSongs }: Props) {
  return (
    <div>
      <div className="form-control border border-stone-700 rounded-md p-2 gap-2 h-[300px] overflow-y-scroll">
        {songs.map((song) => (
          <label key={song.title} htmlFor="songCheckbox" className="cursor-pointer label border-2 border-stone-700 rounded-md bg-base-100 px-2">
            <input
              type="checkbox"
              className="checkbox checkbox-sm border-2 border-red-500 [--chkbg:theme(colors.red.500)]"
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedSongs((prev) => [...prev, song]);
                } else {
                  setSelectedSongs(
                    (prev) => prev.filter((prevSong) => prevSong.title !== song.title),
                  );
                }
              }}
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
