import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Text } from '@radix-ui/themes';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import {
  HamburgerMenuIcon,
  CheckIcon,
} from '@radix-ui/react-icons';

function BurgerConnected() {
  const { t, i18n } = useTranslation(['common']);
  const [language, setLanguage] = React.useState(i18n.language);

  function handleLanguageChange(e : string) {
    setLanguage(e);
    i18n.changeLanguage(e);
  }

  return (
    <DropdownMenu.Root>
      {/* Bouton pour afficher le menu burger */}
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
          aria-label="Navigation menu"
        >
          <HamburgerMenuIcon />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-black min-w-[220px] rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          {/* Affichage de l'avatar et du nom d'utilisateur */}
          <DropdownMenu.Item className="flex items-center gap-4 p-2">
            <Avatar.Root className="bg-blackA1 inline-flex h-[40px] w-[40px] select-none items-center justify-center overflow-hidden rounded-full align-middle">
              <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                alt="Profile picture"
              />
              <Avatar.Fallback
                className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-black text-[15px] font-medium"
                delayMs={600}
              >
                CT
              </Avatar.Fallback>
            </Avatar.Root>
            <Text className="text-[16px] text-mauve11">
              Username
            </Text>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

          {/* Affichage des liens de navigation accessibles aux utilisateurs connectés */}
          <DropdownMenu.Item className="group text-[16px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            <Link to="/profile">
              {t('Profile')}
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[16px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            <Link to="/favorites">
              {t('Favorites')}
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="group text-[16px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
          >
            <Link to="/">
              {t('Logout')}
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

          {/* Affichage des liens de navigation accessibles connectés/non connectés */}
          <DropdownMenu.Item className="group text-[16px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            <Link to="/">
              {t('Home')}
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[16px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
            <Link to="/listen">
              {t('Listen')}
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="group text-[16px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
          >
            <Link to="/create">
              {t('Create')}
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

          {/* Choix de la langue */}
          <DropdownMenu.Label className="pl-[25px] text-[16px] leading-[25px] text-mauve11">
            {t('Language')}
          </DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={language} onValueChange={(e) => handleLanguageChange(e)}>
            <DropdownMenu.RadioItem
              className="text-[12px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
              value="fr"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              {t('French')}
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem
              className="text-[12px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
              value="en"
            >
              <DropdownMenu.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                <CheckIcon />
              </DropdownMenu.ItemIndicator>
              {t('English')}
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default BurgerConnected;
