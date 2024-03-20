import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  setIsCookieAccepted: (isAccepted: boolean) => void;
  setIsVisible: (isVisible: boolean) => void;
}

function CookiesPopup({ setIsCookieAccepted, setIsVisible }: Props) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    if (target.value === 'Accept') {
      setIsCookieAccepted(true);
    } else {
      setIsCookieAccepted(false);
    }
    setIsVisible(false);
  }

  const { t } = useTranslation('translation');
  return (
    <div className="fixed bottom-0 bg-neutral p-6 m-2 border border-stone-700 rounded-box md:w-1/3">
      <div className="flex flex-col gap-6">
        <h3 className="text-lg font-semibold">{t('COOKIE_BANNER_TITLE')}</h3>
        <p className="text-sm text-justify">{t('COOKIE_BANNER_TXT')}</p>
        <div className="flex self-center gap-4">
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            value="Accept"
            className="btn btn-primary"
          >
            {t('COOKIE_BANNER_BTN_ACCEPT')}
          </button>
          <button
            onClick={(e) => handleClick(e)}
            type="button"
            value="Decline"
            className="btn btn-primary"
          >
            {t('COOKIE_BANNER_BTN_DECLINE')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookiesPopup;
