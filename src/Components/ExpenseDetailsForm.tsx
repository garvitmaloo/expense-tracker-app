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
  const dateInputRef = useRef<HTMLInputElement>(null);
  const selectInputRef = useRef<HTMLSelectElement>(null);

  const dispatch = useAppDispatch();

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current!.value;
    const enteredTitle = titleInputRef.current!.value;
    const selectedCategory = selectInputRef.current!.value;
    const enteredDate = dateInputRef.current!.value;

    const date = new Date(enteredDate);
    const dateString = `${date.getDate()} ${
      Month[date.getMonth()]
    } ${date.getFullYear()}`;

    const currentDate = new Date();

    if (
      date.getMonth() !== currentDate.getMonth() &&
      date.getFullYear() !== currentDate.getFullYear()
    ) {
      alert("You are allowed to add expenses of the current month only.");
      return;
    }

    dispatch(
      expenseActions.addExpense({
        id: `${enteredTitle}--${date.getTime()}`,
        date: dateString,
        amount: enteredAmount,
        title: enteredTitle,
        category: selectedCategory,
      })
    );

    amountInputRef.current!.value = "";
    titleInputRef.current!.value = "";
    dateInputRef.current!.value = "";
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
      <input
        type="date"
        name="expense-date"
        id="expense-date"
        ref={dateInputRef}
      />
      <select
        required
        name="exp-category"
        id="exp-category"
        ref={selectInputRef}
        defaultValue="null"
      >
        <option value="">Select a category</option>
        <option value="Books and Stationary">Books and Stationary</option>
        <option value="Food and Travel">Food and travel</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Grooming and Shopping">Shopping and Grooming</option>
        <option value="Miscellaneous">Miscellaneous</option>
      </select>

      <button type="submit">Enter Expense</button>
    </form>
  );
};

export default ExpenseDetailsForm;
