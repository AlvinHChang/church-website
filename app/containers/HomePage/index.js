/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../components/Button/index';
import PageContainer from "../PageContainer";
import messages from './messages';
import styles from './HomePage.css';
import homeBackground from '../../images/this-way-to-freedom.jpg';

export default function HomePage() {
    return (
        <PageContainer backgroundImage={homeBackground} >
            <div className={styles.homeContainer}>
                <div className={styles.homeCard}>
                    <div className={styles.homeMessage}>
                        <FormattedMessage
                            {...messages.welcome}
                        />
                    </div>
                    <div className={styles.homeCardSpacing}>
                    </div>
                    <div className={styles.welcomeButton}>
                        <Button fontColor="white" hoverColor="gray">
                            <FormattedMessage {...messages.welcomeButton} />
                        </Button>
                    </div>
                </div>
            </div>
        </PageContainer>
  );
}
