import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import { Cross2Icon, CheckIcon } from '@radix-ui/react-icons';

function SignupModal() {
  const { t } = useTranslation(['common', 'modals']);
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="flex flex-col gap-2 data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-black p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">

        {/* Titre de la modale */}
        <Dialog.Title className="text-mauve12 mb-10 text-[17px] font-medium">
          {t('Signup_message', { ns: 'modals' })}
        </Dialog.Title>

        {/* Input pour le nom d'utilisateur */}
        <fieldset className="mb-[15px] flex items-center justify-around">
          <label className="text-violet11 w-[90px] text-left text-[15px]" htmlFor="name">
            {t('Username', { ns: 'common' })}
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-1/2 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="name"
          />
        </fieldset>

        {/* Input pour l'email */}
        <fieldset className="mb-[15px] flex items-center justify-around">
          <label className="text-violet11 w-[90px] text-left text-[15px]" htmlFor="email">
            {t('Email', { ns: 'common' })}
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-1/2 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="email"
          />
        </fieldset>

        {/* Input pour le mot de passe */}
        <fieldset className="mb-[15px] flex items-center justify-around">
          <label className="text-violet11 w-[90px] text-left text-[15px]" htmlFor="password">
            {t('Password', { ns: 'common' })}
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-1/2 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="password"
          />
        </fieldset>

        {/* Input pour la confirmation du mot de passe */}
        <fieldset className="mb-[15px] flex items-center justify-around">
          <label className="text-violet11 w-[90px] text-left text-[15px]" htmlFor="confirm-password">
            {t('Confirm_password', { ns: 'modals' })}
          </label>
          <input
            className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[35px] w-1/2 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
            id="confirm-password"
          />
        </fieldset>

        {/* Checkbox pour les conditions d'utilisation */}
        <fieldset className="my-[10px] flex items-center justify-center gap-5">
          <div className="flex items-center">
            <Checkbox.Root
              className="shadow-blackA4 hover:bg-violet3 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-black shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
              defaultChecked
              id="terms"
            >
              <Checkbox.Indicator className="text-violet11">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label className="pl-[15px] text-[15px] leading-none text-white" htmlFor="terms">
              {t('Accept_terms', { ns: 'modals' })}
            </label>
          </div>
        </fieldset>

        {/* Bouton pour valider le formulaire */}
        <div className="mt-[25px] flex justify-end">
          <Dialog.Close asChild>
            <button
              className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
              type="submit"
            >
              {(t('Register', { ns: 'common' }))}
            </button>
          </Dialog.Close>
        </div>

        {/* Bouton pour fermer la modal */}
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
            type="button"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export default SignupModal;
