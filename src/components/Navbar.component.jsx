import React from 'react';

function Navbar() {
    return (
        <div className="w-full flex justify-start bg-purple-500 h-10 shadow-2xl text-gray-100">
            <div className="flex flex-shrink-0 text-xl items-center tracking-tight mx-3 font-semibold">
                <a>Debt Repayment Calculator</a>
            </div>

            <div className="flex flex-shrink-1 mx-3 inline-block w-full justify-end">
                <div className="flex inline-block items-center mx-3">
                    <a>About</a>
                </div>
                <div className="flex inline-block items-center">|</div>
                <div className="flex inline-block items-center mx-3">
                    <a>Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
