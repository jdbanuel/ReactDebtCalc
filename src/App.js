import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container mx-auto">
            <div className="flex justify-center bg-purple-500 h-40 shadow-2xl text-gray-100 font-semibold tracking-wider">
                <div className=" flex max-w text-5xl items-center">
                    Debt Repayment Calculator
                </div>
            </div>

            <div className="flex justify-center">
                <div className="flex-none">Left</div>
                <div classname="flex-none">Right</div>
            </div>
        </div>
    );
}

export default App;
