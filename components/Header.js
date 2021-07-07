import { Box } from '@chakra-ui/react'
import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
    return (
        <Box p="5" d="flex" justifyContent="space-between" as="header">
            <Logo />
            <Nav />
        </Box>

    )
}

export default Header
