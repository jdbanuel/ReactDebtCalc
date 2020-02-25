import React from 'react';
import './App.css';
import Navbar from './components/Navbar.component.jsx';
import CardDisplay from './components/CardDisplay.component.jsx';

function App() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto h-screen">
                <div className="flex justify-center my-3 h-full">
                    <CardDisplay />
                </div>
            </div>
        </div>
    );
}

export default App;
