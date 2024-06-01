/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useMemo, useState } from 'react';
import { ApolloError, useMutation } from '@apollo/client';

import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../redux';
import ProfileDeleteAccount from './ProfileDeleteAccount';
import { UpdateProfileMutation } from '../../requests/mutations';
import { ArtistUpdateInput } from '../../types/__generated_schemas__/graphql';
import { Spinner } from '../customElements';
import { useNewToast } from '../toastContext';

type Props = {
  mode: 'edit' | 'view';
};

const ProfileRecap = (props: Props) => {
  const { mode } = props;
  const user = useAppSelector((state) => state.user);
  const [actualMode, setActualMode] = useState(mode);
  const { name: userName, country: userCountry, picture: userPicture } = user;
  const newToast = useNewToast();
  const { t } = useTranslation(['common', 'translation']);

  const [confirmPassword, setConfirmPassword] = useState<ArtistUpdateInput['password']>(null);
  const [country, setCountry] = useState<ArtistUpdateInput['country']>(userCountry);
  const [email, setEmail] = useState<ArtistUpdateInput['email']>(user.email);
  const [name, setName] = useState<ArtistUpdateInput['name']>(userName);
  const [password, setPassword] = useState<ArtistUpdateInput['password']>(null);
  const [picture, setPicture] = useState<ArtistUpdateInput['picture']>(userPicture);

  const inputMutation = useMemo(() => {
    const inputFields: Partial<ArtistUpdateInput> = {
      country,
      email,
      name,
      picture,
    };

    if (password != null) {
      inputFields.password = password;
    }

    return inputFields;
  }, [country, email, name, password, picture]);

  const [updateProfileAction, {
    loading: updateProfileLoading,
    error: updateProfileError,
  }] = useMutation(
    UpdateProfileMutation,
    {
      variables: {
        input: inputMutation,
      },
    },
  );

  const handleSave = useCallback(async () => {
    if (password !== confirmPassword) {
      newToast('error', t('PASSWORDS_DO_NOT_MATCH', { ns: 'translation' }));
      setActualMode('view');
      return;
    }

    try {
      const response = await updateProfileAction();

      if (response) {
        newToast('success', t('UPDATE_PROFILE_SUCCESS', { ns: 'translation' }));
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        if (error.graphQLErrors[0].extensions?.code === 'ARTIST_NAME_ALREADY_EXISTS') {
          newToast('error', error.message);
          return;
        }

        if (error.graphQLErrors[0].extensions?.code === 'ARTIST_EMAIL_ALREADY_EXISTS') {
          newToast('error', error.message);
          return;
        }
      }

      if (updateProfileError) {
        newToast('error', updateProfileError.message);
        return;
      }

      newToast('error', t('UPDATE_PROFILE_ERROR', { ns: 'translation' }));
    }
  }, [password, confirmPassword, newToast, t, updateProfileAction, updateProfileError]);

  const saveButtonJSX = useMemo(() => {
    if (actualMode === 'edit') {
      if (updateProfileLoading) {
        return <Spinner />;
      }

      return (
        <button
          className="btn btn-success"
          type="button"
          onClick={handleSave}
        >
          Save
        </button>
      );
    }
    return null;
  }, [actualMode, handleSave, updateProfileLoading]);

  const userInfosJSX = useMemo(() => {
    if (actualMode === 'edit') {
      return (
        <div className="flex flex-col items-end mr-4 gap-4 sm:gap-2">
          <div className="mb-2 flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <label className="ml-2 lg:m-0 text-lg font-bold">Name:</label>
            <input
              type="text"
              className="input"
              value={name || ''}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2 flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <label className="ml-2 lg:m-0 text-lg font-bold">Country:</label>
            <input
              type="text"
              className="input"
              value={country || ''}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-2 flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <label className="ml-2 lg:m-0 text-lg font-bold">Picture:</label>
            <input
              type="text"
              className="input"
              value={picture || ''}
              onChange={(e) => setPicture(e.target.value)}
            />
          </div>
          <div className="mb-2 flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <label className="ml-2 lg:m-0 text-lg font-bold">Email:</label>
            <input
              type="text"
              className="input"
              value={email || 'unknown email'}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2 flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <label className="ml-2 lg:m-0 text-lg font-bold">Password:</label>
            <input
              type="password"
              className="input"
              value={password || ''}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
            <label className="ml-2 lg:m-0 text-lg font-bold">Confirm Password:</label>
            <input
              type="password"
              className="input"
              value={confirmPassword || ''}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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
            {saveButtonJSX}
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
  }, [
    actualMode,
    confirmPassword,
    country,
    email,
    name,
    password,
    picture,
    saveButtonJSX,
    user.email,
  ]);

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

  const profileDeleteAccountJSX = useMemo(() => {
    if (actualMode === 'edit') {
      return <ProfileDeleteAccount />;
    }
    return null;
  }, [actualMode]);

  return (
    <div className="card flex-col-reverse sm:flex-row items-center gap-5 max-w-[90%] overflow-hidden
    justify-center py-12 sm:py-6 px-20 bg-base-200 shadow-xl border border-1 border-stone-700"
    >
      {userInfosJSX}
      {avatarJSX}
      {profileDeleteAccountJSX}
    </div>
  );
};

export default ProfileRecap;
