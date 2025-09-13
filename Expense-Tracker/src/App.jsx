import React, { useState } from "react";
import ExpenseForm from "./components/Expense-Form";
import ExpenseItem from "./components/Expense-Item";
import ErrorBoundary from "./components/ErrorBoundary";
import ExpenseList from "./components/Expense-List";
function App() {
  const [expense, setExpense] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2025");

  const handleAddExpense = (expenseData) => {
    setExpense([...expense, expenseData]);
  };

  // Filter expenses by selected year
  const filteredExpenses = expense.filter((exp) => {
    // Assume expenseData has a date property (Date object or string)
    if (!exp.date) return false;
    const year =
      typeof exp.date === "string"
        ? new Date(exp.date).getFullYear()
        : exp.date.getFullYear();
    return String(year) === selectedYear;
  });

  // Dropdown change handler
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <ErrorBoundary>
      <div>
        <ExpenseForm onSubmit={handleAddExpense} />
      </div>
      {/* Year Filter Dropdown */}
      <div style={{ margin: "1rem 0" }}>
        <label htmlFor="year-filter">Filter by year: </label>
        <select
          id="year-filter"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      {/* Conditional Rendering */}
      {expense.length === 0 ? (
        <div style={{ textAlign: "center", color: "#888" }}>
          No expenses yet. Add your first expense!
        </div>
      ) : filteredExpenses.length === 0 ? (
        <div style={{ textAlign: "center", color: "#888" }}>
          No expenses found for {selectedYear}.
        </div>
      ) : (
        <ExpenseList expenses={filteredExpenses} />
      )}
    </ErrorBoundary>
  );
}

export default App;
