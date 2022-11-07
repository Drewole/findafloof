import React from 'react';
import Logo from './Logo';
import Nav from './Nav';
import styles from '../scss/components/Header.module.scss';

const Header = () => {
  return (
    <header className={styles._}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
