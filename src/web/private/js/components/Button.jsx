import React from 'react';

const Button = ({ clickHandler, title}) => {
    return (
        <button onClick={() => clickHandler()} >{title}</button>
    )
}

export default Button;