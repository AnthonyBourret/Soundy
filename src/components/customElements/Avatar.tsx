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
    <div tabIndex={index} role={role} className="avatar m-1">
      <div className={`w-${size} rounded-full`}>
        <img src={img} alt={alt} />
      </div>
    </div>
  );
}

export default Avatar;
