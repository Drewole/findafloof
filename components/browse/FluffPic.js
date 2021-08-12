import React from 'react'
import { Image, AspectRatio } from '@chakra-ui/react'

const FluffPic = ({ src }) => {
    return (
        <AspectRatio maxW="800px" ratio={4 / 5}>
            <Image
                className="current-fluff"
                userSelect="none"
                objectFit="cover"
                src={src}
                width={3}
                height={4}
                position="relative"
                zIndex={0}
                boxShadow="xl"
                mb={8}
                w="100%"
                borderRadius={35}
            />
        </AspectRatio>

    )
}

export default FluffPic
