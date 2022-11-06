import React from 'react';
import Link from 'next/link';
import { Heart, House, Share } from 'react-bootstrap-icons';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <House size={20} />
            <span>Browse</span>
          </Link>
        </li>
        <li>
          <Link href="/favorites">
            <Heart size={20} />
            <span>Fav's</span>
          </Link>
        </li>
        {/* <Box ml="3" mr="3" as="li" fontSize="xs" color="purple.800">
                    <Link href="/share" ><a><Share size={20} />Share</a></Link>
                </Box> */}
      </ul>
    </nav>
  );
};

export default Nav;
