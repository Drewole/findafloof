import { Box } from '@chakra-ui/react'
import React from 'react'
import { HeartFill } from 'react-bootstrap-icons'
import Link from 'next/link'
const Footer = () => {
    return (
        <Box width="100vw" as="footer" d="flex" >
            <p>Made with <HeartFill /><a target="_blank" href="https://drewolsen.design">by Drew</a></p>
        </Box>
    )
}

export default Footer
