export const updateExpenditures = (updateData) => {
    return {
        type: 'UPDATE_EXPENDITURES',
        updateData: updateData
    }
};

export const updateIncomes = (updateData) => {
    return {
        type: 'UPDATE_INCOMES',
        updateData: updateData
    }
};