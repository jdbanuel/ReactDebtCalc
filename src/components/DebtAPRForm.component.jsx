import React from 'react';

class DebtAPRForm extends React.Component {
    render() {
        return (
            <div className="w-full flex justify-center">
                <form className="px-8 pt-6 mb-4 w-2/3">
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="debt"
                        >
                            Debt
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="debt"
                                placeholder="Total Debt"
                                onChange={this.props.handleDebtChange}
                                value={this.props.debt}
                                type="number"
                            />
                        </label>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="interestRate"
                        >
                            Interest Rate (APR)
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="interestRate"
                                placeholder="Interest Rate"
                                onChange={this.props.handleInterestChange}
                                value={this.props.interestRate}
                                type="number"
                            />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default DebtAPRForm;
