import React from 'react';

class DebtAPRForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            debt: '',
            interestRate: ''
        };

        this.handleDebtChange = this.handleDebtChange.bind(this);
        this.handleInterestChange = this.handleInterestChange.bind(this);
    }

    handleDebtChange(event) {
        this.setState({ debt: event.target.value });
    }

    handleInterestChange(event) {
        this.setState({ interestRate: event.target.value });
    }

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
                                onChange={this.handleDebtChange}
                                value={this.state.debt}
                                type="text"
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
                                onChange={this.handleInterestChange}
                                value={this.state.interestRate}
                                type="text"
                            />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default DebtAPRForm;
