import React from 'react';
import './Button.scss';

const Button = (props) => {
    return (
        <div className={`Button ${props.additionalClass}`} onClick={props.onClick}>
            {props.content}
        </div>
    );
};

export default Button;