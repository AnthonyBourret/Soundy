/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useAppSelector } from '../../redux';

const ProfileRecap = () => {
  const user = useAppSelector((state) => state.user);
  const { name, country, picture } = user;

  return (
    <div className="card flex-row items-center sm:w-[70%] p-6 bg-base-200 shadow-xl border border-1 border-stone-700">
      {/* Left Section */}
      <div className="flex flex-col items-end mr-4 gap-2">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-lg font-bold">Name:</label>
          <input type="text" className="input" value={name || ''} readOnly />
        </div>
        <div className="mb-2 flex items-center gap-2">
          <label className="text-lg font-bold">Country:</label>
          <input type="text" className="input" value={country || ''} readOnly />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg font-bold">Email:</label>
          <input type="text" className="input" value={user.email || ''} readOnly />
        </div>
      </div>

      {/* Center Section */}
      <div className="flex flex-col items-end mx-auto gap-2">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-lg font-bold">Password:</label>
          <input type="password" className="input" />
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg font-bold">Confirm Password:</label>
          <input type="password" className="input" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center ml-4">
        <div className="mb-2 rounded-full overflow-hidden">
          <img src={picture || ''} alt="Profile" className="w-20 h-20 object-cover" />
        </div>
        {/* <input type="file" className="btn btn-primary mt-2" /> */}
        <label htmlFor="fileUpload" className="btn btn-primary mt-2">
          Upload new avatar
        </label>
        <input
          id="fileUpload"
          type="file"
          className="hidden"
          accept="image/*"
        />

      </div>
    </div>
  );
};

export default ProfileRecap;
