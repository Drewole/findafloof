import { Spinner, Box, Flex, Center } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
    return (
        <Box zIndex="3" height="100vh" width="100vw" position="absolute">
            <Flex height="100vh" width="100vw" flexDirection="column" alignItems="center" justifyContent="center">

                <Center><img src="logoDog.svg" alt="" /></Center>
                <Center display="block" position="relative">
                    <Box class="loader">
                        <div class="paw"><img src="/paw.svg"></img></div>
                        <div class="paw"><img src="/paw.svg"></img></div>
                        <div class="paw"><img src="/paw.svg"></img></div>
                        <div class="paw"><img src="/paw.svg"></img></div>
                        <div class="paw"><img src="/paw.svg"></img></div>
                        <div class="paw"><img src="/paw.svg"></img></div>
                    </Box>
                </Center>
                <Box mt={5} color="purple.800" fontWeight="extrabold" textTransform="uppercase" as="h2">Finding Floofs, Please wait..</Box>

            </Flex>

        </Box>
    )
}

export default Loading
