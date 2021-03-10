import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {getRemainingClass} from '../helpers';

const RemainingBudget = (props) => {
  return (
    <Fragment>
      <div className="alert alert--primary">Budget: {props.budget} €</div>
      <div className={getRemainingClass(props.budget, props.remaining)}>
        Remaining: {props.remaining} €
      </div>
    </Fragment>
  );
};

RemainingBudget.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired
};

export default RemainingBudget;
