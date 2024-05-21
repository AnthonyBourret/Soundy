/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo, useState } from 'react';
import { useAppSelector } from '../../redux';

type Props = {
  mode: 'edit' | 'view';
};

const ProfileRecap = (props: Props) => {
  const { mode } = props;
  const user = useAppSelector((state) => state.user);
  const [actualMode, setActualMode] = useState(mode);
  const { name, country, picture } = user;

  const userInfosJSX = useMemo(() => {
    if (actualMode === 'edit') {
      return (
        <div className="flex flex-col items-end mr-4 gap-4 sm:gap-2">
          <div className="mb-2 flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <label className="ml-2 lg:m-0 text-lg font-bold">Name:</label>
            <input type="text" className="input" value={name || ''} readOnly />
          </div>
          <div className="mb-2 flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <label className="ml-2 lg:m-0 text-lg font-bold">Country:</label>
            <input type="text" className="input" value={country || ''} readOnly />
          </div>
          <div className="mb-2 flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <label className="ml-2 lg:m-0 text-lg font-bold">Email:</label>
            <input type="text" className="input" value={user.email || 'unknown email'} readOnly />
          </div>
          <div className="mb-2 flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <label className="ml-2 lg:m-0 text-lg font-bold">Password:</label>
            <input type="password" className="input" />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <label className="ml-2 lg:m-0 text-lg font-bold">Confirm Password:</label>
            <input type="password" className="input" />
          </div>

          {/* Save and Cancel buttons */}
          <div className="absolute top-0 right-0 mt-4 mr-4 flex gap-2">
            <button
              className="btn btn-outline border-stone-700 border"
              onClick={() => setActualMode('view')}
              type="button"
            >
              Cancel
            </button>
            <button
              className="btn btn-success"
              type="button"
            >
              Save
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-end mr-4 gap-2">
        <div className="flex items-center gap-2">
          <label className="text-lg font-bold">Name:</label>
          <span>{name}</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg font-bold">Country:</label>
          <span>{country}</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg font-bold">Email:</label>
          <span>{user.email || 'azaza'}</span>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-lg font-bold">Password:</label>
          <span>********</span>
        </div>

        {/* Edit button */}
        <div className="absolute top-0 right-0 mt-4 mr-4">
          <button
            type="submit"
            className="btn btn-outline border-stone-700 border"
            onClick={() => setActualMode('edit')}
          >
            Edit
          </button>
        </div>
      </div>
    );
  }, [country, actualMode, name, user.email]);

  const avatarJSX = useMemo(() => {
    if (actualMode === 'edit') {
      return (
        <div className="flex flex-col items-center mx-4 my-6">
          <div className="mb-2 rounded-full overflow-hidden">
            <img src={picture || ''} alt="Profile" className="w-20 h-20 object-cover" />
          </div>
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
      );
    }
    return (
      <div className="flex flex-col items-center mx-4 my-6">
        <div className="mb-2 rounded-full overflow-hidden">
          <img src={picture || ''} alt="Profile" className="w-20 h-20 object-cover" />
        </div>
      </div>
    );
  }, [actualMode, picture]);

  return (
    <div className="card flex-col-reverse sm:flex-row items-center gap-5 max-w-[90%] overflow-hidden
    justify-center py-12 sm:py-6 px-20 bg-base-200 shadow-xl border border-1 border-stone-700"
    >
      {userInfosJSX}
      {avatarJSX}
    </div>
  );
};

export default ProfileRecap;
