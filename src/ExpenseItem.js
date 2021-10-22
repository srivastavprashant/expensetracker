import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  function clickHandler() {
    setTitle('Updated');
  }

  return (
    //Custom component here . We use special props which every component receives CUSTOM ONLY SUPPORTS WHAT YOU TELL THEM,like using props.children and adding classes
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__title">{title}</div>
      <div className="expense-item__expense">₹{props.expense}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;