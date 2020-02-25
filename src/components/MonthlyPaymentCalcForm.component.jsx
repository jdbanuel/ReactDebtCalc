import React from 'react';

class MonthlyPaymentCalcForm extends React.Component {
    render() {
        return (
            <div className="w-full flex justify-center">
                <form
                    onSubmit={this.props.handleFormSubmit}
                    className="w-2/3 px-8 pb-8"
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-3"
                            htmlFor="numberOfMonths"
                        >
                            Month
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="numberOfMonths"
                                placeholder="Months to Payoff"
                                onChange={this.props.handleMonthsChange}
                                value={this.props.numMonths}
                                type="text"
                            />
                        </label>
                    </div>

                    <button
                        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        value="Submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default MonthlyPaymentCalcForm;
