import React from 'react';
import Link from 'next/link';
import { Heart, House, Share } from 'react-bootstrap-icons';
import styles from '../scss/components/Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles._}>
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
        {/* <li>
          <Link href="/share">
            <a>
              <Share size={20} />
              Share
            </a>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;
