import { useState } from "react";
import "./App.css";
import Expenses from "./Expenses";
import NewExpense from "./NewExpense/NewExpense";

function App() {
const [pExpense,setPExpense]=useState('')
  function onAddExpense(expense) {
    
    setPExpense(expense)
  }

  return (
    <div className="Parent">
      <NewExpense onAddExpensefn={onAddExpense} />
      <Expenses onFnAddExpense={pExpense} />
    </div>
  );
}

export default App;
