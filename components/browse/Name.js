import React from 'react';
import { GenderMale, GenderFemale } from 'react-bootstrap-icons';

const Name = (props) => {
  return (
    <div className="name-wrapper">
      <h2>{props.current.name}</h2>
      <div className="gender-wrapper">
        {props.current.gender === 'Male' || props.current.gender === 'male' ? (
          <>
            <GenderMale size={25} color="RoyalBlue" /> <span>Boy</span>
          </>
        ) : (
          <>
            <GenderFemale size={25} color="Crimson" /> <span>Girl</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Name;
