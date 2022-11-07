import React from 'react';
import { CheckLg } from 'react-bootstrap-icons';
import styles from '../scss/components/LikeArrow.module.scss';

const LikeArrow = ({ handleChoice }) => {
  return (
    <button className={styles._} onClick={() => handleChoice('right')}>
      <span as="span">
        <CheckLg size={30} />
      </span>
    </button>
  );
};

export default LikeArrow;
