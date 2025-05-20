import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseForm from './Componenets/ExpenseForm'
import ExpenseTable from './Componenets/ExpenseTable'
import tableData from "./expenseData.js";

function App() {
  const [expenseData, setExpenseData] = useState(tableData);
 
  

  return (
    <>
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setExpenseData={setExpenseData} />
        <ExpenseTable  expenseData={expenseData} setExpenseData={setExpenseData} />
      </div>
    </main>
    </>
  )
}

export default App
