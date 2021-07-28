import { Box, Wrap, WrapItem, Container, Center, Button } from '@chakra-ui/react'
import React from 'react'
import { XCircleFill } from 'react-bootstrap-icons'
import Image from 'next/image'
const CurrentFavs = () => {

    return (

        <Wrap display="flex" justify="center" mb={5} mt={10} alignItems="center" p="5" background="blackAlpha.50" boxShadow="inset 0px 2px 4px rgba(0, 0, 0, 0.06)" w={{ base: "90vw", md: "80vw", lg: "66vw" }} border="2px" borderRadius="2xl" borderColor="blackAlpha.100">
            <WrapItem maxWidth="100%" >
                <Image
                    layout="intrinsic"
                    src="/placeholder/Rectangle.png" // Route of the image file
                    height={175} // Desired size with correct aspect ratio
                    width={175} // Desired size with correct aspect ratio
                    alt="Your Name"
                    placeholder="blur"
                    loading="lazy"
                />
                <Button onClick={() => { console.log('clicked') }} colorScheme="blackAlpha" backgroundColor="blackAlpha.50" padding="xs" position="relative" right="35px" top="5px" size="xs" borderRadius="full" color="white" boxShadow="md" padding="0">
                    <XCircleFill size={16} />
                </Button>
            </WrapItem>
            <WrapItem maxWidth="32%" >
                <Image
                    layout="intrinsic"
                    src="/placeholder/Rectangle1.png" // Route of the image file
                    height={175} // Desired size with correct aspect ratio
                    width={175} // Desired size with correct aspect ratio
                    alt="Your Name"
                    placeholder="blur"
                    loading="lazy"
                />
                <Button colorScheme="blackAlpha" backgroundColor="blackAlpha.50" padding="xs" position="relative" right="35px" top="5px" size="xs" borderRadius="full" color="white" boxShadow="md" padding="0">
                    <XCircleFill size={16} />
                </Button>
            </WrapItem>
            <WrapItem maxWidth="32%"  >
                <Image
                    layout="intrinsic"
                    src="/placeholder/Rectangle2.png" // Route of the image file
                    height={175} // Desired size with correct aspect ratio
                    width={175} // Desired size with correct aspect ratio
                    alt="Your Name"
                    placeholder="blur"
                    loading="lazy"
                />
                <Button colorScheme="blackAlpha" backgroundColor="blackAlpha.50" padding="xs" position="relative" right="35px" top="5px" size="xs" borderRadius="full" color="white" boxShadow="md" padding="0">
                    <XCircleFill size={16} />
                </Button>
            </WrapItem>
            <WrapItem maxWidth="32%" >
                <Image
                    layout="intrinsic"
                    src="/placeholder/Rectangle3.png" // Route of the image file
                    height={175} // Desired size with correct aspect ratio
                    width={175} // Desired size with correct aspect ratio
                    alt="Your Name"
                    placeholder="blur"
                    loading="lazy"
                />
                <Button colorScheme="blackAlpha" backgroundColor="blackAlpha.50" padding="xs" position="relative" right="35px" top="5px" size="xs" borderRadius="full" color="white" boxShadow="md" padding="0">
                    <XCircleFill size={16} />
                </Button>
            </WrapItem>
        </Wrap>

    )
}

export default CurrentFavs
