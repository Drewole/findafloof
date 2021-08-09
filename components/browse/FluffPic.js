import React, { useState, useEffect } from 'react'
import { Center, Image, Box, AspectRatio } from '@chakra-ui/react'
import { motion, useMotionValue, useTransform, AnimatePresence, useCycle } from 'framer-motion'

const FluffPic = ({ src }) => {
    console.log(src)
    return (
        <AspectRatio maxW="600px" ratio={3 / 4}>
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
                transition="all 0.2s"
                transform="scale(1)"
                mb={8}
                w="100%"
                borderRadius={35}
            />
        </AspectRatio>

    )
}

export default FluffPic
