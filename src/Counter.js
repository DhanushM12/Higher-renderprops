import React from "react";
import './App.css';

const Counter = ({count, update}) => {
    return (
        <div className="App">
            <button onClick={() => update("Inc")}>Increment</button>
            <p>{count}</p>
            <button onClick={() => update("Dec")}>Decrement</button>
        </div>
    )
}

export default Counter;