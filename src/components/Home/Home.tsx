/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Text } from '@radix-ui/themes';
import * as Switch from '@radix-ui/react-switch';
import Header from '../Header/Header';

function Home() {
  // State pour simuler la connexion et l'affcihage du menu en fonction
  const [isConnected, setIsConnected] = useState<boolean>(false);

  return (
    <>
      <Header isConnected={isConnected} />
      <div className="mt-5 gap-5 flex flex-col items-center w-full h-[500px]">
        <Text>Home Page</Text>
        {/* Switch pour le test => à supprimer */}
        <form>
          <div className="flex items-center">
            <label className="text-white text-[15px] leading-none pr-[15px]" htmlFor="airplane-mode">
              Not connected/Connected
            </label>
            <Switch.Root
              className="w-[42px] h-[25px] bg-blackA6 rounded-full relative shadow-[0_2px_10px] shadow-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
              id="airplane-mode"
              onCheckedChange={() => setIsConnected(!isConnected)}
            >
              <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA4 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
            </Switch.Root>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
