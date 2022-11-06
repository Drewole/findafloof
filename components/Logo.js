import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="logo">
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
