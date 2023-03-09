import React, {useState} from 'react';
import classes from "./Home.module.css";
import Button from './Button';

function Home() {

    const [res, setRes] = useState("")

    const buttons = ["C","9","/","8","7","6","*","5","4","3","+","2","1","0","-",".","Del","="];

    const findValue = ()=> {
        let result = Function("return "+res)();
        setRes(result.toString());
    }

    const handler = (arg) => {
        if(res === "Infinity"){
            setRes("");
            return;
        }
        if (arg == "C") setRes("");
        else if(arg == "=") findValue();
        else if(arg == "Del"){
            let n = res.length;
            if (n>0)
            setRes(res.slice(0,n-1));
        }
        else setRes(res.concat(arg));
    }


    return (
        <div className={classes.homepage}>
            <div className={classes.calculator}>
                <div className={classes.display}>
                    <div className={classes.displayBox}>
                        {res}
                    </div>
                </div>
                <div className={classes.buttons}>
                    {buttons.map((ele,index)=> {return <Button handler={handler} value={ele} key={index}/>})}
                </div>
            </div>
        </div>
    )
}

export default Home;