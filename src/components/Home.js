import React from 'react';
import classes from "./Home.module.css";
import Button from './Button';

function Home() {

    const buttons = ["C","/","*","+","-","9","8","7","6","5","4","3","2","1","0",".","Del","="];

    return (
        <div className={classes.homepage}>
            <div className={classes.calculator}>
                <div className={classes.display}>
                    <div className={classes.displayBox}></div>
                </div>
                <div className={classes.buttons}>
                    {buttons.map((ele,index)=> {return <Button value={ele} key={index}/>})}
                </div>
            </div>
        </div>
    )
}

export default Home;