import React, {useState} from 'react';

import Card from "../UI/Card";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";


function Expenses (props) {
  const [filteredYear, setFilteredYear] = useState('2020')

  function yearChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);
  };
  
  // logic to filter items by year 
  const filteredExpenses = props.items.filter(function (expense) {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

    return (
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeYear={yearChangeHandler}
          />
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
    );
}

export default Expenses;