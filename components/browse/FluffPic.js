import React from 'react';
import Image from 'next/dist/client/image';

const FluffPic = ({ src }) => {
  return (
    <div className="fluff-pic-wrapper">
      <Image className="current-fluff" src={src} width={300} height={400} />
    </div>
  );
};

export default FluffPic;
