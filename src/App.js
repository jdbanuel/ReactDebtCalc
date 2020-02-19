import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar.component.jsx';
import MonthCalcForm from '../src/components/MonthCalculatorForm.component.jsx';

function App() {
    return (
        <div className="container mx-auto h-screen">
            <Navbar />
            <div className="flex justify-center my-8 h-full">
                <div className="flex flex-col w-2/5 h-xl max-w-3xl border border-gray-500 rounded shadow-xl">
                    <div className="flex justify-center text-2xl bg-gray-600 text-gray-100 font-semibold">
                        Enter your debt &amp; interest rate
                    </div>

                    <MonthCalcForm class="flex justify-center" />
                </div>
            </div>
            {/* <div className="flex justify-center">
                <div className="flex-none">Left</div>
                <div classname="flex-none">Right</div>
            </div> */}
        </div>
    );
}

export default App;
