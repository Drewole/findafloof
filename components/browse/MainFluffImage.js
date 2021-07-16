import React from 'react'
import { chakra, Center, Image, Box, Button } from '@chakra-ui/react'
import { CheckLg, GenderMale, XLg } from 'react-bootstrap-icons'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const MotionBox = motion(Box)
const MainFluffImage = () => {
    //TODO: Need to get the image with next js and style it with chakra

    const middleOfScreenX = (width) => {
        return width / 2
    }
    const checkWhichSide = (pos, screen) => {
        if (pos > middleOfScreenX(screen)) {
            console.log("This was dragged right", pos)
            return true

        } else if (pos < middleOfScreenX(screen)) {
            console.log("This was dragged left", pos)
            return false
        }
    }

    return (

        <Center>
            <Button
                colorScheme="red"
                ml="-25px"
                position="relative"
                backgroundColor="red.300"
                pl={4}
                pr={4}
                pt={6}
                pb={6}
                zIndex={0}
                borderStyle="solid"
                _hover={{ cursor: 'pointer' }}
                position="relative"
                borderColor="white"
                borderWidth={4}
                borderRadius="50%"
            ><XLg size={20} color="red.900" /></Button>
            <MotionBox
                drag="x"
                minHeight={370}
                dragConstraints={{ left: 0, right: 0 }}
                whileDrag={{ scale: .97 }}
                onDragEnd={(e) => {
                    console.log(e, "dragEnd Event")
                    checkWhichSide(e.pageX);
                }}

            >
                <Image
                    className="current-fluff"
                    userSelect="none"
                    maxWidth={100}
                    onClick={() => { console.log('clicked'); }}
                    src={`/placeholder/mainImage.jpg`}
                    width={320}
                    height="auto"
                    position="relative"
                    zIndex={1}
                    boxShadow="xl"
                    maxWidth="320px"
                    transition="all 0.2s"
                    transform="scale(1)"
                    _hover={{
                        cursor: 'pointer',
                        opacity: 0.9,
                        transform: 'scale(1.1)'
                    }}
                    mb={8}
                    w="auto"
                    h="auto"
                />
            </MotionBox>
            <Button
                colorScheme="green"
                position="relative"
                backgroundColor="green.300"
                pl={4}
                pr={4}
                pt={6}
                pb={6}
                _hover={{ cursor: 'pointer' }}
                zIndex={0}
                borderStyle="solid"
                position="relative"
                borderColor="white"
                borderWidth={4}
                borderRadius="50%"><CheckLg color="green.800" size={20} /></Button>
        </Center >
    )
}

export default MainFluffImage
