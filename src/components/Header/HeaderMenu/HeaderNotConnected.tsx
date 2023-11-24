/* eslint-disable @typescript-eslint/no-use-before-define */

import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Select from '@radix-ui/react-select';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import LoginModal from '../../Modals/LoginModal';
import SignupModal from '../../Modals/SignupModal';

function HeaderNotConnected() {
  const { t, i18n } = useTranslation(['common']);

  return (
    <>
      {/* Dialog pour ouvrir la modale de connexion */}
      <Dialog.Root>
        <Dialog.Trigger
          className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          asChild
        >
          <NavigationMenu.Item>
            {t('Login')}
          </NavigationMenu.Item>
        </Dialog.Trigger>
        {/* Modale de connexion */}
        <LoginModal />
      </Dialog.Root>

      {/* Dialog pour ouvrir la modale d'inscription */}
      <Dialog.Root>
        <Dialog.Trigger
          className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          asChild
        >
          <NavigationMenu.Item>
            {t('Register')}
          </NavigationMenu.Item>
        </Dialog.Trigger>
        {/* Modale d'inscription */}
        <SignupModal />
      </Dialog.Root>

      <NavigationMenu.Item>
        {/* OnValueChange modifie la langue de l'application  */}
        <Select.Root onValueChange={(e: string) => i18n.changeLanguage(e)}>
          {/* Trigger affiche la langue actuelle à la place de "Language" */}
          <Select.Trigger
            className="inline-flex items-center justify-center gap-2 text-violet11 hover:bg-violet3 focus:shadow-violet7 select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
            aria-label="Language"
          >
            <Select.Value placeholder={t('Language')} />
            <Select.Icon className="text-violet11">
              <ChevronDownIcon />
            </Select.Icon>
          </Select.Trigger>

          <Select.Portal>
            <Select.Content
              className="overflow-hidden rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
              position="popper"
            >
              <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                <ChevronUpIcon />
              </Select.ScrollUpButton>
              <Select.Viewport className="p-[5px] text-[15px] font-medium">
                <SelectItem value="fr">{t('French')}</SelectItem>
                <SelectItem value="en">{t('English')}</SelectItem>
              </Select.Viewport>
              <Select.ScrollDownButton />
            </Select.Content>
          </Select.Portal>
        </Select.Root>
      </NavigationMenu.Item>

    </>
  );
}

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Select.Item
    className={classnames(
      'text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1',
      className,
    )}
    {...props}
    ref={forwardedRef}
  >
    <Select.ItemText>{children}</Select.ItemText>
    <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
      <CheckIcon />
    </Select.ItemIndicator>
  </Select.Item>
));

export default HeaderNotConnected;
