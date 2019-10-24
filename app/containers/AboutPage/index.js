/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import aboutUs from '../../images/aboutUs.jpg';
import PageContainer from "containers/PageContainer";
import styles from './AboutPage.css';

export default function AboutPage() {
  return (
      <PageContainer>
          <div className={styles.aboutPageContainer}>
              <div className={styles.aboutText}>
                  <img className={styles.aboutImg} alt="Pastor Photo" src={aboutUs} />
                  <h1>
                      <FormattedMessage {...messages.aboutUsHeader} />
                  </h1>
                  <p>
                      <FormattedMessage {...messages.aboutUsBodyP1} />
                  </p>
                  <p>
                      <FormattedMessage {...messages.aboutUsBodyP2} />
                  </p>
                  <p>
                      <FormattedMessage {...messages.aboutUsBodyP3} />
                  </p>
              </div>
          </div>
      </PageContainer>
  );
}
