import React, { useState } from 'react';
import { SVGProps } from '../types';

const PlayerPauseIcon = (props: SVGProps): JSX.Element => {
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
      {/* Red circle */}
      <circle cx="12" cy="12" r="10" fill={color} />

      {/* White pause symbol */}
      <rect x="9" y="8" width="2" height="8" fill="#fff" />
      <rect x="13" y="8" width="2" height="8" fill="#fff" />
    </svg>
  );
};

export default PlayerPauseIcon;
