import React from "react";
import classes from "./Styles/expenses-card.module.css";

import { ExpenseDetails } from "../Store/store";

const ExpensesCard: React.FC<{ data: ExpenseDetails }> = (props) => {
  return (
    <div className={classes["expense-card"]}>
      <div className={classes.texts}>
        <h2>{props.data.title} </h2>
        <p className={classes["expense-date"]}>{props.data.date}</p>
        <p className={classes["expense-cat"]}>{props.data.category}</p>
      </div>
      <p className={classes.amount}>{props.data.amount}</p>
    </div>
  );
};

export default ExpensesCard;
