import React from 'react';
import { useTranslation } from 'react-i18next';

// Language Selector With Dropdown On Burger Menu
export function LanguageSelectorBurgerMenu() {
  const { t, i18n } = useTranslation();

  const lngs = {
    fr: { nativeName: t('MENU_LANGUAGE_1', { ns: 'common' }) },
    en: { nativeName: t('MENU_LANGUAGE_2', { ns: 'common' }) },
  };

  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <details>
      <summary className="font-semibold">{t('MENU_LANGUAGE', { ns: 'common' })}</summary>
      <ul className="p-2">
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

// Language Selector With Button (Desktop Visitor Menu)
export function LanguageSelectorButton() {
  const { t, i18n } = useTranslation();

  const lngs = {
    fr: { nativeName: t('MENU_LANGUAGE_1', { ns: 'common' }) },
    en: { nativeName: t('MENU_LANGUAGE_2', { ns: 'common' }) },
  };

  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <details>
      <summary className="btn btn-ghost font-semibold my-3">{t('MENU_LANGUAGE', { ns: 'common' })}</summary>
      <ul className="p-2 bg-base-200 border border-stone-700 rounded-t-none">
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
