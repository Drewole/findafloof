import React from 'react'
import Image from 'next/image'
// import chakra from '@chakra-ui/react'

const MainImage = () => {
    //TODO: Need to 
    const FluffImage = chakra(NextImage, {
        baseStyle: { maxH: 120, maxW: 120 },
        shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
    })
    return (
        <FluffImage
            src={`https://via.placeholder.com/320x370`}
            width={320}
            height={370}
            w="auto"
            h="auto"
            borderWidth={5}
            borderStyle="solid"
        />
    )
}

export default MainImage
