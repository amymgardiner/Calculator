import React from 'react';
import classes from './Button.module.css';

function Button({value}) {
    return (
        <div className={classes.calcButtons}>
            {value}
        </div>
    );
}

export default Button;