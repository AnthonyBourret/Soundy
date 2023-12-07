import React from 'react';

interface OpenModalButtonProps {
  buttonStyle: string;
  title: string;
  modalId: string;
}

function OpenModalButton({ buttonStyle, title, modalId }: OpenModalButtonProps) {
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

export default OpenModalButton;
