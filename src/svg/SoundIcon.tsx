import React from 'react';
import { SVGProps } from '../types';

const SoundIcon = (props: SVGProps): JSX.Element => {
  const { width, height, color = '#ef4444' } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || '75'}
      height={height || '75'}
      version="1"
      viewBox="0 0 48 48"
      fill={color}
    >
      <path
        d="M380 400c0-6 8-27 19-48 29-57 34-110 16-172-27-93-28-100-16-100 7 0 22 21 33 47 31 69 30 164-2 228-24 46-50 70-50 45zM149 356c-31-25-67-46-84-48-29-3-30-5-33-61-3-65 8-87 43-87 13 0 46-18 75-41 32-25 59-39 73-37 21 3 22 8 25 138 1 74 0 145-3 158-8 33-36 27-96-22zm67-243c-2-3-28 14-56 36-29 23-63 41-76 41-22 0-24 4-24 45 0 38 3 45 19 45 11 0 46 20 78 44l58 44 3-125c1-69 1-128-2-130z"
        transform="matrix(.1 0 0 -.1 0 48)"
      />
      <path
        d="M328 364c-4-3 2-24 13-47 23-51 24-96 4-144-18-43-18-43-1-43 18 0 46 71 46 118 0 20-9 56-20 80-18 40-29 49-42 36zM286 248c2-90 2-87 19-64s20 88 5 117c-19 34-25 20-24-53z"
        transform="matrix(.1 0 0 -.1 0 48)"
      />
    </svg>
  );
};

export default SoundIcon;
