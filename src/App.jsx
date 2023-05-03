import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseItem from './assets/component/expenses/expense_item/Expenseitem';
import ExpenseList from './assets/component/expenses/expenseList/expenseList';
import NewExpense from './assets/component/new_expense/NewExpense';
import { addExpense } from './api'
import { getAllExpenses } from './api'

const DUMMY_DATA = [
  {
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12) 
  },
  {
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    title: 'New Desk (Wooden)',
    amount:450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [count, setCount] = useState(0)
   const [expenses,setExpenses] =useState(DUMMY_DATA)
  const onNewExpenseSubmit=(new_expense)=>{
     setExpenses((previous_expense)=>[new_expense,...previous_expense]);
       //console.log(new_expense);
     //  DUMMY_DATA.push(new_expense);
  }
  useEffect(()=> {
    getAllExpenses(setExpenses)
},[])

  return (
    <div className="App">
      <p>Hello Kanishka...</p>
      <NewExpense onNewexpenseSave={onNewExpenseSubmit}/>
      <ExpenseList expenses={expenses}/>
    </div>
  );
}
export default App
