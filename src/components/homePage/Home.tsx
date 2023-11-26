import React from 'react';
import { Flex } from '@radix-ui/themes';
import Hero from './Hero';
import Services from './Services';

function Home() {
  return (
    <Flex className="my-5 flex-col items-center w-full ">
      <Hero />
      <Services />
    </Flex>
  );
}

export default Home;
