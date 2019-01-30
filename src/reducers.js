import {isStorageAvailable} from "./helpers";

const initAppState = {
    "incomes": [
        {
            "amount": 45300,
            "from_age": 30,
            "to_age": 67,
            "frequency": "annual",
            "name": "Annual salary"
        }
    ],
    "expenditures": [
        {
            "amount": 1199,
            "from_age": 30,
            "to_age": 65,
            "frequency": "monthly",
            "name": "Mortgage"
        },
        {
            "amount": 1199,
            "from_age": 30,
            "to_age": 65,
            "frequency": "monthly",
            "name": "Bills"
        },
        {
            "amount": 1199,
            "from_age": 30,
            "to_age": 65,
            "frequency": "monthly",
            "name": "General spending"
        }
    ]
};

export const appReducer = (state = initAppState, action) => {

    let newState;

    switch(action.type) {

        case 'UPDATE_EXPENDITURES':
            newState = JSON.parse(JSON.stringify(state));

            newState.expenditures[action.updateData.formIndex][action.updateData.fieldKey] = parseInt(action.updateData.value) || 0;

            return newState;

        case 'UPDATE_INCOMES':
            newState = JSON.parse(JSON.stringify(state));

            newState.incomes[action.updateData.formIndex][action.updateData.fieldKey] = parseInt(action.updateData.value) || 0;

            return newState;

        default:

            if(isStorageAvailable() && localStorage.getItem('userData')) {
                return JSON.parse(localStorage.getItem('userData'));
            }
            return state;
    }
};