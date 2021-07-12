import React from 'react'
import {
    Box
} from "@chakra-ui/react"
import Link from 'next/link'
import { HeartFill, HouseFill, ShareFill } from 'react-bootstrap-icons'

const Nav = () => {
    return (
        <Box as="nav" separator="">
            <Box as="ul" d="flex">
                <Box ml="3" mr="3" as="li" fontSize="xs" color="purple.800">
                    <Link href="/" ><a><HouseFill size={28} />Browse</a></Link>
                </Box>
                <Box ml="3" mr="3" as="li" fontSize="xs" color="purple.800">
                    <Link href="/favorites" ><a><HeartFill size={28} />Fav's</a></Link>
                </Box>
                <Box ml="3" mr="3" as="li" fontSize="xs" color="purple.800">
                    <Link href="/share" ><a><ShareFill size={28} />Share</a></Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Nav
