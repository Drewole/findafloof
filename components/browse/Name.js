import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { GenderMale, GenderFemale } from 'react-bootstrap-icons'

const Name = (props) => {
    return (
        <Flex alignItems="center" flexDirection="column">
            <Box color="purple.700" fontSize="5xl" as="h2">{props.current.name}</Box>

            {(props.current.gender === "Male" || props.current.gender === "male")
                ?
                <Flex className="male" flexDirection="row">
                    <GenderMale size={25} color="RoyalBlue" /> <Box textTransform="uppercase" as="span">Boy</Box>
                </Flex>
                :
                <Flex className="female" flexDirection="row">
                    <GenderFemale size={25} color="Crimson" /> <Box textTransform="uppercase" as="span">Girl</Box>
                </Flex>
            }
        </Flex>
    )
}

export default Name
