import React, { useMemo } from 'react';

interface Props {
  cover: string;
}

function Cover({ cover }: Props) {
  const coverPicture = useMemo(() => {
    if (cover) {
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
    return (
      <figure className="w-1/2 rounded-box object-fill overflow-hidden self-center min-[1300px]:w-1/3">
        <img src="/cover-placeholder.png" alt="default_cover" />
      </figure>
    );
  }, [cover]);
  return (
    coverPicture
  );
}

export default Cover;
