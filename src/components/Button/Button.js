import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
//* import of components and developer packages
import './Button.scss';

const Button = ({children, elClassName, onClick, active, ...attrs}) => {
    const TagName = attrs.href ? 'a' : 'button';

    const classes = classNames('btn', elClassName, {active}, (attrs.disabled && 'disabled'));

    const clickHandler = (e) => attrs.disabled ? e.preventDefault() : onClick();


    return (
        <TagName className={classes} onClick={clickHandler}   {...attrs} >
            {children}
        </TagName>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    elClassName: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    active: PropTypes.bool
};
Button.defaultProps = {
    children: 'Button',
    elClassName: '',
    onClick: () => {
    },
    disabled: false,
    active: false
};

export default Button;