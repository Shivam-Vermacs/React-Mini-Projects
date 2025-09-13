import { useState } from "react";

export default function ExpenseList({ expenses }) {
  return (
    <>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.title} - ${expense.amount} on {expense.date}
          </li>
        ))}
      </ul>
    </>
  );
}
