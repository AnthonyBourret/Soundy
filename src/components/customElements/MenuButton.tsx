import React from 'react';
import { NavLink } from 'react-router-dom';
import { CustomMenuButtonProps, OpenModalButtonProps } from '../../types';

export function CustomNavButton({ link, title, buttonStyle }: CustomMenuButtonProps) {
  return (
    <NavLink
      to={link}
      className={buttonStyle}
    >
      {title}
    </NavLink>
  );
}

export function OpenModalButton({ buttonStyle, title, modalId }: OpenModalButtonProps) {
  return (
    <button
      type="button"
      className={buttonStyle}
      onClick={() => {
        if (document) {
          (document.getElementById(modalId) as HTMLDialogElement).showModal();
        }
      }}
    >
      {title}
    </button>
  );
}
