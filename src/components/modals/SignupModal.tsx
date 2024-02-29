import React from 'react';
import { useTranslation } from 'react-i18next';

function SignupModal() {
  const { t } = useTranslation();

  function closeModal() {
    (window as any).signup_modal.close();
  }
  return (
    <dialog id="signup_modal" className="modal">
      <form method="dialog" className="modal-box border-2 border-stone-700">

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

          {/* Input username */}
          <label className="form-control w-full max-w-xs" htmlFor="username">
            <div className="label">
              <span className="label-text text-md font-semibold">{t('SIGNUP_MODAL_LABEL_USERNAME', { ns: 'translation' })}</span>
            </div>
            <input
              type="text"
              placeholder="..."
              className="input input-bordered input-sm w-full max-w-lg"
            />
          </label>

          {/* Input email */}
          <label className="form-control w-full max-w-xs" htmlFor="username">
            <div className="label">
              <span className="label-text text-md font-semibold">{t('SIGNUP_MODAL_LABEL_EMAIL', { ns: 'translation' })}</span>
            </div>
            <input
              type="text"
              placeholder="@"
              className="input input-bordered input-sm w-full max-w-lg"
            />
          </label>

          {/* Input password */}
          <label className="form-control w-full max-w-xs" htmlFor="password">
            <div className="label">
              <span className="label-text text-md font-semibold">{t('SIGNUP_MODAL_LABEL_PASSWORD', { ns: 'translation' })}</span>
            </div>
            <input
              type="text"
              placeholder="..."
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </label>

          {/* Input confirm password */}
          <label className="form-control w-full max-w-xs" htmlFor="confirm_password">
            <div className="label">
              <span className="label-text text-md font-semibold">{t('SIGNUP_MODAL_LABEL_CONFIRM_PASSWORD', { ns: 'translation' })}</span>
            </div>
            <input
              type="text"
              placeholder="..."
              className="input input-bordered input-sm w-full max-w-xs"
            />
          </label>

          {/* Input checkbox */}
          <div className="form-control">
            <label className="label cursor-pointer gap-4" htmlFor="CGU">
              <input type="checkbox" className="checkbox" />
              <span className="label-text">{t('SIGNUP_MODAL_ACCEPT_CGU', { ns: 'translation' })}</span>
            </label>
          </div>

          {/* Submit button */}
          <button type="submit" className="btn btn-lg my-2">{t('SIGNUP_MODAL_BTN', { ns: 'translation' })}</button>
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
}

export default SignupModal;
