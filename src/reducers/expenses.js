//Expenses Reducer
const expensesReducerDefaultState = [];
//const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
export default ( state = expensesReducerDefaultState, action ) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
            //state.concat(action.expense) - the same
        case 'REMOVE_EXPENSE':
            //if function returns true the item will be kept in the array, false -> removed
            //we are destructuring the array -> {id}
            return state.filter(( {id} ) => id !== action.id );
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};