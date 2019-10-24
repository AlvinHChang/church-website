/**
 *
 * Button
 *
 */

import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = (props) => {
    const [isHoveredOver, setHoveredOver] = useState(false);
    const {backgroundColor, fontColor, children, hoverColor, onClick} = props;
    // If we have items, render them
    return (
        <div style={{
            backgroundColor,
            color: isHoveredOver ? hoverColor : fontColor
        }}>
            <button onClick={onClick}
                    type="button"
                    className={styles.mainButton}
                    onMouseEnter={() => {setHoveredOver(true)}}
                    onMouseLeave={() => {setHoveredOver(false)}}>
                {children}
            </button>
        </div>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node,
    fontColor: PropTypes.string,
    hoverColor: PropTypes.string,
    backgroundColor: PropTypes.string,
};

Button.defaultProps = {
    fontColor: 'black',
    hoverColor: 'gray',
    backgroundColor: 'transparent',
};

export default Button;
