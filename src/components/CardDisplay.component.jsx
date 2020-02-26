import React from 'react';
import MonthlyPaymentCalcForm from './MonthlyPaymentCalcForm.component.jsx';
import DebtAPRForm from './DebtAPRForm.component.jsx';

class CardDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monthlyPayment: '',
            debt: '',
            interestRate: '',
            totalDebt: '',
            interestAccrued: ''
        };

        this.handleDebtChange = this.handleDebtChange.bind(this);
        this.handleInterestChange = this.handleInterestChange.bind(this);
        this.handleMonthlyPaymentChange = this.handleMonthlyPaymentChange.bind(
            this
        );
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleDebtChange(event) {
        this.setState({ debt: event.target.value });
    }

    handleInterestChange(event) {
        this.setState({ interestRate: event.target.value });
    }

    handleMonthlyPaymentChange(event) {
        this.setState({ numMonths: event.target.value });
    }

    handleFormSubmit(event) {
        alert(
            'The current values are debt: ' +
                this.state.debt +
                ', APR: ' +
                this.state.interestRate +
                ', and Monthly Payment: ' +
                this.state.monthlyPayment +
                '.'
        );
        event.preventDefault();
    }

    render() {
        return (
            <div className="flex flex-col w-2/5 min-w-small h-xl max-w-3xl border border-gray-500 rounded shadow-xl">
                <div className="flex justify-center text-2xl bg-gray-600 text-gray-100 font-semibold">
                    Enter Debt &amp; Interest Rate
                </div>
                <DebtAPRForm
                    class="flex justify-center"
                    handleDebtChange={this.handleDebtChange}
                    handleInterestChange={this.handleInterestChange}
                    debt={this.state.debt}
                    interestRate={this.state.interestRate}
                />
                <MonthlyPaymentCalcForm
                    class="flex justify-center"
                    handleMonthlyPaymentChange={this.handleMonthlyPaymentChange}
                    handleFormSubmit={this.handleFormSubmit}
                    MonthlyPaymentCalcForm={this.state.monthlyPayment}
                />
            </div>
        );
    }
}

export default CardDisplay;
