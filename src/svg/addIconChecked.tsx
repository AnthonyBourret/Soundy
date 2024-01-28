import React from 'react';

interface Props {
  width: string;
  height: string;
}

function AddIconChecked({ width, height }: Props): React.JSX.Element {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#dedede" strokeWidth="0.72">
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
      <g id="SVGRepo_iconCarrier">
        <g id="style=bulk">
          <g id="heart">
            <path id="vector (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M1.25 8.6901C1.25 5.18939 4.07229 2.3501 7.56 2.3501C9.29674 2.3501 10.8646 3.05608 12.0003 4.19481C13.1385 3.05574 14.7122 2.3501 16.44 2.3501C19.9277 2.3501 22.75 5.18939 22.75 8.6901C22.75 12.4396 21.0107 15.4002 18.9342 17.5277C16.8683 19.6444 14.4235 20.9862 12.8657 21.5187C12.5914 21.6148 12.2773 21.6501 12 21.6501C11.7227 21.6501 11.4086 21.6148 11.1343 21.5187C9.57655 20.9862 7.13169 19.6444 5.06577 17.5277C2.98932 15.4002 1.25 12.4396 1.25 8.6901Z" fill="#af373b" />
            <path id="vector (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M19.7245 10.2553C20.1197 10.3793 20.3396 10.8002 20.2156 11.1954C19.3678 13.8974 17.6284 16.0256 15.8181 17.5708C15.5031 17.8397 15.0297 17.8023 14.7607 17.4872C14.4918 17.1722 14.5292 16.6988 14.8443 16.4299C16.5095 15.0085 18.0447 13.1038 18.7844 10.7464C18.9084 10.3512 19.3293 10.1313 19.7245 10.2553Z" fill="#af373b" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default AddIconChecked;
