import React from 'react';
import { LanguageSelectorProps } from '../../types';

// Language Selector With Dropdown
export function LanguageSelectorDropdown(
  {
    text,
    firstLanguagge,
    secondLanguage,
    handleClickFr,
    handleClickEn,
  }: LanguageSelectorProps,
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
  }: LanguageSelectorProps,
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
