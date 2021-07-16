import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { GenderMale, GenderFemale } from 'react-bootstrap-icons'

const Name = () => {
    return (
        <Flex flexDirection="row">
            <h2>Buddy</h2>
            <Box>
                <GenderMale size={20} color="blue.700" /> <Box textTransform="uppercase" as="span">Male</Box>
            </Box>
            <Box>
                <GenderFemale size={20} color="red.600" /> <Box textTransform="uppercase" as="span">Female</Box>
            </Box>
        </Flex>
    )
}

export default Name
