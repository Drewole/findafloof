import React from 'react'
import {
    Box
} from "@chakra-ui/react"
import Link from 'next/link'
import { Heart, House, Share } from 'react-bootstrap-icons'

const Nav = () => {
    return (
        <Box as="nav" separator="">
            <Box pt="2" justifyContent="space-between" as="ul" d="flex">
                <Box ml="3" mr="3" as="li" fontSize="xs" color="purple.800">
                    <Link href="/" ><a><House size={20} /><Box as="span">Browse</Box></a></Link>
                </Box>
                <Box ml="3" mr="3" as="li" fontSize="xs" color="purple.800">
                    <Link href="/favorites" ><a><Heart size={20} /><Box as="span">Fav's</Box></a></Link>
                </Box>
                {/* <Box ml="3" mr="3" as="li" fontSize="xs" color="purple.800">
                    <Link href="/share" ><a><Share size={20} />Share</a></Link>
                </Box> */}
            </Box>
        </Box>
    )
}

export default Nav
