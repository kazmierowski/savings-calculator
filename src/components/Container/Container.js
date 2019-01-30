import React, {Component} from 'react';
import AdjustmentBlock from "../AdjustmentBlock/AdjustmentBlock";
import DataBlock from "../DataBlock/DataBlock";
import {connect} from "react-redux";
import {isStorageAvailable} from "../../helpers";
import {bindActionCreators} from "redux";
import {updateExpenditures, updateIncomes} from "../../actions";

const localStorageAvailable = isStorageAvailable();

class Container extends Component {

    componentWillReceiveProps(nextProps, nextContext) {
        if (localStorageAvailable) {
            localStorage.setItem('userData', JSON.stringify(nextProps));
        }
    }

    handleIncomeChange = (formIndex, fieldKey, value) => {
        this.props.updateIncomes({
            formIndex: formIndex,
            fieldKey: fieldKey,
            value: value
        })
    };

    handleExpendituresChange = (formIndex, fieldKey, value) => {

        this.props.updateExpenditures({
            formIndex: formIndex,
            fieldKey: fieldKey,
            value: value
        })
    };

    render() {
        return (
            <div className='Container'>
                <DataBlock
                    parentClassName='Container'
                    incomes={this.props.incomes}
                    expenditures={this.props.expenditures}
                    onIncomeChange={this.handleIncomeChange}
                    onExpenditureChange={this.handleExpendituresChange}/>

                <AdjustmentBlock
                    parentClassName='Container'
                    expenditures={this.props.expenditures}
                    // onIncomeChange={this.handleIncomeChange}
                    onExpenditureChange={this.handleExpendituresChange}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    expenditures: state.app.expenditures,
    incomes: state.app.incomes
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({updateExpenditures: updateExpenditures, updateIncomes: updateIncomes}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);