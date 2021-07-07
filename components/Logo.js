import React from 'react'
import { Box } from "@chakra-ui/react"
import Link from 'next/link'

const Logo = () => {
    return (
        <Box border="0" >
            <Link href="/">
                <a>
                    <img src="logo.svg" alt="Site Logo & home link" />
                </a>
            </Link>
        </Box>
    )
}

export default Logo
