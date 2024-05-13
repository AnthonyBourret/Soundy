/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo } from 'react';
import { useAppSelector } from '../../redux';

type Props = {
  mode: 'edit' | 'view';
};

const ProfileRecap = (props: Props) => {
  const { mode } = props;
  const user = useAppSelector((state) => state.user);
  const { name, country, picture } = user;

  const userInfosJSX = useMemo(() => {
    if (mode === 'edit') {
      return (
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
            <input type="text" className="input" value={user.email || 'unknown email'} readOnly />
          </div>
          <div className="mb-2 flex items-center gap-2">
            <label className="text-lg font-bold">Password:</label>
            <input type="password" className="input" />
          </div>
          <div className="flex items-center gap-2">
            <label className="text-lg font-bold">Confirm Password:</label>
            <input type="password" className="input" />
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
      </div>
    );
  }, [country, mode, name, user.email]);

  const avatarJSX = useMemo(() => (
    <div className="flex flex-col items-center ml-4 my-6">
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
  ), [picture]);

  return (
    <div className="card flex-row items-center gap-5 justify-center py-6 px-20 bg-base-200 shadow-xl border border-1 border-stone-700">
      {userInfosJSX}
      {avatarJSX}
    </div>
  );
};

export default ProfileRecap;
