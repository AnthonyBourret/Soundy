import React from 'react';

interface OpenModalButtonProps {
  buttonStyle: string;
  title: string;
  modalId: string;
  onClick?: () => void;
}

function OpenModalButton({
  buttonStyle, title, modalId, onClick,
}: OpenModalButtonProps) {
  const handleClick = () => {
    if (onClick != null) {
      onClick();
    }

    const modalElement = document.getElementById(modalId) as HTMLDialogElement;
    if (modalElement) {
      modalElement.classList.add('modal-open');
    }
  };

  return (
    <button
      type="button"
      className={buttonStyle}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default OpenModalButton;
