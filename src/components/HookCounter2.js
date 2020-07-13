import React, { useState } from 'react';

function HookCounter2() {
    const [count, setCount] = useState(0);
    const [toggle, setToggle] = useState(false);

    const reset = () => {
        setCount(0);
    };

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    // This is the unsafe incorrect way
    const incrementBy5 = () => {
        for (let i = 1; i <= 5; i++) {
            setCount(count + 1);
        }
    };

    // This is the correc way
    const incrementBy5AltWay = () => {
        for (let i = 1; i <= 5; i++) {
            setCount((prevCount) => prevCount + 1);
        }
    };

    const toggleHandler = () => {
        setToggle((prevToggle) => !prevToggle);
    };

    return (
        <div>
            <h1>React Hooks Tutorial 3 - useState with prevState</h1>
            <h1>Count: {count}</h1>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>increase</button>
            <button onClick={decrement}>decrease</button>
            <button onClick={incrementBy5}>increase by 5</button>
            <button onClick={incrementBy5AltWay}>
                increase by 5 Correct Way
            </button>
            <h1>Toggle: {toggle ? 'true' : 'false'} </h1>
            <button onClick={toggleHandler}>Toggle</button>
        </div>
    );
}

export default HookCounter2;
