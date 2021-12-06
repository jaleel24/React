import React,{useState} from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
 //creating the lower array just to use this as a prop in expensItems.js
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
 
  
    const [expenses, setExpenses]= useState(DUMMY_EXPENSES);
    function addExpenseHandler(expense){
        // console.log('in app.js');
        // console.log(expense);
         /* either this or 
          setExpenses(
            function preExpenses(previousExpenses){
              return [expense,....previousExpenses];
            }
          );
         */
           /* to change the state u better use the special function
              which u are passing as a fucntion in setexpenses as
               argument which will have the previous expenses */
         setExpenses((previousExpenses =>{
           /* adding new expense as the first item in array and copying all the other 
              or previous expense from the dummyExpenses */
           return [expense, ...previousExpenses];
         }))
       // setExpenses([expense, ...expenses]);
    }
  return (
    //removed the expenses details from here and created a new component Expenses
    // <div>
    //   <h2>Let's get started!</h2>
    //     <ExpenseItem
    //       title={expenses[0].title}
    //       amount={expenses[0].amount}
    //       date={expenses[0].date}
    //     ></ExpenseItem>
    //     <ExpenseItem
    //       title={expenses[1].title}
    //       amount={expenses[1].amount}
    //       date={expenses[1].date}
    //     ></ExpenseItem>
    //     <ExpenseItem
    //       title={expenses[2].title}
    //       amount={expenses[2].amount}
    //       date={expenses[2].date}
    //     ></ExpenseItem>
    //     <ExpenseItem
    //       title={expenses[3].title}
    //       amount={expenses[3].amount}
    //       date={expenses[3].date}
    //     ></ExpenseItem>

    // </div>

    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items= {expenses} ></Expenses>
      
    </div>
  );
}

export default App;
