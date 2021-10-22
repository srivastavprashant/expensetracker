import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./expenses.css";

function Expenses(props) {
  var obj = [];
  if (props.pExpense !== undefined) {
    obj.push(props.pExpense);
    console.log(obj+'obj');
    props.pExpense = undefined;
  }
  return (
    <Card className="expenses">
      {obj.map((x) => (
        <ExpenseItem
          date={obj[x].date}
          title={obj[x].title}
          expense={obj[x].expense}
        />
      ))}
    </Card>
  );
}

export default Expenses;
