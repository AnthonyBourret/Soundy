import React from 'react';
import { useTranslation } from 'react-i18next';

function CreateSong() {
  const { t } = useTranslation('translation');
  return (
    <div className="flex flex-col gap-8 items-center mb-20">
      <div className="flex gap-4">
        <label htmlFor="file" className="form-control">
          <div className="label">
            <span className="label-text font-semibold">Upload your song :</span>
          </div>
          <input type="file" placeholder="" className="file-input file-input-bordered w-full max-w-xs bg-neutral" disabled />
        </label>
        <label htmlFor="title" className="form-control">
          <div className="label">
            <span className="label-text font-semibold">Title :</span>
          </div>
          <input type="text" id="title" className="input input-bordered bg-neutral" />
        </label>
      </div>
      <label htmlFor="lyrics" className="form-control w-full">
        <div className="label">
          <span className="label-text font-semibold">Lyrics :</span>
        </div>
        <textarea className="textarea textarea-bordered bg-neutral w-full h-[150px]" placeholder="" />
      </label>
      <button type="submit" className="btn btn-neutral py-4 w-fit">Add the song</button>
    </div>
  );
}

export default CreateSong;
