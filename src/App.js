import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar.component.jsx';

function App() {
    return (
        <div className="container mx-auto">
            <Navbar />
            <div className="flex justify-center">
                <div className="flex-none">Left</div>
                <div classname="flex-none">Right</div>
            </div>
        </div>
    );
}

export default App;
