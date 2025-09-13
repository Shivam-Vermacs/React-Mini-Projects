import React, { useState } from "react";

export default function ExpenseForm({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = { title, amount, date };
    onSubmit(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <>
      <div>
        <h1>Expense Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Expense Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <input
            type="date"
            placeholder="Enter Expense Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <button type="submit">Add Expense</button>
        </form>
      </div>
    </>
  );
}
