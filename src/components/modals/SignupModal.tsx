import { ApolloError, useMutation } from '@apollo/client';
import React, {
  FormEvent,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import validator from 'validator';

import { CreateArtistMutation } from '../../requests/mutations';
import { useNewToast } from '../toastContext';

const SignupModal = (): JSX.Element => {
  const { t } = useTranslation();
  const newToast = useNewToast();

  const [formData, setFormData] = useState({
    username: 'Joliwood',
    email: 'joliboisgui@gmail.com',
    password: '',
    confirmPassword: '',
    isCguAccepted: false,
  });

  const [createArtist, {
    // TODO - Save the data received in the store
    // data: createArtistData,
    error: createArtistError,
    loading: createArtistLoading,
  }] = useMutation(
    CreateArtistMutation,
    {
      variables: {
        input: {
          name: formData.username,
          email: formData.email,
          password: formData.password,
        },
      },
    },
  );

  function closeModal() {
    (window as any).signup_modal.close();
  }

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  }, [formData, setFormData]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validator.isEmail(formData.email)) {
      newToast('warning', t('SIGNUP_MODAL_INVALID_EMAIL', { ns: 'translation' }));
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      newToast('warning', t('SIGNUP_MODAL_PASSWORDS_DONT_MATCH', { ns: 'translation' }));
      return;
    }

    try {
      const response = await createArtist();

      // Reset form data on successful signup
      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        isCguAccepted: false,
      });

      if (response) {
        newToast('success', t('SIGNUP_MODAL_SUCCESS', { ns: 'translation' }));
        closeModal();
      }
    } catch (error: unknown) {
      if (error instanceof ApolloError) {
        if (error.graphQLErrors[0].extensions.code === 'ARTIST_NAME_ALREADY_EXISTS') {
          newToast('error', error.message);
          return;
        }

        if (error.graphQLErrors[0].extensions.code === 'ARTIST_EMAIL_ALREADY_EXISTS') {
          newToast('error', error.message);
          return;
        }
      }

      if (createArtistError) {
        newToast('error', createArtistError.message);
        return;
      }

      newToast('error', t('SIGNUP_MODAL_ERROR', { ns: 'translation' }));
    }
  };

  const usernameInput = useMemo(() => (
    <label className="form-control w-full max-w-xs" htmlFor="username">
      <div className="label">
        <span className="label-text text-md font-semibold">{t('SIGNUP_MODAL_LABEL_USERNAME', { ns: 'translation' })}</span>
      </div>
      <input
        type="text"
        placeholder="..."
        value={formData.username}
        onChange={(e) => handleInputChange('username', e.target.value)}
        className="input input-bordered input-sm w-full max-w-lg"
      />
    </label>
  ), [formData.username, handleInputChange, t]);

  const emailInput = useMemo(() => (
    <label className="form-control w-full max-w-xs" htmlFor="email">
      <div className="label">
        <span className="label-text text-md font-semibold">{t('SIGNUP_MODAL_LABEL_EMAIL', { ns: 'translation' })}</span>
      </div>
      <input
        type="text"
        value={formData.email}
        onChange={(e) => handleInputChange('email', e.target.value)}
        placeholder="@"
        className="input input-bordered input-sm w-full max-w-lg"
      />
    </label>
  ), [formData.email, handleInputChange, t]);

  const passwordInput = useMemo(() => (
    <label className="form-control w-full max-w-xs" htmlFor="password">
      <div className="label">
        <span className="label-text text-md font-semibold">{t('SIGNUP_MODAL_LABEL_PASSWORD', { ns: 'translation' })}</span>
      </div>
      <input
        type="password"
        placeholder="..."
        value={formData.password}
        onChange={(e) => handleInputChange('password', e.target.value)}
        className="input input-bordered input-sm w-full max-w-xs"
      />
    </label>
  ), [formData.password, handleInputChange, t]);

  const confirmPasswordInput = useMemo(() => (
    <label className="form-control w-full max-w-xs" htmlFor="confirm_password">
      <div className="label">
        <span className="label-text text-md font-semibold">{t('SIGNUP_MODAL_LABEL_CONFIRM_PASSWORD', { ns: 'translation' })}</span>
      </div>
      <input
        type="password"
        placeholder="..."
        value={formData.confirmPassword}
        onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
        className="input input-bordered input-sm w-full max-w-xs"
      />
    </label>
  ), [formData.confirmPassword, handleInputChange, t]);

  const signupButton = useMemo(() => {
    if (createArtistLoading) {
      return (
        <div className="flex items-center justify-center w-full">
          <span className="loading loading-spinner loading-lg" />
        </div>
      );
    }

    return (
      <button
        type="submit"
        className="btn btn-lg my-2"
        disabled={!formData.isCguAccepted}
      >
        {t('SIGNUP_MODAL_BTN', { ns: 'translation' })}
      </button>
    );
  }, [createArtistLoading, formData.isCguAccepted, t]);

  return (
    <dialog id="signup_modal" className="modal">
      <form method="dialog" onSubmit={handleSubmit} className="modal-box border-2 border-stone-700">
        {/* Close modal button */}
        <button
          type="button"
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>

        <h3 className="font-bold text-xl mb-8 text-center">{t('SIGNUP_MODAL_TITLE', { ns: 'translation' })}</h3>
        <div className="w-full flex flex-col items-center gap-4 my-4">

          {usernameInput}
          {emailInput}
          {passwordInput}
          {confirmPasswordInput}

          {/* Input checkbox */}
          <div className="form-control">
            <label className="label cursor-pointer gap-4" htmlFor="CGU">
              <input
                type="checkbox"
                className="checkbox"
                checked={formData.isCguAccepted}
                onChange={() => setFormData(
                  { ...formData, isCguAccepted: !formData.isCguAccepted },
                )}
              />
              <span className="label-text">{t('SIGNUP_MODAL_ACCEPT_CGU', { ns: 'translation' })}</span>
            </label>
          </div>

          {signupButton}
        </div>
        <p className="pt-2 text-xs text-center">{t('MODAL_TXT_CLOSE', { ns: 'common' })}</p>
      </form>

      {/* Modal backdrop */}
      <form
        method="dialog"
        className="modal-backdrop"
      >
        <button type="submit">close</button>
      </form>
    </dialog>
  );
};

export default SignupModal;
