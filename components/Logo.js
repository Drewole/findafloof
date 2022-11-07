import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../scss/components/Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles._}>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Find a Floof Logo"
          width={246}
          height={50}
        />
      </Link>
    </div>
  );
};

export default Logo;
