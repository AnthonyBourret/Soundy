import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Text } from '@radix-ui/themes';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Avatar from '@radix-ui/react-avatar';
import { CheckIcon } from '@radix-ui/react-icons';

function HeaderConnected() {
  const { t, i18n } = useTranslation(['common']);
  const [language, setLanguage] = React.useState(i18n.language);

  function handleLanguageChange(e : string) {
    setLanguage(e);
    i18n.changeLanguage(e);
  }

  return (
    <NavigationMenu.Item className="flex items-center mx-4">
      <DropdownMenu.Root>
        {/* Affichage de l'avatar qui au clic affiche un menu déroulant */}
        <DropdownMenu.Trigger asChild>
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
              UN
            </Avatar.Fallback>
          </Avatar.Root>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[220px] bg-black rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            {/* Affichage du nom d'utilisateur */}
            <DropdownMenu.Item className="text-center">
              <Text className="text-[16px] text-mauve11">
                Username
              </Text>
            </DropdownMenu.Item>

            <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

            {/* Affichage des liens pour les utilisateurs connectés */}
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
            <DropdownMenu.Item className="group text-[16px] leading-none rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1">
              <Link to="/">
                {t('Logout')}
              </Link>
            </DropdownMenu.Item>

            <DropdownMenu.Separator className="h-[1px] bg-violet6 m-[5px]" />

            {/* Affichage du menu de changement de langue */}
            <DropdownMenu.Label className="pl-[25px] text-[16px] leading-[25px] text-mauve11">
              {t('Language')}
            </DropdownMenu.Label>
            <DropdownMenu.RadioGroup
              value={language}
              onValueChange={(e) => handleLanguageChange(e)}
            >
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
    </NavigationMenu.Item>
  );
}

export default HeaderConnected;
