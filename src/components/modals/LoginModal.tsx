import React from 'react';
import { useTranslation } from 'react-i18next';

function LoginModal() {
  const { t } = useTranslation();

  function closeModal() {
    (window as any).login_modal.close();
  }

  function openSignupModal() {
    closeModal();
    (window as any).signup_modal.showModal();
  }
  return (
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
        <form className="w-full flex flex-col items-center gap-4 my-4">

          {/* Input username */}
          <label className="form-control w-full max-w-xs" htmlFor="username">
            <div className="label">
              <span className="label-text font-semibold">{t('LOGIN_MODAL_LABEL_USERNAME', { ns: 'translation' })}</span>
            </div>
            <input
              type="text"
              placeholder={t('LOGIN_MODAL_PLACEHOLDER_USERNAME', { ns: 'translation' })}
              className="input input-bordered input-sm w-full max-w-lg"
            />
          </label>

          {/* Input password */}
          <label className="form-control w-full max-w-xs" htmlFor="password">
            <div className="label">
              <span className="label-text font-semibold">{t('LOGIN_MODAL_LABEL_PASSWORD', { ns: 'translation' })}</span>
            </div>
            <input
              type="text"
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

          {/* Submit button */}
          <button type="submit" className="btn btn-lg my-4">{t('MENU_LOGIN', { ns: 'common' })}</button>
        </form>
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
}

export default LoginModal;
