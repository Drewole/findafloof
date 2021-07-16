import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { GenderMale, GenderFemale } from 'react-bootstrap-icons'

const Name = () => {
    return (
        <Flex alignItems="center" flexDirection="column">
            <Box color="purple.700" fontSize="5xl" as="h2">Buddy</Box>
            <Flex className="male" flexDirection="row">
                <GenderMale size={30} color="blue.700" /> <Box textTransform="uppercase" as="span">Male</Box>
            </Flex>
            <Flex className="female" flexDirection="row">
                <GenderFemale size={30} color="red.600" /> <Box textTransform="uppercase" as="span">Female</Box>
            </Flex>
        </Flex>
    )
}

export default Name
