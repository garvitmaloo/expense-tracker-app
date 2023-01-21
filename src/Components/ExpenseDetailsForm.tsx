import React, { useRef } from "react";

import { expenseActions } from "../Store/store";
import { useAppDispatch } from "../Hooks/hooks";
import classes from "./Styles/expense-details-form.module.css";

enum Month {
  "January" = 0,
  "February" = 1,
  "March" = 2,
  "April" = 3,
  "May" = 4,
  "June" = 5,
  "July" = 6,
  "August" = 7,
  "September" = 8,
  "October" = 9,
  "November" = 10,
  "December" = 11,
}

const ExpenseDetailsForm = () => {
  const amountInputRef = useRef<HTMLInputElement>(null);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const selectInputRef = useRef<HTMLSelectElement>(null);

  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current!.value;
    const enteredTitle = titleInputRef.current!.value;
    const selectedCategory = selectInputRef.current!.value;

    const date = new Date();
    const dateString = `${date.getDate()} ${
      Month[date.getMonth()]
    } ${date.getFullYear()}`;

    dispatch(
      expenseActions.addExpense({
        id: date.getTime(),
        date: dateString,
        amount: enteredAmount,
        title: enteredTitle,
        category: selectedCategory,
      })
    );
  };

  return (
    <form className={classes["new-expense-form"]} onSubmit={submitHandler}>
      <input
        type="text"
        required
        placeholder="Enter expense amount"
        ref={amountInputRef}
      />
      <input
        type="text"
        required
        placeholder="Enter expense title"
        ref={titleInputRef}
      />
      <select
        required
        name="exp-category"
        id="exp-category"
        ref={selectInputRef}
        defaultValue="null"
      >
        <option value="">Select a category</option>
        <option value="books-and-stationary">Books and Stationary</option>
        <option value="food-and-travel">Food and travel</option>
        <option value="entertainment">Entertainment</option>
        <option value="grooming-and-shopping">Shopping and Grooming</option>
        <option value="miscellaneous">Miscellaneous</option>
      </select>

      <button type="submit">Enter Expense</button>
    </form>
  );
};

export default ExpenseDetailsForm;
