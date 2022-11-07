import React from 'react';
import { CheckLg } from 'react-bootstrap-icons';

const LikeArrow = ({ handleChoice }) => {
  return (
    <button className="like-arrow" onClick={() => handleChoice('right')}>
      <span as="span">
        <CheckLg size={30} />
      </span>
    </button>
  );
};

export default LikeArrow;
