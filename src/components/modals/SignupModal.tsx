import React from 'react';

function SignupModal() {
  function closeModal() {
    (window as any).signup_modal.close();
  }
  return (
    <dialog id="signup_modal" className="modal">
      <form method="dialog" className="modal-box">
        {/* if there is a button in form, it will close the modal */}
        <button
          type="button"
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </form>
      <form
        method="dialog"
        className="modal-backdrop"
      >
        <button type="submit">close</button>
      </form>
    </dialog>
  );
}

export default SignupModal;
