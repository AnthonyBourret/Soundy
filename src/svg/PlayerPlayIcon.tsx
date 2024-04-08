import React, { useState } from 'react';
import { SVGProps } from '../types';

const PlayerPlayIcon = (props: SVGProps): JSX.Element => {
  const {
    color: initialColor = '#af373b',
    height = '800',
    width = '800',
  } = props;

  const [hovered, setHovered] = useState(false);
  const hoverColor = '#ef4444';
  const color = hovered ? hoverColor : initialColor;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
        clipRule="evenodd"
      />
      <path
        fill="#e5e7eb"
        d="M15.414 13.059l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787c.781.462.781 1.656 0 2.118z"
      />
    </svg>

  );
};

export default PlayerPlayIcon;
