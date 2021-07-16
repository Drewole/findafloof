import { Box, Wrap, WrapItem, Container, Center, Button } from '@chakra-ui/react'
import React from 'react'
import { XCircleFill } from 'react-bootstrap-icons'
import Image from 'next/image'
const CurrentFavs = () => {
    const styles = {

    }
    return (
        <Center>
            <Wrap alignItems="center" p="4" background="blackAlpha.50" boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)" w={{ base: "90vw", md: "80vw", lg: "66vw" }} border="2px" borderRadius="2xl" borderColor="blackAlpha.100">
                <WrapItem >
                    <Image
                        borderRadius={6}
                        layout="intrinsic"
                        src="/placeholder/Rectangle.png" // Route of the image file
                        height={150} // Desired size with correct aspect ratio
                        width={150} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Button onClick={() => { console.log('clicked') }} colorScheme="blackAlpha" backgroundColor="blackAlpha.50" padding="xs" position="relative" right="35px" top="5px" size="xs" borderRadius="full" color="white" boxShadow="md" padding="0">
                        <XCircleFill size={16} />
                    </Button>
                </WrapItem>
                <WrapItem >
                    <Image
                        borderRadius={6}
                        layout="intrinsic"
                        src="/placeholder/Rectangle1.png" // Route of the image file
                        height={150} // Desired size with correct aspect ratio
                        width={150} // Desired size with correct aspect ratio
                        alt="Your Name"

                    />
                    <Button colorScheme="blackAlpha" backgroundColor="blackAlpha.50" padding="xs" position="relative" right="35px" top="5px" size="xs" borderRadius="full" color="white" boxShadow="md" padding="0">
                        <XCircleFill size={16} />
                    </Button>
                </WrapItem>
                <WrapItem >
                    <Image
                        borderRadius={6}
                        layout="intrinsic"
                        src="/placeholder/Rectangle2.png" // Route of the image file
                        height={150} // Desired size with correct aspect ratio
                        width={150} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Button colorScheme="blackAlpha" backgroundColor="blackAlpha.50" padding="xs" position="relative" right="35px" top="5px" size="xs" borderRadius="full" color="white" boxShadow="md" padding="0">
                        <XCircleFill size={16} />
                    </Button>
                </WrapItem>
                <WrapItem>
                    <Image
                        borderRadius={6}
                        layout="intrinsic"
                        src="/placeholder/Rectangle3.png" // Route of the image file
                        height={150} // Desired size with correct aspect ratio
                        width={150} // Desired size with correct aspect ratio
                        alt="Your Name"
                    />
                    <Button colorScheme="blackAlpha" backgroundColor="blackAlpha.50" padding="xs" position="relative" right="35px" top="5px" size="xs" borderRadius="full" color="white" boxShadow="md" padding="0">
                        <XCircleFill size={16} />
                    </Button>
                </WrapItem>
            </Wrap>
        </Center>
    )
}

export default CurrentFavs
