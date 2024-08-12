//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { number } from "prop-types";


let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;
let num5 = 0;
let num6 = 0;

function Contador(props)
{
    return(
    <div className="container-fluid bg-black p-5">
        <div className="row d-flex justify-content-center">
            <div className="col-auto height-3 bg-dark text-light mx-2 d-flex justify-content-center align-items-center px-3" style={{ width: "auto", fontSize: "70px"}}><i className="fa-regular fa-clock" style={{color: "#ffffff"}}></i></div>
            <div className="col-auto height-3 bg-dark text-light mx-2 d-flex justify-content-center px-3" style={{ width: "auto", fontSize: "70px", fontFamily: "serif"}}>{props.num_6}</div>
            <div className="col-auto height-3 bg-dark text-light mx-2 d-flex justify-content-center px-3" style={{ width: "auto", fontSize: "70px", fontFamily: "serif" }}>{props.num_5}</div>
            <div className="col-auto height-3 bg-dark text-light mx-2 d-flex justify-content-center px-3" style={{ width: "auto", fontSize: "70px", fontFamily: "serif" }}>{props.num_4}</div>
            <div className="col-auto height-3 bg-dark text-light mx-2 d-flex justify-content-center px-3" style={{ width: "auto", fontSize: "70px", fontFamily: "serif" }}>{props.num_3}</div>
            <div className="col-auto height-3 bg-dark text-light mx-2 d-flex justify-content-center px-3" style={{ width: "auto", fontSize: "70px", fontFamily: "serif" }}>{props.num_2}</div>
            <div className="col-auto height-3 bg-dark text-light mx-2 d-flex justify-content-center px-3" style={{ width: "auto", fontSize: "70px", fontFamily: "serif" }}>{props.num_1}</div>
        </div>
    </div>
    )
}

Contador.propTypes ={
    num_1: number,
    num_2: number,
    num_3: number,
    num_4: number,
    num_5: number,
    num_6: number
};

setInterval(() => {
    console.log(num1);
    ReactDOM.createRoot(document.getElementById('app')).render(<Contador num_1={num1} num_2={num2} num_3={num3} num_4={num4} num_5={num5} num_6={num6}/>);
    num1++;
    if(num1 == 10)
    {
        num1 = 0;
        num2++;
        
        if(num2 == 10)
        {
            num2 = 0;
            num3++;
            if(num3 == 10)
            {
                num3 = 0;
                num4++
                if(num4 == 10)
                {
                    num4 = 0;
                    num5++;
                    if(num5 == 10)
                    {
                        num5 = 0;
                        num6++;
                        if(num6 = 10)
                        {
                            num1 = 0;
                            num2 = 0;
                            num3 = 0;
                            num4 = 0;
                            num5 = 0;
                            num6 = 0;
                        }
                    }
                }
            }
        }
    }

    console.log(num3)
}, 1000);


//render your react application

