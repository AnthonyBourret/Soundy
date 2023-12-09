import React from 'react';
import { AvatarProps } from '../../types';

function Avatar(
  {
    index,
    role,
    size,
    img,
    alt,
  }: AvatarProps,
) {
  return (
    <div tabIndex={index} role={role} className={`w-${size} avatar m-1`}>
      <img src={img} alt={alt} className="rounded-full" />
    </div>
  );
}

export default Avatar;
