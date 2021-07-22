import React from 'react'
import { Center, Image, Box, Button, Flex } from '@chakra-ui/react'
import { CheckLg, XLg } from 'react-bootstrap-icons'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const MotionBox = motion(Box)
const MainFluffImage = () => {
    //TODO: Need to get the image with next js and style it with chakra

    const middleOfScreenX = (height) => {
        return height / 2
    }
    const checkWhichSide = (pos, screen) => {
        if (pos > middleOfScreenX(screen)) {
            console.log("This was dragged right", pos)

        } else if (pos < middleOfScreenX(screen)) {
            console.log("This was dragged left", pos)

        }
    }

    return (
        <Center mt={10}>
            <Button
                colorScheme="red"
                left={25}
                backgroundColor="red.300"
                p={6}
                height={50}
                width={50}
                zIndex={1}
                borderStyle="solid"
                _hover={{
                    cursor: 'pointer',
                    transform: 'scale(1.15)'
                }}
                position="relative"
                borderColor="white"
                borderWidth={4}
                borderRadius="50%"
            >
                <Box as="span" position="relative" zIndex="2">
                    <XLg size={20} color="DarkRed" />
                </Box>
            </Button>
            <MotionBox
                drag="x"
                minHeight={370}
                minWidth={290}
                dragConstraints={{ left: 0, right: 0 }}
                whileDrag={{ scale: .97 }}
                onDragEnd={(e) => {
                    checkWhichSide(e.pageX, e.path[e.path.length - 1].innerWidth);
                }}

            >
                <Image
                    className="current-fluff"
                    userSelect="none"
                    objectFit="cover"
                    maxWidth={100}
                    // onClick={() => { console.log('clicked'); }}
                    src={`/placeholder/mainImage.jpg`}
                    width={320}
                    height="auto"
                    position="relative"
                    zIndex={0}
                    boxShadow="xl"
                    maxWidth="320px"
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
            </MotionBox>
            <Button
                colorScheme="green"
                backgroundColor="green.300"
                p={6}
                right={25}
                _hover={{ cursor: 'pointer' }}
                zIndex={1}
                height={50}
                width={50}
                borderStyle="solid"
                _hover={{
                    cursor: 'pointer',
                    transform: 'scale(1.15)'
                }}
                position="relative"
                borderColor="white"
                borderWidth={4}
                borderRadius="50%">
                <Box as="span" position="relative" zIndex="2">
                    <CheckLg color="DarkGreen" size={20} />
                </Box>
            </Button>
        </Center>
    )
}

export default MainFluffImage
