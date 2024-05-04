import React from 'react';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';

interface Props {
  setCookieVisibility: (isVisible: boolean) => void;
}

function CookiesPopup({ setCookieVisibility }: Props) {
  const [, setCookies] = useCookies(['acceptCookies']);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    if (target.value === 'Accept') {
      setCookies('acceptCookies', true, { path: '/' });
    } else {
      setCookies('acceptCookies', false, { path: '/' });
    }
    setCookieVisibility(false);
  }

  const { t } = useTranslation('translation');
  return (
    <div className="fixed bottom-44 sm:bottom-0 bg-base-100 bg-opacity-90 backdrop-blur-[10px] px-6 py-10 sm:p-6 m-2 border border-stone-700 rounded-box md:w-2/5">
      <div className="flex flex-col gap-10 sm:gap-6">
        <h3 className="text-xl font-semibold">{t('COOKIE_BANNER_TITLE')}</h3>
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
