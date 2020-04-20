import React from "react";
import "./CircleSelector.css";

const CircleSelector = (props) => (
    <div className="CircleSelector" >
        <button className={props.selButtonIdx === 1 ? "selected" : ""}
            onClick={() => props.handleButtonSelection(1)}>
            {props.selButtonIdx === 1 ? 'Circle 1 Selected' : 'Select Circle 1'}
        </button>
        <button className={props.selButtonIdx === 2 ? "selected" : ""}
            onClick={() => props.handleButtonSelection(2)}>
            {props.selButtonIdx === 2 ? 'Circle 2 Selected' : 'Select Circle 2'}
        </button>
        <button className={props.selButtonIdx === 3 ? "selected" : ""}
            onClick={() => props.handleButtonSelection(3)}>
            {props.selButtonIdx === 3 ? 'Circle 3 Selected' : 'Select Circle 3'}
        </button>
        <button className={props.selButtonIdx === 4 ? "selected" : ""}
            onClick={() => props.handleButtonSelection(4)}>
            {props.selButtonIdx === 4 ? 'Circle 4 Selected' : 'Select Circle 4'}
        </button>
    </div>
)

export default CircleSelector;