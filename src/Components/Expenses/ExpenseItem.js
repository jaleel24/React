// all components in the react js are basically a function
import React, {useState} from 'react'; 
/* always call use state in a main function not in a nested function
 */
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  // const expenseDate = new Date(2021,11,1);
  // const expense_Title = 'Car Insurance ';
  // const expenseAmount = 300;
  
  /*************************************************************** */ 
  /*   useState is a hook and important hook that we use in React
        https://reactjs.org/docs/hooks-state.html
        
        What does useState return? 
        It returns a pair of values: the current state and a
        function that updates it. This is why we write
        const [count, setCount] = useState().
        This is similar to this.state.count and this.setState in a
        class, except you get them in a pair*/ 
   /*************************************************************** */ 
        const [title, setTitle]= useState(props.title);
  const clickHandler = () => {
    setTitle('updated!');
    console.log(title); 
  }
  return (
    //--------Without props------------------
    // <div className="expense-item">
    //     <div>{expenseDate.toISOString()}</div>
    //         <div className="expense-item__description">
    //             {/* <h2> Car Insurance</h2> */}
    //             <h2>{expense_Title}</h2>
    //             <div className="expense-item__price">${expenseAmount}</div>
    //         </div>
    // </div>
    //-------------------- with props--------------------------------//
    <Card className="expense-item">
      {/*  Here we are going to use the Card.js and replace the div by card tag because we are using a 
            concept of compositon */}

        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
export default ExpenseItem;
