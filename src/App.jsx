import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ExpenseForm from "./Componenets/ExpenseForm";
import ExpenseTable from "./Componenets/ExpenseTable";
import tableData from "./expenseData.js";

function App() {
  const [expenseData, setExpenseData] = useState(tableData);

  const [formData, setFormData] = useState({
    // id: crypto.randomUUID(),
    title: "",
    category: "",
    amount: "",
  });

  const [editingRowId, setEditingRowId] = useState("");

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            setEditingRowId={setEditingRowId}
            editingRowId={editingRowId}
            setExpenseData={setExpenseData}
            formData={formData}
            setFormData={setFormData}
          />
          <ExpenseTable
            setEditingRowId={setEditingRowId}
            expenseData={expenseData}
            setExpenseData={setExpenseData}
            setFormData={setFormData}
          />
        </div>
      </main>
    </>
  );
}

export default App;
