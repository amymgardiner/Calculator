import React from 'react';
import classes from './Button.module.css';

function Button({value}) {
    return (
        <div className={value == "C" || value == "=" ? `${classes.calcButtons} ${classes.accentButtons}` : `${classes.calcButtons}`}>
            {value}
        </div>
    );
}

export default Button;