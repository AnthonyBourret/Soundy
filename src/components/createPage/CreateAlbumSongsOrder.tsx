import React from 'react';

function CreateAlbumSongsOrder() {
  return (
    <div className="flex flex-col gap-2 border border-stone-700 rounded-md p-2">
      <div className="label border border-stone-700 rounded-md bg-base-100 px-4">
        <span className="label-text font-semibold">1</span>
        <span className="label-text font-semibold">Song title</span>
        <span className="label-text font-semibold">1:35</span>
      </div>
      <div className="label border border-stone-700 rounded-md bg-base-100 px-4">
        <span className="label-text font-semibold">2</span>
        <span className="label-text font-semibold">Song gergergegregtitle</span>
        <span className="label-text font-semibold">15:35</span>
      </div>
      <div className="label border border-stone-700 rounded-md bg-base-100 px-4">
        <span className="label-text font-semibold">3</span>
        <span className="label-text font-semibold">Song title</span>
        <span className="label-text font-semibold">1:35</span>
      </div>
      <div className="label border border-stone-700 rounded-md bg-base-100 px-4">
        <span className="label-text font-semibold">4</span>
        <span className="label-text font-semibold">Song gergergegregtitle</span>
        <span className="label-text font-semibold">15:35</span>
      </div>
    </div>
  );
}

export default CreateAlbumSongsOrder;
