import React from "react";
import "./expenseListItem.scss";
import PropTypes from "prop-types";
const ExpenseListItem = (props) => {
  return (
    <li className="expense">
      <p>
        {props.name}

        <span className="amount">{props.amount} €</span>
      </p>
    </li>
  );
};

ExpenseListItem.propTypes = {
  expense: PropTypes.array.isRequired,
};

export default ExpenseListItem;
