import React from 'react';
//export a stateless functional component

const ExpenseListItem = ({ description, amount, createdAt }) => (
    <div>
        <h1>{description}</h1>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;
