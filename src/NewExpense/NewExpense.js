import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function addExpense(oldExpense) {
    let expense = {
      ...oldExpense,
      id: Math.random().toString(),
    };
    props.onAddExpensefn(expense);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={addExpense} />
    </div>
  );
}
export default NewExpense;
