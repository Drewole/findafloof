import React from 'react'
import { Box } from "@chakra-ui/react"
import Link from 'next/link'

const Logo = () => {
    return (
        <Box className="logo" border="0" >
            <Link href="/">
                <a>
                    <img src="logo.svg" alt="" />
                </a>
            </Link>
        </Box>
    )
}

export default Logo
