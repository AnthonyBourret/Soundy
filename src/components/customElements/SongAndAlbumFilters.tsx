/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import years from '../../utils/Years';
import durations from '../../utils/Durations';

function SongAndAlbumFilters() {
  return (
    <div className="flex flex-col gap-2 py-4 smin-[540px]:px-12 min-[540px]:flex-row min-[540px]:items-center">
      <p className="px-2 font-semibold">Filter by</p>
      <div className="join">
        <select className="select select-bordered select-sm bg-base-200 join-item">
          <option disabled selected>Year</option>
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <select className="select select-bordered select-sm bg-base-200 join-item">
          <option disabled selected>Duration</option>
          {durations.map((duration) => (
            <option key={duration} value={duration}>{duration}</option>
          ))}
        </select>
        <select className="select select-bordered select-sm bg-base-200 join-item">
          <option disabled selected>Order</option>
          <option>Asc</option>
          <option>Des</option>
        </select>
        <button type="button" className="btn btn-square btn-sm border border-stone-700 join-item">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
    </div>
  );
}

export default SongAndAlbumFilters;
