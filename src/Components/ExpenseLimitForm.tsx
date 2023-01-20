import classes from "./Styles/expense-limit-form.module.css";
import { useRef } from "react";
import { expenseLimitActions } from "../Store/store";
import { useAppDispatch } from "../Hooks/hooks";

const ExpenseLimitForm = () => {
  const monthlyLimitRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();

    const monthlyLimitInput = parseInt(monthlyLimitRef.current!.value);

    if (monthlyLimitInput <= 0) {
      alert("Please set an amount greater than 0");
      monthlyLimitRef.current!.value = "";
      return;
    }

    dispatch(expenseLimitActions.setLimit(monthlyLimitInput));
    monthlyLimitRef.current!.value = "";
  }

  return (
    <div className={classes["form-container"]}>
      <h2>Set Monthly Expense Limit</h2>
      <form onSubmit={submitHandler}>
        <input
          required
          type="text"
          placeholder="Enter your monthly expense limit"
          ref={monthlyLimitRef}
        />
        <button type="submit">Set Limit</button>
      </form>
    </div>
  );
};

export default ExpenseLimitForm;
