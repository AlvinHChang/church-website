/*
 * Navbar
 *
 * This is the header on top of every page
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './Navbar.css';
import tllcLogo from '../../images/tllccLogo.png';
import LanguageToggle from '../LanguageToggle';

function Navbar() {
  return (
    <header className={styles.navbarContainer}>
      <nav className={styles.navbar}>
        <div>
          <Link to="/home">
            <img className={styles.tllcLogo} alt="tllcLogo" src={tllcLogo} />
          </Link>
        </div>
        <div className={styles.navbarRightContainer}>
          <Link className={styles.linksFlexItem} to="/home">
            <FormattedMessage {...messages.home} />
          </Link>
          <Link className={styles.linksFlexItem} to="/about">
            <FormattedMessage {...messages.about} />
          </Link>
          <Link className={styles.linksFlexItem} to="/sermon">
            <FormattedMessage {...messages.sermon} />
          </Link>
          <Link className={styles.linksFlexItem} to="/gallery">
            <FormattedMessage {...messages.gallery} />
          </Link>
          <Link className={styles.linksNewcomer} to="/newcomer">
            <FormattedMessage {...messages.newcomer} />
          </Link>
          <div className={styles.linksFlexItem}>
            <LanguageToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
