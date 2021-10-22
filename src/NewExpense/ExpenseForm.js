import "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm(props) {
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  //above is done using 3 states , can be done with one state and not 3 states
  //use  const [userinput,setUserInput]=useState({title:'' , amount:'' , date:'' }) pass an object like this and every time state changes change the values of object using setUserInput
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }
  function formSubmitHandler(event) {
    event.preventDefault(); //To prevent default behaviour of browser of sending req to server.//It thus stops reload of page
    if (enteredTitle === "") {
      alert("Title can't be empty");
    } else if (enteredAmount === "") {
      alert("Expense amount should be added");
    } else if (enteredDate === "") {
      alert("Date can't be empty");
    } else {
      const expense = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };
      props.onAddExpense(expense);
      setEnteredDate("");
      setEnteredAmount("");
      setEnteredTitle("");
    }
  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="expenseform__controls">
        <div className="expenseform__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            value={enteredTitle}
          />
        </div>
        <div className="expenseform__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
          />
        </div>
        <div className="expenseform__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
          />
        </div>
        <div className="expenseform__button">
          <button type="submit" className="expfbutton">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;
