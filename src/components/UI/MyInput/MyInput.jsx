import React from "react";
import "./MyInput.scss";

const Input = ({holder, value, onChange}) => {
    return (
        <input 
            type="text" 
            placeholder={holder} 
            className="input" 
            value={value} 
            onChange={onChange}
        />
    );
}

export default Input;