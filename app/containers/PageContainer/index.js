/**
 *
 * PageContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageContainer.css';

export default function PageContainer(props) {
    const { backgroundImage, children} = props;
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };

    return (
        <div style={containerStyle}>
            <div className={styles.containerPadding}>
                {children}
            </div>
        </div>
    );
}

PageContainer.propTypes = {
    backgroundImage: PropTypes.string,
    children: PropTypes.node,
};

PageContainer.defaultProps = {
    backgroundImage: '',
};
