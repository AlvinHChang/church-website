/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Button from '../../components/Button/index';
import messages from './messages';
import styles from './HomePage.css';

export default function HomePage() {
  return (
    <div className={styles.mainContainer}>
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
      <FormattedMessage {...messages.header} />
    </div>
  );
}
