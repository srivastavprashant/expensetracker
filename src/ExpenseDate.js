function ExpenseDate(props) {
    const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
      
    <div className="expense-item__date">
      <div className="date"> {month} </div>
      <div className="date"> {day} </div>
      <div className="date"> {year} </div>
    </div>
  );
}
export default ExpenseDate;
