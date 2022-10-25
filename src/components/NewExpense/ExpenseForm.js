import React, {useState} from "react";

import "./ExpenseForm.css";


function ExpenseForm(props) {
    // using multiple state
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [eneteredDate, setEnteredDate] = useState("");

    // TITLE
    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);

    };

    //AMOUNT
    function amountChangeHandler(event) {
     setEnteredAmount(event.target.value);

    };

    //DATE
    function dateChangeHandler(event) {
        setEnteredDate(event.target.value);

    };

    // "choise this approach if your state depends from the previous state SECTION 4 VIDEO 56"
                                // ARROW FUNCTION    
    // setUserInput((prevState,) => {
    // return { ... prevState, enteredTitle: event.target.value};
    // })


    // preventDefault is a javascript method
    function submitHandler(event){
        event.preventDefault();

        const expenseData = { 
        title: enteredTitle,
        amount: +enteredAmount,
        date: new Date(eneteredDate)
        };

        props.onSaveExpenseData(expenseData)
        //two way-binding. Set the value to an empty string because after the form is submitted in this way we clean the input,
        // that's why this code piece is after the submit form function
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>
            
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={eneteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        
        <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;