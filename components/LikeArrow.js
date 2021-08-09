import React from 'react'
import { CheckLg } from 'react-bootstrap-icons'
import { Button, Box } from '@chakra-ui/react'

const LikeArrow = ({ handleChoice }) => {
    return (
        <Button
            colorScheme="green"
            className="like-arrow"
            backgroundColor="green.300"
            p={6}
            right={{ base: "70", md: "35", lg: "35" }}
            _hover={{ cursor: 'pointer' }}
            zIndex={1}
            height={70}
            width={70}
            onClick={() => handleChoice("right")}
            borderStyle="solid"
            _hover={{
                cursor: 'pointer',
                transform: 'scale(1.25)'
            }}
            position="relative"
            borderColor="white"
            borderWidth={4}
            borderRadius="50%" >
            <Box as="span" position="relative" zIndex="2">
                <CheckLg color="DarkGreen" size={30} />
            </Box>
        </Button >
    )
}

export default LikeArrow
