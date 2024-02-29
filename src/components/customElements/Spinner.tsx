import React from 'react';

function Spinner(): JSX.Element {
  return (
    <div className="flex items-center justify-center w-full m-8">
      <span className="loading loading-spinner loading-lg" />
    </div>
  );
}

export default Spinner;
