import React from 'react';

import './App.css';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';

function App() {
    return (
        <>
            <div className="App">
                <HookCounter2 />
            </div>
            <div className="App">
                <HookCounter3 />
            </div>
            <div className="App">
                <HookCounter4 />
            </div>
        </>
    );
}

export default App;
