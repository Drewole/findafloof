import React from 'react'
import { MobileView } from 'react-device-detect';
import { Center, Image, Box, Button, Flex, useDisclosure, ScaleFade } from '@chakra-ui/react'
import { CheckLg, XLg } from 'react-bootstrap-icons'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

const MotionBox = motion(Box)
const MainFluffImage = (props) => {


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

    return (
        <>
            <Center mt={2}>
                <Button
                    colorScheme="red"
                    left={35}
                    backgroundColor="red.300"
                    p={6}
                    height={70}
                    width={70}
                    zIndex={1}
                    borderStyle="solid"
                    _hover={{
                        cursor: 'pointer',
                        transform: 'scale(1.25)'
                    }}
                    position="relative"
                    borderColor="white"
                    borderWidth={4}
                    borderRadius="50%"
                    onClick={() => props.handleChoice("left")}
                >
                    <Box as="span" position="relative" zIndex="2">
                        <XLg size={30} color="DarkRed" />
                    </Box>
                </Button>
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
                    <motion.div
                        initial={{ scale: .8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, transition: { delay: .4 } }}>
                        <Image

                            className="current-fluff"
                            userSelect="none"
                            objectFit="cover"
                            // onClick={() => { console.log('clicked'); }}
                            src={props.current.primary_photo_cropped.full}
                            width={320}
                            height={360}
                            position="relative"
                            zIndex={0}
                            boxShadow="xl"
                            transition="all 0.2s"
                            transform="scale(1)"
                            // _hover={{
                            //     cursor: 'pointer',
                            //     transform: 'scale(1.04)'
                            // }}
                            mb={8}
                            w="100%"
                            borderRadius={35}

                        />

                    </motion.div>

                </MotionBox>
                <Button
                    colorScheme="green"
                    backgroundColor="green.300"
                    p={6}
                    right={35}
                    _hover={{ cursor: 'pointer' }}
                    zIndex={1}
                    height={70}
                    width={70}
                    onClick={() => props.handleChoice("right")}
                    borderStyle="solid"
                    _hover={{
                        cursor: 'pointer',
                        transform: 'scale(1.25)'
                    }}
                    position="relative"
                    borderColor="white"
                    borderWidth={4}
                    borderRadius="50%">
                    <Box as="span" position="relative" zIndex="2">
                        <CheckLg color="DarkGreen" size={30} />
                    </Box>
                </Button>
            </Center>
            <MobileView>
                <Center mt={-5} mb={5}><img src="swipe.svg" alt="On mobile, swipe main image left to pass, right to favorite" /></Center>
            </MobileView>
        </>
    )
}

export default MainFluffImage
