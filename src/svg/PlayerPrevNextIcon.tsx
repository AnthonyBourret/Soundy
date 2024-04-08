import React, { useState } from 'react';
import { SVGProps } from '../types';

const PlayerPrevNextIcon = (props: SVGProps): JSX.Element => {
  const {
    color: initialColor = '#b63030',
    height = '42',
    width = '42',
  } = props;

  const [hovered, setHovered] = useState(false);
  const hoverColor = '#ef4444';
  const color = hovered ? hoverColor : initialColor;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 -2 12 12"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill={color} transform="translate(-144 -3805)">
          <g transform="translate(56 160)">
            <path d="M99.684 3649.694l-4.477 3.13c-.636.43-1.207.022-1.207-.692v-1.991l-4.22 2.684c-.635.429-1.78.02-1.78-.693v-6.263c0-.714 1.145-1.122 1.78-.694l4.22 2.685v-1.991c0-.714.571-1.122 1.207-.694l4.309 3.132c.514.347.682 1.04.168 1.387" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default PlayerPrevNextIcon;
