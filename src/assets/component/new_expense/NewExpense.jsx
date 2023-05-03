import React from 'react';
import NewExpenseForm from './new_expense_form/NewExpenseForm';
import './NewExpense.css';
const NewExpense=(props)=>{
    const {onNewexpenseSave}=props;
    const onAddExpense=(new_expense)=>{
        const modified_expense={
            ...new_expense,//destructuring the object(...)
            id:Math.random()*10,
        }
        onNewexpenseSave(modified_expense);

    }
    return(
        <div className='new-expense'>
        <NewExpenseForm save={onAddExpense}/>
        </div>
    );
}
export default NewExpense;