/*
 * Navbar
 *
 * This is the header on top of every page
 *
 */

import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './Navbar.css';
import tllcLogo from '../../images/tllccLogo.png';
import LanguageToggle from '../LanguageToggle';
import { useWindowDimensions } from "../WindowContext";

function Navbar() {
    const { width } = useWindowDimensions();
    return (
        <header className={styles.navbarContainer}>
            <nav className={styles.navbar}>
                <div>
                    <Link to="/home">
                        <img className={styles.tllcLogo} alt="tllcLogo" src={tllcLogo} />
                    </Link>
                </div>
                { width > 1000 ? renderDesktop() : renderMobile()}
            </nav>
        </header>
    );
}

const renderMobile = () => {
    const [isOpen, toggleOpen] = useState(false);
    return (
        <div className={styles.navbarRightContainerMobile}>
            <button type="button" onClick={() => toggleOpen(!isOpen)}>
                click me
            </button>
            { isOpen ?
                (
                    <>
                            <Link className={styles.linksFlexItemMobile} to="/home">
                                <FormattedMessage {...messages.home} />
                            </Link>
                            <Link className={styles.linksFlexItemMobile} to="/about">
                                <FormattedMessage {...messages.about} />
                            </Link>
                            <Link className={styles.linksFlexItemMobile} to="/sermon">
                                <FormattedMessage {...messages.sermon} />
                            </Link>
                            <Link className={styles.linksFlexItemMobile} to="/gallery">
                                <FormattedMessage {...messages.gallery} />
                            </Link>
                            <Link className={styles.linksNewcomer} to="/newcomer">
                                <FormattedMessage {...messages.newcomer} />
                            </Link>
                            <div className={styles.linksFlexItemMobile}>
                                <LanguageToggle />
                            </div>
                    </>
                ) : null
            }
        </div>
    )
};
const renderDesktop = () => {
    return (
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
    )

};

export default Navbar;
