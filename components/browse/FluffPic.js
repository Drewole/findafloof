import React from 'react';
import Image from 'next/dist/client/image';

const FluffPic = ({ src }) => {
  return (
    <div className="fluff-pic-wrapper">
      <Image
        className="current-fluff"
        objectFit="cover"
        src={src}
        layout="fill"
      />
    </div>
  );
};

export default FluffPic;
