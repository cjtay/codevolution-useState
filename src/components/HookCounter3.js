import React, { useState } from 'react';

function HookCounter3() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    const changeHandler = (e) => {
        setName({
            ...name,
            [e.target.id]: [e.target.value],
        });
    };
    return (
        <div>
            <h1>React Hooks Tutorial 4 - useState with object</h1>
            <p>Need to use spread operator in setState for object</p>
            <input
                type="text"
                id="firstName"
                value={name.firstName}
                onChange={changeHandler}
            />
            <input
                type="text"
                id="lastName"
                value={name.lastName}
                onChange={changeHandler}
            />
            <h2>First Name: {name.firstName}</h2>
            <h2>Last Name: {name.lastName}</h2>
        </div>
    );
}

export default HookCounter3;
