import React from 'react'
import { Box } from "@chakra-ui/react"
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return (
        <Box className="logo" border="0" >
            <Link href="/">
                <a>
                    <Image src="/logo.svg" alt="Find a Floof Logo" width={246} height={50} />
                </a>
            </Link>
        </Box>
    )
}

export default Logo
