import React, { useState } from "react";
import './NewExpenseForm.css';

const NewExpenseForm=(props)=>{
const{save}=props;
let [title,setTitle]=useState('');
let [amount,setAmount]=useState('');
let [date,setDate]=useState('');

const onTitleSubmitHandler=(event)=>{setTitle(event.target.value);}
const onAmountSubmitHandler=(event)=>{setAmount(event.target.value);}
const onDateSubmitHandler=(event)=>{setDate(event.target.value);}

const onFormSubmit=(event)=>{
    event.preventDefault();
    const new_expense={
       title,amount,date:new Date(date)
    }  
    save(new_expense);
    setTitle('');
    setAmount('');
    setDate('');
};
    return(<form onSubmit={onFormSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor='expense_title' >Title</label>
                <input type='text' id='expense_title' value={title} name='title'  onChange={onTitleSubmitHandler}/>
            </div>
            <div className="new-expense__control">
                 <label htmlFor='expense_amount'>Amount</label>
                 <input type='number' id='expense_amount' min='0' max='100000' value={amount} name='amount' onChange={onAmountSubmitHandler}></input>
            </div>
            <div className="new-expense__control">
                <label htmlFor='expense_date'>Date</label>
                <input type='date' id='expense_date' name='date' value={date} onChange={onDateSubmitHandler}></input>
            </div>
        </div>
        <div className="new-expense__actions" id='new-expense button'>
            <button>Cancel</button>
            <button>Add Expense</button>
        
            
        </div>
  </form>)
}



export default NewExpenseForm