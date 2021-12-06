import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {

  const[isShownForm, setShownForm]=useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      /* copy the entered data which is stores in the
            function submitHandler(event) in the ExpenseForm.js 
            all the key values pair would be saved  */
      ...enteredExpenseData,
      id: Math.random().toString(),
     
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setShownForm(false);
  }
  function startShownForm(){
    setShownForm(true);
  }
  function notShowForm(){
    setShownForm(false);
  }
  return (
    <div className="new-expense">
      {!isShownForm && <button onClick={startShownForm}>Add New Expense</button>}
      {isShownForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelEditing={notShowForm}></ExpenseForm>
}</div>
  );
}

export default NewExpense;
