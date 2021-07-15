import React from 'react'
import { chakra, Center, Image, Box, Button } from '@chakra-ui/react'
import { CheckLg, GenderMale, XLg } from 'react-bootstrap-icons'

const MainFluffImage = () => {
    //TODO: Need to get the image with next js and style it with chakra

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
                zIndex={2}
                borderStyle="solid"
                _hover={{ cursor: 'pointer' }}
                position="relative"
                borderColor="white"
                borderWidth={4}
                borderRadius="50%"
            ><XLg size={20} color="red.900" /></Button>
            <Image
                className="current-fluff"
                onClick={() => { console.log('clicked'); }}
                src={`/placeholder/mainImage.jpg`}
                width={320}
                height={370}
                position="relative"
                zIndex={1}
                boxShadow="xl"
                maxWidth="320px"
                transition="all 0.2s"
                transform="scale(1)"
                _hover={{
                    cursor: 'pointer',
                    opacity: 0.7,
                    transform: 'scale(1.06)'
                }}
                mb={8}
                w="auto"
                h="auto"
            />
            <Button
                colorScheme="green"
                position="relative"
                backgroundColor="green.300"
                pl={4}
                pr={4}
                pt={6}
                pb={6}
                _hover={{ cursor: 'pointer' }}
                zIndex={2}
                borderStyle="solid"
                position="relative"
                borderColor="white"
                borderWidth={4}
                borderRadius="50%"><CheckLg color="green.800" size={20} /></Button>
        </Center>
    )
}

export default MainFluffImage
