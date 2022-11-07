import React from 'react';
import { HeartFill } from 'react-bootstrap-icons';
import styles from '../scss/components/Footer.module.scss';
const Footer = () => {
  return (
    <footer className={styles._}>
      <p>
        Made with <HeartFill />
        <a target="_blank" href="https://drewolsen.design">
          by Drew
        </a>
      </p>
    </footer>
  );
};

export default Footer;
