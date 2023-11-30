import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function VisitorMenu() {
  const { t, i18n } = useTranslation();

  function handleClick(lng: string) {
    i18n.changeLanguage(lng);
  }

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" aria-label="open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/">
                {t('Home', { ns: 'common' })}
              </Link>
            </li>
            <li>
              <Link to="/listen">
                {t('Listen', { ns: 'common' })}
              </Link>
            </li>
            <li>
              <Link to="/create">
                {t('Create', { ns: 'common' })}
              </Link>
            </li>
            <li>
              <details>
                <summary>{t('Language', { ns: 'common' })}</summary>
                <ul className="p-2">
                  <li>
                    <button
                      type="button"
                      onClick={() => handleClick('fr')}
                    >
                      {t('French', { ns: 'common' })}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => handleClick('en')}
                    >
                      {t('English', { ns: 'common' })}
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">
              {t('Home', { ns: 'common' })}
            </Link>
          </li>
          <li>
            <Link to="/listen">
              {t('Listen', { ns: 'common' })}
            </Link>
          </li>
          <li>
            <Link to="/create">
              {t('Create', { ns: 'common' })}
            </Link>
          </li>
          <li>
            <details>
              <summary>{t('Language', { ns: 'common' })}</summary>
              <ul className="p-2">
                <li>
                  <button
                    type="button"
                    onClick={() => handleClick('fr')}
                  >
                    {t('French', { ns: 'common' })}
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleClick('en')}
                  >
                    {t('English', { ns: 'common' })}
                  </button>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default VisitorMenu;
