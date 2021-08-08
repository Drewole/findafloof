import React, { useState, useEffect } from 'react'
import { MobileView } from 'react-device-detect';
import { Center, Image, Box, Flex, useDisclosure } from '@chakra-ui/react'
import { CheckLg, XLg } from 'react-bootstrap-icons'
import { motion, useMotionValue, useTransform, AnimatePresence, useCycle } from 'framer-motion'
import LikeArrow from '../LikeArrow';
import PassArrow from '../PassArrow';

const MotionBox = motion(Box)
const MainFluffImage = ({ current, handleChoice }) => {
    const { direction, setDirection } = useState("")

    //TODO: Need to get the image with next js and style it with chakra, but can't do that until Next.js supports wildcard urls

    // Just calculating the approximate middle of the screen
    const middleOfScreenX = (height) => {
        return height / 2
    }
    // Checking which side of the screen the user drags the image to
    const checkWhichSide = (pos, screen) => {
        if (pos > middleOfScreenX(screen)) {
            console.log("This was dragged right", pos)
            return "right"

        } else if (pos < middleOfScreenX(screen)) {
            console.log("This was dragged left", pos)
            return "left"
        }
    }
    const getDirection = () => {
        direction === "right" ? 200 : -200
    }
    useEffect(() => {
        getDirection()

    }, [direction])

    return (
        <>
            <AnimatePresence>
                <motion.div
                    key={current.primary_photo_cropped.full}
                    initial={{ scale: .8, opacity: 0, }}
                    animate={{ scale: 1, opacity: 1, transition: { delay: 1.2 } }}
                    exit={{ scale: .8, opacity: 0 }}
                >
                    <Center mt={2}>
                        <PassArrow handleChoice={handleChoice} direction={direction} setDirection={setDirection} />
                        <MotionBox
                            drag="x"
                            minHeight={370}
                            minWidth={290}
                            dragConstraints={{ left: 0, right: 0 }}
                            whileDrag={{ scale: .97 }}
                            onDragEnd={(e) => {
                                props.handleChoice(checkWhichSide(e.pageX, e.path[e.path.length - 1].innerWidth))
                            }}
                        >
                            <Image
                                className="current-fluff"
                                userSelect="none"
                                objectFit="cover"
                                src={current.primary_photo_cropped.full}
                                width={320}
                                height={360}
                                position="relative"
                                zIndex={0}
                                boxShadow="xl"
                                transition="all 0.2s"
                                transform="scale(1)"
                                mb={8}
                                w="100%"
                                borderRadius={35}
                            />
                        </MotionBox>
                        <LikeArrow handleChoice={handleChoice} direction={direction} setDirection={setDirection} />
                    </Center>
                </motion.div>
            </AnimatePresence>
            <MobileView>
                <Center mt={-5} mb={5}><img src="swipe.svg" alt="On mobile, swipe main image left to pass, right to favorite" /></Center>
            </MobileView>
        </>
    )
}

export default MainFluffImage
