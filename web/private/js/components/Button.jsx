import React from 'react';
import ReactDOM from "react-dom";

const Button = ({ clickHandler, title, qtdClicks}) => {

    return (
        <button onClick={() => clickHandler()} >{title}-{qtdClicks}</button>
    )

}


export default Button;