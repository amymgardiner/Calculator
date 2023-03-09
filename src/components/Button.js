import React from 'react';
import classes from './Button.module.css';

function Button({value, handler}) {
    return (
        <div className={value == "C" || value == "=" ? `${classes.calcButtons} ${classes.accentButtons}` : `${classes.calcButtons}`} onClick={()=>handler(value)}>
            {value}
        </div>
    );
}

export default Button;