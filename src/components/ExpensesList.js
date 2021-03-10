import React from "react";
import ExpenseListItem from "./expenseListItem/ExpenseListItem";
import PropTypes from "prop-types";

const ExpensesList = (props) => {
  return (
    <div className="expenses">
      <h2>Expenses</h2>

      <ul>
        {props.expenses.map((expense) => {
          // console.log(expense);
          return (
            <ExpenseListItem
              key={expense.id}
              name={expense.name}
              amount={expense.amount}
              expense={props.expenses}
            ></ExpenseListItem>
          );
        })}
      </ul>
    </div>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.array.isRequired,
};

export default ExpensesList;
