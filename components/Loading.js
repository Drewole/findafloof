import { Spinner, Box, Center } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
    return (
        <Box zIndex="3" height="100vh" width="100vw" position="absolute" backgroundColor="whiteAlpha.300">
            <Center>
                <Spinner
                    size="lg"
                    color="purple.500"
                    emptyColor="purple.100"
                />
                <Box as="p">Loading..</Box>
            </Center>

        </Box>
    )
}

export default Loading
