import React from "react"
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";
import { useState } from "react";

const ExpenseItem=(props)=>{
    const {
        date=new Date(),
        title='New',
        amount = 30
    }=props;
    // const month=date.toLocaleString('en-US',{month:'long'})
    // const day=date.toLocaleString('en-US',{day:'numeric'});
    // const year=date.getFullYear();
   
return(
    <div className="expense-item">
       <ExpenseDate date={date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        </div>
        </div>
)
};

export default ExpenseItem;
