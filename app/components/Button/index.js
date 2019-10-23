/**
 *
 * Button
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isHoveredOver: false}
    }
    toggleHover = () => {
        this.setState((prevState) => ({
            isHoveredOver: !prevState.isHoveredOver,
        }));
    };
    render() {
        const {backgroundColor, fontColor, children, hoverColor, onClick} = this.props;
        const color = this.state.isHoveredOver ? hoverColor : fontColor;
        const buttonWrapperStyle = {
            color,
            backgroundColor,
        };
        // If we have items, render them
        return (
            <div style={buttonWrapperStyle}>
                <button onClick={onClick} type="button" className={styles.mainButton} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                    {children}
                </button>
            </div>
        );
    }
}

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
