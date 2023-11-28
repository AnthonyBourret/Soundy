import React from 'react';
import { Text } from '@radix-ui/themes';
import Header from '../Header/Header';

function Profile({ isConnected }: { isConnected: boolean }) {
  return (
    <>
      <Header isConnected={isConnected} />
      <div className="mt-5 flex flex-col items-center w-full h-[500px]">
        <Text>Profile Page</Text>
      </div>
    </>
  );
}

export default Profile;
