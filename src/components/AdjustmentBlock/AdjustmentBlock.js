import React, {Component} from 'react';
import InputRange from "react-input-range";
import './AdjustmentBlock.scss';
import Button from "../Button/Button";
import WasHelpful from "../WasHelpful/WasHelpful";

class AdjustmentBlock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            savings: 250,
            wasHelpfulFinished: false,
            model: this.props.expenditures
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({model: nextProps.expenditures})
    }

    handleOnChange = (value, index) => {
        let newModel = [...this.props.expenditures];

        newModel[index].amount = value;
        this.setState({model: newModel})
    };

    handleVote = (e, isPositive) => {
        console.log('vote:', isPositive);
        this.setState({wasHelpfulFinished: true});
    };

    render() {

        return (
            <div className={`Adjustment-block ${this.props.parentClassName}`}>
                <div className='Adjustment-block-header'>SPEND LESS</div>
                <div className='Adjustment-block-form form'>
                    <div className='Adjustment-block-subtitle'>
                        Try reducing your monthly spending to see how your forecast could improve!
                    </div>
                    {this.props.expenditures.map((expenditure, index) => (
                        <label className='Adjustment-block-form-label' key={index}>
                            {expenditure.name}
                            <InputRange
                                maxValue={3000}
                                minValue={0}
                                value={this.state.model[index].amount}
                                step={1}
                                onChange={value => this.handleOnChange(value, index)}
                                onChangeComplete={value => this.props.onExpenditureChange(index, expenditure.key, value)}
                            />
                        </label>
                    ))}
                </div>
                {/*TODO: move to separate component*/}
                <div className='Adjustment-block-calculation'>
                    This means you're saving <span className='Adjustment-block-calculation-amount'>£{this.state.savings}</span> per month
                </div>
                <Button content='Find ways to save' onClick={() => window.open('https://www.vouchedfor.co.uk', '_blank')} additionalClass='Adjustment-block-button'/>
                <WasHelpful additionalClass='Adjustment-block-was-helpful' onVote={this.handleVote} finished={this.state.wasHelpfulFinished}/>
            </div>
        );
    }
}

export default AdjustmentBlock;