import React from 'react';
import { GenderMale, GenderFemale } from 'react-bootstrap-icons';
import styles from '../../scss/components/Name.module.scss';

const Name = (props) => {
  return (
    <div className={styles._}>
      <h2>{props.current.name}</h2>
      <div className={styles.gender}>
        {props.current.gender === 'Male' || props.current.gender === 'male' ? (
          <>
            <GenderMale size={20} color="RoyalBlue" /> <span>Boy</span>
          </>
        ) : (
          <>
            <GenderFemale size={20} color="Crimson" /> <span>Girl</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Name;
