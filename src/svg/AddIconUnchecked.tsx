import React from 'react';
import { SVGProps } from '../types';

function AddIconUnchecked(props: SVGProps): JSX.Element {
  const { width, height, color = '#dedede' } = props;
  return (
    <svg width={width} height={height} stroke={color} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth="0.72">
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <g id="style=bulk">
          <g id="add-circle">
            <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z" fill="#686460" />
            <path id="vector (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M12 7.00744C12.4142 7.00744 12.75 7.34323 12.75 7.75744L12.75 16.2427C12.75 16.6569 12.4142 16.9927 12 16.9927C11.5857 16.9927 11.25 16.6569 11.25 16.2427L11.25 7.75743C11.25 7.34322 11.5858 7.00744 12 7.00744Z" fill="#dedede" />
            <path id="vector (Stroke)_3" fillRule="evenodd" clipRule="evenodd" d="M17 12C17 12.4142 16.6642 12.75 16.25 12.75L7.76476 12.75C7.35055 12.75 7.01476 12.4142 7.01476 12C7.01477 11.5857 7.35055 11.25 7.76477 11.25L16.25 11.25C16.6642 11.25 17 11.5858 17 12Z" fill="#dedede" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default AddIconUnchecked;
