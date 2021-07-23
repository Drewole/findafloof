import { Spinner, Box, Flex, Center } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
    return (
        <Box zIndex="3" height="100vh" width="100vw" position="absolute" backgroundColor="blackAlpha.300">
            <Flex height="100vh" width="100vw" flexDirection="column" alignItems="center" justifyContent="center">

                <Spinner
                    size="xl"
                    color="purple.500"
                    emptyColor="purple.100"
                />
                <Box color="purple.800" fontWeight="extrabold" textTransform="uppercase" as="h2">Finding Floofs, Please wait..</Box>
                <Center><img src="logoDog.svg" alt="" /></Center>
            </Flex>

        </Box>
    )
}

export default Loading
