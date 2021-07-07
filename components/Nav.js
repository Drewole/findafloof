import React from 'react'
import Link from 'next/link'
import { HeartFill, HouseFill, ShareFill } from 'react-bootstrap-icons'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link href="/" ><a><HouseFill size={32} />Browse</a></Link></li>
                <li><Link href="/favorites" ><a><HeartFill size={32} />Fav's</a></Link></li>
                <li><Link href="/share" ><a><ShareFill size={32} />Share</a></Link></li>
            </ul>
        </nav>
    )
}

export default Nav
