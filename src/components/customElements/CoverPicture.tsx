import React from 'react';

interface Props {
  cover: string;
}

function CoverPicture({ cover }: Props) {
  return (
    <figure className="w-1/2 object-fill rounded-box overflow-hidden self-center min-[1300px]:w-1/3">
      <img
        src={cover}
        alt="cover_preview"
        className="aspect-square"
        width="100%"
      />
    </figure>
  );
}

export default CoverPicture;
