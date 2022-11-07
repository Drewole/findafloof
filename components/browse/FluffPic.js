import React from 'react';
import Image from 'next/image';
import styles from '../../scss/components/FluffPic.module.scss';

const FluffPic = ({ src }) => {
  return (
    <div className={styles._}>
      <Image className={styles.image} src={src} fill objectFit="cover" />
    </div>
  );
};

export default FluffPic;
