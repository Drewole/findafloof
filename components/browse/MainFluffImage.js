import React, { useState, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
  useCycle,
} from 'framer-motion';
import LikeArrow from '../LikeArrow';
import PassArrow from '../PassArrow';
import FluffPic from './FluffPic';

const MotionBox = motion('div');
const MainFluffImage = ({ current, handleChoice }) => {
  const { direction, setDirection } = useState('');

  const middleOfScreenX = (height) => {
    return height / 2;
  };
  // Checking which side of the screen the user drags the image to
  const checkWhichSide = (pos, screen) => {
    if (pos > middleOfScreenX(screen)) {
      console.log('This was dragged right', pos);
      return 'right';
    } else if (pos < middleOfScreenX(screen)) {
      console.log('This was dragged left', pos);
      return 'left';
    }
  };
  const getDirection = () => {
    direction === 'right' ? 200 : -200;
  };
  useEffect(() => {
    getDirection();
  }, [direction]);

  return (
    <>
      <AnimatePresence>
        {/* <motion.div
                    key={current.primary_photo_cropped.full}
                    initial={{ scale: .8, opacity: 0, }}
                    animate={{ scale: 1, opacity: 1, transition: { delay: 1.2 } }}
                    exit={{ scale: .5, opacity: 0 }}
                > */}
        <div className="center">
          <PassArrow
            handleChoice={handleChoice}
            direction={direction}
            setDirection={setDirection}
          />
          <MotionBox
            drag="x"
            minHeight={370}
            minWidth={290}
            dragConstraints={{ left: 0, right: 0 }}
            whileDrag={{ scale: 0.97 }}
            elastic={{ x: 0.2, y: false }}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
            dragMomentum={{ friction: 0.5 }}
            onDragEnd={(e) => {
              handleChoice(
                checkWhichSide(e.pageX, e.path[e.path.length - 1].innerWidth)
              );
            }}
          >
            <FluffPic src={current.primary_photo_cropped.full} />
          </MotionBox>

          <LikeArrow
            handleChoice={handleChoice}
            direction={direction}
            setDirection={setDirection}
          />
        </div>
        {/* </motion.div> */}
      </AnimatePresence>
      {/* <MobileView>
                <Center mb={5}><img src="swipe.svg" alt="On mobile, swipe main image left to pass, right to favorite" /></Center>
            </MobileView> */}
    </>
  );
};

export default MainFluffImage;
