import React from 'react';

class DebtAPRForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            debt: '',
            interestRate: ''
        };
    }

    render() {
        return (
            <div class="w-full flex justify-center">
                <form class="px-8 pt-6 mb-4 w-2/3">
                    <div class="mb-4">
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="debt"
                        >
                            Debt
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="debt"
                                placeholder="Total Debt"
                                onChange={this.handleChange}
                                value={this.state.debt}
                                type="text"
                            />
                        </label>
                        <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="interestRate"
                        >
                            Interest Rate (APR)
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="interestRate"
                                placeholder="Interest Rate"
                                onChange={this.handleChange}
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
