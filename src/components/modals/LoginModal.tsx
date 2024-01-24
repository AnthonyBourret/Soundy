import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLazyQuery } from '@apollo/client';
import { LoginQuery } from '../../queries';
import type { LoginInput } from '../../types';

function LoginModal() {
  const { t } = useTranslation();
  const [toastVisible, setToastVisible] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // TODO : Look if it is better to use mutation than a query to login
  const [loginAction, { data, loading, error }] = useLazyQuery(LoginQuery, {
    variables: {
      // TODO : Find another way to type this and avoid "as"
      input: formData as LoginInput,
    },
  });

  function closeModal() {
    (window as any).login_modal.close();
  }

  function openSignupModal() {
    closeModal();
    (window as any).signup_modal.showModal();
  }

  useEffect(
    () => {
    // TODO : Record the login in a redux store
      if (data) {
        localStorage.setItem('AUTH_TOKEN', data.login.token);
        closeModal();
      }

      if (error) {
        setToastVisible(true);

        const timeoutId = setTimeout(() => {
          setToastVisible(false);
        }, 5000);

        return () => clearTimeout(timeoutId);
      }
      // TODO : Find another way to don't be forced to return an empty function like that
      return () => {};
    },
    [data, error],
  );

  const connexionInfos = useMemo(
    () => {
      if (toastVisible) {
        return (
          <div className="toast">
            <div className="alert alert-info">
              <span>{error?.message}</span>
            </div>
          </div>
        );
      }
      return null;
    },
    [error?.message, toastVisible],
  );

  const loginButton = useMemo(() => {
    if (loading) {
      return (
        <div className="flex items-center justify-center w-full">
          <span className="loading loading-spinner loading-lg" />
        </div>
      );
    }
    return (
      <button type="submit" className="btn btn-lg my-4" onClick={() => loginAction()}>
        {t('MENU_LOGIN', { ns: 'common' })}
      </button>
    );
  }, [loading, loginAction, t]);

  return (
    <>
      {connexionInfos}
      <dialog id="login_modal" className="modal">
        <form method="dialog" className="modal-box border-2 border-stone-700">
          {/* Close modal button */}
          <button
            type="button"
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="font-bold text-xl mb-8 text-center">{t('LOGIN_MODAL_TITLE', { ns: 'translation' })}</h3>
          <div className="w-full flex flex-col items-center gap-4 my-4">

            {/* Input email */}
            <label className="form-control w-full max-w-xs" htmlFor="email">
              <div className="label">
                <span className="label-text font-semibold">{t('LOGIN_MODAL_LABEL_EMAIL', { ns: 'translation' })}</span>
              </div>
              <input
                type="text"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t('LOGIN_MODAL_PLACEHOLDER_EMAIL', { ns: 'translation' })}
                className="input input-bordered input-sm w-full max-w-lg"
              />
            </label>

            {/* Input password */}
            <label className="form-control w-full max-w-xs" htmlFor="password">
              <div className="label">
                <span className="label-text font-semibold">{t('LOGIN_MODAL_LABEL_PASSWORD', { ns: 'translation' })}</span>
              </div>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder={t('LOGIN_MODAL_PLACEHOLDER_PASSWORD', { ns: 'translation' })}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </label>

            <p className="py-2 text-sm">
              {t('LOGIN_MODAL_TXT', { ns: 'translation' })}
              {' '}
              <button
                type="button"
                onClick={openSignupModal}
                className="link link-info"
              >
                {t('LOGIN_MODAL_LINK', { ns: 'translation' })}
              </button>
            </p>
            {loginButton}
          </div>
          <p className="pt-2 text-xs text-center">{t('MODAL_TXT_CLOSE', { ns: 'common' })}</p>
        </form>

        {/* Modal backdrop */}
        <form
          method="dialog"
          className="modal-backdrop"
        >
          <button type="submit">{t('CLOSE', { ns: 'common' })}</button>
        </form>
      </dialog>
    </>
  );
}

export default LoginModal;
