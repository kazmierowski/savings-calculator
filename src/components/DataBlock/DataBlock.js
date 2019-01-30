import React, {Component} from 'react';
import './DataBlock.scss';
import DynamicForm from "../DynamicForm/DynamicForm";

class DataBlock extends Component {

    render() {
        let incomesModel = this.props.incomes.map((income) => {
            return [
                {name: income.name, value: income.amount, key: 'amount'},
                {name: 'From age', value: income.from_age, key: 'from_age'},
                {name: 'To age', value: income.to_age, key: 'to_age'}
            ]
        });

        let expendituresModel = this.props.expenditures.map((expenditure) => {
            return [
                {name: expenditure.name, value: expenditure.amount, key: 'amount'},
                {name: 'From age', value: expenditure.from_age, key: 'from_age'},
                {name: 'To age', value: expenditure.to_age, key: 'to_age'}
            ]
        });

        return (
            <div className={`DataBlock ${this.props.parentClassName}`}>
                <div className='DataBlock-header'>YOUR INCOME & SPEND</div>
                <div className='DataBlock-form'>

                    <div className='DataBlock-form-subtitle'>Annual income</div>
                    {incomesModel.map((income, index)=> (
                        <DynamicForm key={index}
                                     model={income}
                                     handleOnChange={(key, value) => this.props.onIncomeChange(index, key, value)}
                                     formIndex={index}
                                     additionalClass='DataBlock-form-row'
                        />
                    ))}

                    <div className='DataBlock-form-subtitle'>Monthly spending</div>
                    {expendituresModel.map((expense, index)=> (
                        <DynamicForm key={index}
                                     model={expense}
                                     handleOnChange={(key, value) => this.props.onExpenditureChange(index, key, value)}
                                     formIndex={index}
                                     additionalClass='DataBlock-form-row'
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default DataBlock;