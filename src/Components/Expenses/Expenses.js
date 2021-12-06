import React, { useState } from "react";
//import ExpenseForm from "../NewExpense/ExpenseForm";
import Card from "../UI/Card";
import "./ExpenseDate.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./Expenseschart";
function Expenses(props) {
  const [filteredYear, setFileredYEar] = useState("2020");
  /* selectedYear is the value = event.target.value in the ExpensesFilter.js */
  function onChangeFilterHandler(selectedYear) {
    /* now as we are changing the state so we need to import
       the state from react and  we dont need to log the value as we were
       console.log('Expenses.js')
       console.log(selectedYear); */
    setFileredYEar(selectedYear);
  };
  /* boolean function called (expense =>...) */
  const filteredExpense= props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });
    
  return (
    <li>
      <Card className="expenses">
        <h2>Filter by year</h2>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={onChangeFilterHandler}
        />
        <ExpensesChart expense={filteredExpense}/>
        <ExpensesList items={filteredExpense}/>
        </Card>
    </li>
  );
      //    {/* {props.items.map((expense) */}
      //    {/*
      //    1- now in order to use conditional ternary statment to list the expense according to
      //       the choice 
      //    2- We can use the && operator as well instead of the  long ternary operator
      //       as used in the code 
      //       {filteredExpense.length === 0 && <p>No Expenses found.</p> } and similar for the other part
      //       in React.js && operator is a trick which basicaly reutrn the value if the conditional
      //       part is correct
      //     3- or else we can simply store the <p> value in the variable and then use if and else statments*/
  
         
      //   {/* {filteredExpense.length === 0 ?:filteredExpense.map((expense) => (
      //     <ExpenseItem
      //       key={expense.id}
      //       title={expense.title}
      //       amount={expense.amount}
      //       date={expense.date}
      //     />
      //   ))} */}
       
      //   /* <ExpenseItem
      //   title={props.items[0].title}
      //   amount={props.items[0].amount}
      //   date={props.items[0].date}
      // ></ExpenseItem>
      // <ExpenseItem
      //   title={props.items[1].title}
      //   amount={props.items[1].amount}
      //   date={props.items[1].date}
      // ></ExpenseItem>
      // <ExpenseItem
      //   title={props.items[2].title}
      //   amount={props.items[2].amount}
      //   date={props.items[2].date}
      // ></ExpenseItem>
      // <ExpenseItem
      //   title={props.items[3].title}
      //   amount={props.items[3].amount}
      //   date={props.items[3].date}
      // ></ExpenseItem> */}
   
}
export default Expenses;
