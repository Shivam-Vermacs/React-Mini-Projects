
export default function ExpenseItem({ title, amount, date }) {
    return (
      <li>
        {title} - ${amount} on {date}
      </li>
  );
}
