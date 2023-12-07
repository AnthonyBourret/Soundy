import React from 'react';

interface Props {
  text: string;
  firstLanguagge: string;
  secondLanguage: string;
  handleClickFr: () => void;
  handleClickEn: () => void;
}

// Language Selector With Dropdown On Burger Menu
export function LanguageSelectorBurgerMenu(
  {
    text,
    firstLanguagge,
    secondLanguage,
    handleClickFr,
    handleClickEn,
  }: Props,
) {
  return (
    <details>
      <summary className="font-semibold">{text}</summary>
      <ul className="p-2">
        <li>
          <button
            type="button"
            onClick={handleClickFr}
          >
            {firstLanguagge}
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={handleClickEn}
          >
            {secondLanguage}
          </button>
        </li>
      </ul>
    </details>
  );
}

// Language Selector With Button (Desktop Visitor Menu)
export function LanguageSelectorButton(
  {
    text,
    firstLanguagge,
    secondLanguage,
    handleClickFr,
    handleClickEn,
  }: Props,
) {
  return (
    <details>
      <summary className="btn btn-ghost font-semibold">{text}</summary>
      <ul className="p-2">
        <li>
          <button
            type="button"
            onClick={handleClickFr}
          >
            {firstLanguagge}
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={handleClickEn}
          >
            {secondLanguage}
          </button>
        </li>
      </ul>
    </details>
  );
}
