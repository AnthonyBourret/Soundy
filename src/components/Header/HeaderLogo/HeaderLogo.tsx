import React from 'react';
import { Flex, Text } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import Icon from '../../../../public/android-chrome-192x192.png';

function HeaderLogo() {
  return (
    <Flex align="center" gap="4">
      <Link to="/">
        <img
          src={Icon}
          alt="Soundy logo"
          className="w-10 h-10"
        />
      </Link>
      <Link to="/">
        <Text size="4" weight="bold">
          Soundy
        </Text>
      </Link>
    </Flex>

  );
}

export default HeaderLogo;
