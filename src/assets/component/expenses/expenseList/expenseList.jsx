import React from "react";
import ExpenseItem from "../expense_item/Expenseitem";
import './expenseList.css';

const ExpenseList=(props)=>{
    const{expenses=[]}=props;
   // console.log(props);

    if(expenses.length===0){
        return  <h3 className="expenses-list__fallback">OOPS!! NO EXPENSES ARE THERE</h3>
    }
    return (
    <div className="expenses ">
        <div className="expenses-list">
         {
      expenses.map((each_expenses)=>(
       <ExpenseItem
          title={each_expenses.title}
          amount={each_expenses.amount}
          date={each_expenses.date}/> 
          )           
      )
}
</div>
        </div>
        );
}

export default ExpenseList