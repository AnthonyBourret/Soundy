import React from 'react';
import { useTranslation } from 'react-i18next';

function CookiesPopup() {
  const { t } = useTranslation('translation');
  return (
    <div className="fixed bottom-0 bg-neutral p-4 m-2 border border-stone-700 rounded-box sm:w-3/4">
      <div className="flex flex-col gap-6">
        <h3 className="text-lg font-semibold">{t('COOKIE_BANNER_TITLE')}</h3>
        <p className="text-sm">{t('COOKIE_BANNER_TXT')}</p>
        <div className="flex self-center gap-4">
          <button type="button" className="btn btn-primary">{t('COOKIE_BANNER_BTN_ACCEPT')}</button>
          <button type="button" className="btn btn-primary">{t('COOKIE_BANNER_BTN_DECLINE')}</button>
        </div>
      </div>
    </div>
  );
}

export default CookiesPopup;
