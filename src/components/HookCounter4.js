import React, { useState } from 'react';

function HookCounter4() {
    const [items, setItem] = useState([{ id: 0, value: 'initial' }]);

    const addHandler = () => {
        setItem([...items, { id: items.length, value: 'item' }]);
    };
    const resetHandler = () => {
        setItem([]);
    };

    return (
        <div>
            <h1>React Hooks Tutorial 5 - useState with Array</h1>
            <p>need to use the spread operator to append new item into array</p>
            <button onClick={addHandler}>Add an item</button>
            <button onClick={resetHandler}>Reset</button>
            {items.map((item) => (
                <p key={item.id}>Item: {item.value}</p>
            ))}
        </div>
    );
}

export default HookCounter4;
