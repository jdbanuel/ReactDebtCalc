import React from 'react';
import './App.css';
import Navbar from './components/Navbar.component.jsx';
import MonthlyPaymentCalcForm from './components/MonthlyPaymentCalcForm.component.jsx';
import DebtAPRForm from './components/DebtAPRForm.component.jsx';

function App() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto h-screen">
                <div className="flex justify-center my-3 h-full">
                    <div className="flex flex-col w-2/5 min-w-small h-xl max-w-3xl border border-gray-500 rounded shadow-xl">
                        <div className="flex justify-center text-2xl bg-gray-600 text-gray-100 font-semibold">
                            Enter Debt &amp; Interest Rate
                        </div>
                        <DebtAPRForm class="flex justify-center" />
                        <MonthlyPaymentCalcForm class="flex justify-center" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
