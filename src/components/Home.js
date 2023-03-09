import React from 'react'
import classes from "./Home.module.css"

function Home() {
    return (
        <div className={classes.homepage}>
            <div className={classes.calculator}>
                <div className={classes.display}>
                    <div className={classes.displaybox}></div>
                </div>
            </div>
            <div className={classes.buttons}></div>
        </div>
    )
}

export default Home