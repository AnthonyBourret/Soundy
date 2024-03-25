/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';

// Language Selector With Dropdown On Burger Menu
export function LanguageSelector(): JSX.Element {
  const { t, i18n } = useTranslation('common');
  const [cookies, setCookie] = useCookies(['language', 'acceptCookies']);

  const lngs = {
    fr: { nativeName: t('MENU_LANGUAGE_1', { ns: 'common' }) },
    en: { nativeName: t('MENU_LANGUAGE_2', { ns: 'common' }) },
  };

  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
    if (cookies.acceptCookies === true) {
      setCookie('language', lng, { path: '/' });
    }
  }

  useEffect(() => {
    if (cookies.acceptCookies === true) {
      const lng = i18n.resolvedLanguage;
      setCookie('language', lng, { path: '/' });
    }
  }, [i18n.resolvedLanguage, setCookie, cookies.acceptCookies]);

  return (
    <details>
      <summary className="font-semibold lg:my-3">{t('MENU_LANGUAGE', { ns: 'common' })}</summary>
      <ul className="p-2 lg:bg-base-200 lg:border lg:border-stone-700 lg:rounded-t-none">
        {Object.keys(lngs).map((lng) => (
          <li key={lng}>
            <button
              type="button"
              onClick={() => handleClick(lng)}
              className={i18n.language === lng ? 'font-bold' : ''}
            >
              {lngs[lng].nativeName}
            </button>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default LanguageSelector;
