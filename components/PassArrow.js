import React from 'react'
import { Button, Box } from '@chakra-ui/react'
import { XLg } from 'react-bootstrap-icons'

const PassArrow = ({ handleChoice, }) => {
    return (
        <Button
            colorScheme="red"
            className="pass-arrow"
            left={{ base: "70", md: "35", lg: "35" }}
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
            onClick={() => handleChoice("left")}
        >
            <Box as="span" position="relative" zIndex="2">
                <XLg size={30} color="DarkRed" />
            </Box>
        </Button>
    )
}

export default PassArrow
