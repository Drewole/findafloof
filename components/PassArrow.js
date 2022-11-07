import React from 'react';
import { XLg } from 'react-bootstrap-icons';
import styles from '../scss/components/PassArrow.module.scss';

const PassArrow = ({ handleChoice }) => {
  return (
    <button className={styles._} onClick={() => handleChoice('left')}>
      <span>
        <XLg size={30} color="DarkRed" />
      </span>
    </button>
  );
};

export default PassArrow;
