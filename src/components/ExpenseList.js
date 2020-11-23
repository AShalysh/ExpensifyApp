import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

//regular unconnected component
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;   
        })}
    </div>
);
//function maping state to props. if state changes, it will be auto rerun
const mapStateToProps = (state) => {
    //what info from the store our component wants to access
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);

// const ConnectedExpenseList = connect((state) => {
//     //what info from the store our component wants to access
//     return {
//         expenses: state.expenses
//     };
// })(ExpenseList);

// export default ConnectedExpenseList;
