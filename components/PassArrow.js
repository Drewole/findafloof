import React from 'react';
import { Button, Box } from '@chakra-ui/react';
import { XLg } from 'react-bootstrap-icons';

const PassArrow = ({ handleChoice }) => {
  return (
    <button className="pass-arrow" onClick={() => handleChoice('left')}>
      <span>
        <XLg size={30} color="DarkRed" />
      </span>
    </button>
  );
};

export default PassArrow;
