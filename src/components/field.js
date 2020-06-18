import React from "react";
import ReactDOM from "react-dom";

const Field = (props) =>{
    return (
        <div className="calculator__inputWrap">
            <input 
                type={props.type}
                className="calculator__input" 
                name={props.name}
                placeholder={props.placeholder}
                step="0.01"
            />
            <span className="calculator__inputUnit">kg</span>
        </div>
    )
}

export default Field;