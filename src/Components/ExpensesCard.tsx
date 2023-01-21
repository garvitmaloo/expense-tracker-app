import React from "react";
import classes from "./Styles/expenses-card.module.css";

const ExpensesCard = () => {
  return (
    <div className={classes["expense-card"]}>
      <div className={classes.texts}>
        <h2>Expense Title </h2>
        <p className={classes["expense-date"]}>21 January 2023</p>
        <p className={classes["expense-cat"]}>Books and stationary</p>
      </div>
      <p className={classes.amount}>500</p>
    </div>
  );
};

export default ExpensesCard;
