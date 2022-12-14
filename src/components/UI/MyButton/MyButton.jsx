import React from "react";
import "./MyButton.scss";

const Button = ({buttonName, onClick}) => {
    return (
        <button className="button" onClick={onClick}>
            {buttonName}
        </button>
    );
}

export default Button;