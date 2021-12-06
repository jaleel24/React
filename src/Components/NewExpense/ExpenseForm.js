import React,{useState} from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
    /* Always use the UseState hook inside the  main function not in
        the nested function */
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('')
    function titleChangeHandler(event){
        /* 
        1-event is the object which is automatically given by
          js when change happends and listening happens event is an object which has the 
          value which is listened when user type anythin
        2- Now we need something to store this listened value so that
            we can use it later on when we submit the form
        3-   So simply we use state and for that we destructure the import*/
       
       // console.log(event.target.value);
       setEnteredTitle(event.target.value);
       
    }
    /* another way of defining a function */
    const amountChangeHandler =event =>{

        setEnteredAmount(event.target.value);
    };

    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }

    function submitHandler(event){
        /*  we are preventing the object to use the default behaviour because in 
            browsers onsubmit has the default behaviour to reload the page and we dont want that
             */
            event.preventDefault();
        const expenseData ={
            title :enteredTitle,
            amount : +enteredAmount,
            date : new Date(enteredDate)
        }
            
       // console.log(expenseData);
       /* here we are  */
       props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
            <label>Title</label>
            {/* we are using two way binding here */}
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={enteredAmount} min="0.01" step='0.01'  onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date"  value={enteredDate} min="2019-01-01" max='20211-12-31' onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancelEditing}>Cancel</button>
        <button type='submit'>Add Expense</button>
        
      </div>
    </form>
  );
}
export default ExpenseForm;
